import {Typography} from "@mui/material";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { ColorModeContext, tokens } from "./../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
//these all are icons like for dark mode, light mode, notifs, settings, profile etc
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { rows } from './../Symbol';
import TextField from '@mui/material/TextField';
import { useLogout } from './../hooks/useLogout';
import { useNavigate } from "react-router-dom";

const filterOptions = createFilterOptions({
    matchFrom: 'any',
    limit: 10,
  });

const Topbar = ()  => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const { logout } = useLogout();
    let navigate = useNavigate();

    async function logoutHandler(event) {
      logout();
      navigate("../");
    }


    return (
      <div display= "fixed">
        <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
            {/* //box is just like div but it is convineint (we can write css on box directly unlike div) */}
          {/* SEARCH BAR */}
          <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ m: "5px 5px 5px 5px" }}
            >
              Stock Portfolio Manager
            </Typography>
          <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
          >
                <Autocomplete
      filterOptions={filterOptions}
      multiple
      id="checkboxes-tags-demo"
      options={rows}
      disableCloseOnSelect
      getOptionLabel={(option) => option.description}
      style={{ width: 500,color:"black" }}
      renderInput={(params) => (
        <TextField style={{color:"black"}} {...params} label="Enter Name" placeholder="Add Company" />
      )}
    />
            <IconButton>
                <SearchIcon></SearchIcon>
            </IconButton>
          </Box>

          <Box display = "flex">
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon />
                ) : (<LightModeOutlinedIcon />
                )
                }
            </IconButton>
            <IconButton>
                < NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon />
            </IconButton>
            <IconButton onClick={logoutHandler}>
                <PersonOutlinedIcon />
            </IconButton>

          </Box>
        </Box>
        </div>
      )
}

export default Topbar;
