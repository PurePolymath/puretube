const forexService = require('../services/forexService');

exports.getForexData = async (req, res) => {
  try {
    const data = await forexService.fetchForexData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'ไม่สามารถดึงข้อมูล Forex ได้' });
  }
};