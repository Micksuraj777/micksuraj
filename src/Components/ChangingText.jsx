import React, { useState, useEffect } from 'react';

const ChangingText = () => {
  const texts = ["Creative Developer", "Frontend Developer", "Prompt Engineer","Android Developer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000); // Change text every 2000 milliseconds (2 seconds)

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      <p className='text-[200px] ml-[325px] font-anton text-gray-700'>{texts[currentTextIndex]}</p>
    </div>
  );
};

export default ChangingText;

