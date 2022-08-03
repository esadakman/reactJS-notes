import { green } from "@mui/material/colors";
// deepPurple, indigo,
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <LoginPage /> */}
        <SignUpPage />
      </ThemeProvider>
    </div>
  );
}
export default App;
