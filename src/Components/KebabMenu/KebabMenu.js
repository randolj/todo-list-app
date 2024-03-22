// KebabMenu.js

import React, { useState } from 'react';
import './KebabMenu.css'; // Import the CSS for styling

const KebabMenu = ({onDelete}) => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the menu is open

  // Function to toggle the menu display
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="kebabMenuContainer">
      <div className="kebabIcon" onClick={toggleMenu}>
        &#8942;
      </div>
      {isOpen && (
        <div className="kebabMenu">
          <div className="menuItem">Add Description</div>
          <div className="menuItem"><i class="fa fa-pencil"></i> Edit Name</div>
          <div className="menuItem" onClick={onDelete}>&#10006; Delete</div>
        </div>
      )}
    </div>
  );
};

export default KebabMenu;
