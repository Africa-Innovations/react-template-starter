import { DeviceSection } from "@/sections";

const index = () => {
  // console.log(import.meta.env.VITE_API_BASE_URL);

  return (
    <main>
      <h1>Home</h1>
      <DeviceSection />
    </main>
  );
};

export default index;
// https://vitejs.dev/guide/static-deploy
