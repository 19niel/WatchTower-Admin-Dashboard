import React, {useState} from 'react';
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from 'react-router-dom'; // allows to have template layouts
import { useSelector } from "react-redux"; 
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)"); // true all false boolean for mobile screens and desktop screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
  <Box display={isNonMobile ? "flex": "block"} width="100%" height="100%"> {/* Box is a material ui component that allows you to pass in properties like css properties */}
     <Sidebar
      isNonMobile={isNonMobile}
      drawerWidth="250px"
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      />
     <Box>
      <Navbar 
        isSidebarOpen={isSidebarOpen} // for closing the sidebar using the menu icon
        setIsSidebarOpen={setIsSidebarOpen}
      /> {/* Navbar will always exist */}
      <Outlet /> {/* Outlet represents the components underneath*/}
     </Box>  

  </Box>
  );
};

export default Layout;
