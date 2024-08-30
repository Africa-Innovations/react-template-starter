import { Link } from "react-router-dom";

const index = () => {
  return (
    <main>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </main>
  );
};

export default index;
