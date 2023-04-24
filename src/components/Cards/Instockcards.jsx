import React, { useEffect } from "react";
import CountUp from "react-countup";

function Instockcards({ nozzle, total, eachLiter }) {
  // console.log(eachLiter.currentLiter);
  useEffect(() => {
    console.log();
  }, [total]);
  return (
    <div className=" bg-gray-100 p-3 relative rounded-3xl drop-shadow-2xl w-[300px] h-[400px]">
      <h3 className="text-lg font-extrabold text-center mb-5">{nozzle}</h3>
      <div className=" flex mt-9 items-center justify-center border-[12px] rounded-full border-r-blue-900 border-b-orange-500 border-l-orange-500 border-t-blue-900 mx-auto w-[200px] h-[200px]">
        <h3 className="text-5xl font-extrabold">
          <CountUp start={total - 1} end={total} />
        </h3>
      </div>
      <h3 className="text-lg absolute bottom-[40px] left-8 font-extrabold">
        Total : {eachLiter.currentLiter} liters
      </h3>
    </div>
    // <div>hh</div>
  );
}

export default Instockcards;
