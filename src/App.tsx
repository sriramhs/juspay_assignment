// import "./App.css"
import CssBaseline from "@mui/material/CssBaseline"
import { RouterProvider } from "react-router-dom"
import routes from "./routes/routes"
import  { ThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
   const mode = useSelector((state: RootState) => state.ui.mode);
  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return (
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routes} />
      </ThemeProvider>
  )
}

export default App
