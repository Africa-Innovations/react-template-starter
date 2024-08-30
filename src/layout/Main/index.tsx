import { Footer, Header } from "@/sections";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default index;
