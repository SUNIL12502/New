import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import Topbar from "./global/Topbar";
import HamburgerMenu from "./global/HamburgerMenu";
import Dashboard from "./scenes/dashboard";
import Login from "./scenes/login/Login";
import Register from "./scenes/register/Register";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <div className="app">
        <HamburgerMenu />
        <main className="context">
        
          <Topbar>
          </Topbar>
          <Routes>
            <Route path="/dashboard" element = {<Dashboard />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/register" element = {<Register />} />
          </Routes>
        </main>

      </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
