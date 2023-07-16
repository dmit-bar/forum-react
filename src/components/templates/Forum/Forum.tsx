import { Outlet } from "react-router-dom";

const Forum = () => {
  return (
    <div className="w-full h-full">
      <div>dashboard</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export { Forum };
