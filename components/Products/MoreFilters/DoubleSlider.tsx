import React, { useState } from 'react';

const DoubleSlider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const handleMinChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setMinValue(Math.min(newValue, maxValue)); // Ensure min doesn't exceed max
  };

  const handleMaxChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setMaxValue(Math.max(newValue, minValue)); // Ensure max doesn't fall below min
  };

  return (
    <div className="flex items-center gap-4">
      <label htmlFor="min-value">Min:</label>
      <input
        type="number"
        id="min-value"
        className="w-16 text-center border border-gray-300 rounded px-2 py-1"
        value={minValue}
        onChange={handleMinChange}
      />
      <label htmlFor="max-value">Max:</label>
      <input
        type="number"
        id="max-value"
        className="w-16 text-center border border-gray-300 rounded px-2 py-1"
        value={maxValue}
        onChange={handleMaxChange}
      />
    </div>
  );
};

export default DoubleSlider;