import React from "react";
import Card from "./Card";

const CardsList = ({ data, showMonthly }) => {
  return (
    <div className="w-4/5 flex flex-col justify-center md:flex-row">
      {data.map((item) => {
        return (
            <div key={item.id} className="w-full py-6   ">
                <Card  {...item} showMonthly={showMonthly} />
            </div>
        );
      })}
    </div>
  );
};

export default CardsList;
