import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiaryEditor from "./DiaryEditor";
import Header from "./Header";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <DiaryEditor />
      </div>
    </BrowserRouter>
  );
}

export default App;
