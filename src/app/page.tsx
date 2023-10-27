import DayState from "@/components/DayState";
import Image from "next/image";

export default function Home() {
  const habits = {
    "beber água": {
      "2023/10/26": true,
      "2023/10/25": true,
      "2023/10/24": false,
    },
    "beber água2": {
      "2023/10/26": true,
      "2023/10/25": true,
      "2023/10/24": false,
    },
  };
  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sext", "Sab"];

  const sortedWeekDays = weekDays
    .slice(todayWeekDay + 1)
    .concat(weekDays.slice(0, todayWeekDay + 1));

  return (
    <div className="row center-align">
      <div>
        {habits === null || Object.keys(habits).length === 0 ? (
          <article className="transparent medium no-padding center-align ">
            <div className="padding">
              <h5 className="font-display">Você não tem hábitos cadastrados</h5>
            </div>
          </article>
        ) : (
          <>
            {Object.entries(habits).map(([habitName, habitStreak]) => (
              <>
                <article
                  key={habitName}
                  className="transparent __className_fe0a99 row "
                >
                  <span className="max middle-align white-text">
                    {habitName}
                  </span>
                  <button className="transparent circle   ">
                    <i className="red-text">delete</i>
                  </button>
                </article>
                <div className=" padding grey9 small-round ">
                  <div className="row ">
                    {sortedWeekDays.map((day) => (
                      <div key={day} className="">
                        <div className=" ">
                          <span className="__className_fe0a99 white-text">
                            {day}
                          </span>
                        </div>
                        <DayState day={true} />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </>
        )}

        <article className=" medium  center-align  middle-align small-height transparent">
          <button className="border circle large-elevate large secondary-border secondary-text ">
            <i>add</i>
          </button>
        </article>
      </div>
    </div>
  );
}
