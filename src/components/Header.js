import React, { useState } from 'react';


const Header = () => {
  const [grouping, setGrouping] = useState('Status');
  const [ordering, setOrdering] = useState('Priority');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleGroupingChange = (event) => {
    setGrouping(event.target.value);
  };

  const handleOrderingChange = (event) => {
    setOrdering(event.target.value);
  };

  return (
    <div className="header">
      <div className="dropdown">
        <button 
          className="dropbtn" 
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Display ▼
        </button>
        {showDropdown && (
          <div className="dropdown-content">
            <div className="dropdown-option">
              <label htmlFor="grouping">Grouping</label>
              <select
                id="grouping"
                value={grouping}
                onChange={handleGroupingChange}
              >
                <option value="Status">Status</option>
                <option value="Type">Type</option>
                <option value="Date">Date</option>
              </select>
            </div>
            <div className="dropdown-option">
              <label htmlFor="ordering">Ordering</label>
              <select
                id="ordering"
                value={ordering}
                onChange={handleOrderingChange}
              >
                <option value="Priority">Priority</option>
                <option value="Date">Date</option>
                <option value="Name">Name</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;