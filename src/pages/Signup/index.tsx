import { Link } from "react-router-dom";

const index = () => {
  return (
    <main>
      <h1>Sign up</h1>
      <Link to="/auth/signin">signin</Link>
    </main>
  );
};

export default index;
