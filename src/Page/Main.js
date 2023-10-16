import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../CSS/Main.css";

// 1. 달력을 중앙에 배치시킨다
// 2. 몇 일 이거 없애기

const Main = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1 className="text-center">달력</h1>
      {/* 달력 */}
      <div className="calendar-container">
        <Calendar
          value={date}
          onChange={setDate}
          // "일 " 제거
          formatDay={(locale, date) =>
            date.toLocaleDateString("en", { day: "numeric" })
          }
        ></Calendar>

        <p className="text-center">
          <span className="bold">
            선택 한 날은 {date.toLocaleDateString()} 입니다
          </span>
        </p>
      </div>

      <div>
        {/* 일기추가 버튼 */}
        <button className="create" onClick={() => {}}>
          +
        </button>
      </div>
    </div>
  );
};
export default Main;
