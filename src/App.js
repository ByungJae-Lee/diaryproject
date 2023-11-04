import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiaryEditor from "./pages/diaryeditor/DiaryEditor";
import Nav from "./components/nav/Nav";
import Main from "./pages/main/Main";
import Edit from "./pages/edit/Edit";
import Intro from "./pages/intro/Intro";
import SignIn from "./pages/signin/SignIn";

// 컴포넌트 파일명은 소문자
// 나머진 카멜케이스사용

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/DiaryEditor" element={<DiaryEditor />} />
          <Route path="/Edit" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
