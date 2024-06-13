import './App.css';
import {Outlet} from "react-router-dom";
import SbAppBar from "./Components/AppBar/SbAppBar";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: 'Arimo, Arial, sans-serif',
    },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <div className="app-font">
              <SbAppBar/>
              <Outlet/>
          </div>
      </ThemeProvider>
  );
}

export default App;
