import React from 'react';

const NestedButtons = () => {
  const handleOuterClick = () => {
    alert('Outer button clicked!');
  };

  const handleInnerClick = (e) => {
    // stopping of event propagation 
    e.stopPropagation();
    alert('Inner button clicked!');
  };

  return (
    <div>
      <button onClick={handleOuterClick}>
        Outer Button
        <button onClick={handleInnerClick} style={{ margin: '10px' }}>
          Inner Button
        </button>
      </button>
    </div>
  );
};

export default NestedButtons;
