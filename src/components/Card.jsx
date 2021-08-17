import React, { useEffect, useState } from "react";

const Card = ({
  title,
  price,
  storage,
  users,
  upside,
  id,
  monthlyPrice,
  showMonthly,
}) => {
  const [isEven, setIsEven] = useState(false);

  useEffect(() => {
    if (id === 2) {
      setIsEven(true);
    }
  }, [id]);

  return (
    <section
      className={`${
        isEven
          ? "bg-gradient-to-r from-gradient-1 to-gradient-2 text-white md:transform md:scale-y-110"
          : "bg-white text-grayish-blue"
      }  text-center w-full rounded-lg shadow-2xl `}
    >
      <article className=" font-bold pt-6 ">
        <h3 className=" font-semibold">{title}</h3>
        <div className="pt-8 pb-6 mx-6">
          <div className="flex justify-center w-full">
            <p className="border-b text-6xl w-full pb-6">
              ${!showMonthly ? monthlyPrice : price}
            </p>
          </div>
          <div className="flex justify-center items-center h-full w-full">
            <p className="py-3 border-b w-full  flex items-center justify-center">
              {storage}
            </p>
          </div>
          <div>
            <p className=" py-3 border-b ">{users}</p>
          </div>
          <div>
            <p className="py-3 border-b ">{upside}</p>
          </div>
        </div>
      </article>
      <article className="pb-6 pt-3">
        <button
          className={`${
            !isEven
              ? "bg-gradient-to-r from-gradient-1 to-gradient-2 text-white"
              : "bg-white text-grayish-blue md:transform md:-translate-y-3"
          }   uppercase w-4/5 py-3 rounded-lg`}
        >
          learn more
        </button>
      </article>
    </section>
  );
};

/* className="uppercase bg-gradient-to-r from-gradient-1 to-gradient-2 w-4/5 py-3 rounded-lg text-white font-semibold" */

export default Card;
