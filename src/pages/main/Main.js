import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../main/Main.css";
import Modal from "../../components/modal/Modal";

// 1. 달력을 중앙에 배치시킨다
// 2. 몇 일 이거 없애기

const Main = () => {
  const [date, setDate] = useState(new Date());
  // 페이지 이동
  const movePage = useNavigate();
  function goDiaryEditor() {
    movePage("/DiaryEditor");
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1 className="text-center">달력</h1>
      {/* 달력 */}
      <div className="calendar-container">
        <Calendar
          value={date}
          onChange={goDiaryEditor}
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
        {/* <button className="create" onClick={goDiaryEditor}>
          일기작성
        </button> */}
      </div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <h2>hi</h2>
        <p>it's me</p>
      </Modal>
    </div>
  );
};
export default Main;
