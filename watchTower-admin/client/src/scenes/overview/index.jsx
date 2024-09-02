import React, { useState } from 'react';
import { FormControl, MenuItem, InputLabel, Box, Select } from '@mui/material';
import Header from 'components/Header';
import OverviewChart from "components/OverviewChart"; // Ensure this import path is correct

const Overview = () => {
    const [view, setView] = useState("reports");

    return (
        <Box m="1.5rem 2.5rem">
            <Header 
                title="Overview" 
                subtitle="Overview of general reports"
            />

            <Box height="75vh">
                <FormControl sx={{ mt: "1rem" }}>
                    <InputLabel>View</InputLabel>
                    <Select 
                        value={view} 
                        label="View" 
                        onChange={(e) => setView(e.target.value)}
                    >
                        <MenuItem value="reports">Reports</MenuItem>
                        {/* Add more options if needed */}
                    </Select>
                </FormControl>
                {/* Corrected component name */}
                <OverviewChart view={view} />
            </Box>
        </Box>
    );
}

export default Overview;
