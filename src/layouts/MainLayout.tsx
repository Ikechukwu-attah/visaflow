import React, { ReactNode, FC } from "react";
import Navbar from "../components/Navbar/Navbar";
interface LayoutProps {
  children: ReactNode;
}
const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen  bg-blue-500 flex  flex-col">
      <Navbar />
      <main className="flex-grow"> {children}</main>

      <h2>footer</h2>
    </div>
  );
};

export default MainLayout;
