import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"; //1. Home icon
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp"; //2. my watchlist icon
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp"; //3. Tesla Dashboard icon
import MultilineChartSharpIcon from "@mui/icons-material/MultilineChartSharp"; //4. tesla advance chart
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined"; //5,6,7,8, reports
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
// import { useNavigate } from "react-router-dom";
import Divider from '@mui/material/Divider';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const HamburgerMenu = () => {
  const theme = useTheme();
  const { user } = useAuthContext();
  // console.log("in ham"+user.firstName);
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");//Represents the tab which is currently selected(Change Later)
    
  return (
    <Box
      sx={{
        "& .sidebar-inner": {
          background: `${colors.primary[700]}`,
        },
        "& .icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        // "& .pro-inner-item": {
        //   padding: "5px 35px 5px 20px !important",
        // },
        // "& .inner-item:hover": {
        //   color: "#868dfb !important",
        // },
        "& .menu-item.active": {
          color: "#FFFFFF !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconshape="square">
          {/* Logo amd menu item  */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[300]}>
                  Menu
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
                
              </Box>
            )}
          </MenuItem>
          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user.firstNameSaved}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Elite Investor
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Divider/>
            <MenuItem
              title="Dashboard"
              routerLink={<Link to="/home"></Link>}
              icon={<HomeOutlinedIcon style={{ color: colors.grey[300] }} />}
              selected={selected}
              // color={colors.grey[300]}
              setSelected={setSelected}
            >
            <Typography
              color={colors.grey[300]}
            >
              Stock Listings
            </Typography>
            
            </MenuItem>
            <Divider/>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <MenuItem
              title="Watchlist"
              routerLink={<Link to="/watchlist"></Link>}
              icon={<AccountBalanceSharpIcon style={{ color: colors.grey[300] }} />}
              selected={selected}
              setSelected={setSelected}
            >
            <Typography
              color={colors.grey[300]}
            >
              Watchlist
            </Typography>
              
            </MenuItem>
            <MenuItem
              title="News"
              routerLink={<Link to="/news"></Link>}
              icon={<ContactsOutlinedIcon style={{ color: colors.grey[300] }}/>}
              selected={selected}
              setSelected={setSelected}
            >
            <Typography
              color={colors.grey[300]}
            >
              News
            </Typography>  
            </MenuItem>
            <MenuItem
              title="IPO"
              routerLink={<Link to="/ipo"></Link>}
              icon={<ReceiptOutlinedIcon style={{ color: colors.grey[300] }}/>}
              selected={selected}
              setSelected={setSelected}
            >
            <Typography
              color={colors.grey[300]}
            >
              IPO
            </Typography>
            </MenuItem>  
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default HamburgerMenu;
