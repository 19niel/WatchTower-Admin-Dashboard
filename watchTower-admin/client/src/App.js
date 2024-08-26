import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";

function App() {
  const mode = useSelector((state) => state.global.mode); // grab the mode in the state file
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); // grabbing the state so the global mode will pass it to the theme settings
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>  {/* setup for light and dark mode by passing all the theme provider */}
          <CssBaseline/> {/* resets everything in the css making the code have css defaults automatically*/}
          <Routes>
            <Route element={<Layout />}>  {/* it will the layout component as the main parent */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} /> {/* a path that will navigate to the dashboard*/}
              <Route path="/dashboard" element={<Dashboard/>} /> {/* redirect */}
              <Route path="/products" element={<Products/>} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
