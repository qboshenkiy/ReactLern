import "./Costs.css";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import React, { useState } from "react";
import CostList from "./CostLits";

function Costs(props) {
  const [selectYear, changeYear] = useState("2023");

  const SaveChangeYear = (year) => {
    changeYear(year);
  };

  const filterCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectYear;
  });


  return (
    <div>
      <Card className="costs">
        <CostFilter year={selectYear} onSaveChangeYear={SaveChangeYear} />
        <CostList costs={filterCosts}/>
      </Card>
    </div>
  );
}
export default Costs;
