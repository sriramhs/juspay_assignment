import { Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import "../styles/AppLayout.css";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/Sidebar";
import Header from "../components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";
import { setLeft, setRight } from "../redux/reducers/uiSlice";
import { useDispatch } from "react-redux";

export const AppLayout = () => {
  const { leftOpen, rightOpen } = useAppSelector(s => s.ui);
   const dispatch = useDispatch()
   const smallScreen = useMediaQuery('(max-width:1500px)');
   const smallScreen1 = useMediaQuery('(max-width:1100px)');

  const rootClass = [
    'layout-grid',
    leftOpen  ? '' : 'left-collapsed',
    rightOpen ? '' : 'right-collapsed',
  ].join(' ');

useEffect(()=>{
  if(smallScreen){dispatch(setRight(false))}
  if(smallScreen1){dispatch(setLeft(false))}
},[smallScreen,smallScreen1])

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

