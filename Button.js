

import React from 'react';
 const ActionButton= ({ onClick, label,  }) => {
  return (
    <div className="ActionButton">
      <button onClick={onClick}>
      {label}
    </button>
    </div>
  );
};

export default ActionButton;
   
  
  