import React, { ReactNode, FC } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/footer";
interface LayoutProps {
  children: ReactNode;
}
const MainLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen   flex  flex-col">
      <Navbar />
      <main className="flex-grow"> {children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
