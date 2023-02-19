import { useState, useEffect } from "react";
import Champion from "../components/Champion";

const Champions = () => {
  const [champions, setChampions] = useState([]);

  console.log(champions);
  useEffect(() => {
    fetchChampions();
  }, []);

  const fetchChampions = async () => {
    const options = {
      method: "GET",
      url: "https://league-of-legends-champions.p.rapidapi.com/champions/en-gb",
      params: { page: "0", size: "10", role: "fighter" },
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
        "X-RapidAPI-Host": "league-of-legends-api1.p.rapidapi.com",
      },
    };

    const response = await fetch(
      "https://league-of-legends-api1.p.rapidapi.com/champions",
      options
    );
    const data = await response.json();

    //hold temporary champions
    let c = [];

    //loop through objects and push into a new array
    for (const property in data) {
      c.push(data[property]);
    }
    //get first 10 champions
    let slicedArray = c.slice(0, 10);

    //set champions
    setChampions(slicedArray);
    console.log(champions);

  };

  return (
    <div className='championn p-4'>
      <h2 className='text-center uppercase text-2xl'>
        League of Legends ChampionsS
      </h2>
      <div className='show-champions'>
        <Champion champions={champions} />
      </div>
    </div>
  );
};

export default Champions;
