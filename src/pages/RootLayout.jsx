import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <h1>Hi I am Nav</h1>
      <Outlet />
    </div>
  );
};

export default RootLayout;