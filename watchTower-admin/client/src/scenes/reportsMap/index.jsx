import React from 'react'
import  {Box, useTheme} from "@mui/material";
import  {useGetReportsMap} from "state/api";
import Header from 'components/Header';


const ReportsMap = () => {

    const theme = useTheme();
   // const {data } = useGetReportsMap; 
  return (
    <Box m="1.5rem 2.5rem">
        <Header title="Map of Reports" subtitle="You can see all of the reports pinned in the map"/>
        <Box
            mt="40px"
            height="75vh"
            border={`1px solid ${theme.palette.secondary[200]}`}
            borderRadius="4px"
        ></Box>
    </Box>
  )
}

export default ReportsMap;
