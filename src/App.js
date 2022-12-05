import NavBar from "./component/NavBar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsContainer from "./component/NewsContainer";

function App() {

  const [category, setCategories] = useState("all");

  const [data, setData] = useState([]);
 



  async function fetchData() {
    const response = await axios.get(`https://inshorts.deta.dev/news?category=${category}`);
    setData(response.data.data);
    // console.log(response);
  }
  useEffect(() => {

    fetchData();
  }, [category]);





  return (
    <div className="App">
      <NavBar setCategories={setCategories} />
      <NewsContainer data={data} />
    </div>
  );
}

export default App;
