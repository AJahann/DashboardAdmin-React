/* eslint-disable fp/no-let */
import ChevronLeftIcon from "@heroicons/react/24/solid/ChevronLeftIcon";
import ChevronRightIcon from "@heroicons/react/24/solid/ChevronRightIcon";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

import { setCelendarState } from "../features/Calendar/CalendarState";
import type { AppDispatch } from "../store/Store";
import supabase from "../utils/supapase";

dayjs.extend(weekOfYear);
dayjs.extend(weekday);

const CalendarView = ({ openModalHandle }: { openModalHandle: () => void }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: "events",
    queryFn: () => supabase.from("Events").select("*"),
  });

  const dispatch = useDispatch<AppDispatch>();
  const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  const allDaysInMonth = () => {
    const currentDate = dayjs();
    const start = currentDate.startOf("month").startOf("week");
    const end = currentDate.endOf("month").endOf("week");
    const days = [];
    let day = start;

    let monthHasDays = day.isBefore(end);

    // eslint-disable-next-line fp/no-loops
    while (monthHasDays) {
      days.push(day);
      day = day.add(1, "day");
      monthHasDays = day.isBefore(end);
    }

    return days;
  };

  const isDayInCurrentMonth = (day: Dayjs) => {
    const currentMonth = dayjs().startOf("month");
    return currentMonth.isSame(day.startOf("month"), "month");
  };

  const getEventsForCurrentDate = (day) => {
    const eventsForCurrentDay = data?.data.filter((event) =>
      dayjs(event.event_date).isSame(day, "day"),
    );
    return eventsForCurrentDay || [];
  };

  if (isLoading) {
    return <p>isLoading...</p>;
  }

  if (error) {
    return <p>Oops some thing went wrong!</p>;
  }

  return (
    <div className="w-full  bg-base-100 p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex  justify-normal gap-2 sm:gap-4">
          <p className="font-semibold text-xl w-48">
            {dayjs().format("MMMM YYYY")}
            <span className="text-xs ml-2 ">Beta</span>
          </p>

          <button className="btn  btn-square btn-sm btn-ghost">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button className="btn  btn-sm btn-ghost normal-case">
            Current Month
          </button>
          <button className="btn btn-square btn-sm btn-ghost">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
        <div>
          <button className="btn  btn-sm btn-ghost btn-outline normal-case">
            For Add New Event click on the Days
          </button>
        </div>
      </div>
      <div className="my-4 divider" />
      <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
        {weekdays.map((day) => {
          return (
            <div className="text-xs capitalize" key={day}>
              {day}
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-7 mt-1  place-items-center">
        {allDaysInMonth().map((day, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className="border border-solid w-full h-28">
              <button
                onClick={() => {
                  if (isDayInCurrentMonth(day)) {
                    dispatch(
                      setCelendarState({
                        date: day.$d.toISOString(),
                      }),
                    );
                    openModalHandle();
                  }
                }}
                className={`flex items-center  justify-center h-8 w-8 rounded-full mx-1 mt-1 text-sm cursor-pointer hover:bg-base-300 ${
                  dayjs(dayjs().startOf("day")).isSame(day)
                    ? " bg-blue-100 dark:bg-blue-400 dark:hover:bg-base-300 dark:text-white"
                    : ""
                } ${isDayInCurrentMonth(day) ? "" : "text-slate-400 dark:text-slate-600"}`}
              >
                {day.format("D")}
              </button>
              {getEventsForCurrentDate(day).map((e) => {
                return (
                  <p
                    key={e.id}
                    className="text-xs px-2 mt-1 truncate bg-green-500 dark:text-white dark:bg-green-700"
                  >
                    {e.title}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
