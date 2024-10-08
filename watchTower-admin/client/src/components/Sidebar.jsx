import React, { useEffect, useState } from 'react';
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";

import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    NotificationImportantOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
} from "@mui/icons-material";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import profileImage from "assets/profilepic.png";

const navItems = [
    { text: "Dashboard", icon: <HomeOutlined /> },
    { text: "Overall Reports", icon: null },
    { text: "Products", icon: <NotificationImportantOutlined/> },
    { text: "Customers", icon: <Groups2Outlined /> },
    { text: "Transactions", icon: <ReceiptLongOutlined /> },
    { text: "Reports", icon: <NotificationImportantOutlined/> },
    { text: "Map", icon: <RoomOutlinedIcon/>},
    { text: "Accounts", icon: null },
    { text: "Citizens", icon: <Groups2Outlined /> },
    { text: "Report Statistics", icon: null },
    { text: "Overview", icon: <PointOfSaleOutlined /> },
    { text: "Daily", icon: <HomeOutlined /> },
    { text: "Monthly", icon: <CalendarMonthOutlined /> },
    { text: "Breakdown", icon: <PieChartOutlined /> },
    { text: "Management", icon: null },
    { text: "Admin", icon: <AdminPanelSettingsOutlined /> },
    { text: "Performance", icon: <TrendingUpOutlined /> },
];

const Sidebar = ({ 
    user,
    drawerWidth, 
    isSidebarOpen, 
    setIsSidebarOpen, 
    isNonMobile }) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState(""); // Fixed the useState declaration
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1)); // Update active state based on the path
    }, [pathname]);

    return (
        <Box component="nav">
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth
                        }
                    }}
                >
                    <Box width="100%">
                        <Box m="1.5rem 2rem 2rem 3rem">
                            <FlexBetween color={theme.palette.secondary.main}>
                                <Box display="flex" alignItems="center" gap="0.5rem"> {/* Fixed alignItems typo */}
                                    <Typography variant="h4" fontWeight="bold">
                                        WatchTower
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {navItems.map(({ text, icon }) => {
                                if (!icon) {
                                    return (
                                        <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                                            {text}
                                        </Typography>
                                    );
                                }

                                const lcText = text.toLowerCase(); 

                                return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${lcText}`);
                                                setActive(lcText);
                                            }}
                                            sx={{
                                                backgroundColor: active === lcText ? theme.palette.secondary[300] : "transparent",
                                                color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[100]
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    ml: "2rem",
                                                    color: active === lcText ? theme.palette.primary[600] : theme.palette.secondary[200]
                                                }}
                                            >
                                                {icon} {/* Include the icon here */}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {active === lcText && (
                                                <ChevronRightOutlined sx={{ ml: "auto" }} />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Box>

                    <Box position="absolute" bottom="2rem">
                        <Divider/>
                        <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
                            <Box
                              component="img"
                              alt="profile"
                              src={profileImage}
                              height="40px"
                              width="40px"
                              borderRadius="50%"
                              sx={{ objectFit: "cover"}}
                            />
                            <Box textAlign="left">
                                <Typography 
                                fontWeight="bold" 
                                fontSize="0.9rem" 
                                sx={{color: theme.palette.secondary[100]}}
                                >
                                    {user.firstName+" " + user.lastName}
                                </Typography>

                                <Typography 
                                fontSize="0.8rem" 
                                sx={{color: theme.palette.secondary[200]}}>
                                    {user.role}
                                </Typography>
                            </Box>
                                <SettingsOutlined 
                                        sx={{color: theme.palette.secondary[300], fontSize: "25px"}}/>
                        </FlexBetween>
                    </Box>

                   
                </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;
