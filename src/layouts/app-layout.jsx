import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen">
        <div className="container mx-auto px-4">
          <Header />
          <Outlet />
        </div>
      </main>

      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with 💗 by Aalia Khan
      </div>
    </div>
  );
};

export default AppLayout;
