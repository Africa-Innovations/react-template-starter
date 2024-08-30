import { Link } from "react-router-dom";

const index = () => {
  return (
    <main>
      <h1>Sign in</h1>
      <Link to="/auth/signup">signup</Link>
    </main>
  );
};

export default index;
