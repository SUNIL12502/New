import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import Topbar from "./global/Topbar";
import HamburgerMenu from "./global/HamburgerMenu";
import Dashboard from "./scenes/dashboard";
import Login from "./scenes/login/Login";
import Register from "./scenes/register/Register";
import WatchList from "./scenes/dashboard/watchlist";
import News from "./data/News/News";
import Details from "./scenes/dashboard/details";
import BuyStock from "./scenes/dashboard/buyStock";
import SellStock from "./scenes/dashboard/sellStock";
import LandingPage from "./global/LandingPage";
import LandingPage from "./global/LandingPage"
import { useState } from "react";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <HamburgerMenu /> */}
          <main className="context">
            {/* <Topbar className="abc">
          </Topbar> */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/home"
                element={
                  <>
                    <div className="app">
                      <HamburgerMenu />
                      <main className="context">
                        <div>
                          <Topbar display="flex" />
                        </div>
                        <Dashboard />
                      </main>
                    </div>
                  </>
                }
              />
              {/* <Route path="/dashboard" element = {<Dashboard />} /> */}
              <Route path="/register" element={<Register />} />
              <Route
                path="/watchlist"
                element={
                  <>
                    <div className="app">
                      <HamburgerMenu />
                      <main className="context">
                        <div>
                          <Topbar display="flex" />
                        </div>
                        <WatchList />
                      </main>
                    </div>
                  </>
                }
              />
              <Route path="/details" element={<Details />} />
              <Route path="/buyStock" element={<BuyStock />} />
              <Route path="/sellStock" element={<SellStock />} />

              {/* <Route path="/watchlist" element = {<Watchlist />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
