import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiaryEditor from "./Page/DiaryEditor";
import Nav from "./Page/Nav";
import LoginPage from "./Page/LoginPage";
import Main from "./Page/Main";
import Edit from "./Page/Edit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/DiaryEditor" element={<DiaryEditor />} />
          <Route path="/Edit" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
