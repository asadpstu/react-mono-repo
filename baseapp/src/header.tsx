import React, { useEffect, useState } from "react"
import './css/Header.css';

interface brand {
  brand: string;
  logo : string;
}

export const Header = () => {
  const [jsonData, setJsonData] = useState<brand | null>(null);
  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const response = await import(`../brand-config/${process.env.REACT_APP_BRAND}.brand-config.json`);
        setJsonData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJsonData();
  }, []);
  return (
      <header>
        <nav>
          <div className="logo">
            <img src={jsonData?.logo} height={33}/>
          </div>
          <ul className="menu">
            <li><a href="#">Menu1</a></li>
            <li><a href="#">Menu2</a></li>
            <li><a href="#">Menu3</a></li>
            <li><a href="#">Menu4</a></li>
            <li><a href="#">[{jsonData?.brand}]</a></li>
          </ul>
        </nav>
      </header>
  )
}