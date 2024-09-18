import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from './components/Chart';

const App = () => {
  const [forexData, setForexData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/forex');
        setForexData(response.data);
        setLoading(false);
      } catch (err) {
        setError('เกิดข้อผิดพลาดในการโหลดข้อมูล');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-8">กำลังโหลด...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">PUREFOREX Dashboard</h1>
      <Chart data={forexData} />
    </div>
  );
};

export default App;