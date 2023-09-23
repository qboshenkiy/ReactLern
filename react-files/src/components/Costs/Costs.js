import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import React, { useState } from "react";

function Costs(props) {
  const [selectYear, changeYear] = useState("2023");

  const SaveChangeYear = (year) => {
    changeYear(year);
  };

  return (
    <div>
      <Card className="costs">
        <CostFilter year={selectYear} onSaveChangeYear={SaveChangeYear} />
        {props.costs.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
      </Card>
    </div>
  );
}
export default Costs;
