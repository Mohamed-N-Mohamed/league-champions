import React from "react";

const Champion = ({ champions }) => {
  return (
    <div className='champions-container flex flex-wrap justify-center items-center gap-12 text-center pt-8'>
      {champions.map(({ id, blurb, title }) => (
        <div
          className='champion p-6 w-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
          key={id}
        >
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`}
            alt='' className="rounded-lg"
          />
          <h2 className="text-2xl py-4">{id}</h2>
        </div>
      ))}
    </div>
  );
};

export default Champion;
