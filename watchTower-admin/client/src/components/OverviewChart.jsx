import React, {useMemo}from 'react'
import { ResponsiveLine } from '@nivo/line';
import { useTheme } from '@emotion/react';
import { useGetReportsStatQuery } from 'state/api';


const OverviewChart = ({ isDashboard = false, view}) => {

    const theme = useTheme();
    const {data, isLoading} = useGetReportsStatQuery();
    console.log("🚀 ~ OverviewChart ~ data:", data)
    
        // 4:42:01
  return (
    <div>
      Overview Chart
    </div>
  )
}

export default OverviewChart
