import { useRef, useState } from "react";
import "../diaryeditor/DiaryEditor.css";
import { McCloudUpload, MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

const DiaryEditor = () => {
  const [content, setContent] = useState("");
  const [kpt, setKpt] = useState("");

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  return (
    <div className="DiaryEditor">
      <div>이곳은 다이어리 에디터 입니다</div>
      {/* 이미지 업로드 기능 */}
      <main>
        <form
          action=""
          onClick={() => document.querySelector(".input-field").click()}
        >
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />

          {image ? (
            <img src={image} width={150} height={150} alt={fileName} />
          ) : (
            <>
              <MdCloudUpload color="#1475" size={60} />
              <p>Browse Files to upload</p>
            </>
          )}
        </form>
        <section className="uploaded-row">
          <AiFillFileImage color="#1475cf" />
          <span className="upload-content">
            {fileName}
            <MdDelete
              onClick={() => {
                setFileName("No selected File");
                setImage(null);
              }}
            />
          </span>
        </section>
      </main>
      {/* 3줄일기, KPT회고 */}
      <div>
        <textarea
          name="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <br />
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
