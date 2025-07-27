import { Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import "../styles/AppLayout.css";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/Sidebar";
import Header from "../components/Header";

export const AppLayout = () => {
  const { leftOpen, rightOpen } = useAppSelector(s => s.ui);

  const rootClass = [
    'layout-grid',
    leftOpen  ? '' : 'left-collapsed',
    rightOpen ? '' : 'right-collapsed',
  ].join(' ');

  return (
    <div className={rootClass}>
        <Header/>
     <LeftSidebar open={leftOpen} />
      

      <main className="main-content">
        <Outlet />
      </main>

       <RightSidebar open={rightOpen}/>
    </div>
  );
};

