import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>HOME</Link>
      <br />
      <Link to={"diary"}>DIARY</Link>
      <br />
      <Link to={"edit"}>EDIT</Link>
      <br />
      <Link to={"main"}>MAIN</Link>
      <br />
      <Link to={"signin"}>SIGNIN</Link>
    </>
  );
};
export default RouteTest;
