import './CostsFilter.css'
import React, { useState } from "react";

function CostFilter(props) {
    const addChangeHandler = (event) =>{
        props.onSaveChangeYear(event.target.value);
    }

  return (
    <div className="costs-filter">
      <form className="costs-filter__control">
        <label>Выбор года</label>
        <select value={props.year} onChange={addChangeHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </form>
    </div>
  );
}

export default CostFilter;
