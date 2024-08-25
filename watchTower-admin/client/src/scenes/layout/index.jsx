import React, {userState} from 'react';
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from 'react-router-dom'; // allows to have template layouts
import { useSelector } from "react-redux"; 
import Navbar from "components/Navbar";

const Layout = () => {
  return (
  <Box width="100%" height="100%"> {/* Box is a material ui component that allows you to pass in properties like css properties */}
     <Box>
      <Navbar /> {/* Navbar will always exist */}
      <Outlet /> {/* Outlet represents the components underneath*/}
     </Box>  

  </Box>
  );
};

export default Layout;
