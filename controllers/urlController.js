const Url = require('../models/dbSchema');
const { nanoid } = require('nanoid');
const validUrl = require('valid-url');

const shortenUrl = async (req, res) => {
  const { url, expiryDate } = req.body;

  if (!validUrl.isUri(url)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  const shortCode = nanoid(6);
  const shortUrl = `${process.env.BASE_URL}/${shortCode}`;

  const newUrl = new Url({
    originalUrl: url,
    shortCode,
    expiryDate: expiryDate ? new Date(expiryDate) : null
  });
  await newUrl.save();

  res.json({ shortUrl });
};

const redirectUrl = async (req, res) => {
  const { code } = req.params;
  const urlEntry = await Url.findOne({ shortCode: code });

  if (!urlEntry) return res.status(404).send('URL not found');

  if (urlEntry.expiryDate && new Date() > urlEntry.expiryDate) {
    return res.status(410).send('URL has expired');
  }

  urlEntry.clicks++;
  await urlEntry.save();

  res.redirect(urlEntry.originalUrl);
};

const deleteUrl = async (req, res) => {
  try {
    const { code } = req.params;
    const deleted = await Url.findOneAndDelete({ shortCode: code });

    if (!deleted) {
      return res.status(404).json({ error: 'Short URL not found' });
    }

    res.json({ message: 'Short URL deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const getUrlStats = async (req, res) => {
  try {
    const { code } = req.params;
    const stats = await Url.findOne({ shortCode: code });

    if (!stats) {
      return res.status(404).json({ error: 'URL not found' });
    }

    res.json({
      originalUrl: stats.originalUrl,
      clicks: stats.clicks,
      createdAt: stats.createdAt,
      expiryDate: stats.expiryDate || null
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { shortenUrl, redirectUrl, getUrlStats, deleteUrl };