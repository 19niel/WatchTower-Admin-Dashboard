import React, {useState} from 'react';
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from 'react-router-dom'; // allows to have template layouts
import { useSelector } from "react-redux"; 
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import { useGetUserQuery } from 'state/api';

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)"); // true all false boolean for mobile screens and desktop screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId); // grab the user ID
  const { data, error, isLoading } = useGetUserQuery(userId);

  console.log("🚀 ~ Layout ~ userId :", userId );
  console.log("🚀 ~ Layout ~ data :", data );
  console.log("🚀 ~ Layout ~ error :", error );
  console.log("🚀 ~ Layout ~ isLoading :", isLoading );
  
  return (
  <Box display={isNonMobile ? "flex": "block"} width="100%" height="100%"> {/* Box is a material ui component that allows you to pass in properties like css properties */}
     <Sidebar
     user={data || {}}// send empty to prevent from breaking the app
      isNonMobile={isNonMobile}
      drawerWidth="250px"
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen}
      />
     <Box>
      <Navbar 
        user={data || {}}
        isSidebarOpen={isSidebarOpen} // for closing the sidebar using the menu icon
        setIsSidebarOpen={setIsSidebarOpen}
      /> {/* Navbar will always exist */}
      <Outlet /> {/* Outlet represents the components underneath*/}
     </Box>  

  </Box>
  );
};

export default Layout;
