import { useState } from "react";

const DiaryEditor = () => {
  const [content, setContent] = useState("");
  const [kpt, setKpt] = useState("");

  return (
    <div className="DiaryEditor">
      <div>이곳은 다이어리 에디터 입니다</div>
      <textarea
        name="content"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></textarea>
      <div>
        <textarea
          name="kpt"
          value={kpt}
          onChange={(e) => {
            setKpt(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
};
export default DiaryEditor;
