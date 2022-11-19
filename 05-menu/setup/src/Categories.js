import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterItems(category)} // careful with this.
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
