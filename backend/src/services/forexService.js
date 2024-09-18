const axios = require('axios');

exports.fetchForexData = async () => {
  try {
    // ตัวอย่างการใช้ Alpha Vantage API สำหรับข้อมูล Forex
    const response = await axios.get('https://www.alphavantage.co/query', {
      params: {
        function: 'FX_DAILY',
        from_symbol: 'EUR',
        to_symbol: 'USD',
        apikey: 'YOUR_API_KEY' // ต้องใส่ API key จริง
      }
    });

    const timeSeriesData = response.data['Time Series FX (Daily)'];
    return Object.entries(timeSeriesData).map(([date, values]) => ({
      time: date,
      value: parseFloat(values['4. close'])
    })).slice(0, 100); // เอาแค่ 100 วันล่าสุด

  } catch (error) {
    console.error('Error fetching Forex data:', error);
    throw error;
  }
};