import React from 'react'
import {Box, useTheme } from "@mui/material";
import { useGetCitizensQuery } from 'state/api'; 
import Header from "components/Header";
import { DataGrid } from '@mui/x-data-grid';


const Citizens = () => {

    const theme = useTheme();
    const{ data, isLoading} = useGetCitizensQuery();
    // console.log("🚀 ~ Citizens ~ data:", data)

  const columns = [
    {
      field: "_id",
      headerName:"ID",
      flex: 0.8,
    },
    {
        field: "profileImage",
        headerName:"Image",
        flex: 0.5,
      },
    {
      field: "firstName",
      headerName:"First Name",
      flex: 0.5,
    },
    {
      field: "lastName",
      headerName:"Last Name",
      flex: 0.5,
    },
    {
      field: "mobileNumber",
      headerName:"Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{4})(\d{3})(\d{3})/, "$1-$2-$3") //grabbing the value and replacing with REGEX
      }                             // 4-3-4 digits per container in example 0915-092-2202
    },
    {
      field: "address",
      headerName:"Address",
      flex: 0.8,renderCell: (params) => 
        {
        const address = params.value;  // the `address` object
        return `${address.houseNumber}, ${address.street}, ${address.barangay}`;
        }
    },
    {
      field: "role",
      headerName:"role",
      flex: 1,
    },
   
  ]

  return (
    <Box m="1.5rem 2.5rem" >
      <Header title="Citizens" subtitle="List of Citizens"/>
      <Box mt="40px" heigth="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none"
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none"
        },
        "& .MuiDataGrid": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderBottom: "none"
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: theme.palette.primary.light,

        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderTop: "none"
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
          color: `${theme.palette.secondary[200]} !important`
        }
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
      
  )
}

export default Citizens;

