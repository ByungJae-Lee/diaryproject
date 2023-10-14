import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiaryEditor from "./component/DiaryEditor";
import Nav from "./component/Nav";
import LoginPage from "./component/LoginPage";
import Main from "./component/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/DiaryEditor" element={<DiaryEditor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
