/* eslint-disable jsx-a11y/label-has-associated-control */
import ArrowDownTrayIcon from "@heroicons/react/24/outline/ArrowDownTrayIcon";
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import EllipsisVerticalIcon from "@heroicons/react/24/outline/EllipsisVerticalIcon";
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";
import ShareIcon from "@heroicons/react/24/outline/ShareIcon";
import { useState } from "react";
import type { DateValueType } from "react-tailwindcss-datepicker";
import Datepicker from "react-tailwindcss-datepicker"; // Import DateValueType

const DashboardTopBar = () => {
  const [dateValue, setDateValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDatePickerValueChange = (newValue: DateValueType) => {
    // Check if newValue is not null before updating the state
    if (newValue) {
      setDateValue(newValue);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="">
        <Datepicker
          containerClassName="w-72"
          value={dateValue}
          inputClassName="input input-bordered w-72"
          popoverDirection="down"
          toggleClassName="invisible"
          onChange={handleDatePickerValueChange}
          showShortcuts
        />
      </div>
      <div className="text-right">
        <button className="btn btn-ghost btn-sm normal-case">
          <ArrowPathIcon className="w-4 mr-2" />
          Refresh Data
        </button>
        <button className="btn btn-ghost btn-sm normal-case ml-2">
          <ShareIcon className="w-4 mr-2" />
          Share
        </button>

        <div className="dropdown dropdown-bottom dropdown-end ml-2">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-sm normal-case btn-square"
          >
            <EllipsisVerticalIcon className="w-5" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">
                <EnvelopeIcon className="w-4" />
                Email Digests
              </a>
            </li>
            <li>
              <a href="/">
                <ArrowDownTrayIcon className="w-4" />
                Download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;
