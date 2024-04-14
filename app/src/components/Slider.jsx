import React, { useState, useEffect, useRef } from 'react';

const Slider = ({ images }) => {
  const [number, setnumber] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const intervalId = useRef(null);

  useEffect(() => {
    const updatenumber = () => {
      setnumber((prevnumber) => (prevnumber + 1) % images.length);
    };

    if (isAuto) {
      intervalId.current = setInterval(updatenumber, 3000);
    } else {
      clearInterval(intervalId.current);
    }

    return () => clearInterval(intervalId.current);
  }, [isAuto, images.length]);

  const handlePrev = () => {
    setnumber((prevnumber) => (prevnumber === 0 ? images.length - 1 : prevnumber - 1));
  };

  const handleNext = () => {
    setnumber((prevnumber) => (prevnumber + 1) % images.length);
  };

  const handleAutoToggle = () => {
    setIsAuto((prevIsAuto) => !prevIsAuto);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative w-full max-w-3xl lg:max-w-[60vh] overflow-hidden rounded-lg shadow-lg">
        <img src={images[number]} alt={`Slide ${number}`} className="w-full object-cover transition-opacity duration-700 ease-in-out lg:w-full" />
      </div>
      <div className="flex space-x-2">
        <button onClick={handlePrev} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition-colors">
          Previous
        </button>
        <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition-colors">
          Next
        </button>
        <button onClick={handleAutoToggle} className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-700 transition-colors">
          {isAuto ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default Slider;
