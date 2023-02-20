import { useState, useEffect } from "react";
import Champion from "../components/Champion";

const Champions = () => {
  const [champions, setChampions] = useState([]);
  console.log(champions);
  useEffect(() => {
    fetchChampions();
  }, []);

  const fetchChampions = async () => {
    const url =
      "http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion.json";

    const response = await fetch(url);
    const data = await response.json();
    let allC = data.data;

    //hold temporary champions
    let c = [];

    //loop through objects and push into a new array
    for (const property in allC) {
      c.push(allC[property]);
    }
    //get first 10 champions
    let slicedArray = c.slice(0, 10);
    //set champions

    fetchAllChampions(slicedArray);
  };

  const fetchAllChampions = async (champions) => {
    let champItem = [];
    champions.forEach((champion) => {
      const fetchNewChamps = async () => {
        const response = await fetch(
          `http://ddragon.leagueoflegends.com/cdn/13.3.1/data/en_US/champion/${champion.id}.json`
        );
        const data = await response.json();
        champItem.push(data.data[champion.id]);
        //set champions
        setChampions(champItem);
      };

      fetchNewChamps();
    });
  };

  return (
    <div className='championn p-4'>
      <h2 className='text-center uppercase text-2xl'>
        League of Legends ChampionsS
      </h2>
      <Champion champions={champions} />
    </div>
  );
};

export default Champions;
