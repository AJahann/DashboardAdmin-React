import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

import BarChart from "../../components/BarChart";
import DoughnutChart from "../../components/DoughnutChart";
import LineChart from "../../components/LineChart";

const Charts = () => {
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDatePickerValueChange = (newValue: {
    startDate: Date;
    endDate: Date;
  }) => {
    setDateValue(newValue);
  };

  return (
    <>
      <Datepicker
        containerClassName="w-72"
        value={dateValue}
        inputClassName="input input-bordered w-72"
        popoverDirection="down"
        toggleClassName="invisible"
        onChange={handleDatePickerValueChange}
        showShortcuts
      />

      <div className="grid lg:grid-cols-2 mt-0 grid-cols-1 gap-6">
        <BarChart />
        <BarChart />
      </div>

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <DoughnutChart />
        <DoughnutChart />
      </div>

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <LineChart />
        <LineChart />
      </div>
    </>
  );
};

export default Charts;
