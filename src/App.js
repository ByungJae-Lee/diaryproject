import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Diary from "./pages/Diary";
import Main from "./pages/Main";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import RouteTest from "./components/RouteTest";

// 컴포넌트 파일명은 소문자
// 나머진 카멜케이스사용

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/main" element={<Main />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>

        <Footer />
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
