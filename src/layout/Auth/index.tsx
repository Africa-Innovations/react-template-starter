import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <main className="bg-gray-600 flex text-white">
      <div className="w-[20rem] h-screen bg-black text-white">left screen</div>
      <Outlet />
    </main>
  );
};

export default index;
