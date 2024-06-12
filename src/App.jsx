import React, { useEffect, useState } from 'react';
import './App.css';
import Bakgrunn from './Components/Bakgrunn';
import Telt from './Components/Telt';
import LesFil from './Script/ReadFile';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await LesFil();
      setData(result);
    }

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <Bakgrunn />
      {data.length > 0 && data.map((line, index) => (
        <Telt obj={line}/>
      ))}
    </div>
  );
}

export default App;
