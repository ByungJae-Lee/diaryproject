import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordlHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "90vh",
      }}
    >
      <div>이곳은 로그인 페이지 입니다</div>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordlHandler} />
        <br />
        <button>로그인</button>
      </form>
    </div>
  );
}

export default LoginPage;
