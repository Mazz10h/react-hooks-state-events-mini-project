import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
  const buttons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : "";
    return (
      <button
        key={category}
        className={className}
        onClick={() => onCategorySelect(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;