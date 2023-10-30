"use client";
import { useEffect, useState } from "react";
import ArrowIcon from "./ArrowIcon";
import DayState from "./DayState";
import { handleClientScriptLoad } from "next/script";
import { toggleHabit } from "@/app/actions";

const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sext", "Sab"];

//* https://stackoverflow.com/questions/13146418/find-all-the-days-in-a-month-with-date-object  *\\

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 1);
  const firstDayWeekDay = date.getDay();
  const numberOfEmptyDays = Array(firstDayWeekDay).fill(null);

  const days = [...numberOfEmptyDays];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

type HabitsProps = {
  habit: string;
  habitStreak: Record<string, boolean> | null;
};

export default function Calender({ habit, habitStreak }: HabitsProps) {
  const [month, setMonth] = useState(currentMonth);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [year, setYear] = useState(currentYear);
  const [daysInMonth, setDaysInMonth] = useState(
    getDaysInMonth(currentMonth, currentYear)
  );

  useEffect(() => {
    setDaysInMonth(getDaysInMonth(month, year));
    setSelectedDate(new Date(year, month, 1));
  }, [month, year]);

  function goToPreviusMonth() {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  }
  function goToNextMonth() {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  }

  function getFullDateString() {
    const monthName = `${selectedDate.toLocaleDateString("pt-BR", {
      month: "long",
    })}`;

    const uppercaseMonthName = monthName[0].toUpperCase() + monthName.slice(1);
    return `${uppercaseMonthName} de ${selectedDate.getFullYear()}`;
  }

  function getDayString(day: Date) {
    return `${year.toString()}-${(month + 1).toString().padStart(2, "0")}-${day
      .getDate()
      .toString()
      .padStart(2, "0")}`;
  }
  return (
    <section className=" w-full my-2 rounded-md bg-neutral-800">
      <div className="flex justify-between mx-2 my-4 font-sans text-neutral-400">
        <button onClick={goToPreviusMonth}>
          <ArrowIcon width={12} height={12} className=" stroke-neutral-400" />
        </button>
        <span className="white-text">{getFullDateString()}</span>
        <button onClick={goToNextMonth}>
          <ArrowIcon
            width={12}
            height={12}
            className="rotate-180 stroke-neutral-400"
          />
        </button>
      </div>

      <div className="grid w-full grid-cols-7 mt-2">
        {weekDays.map((day) => (
          <div key={day} className="flex flex-col items-center p-2">
            <span className="font-sans text-xs font-light text-neutral-200">
              {day}
            </span>
          </div>
        ))}
      </div>
      <div className="grid w-full grid-cols-7 mt-2">
        {daysInMonth.map((day, index) => (
          <div
            className="flex flex-col items-center p-2"
            key={index}
            onClick={() =>
              toggleHabit({
                habit,
                habitStreak,
                date: getDayString(day),
                done: habitStreak ? habitStreak[getDayString(day)] : true,
              })
            }
          >
            <span className="font-sans text-xs font-light text-neutral-400">
              {day?.getDate()}{" "}
            </span>
            {day && (
              <DayState
                day={habitStreak ? habitStreak[getDayString(day)] : undefined}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
