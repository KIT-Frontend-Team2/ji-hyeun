import "./App.css";
// import Layout from "./components/Layout";
// import MainPage from "./pages/main/_";
// import TodoPage from "./pages/todo";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routing";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import UserStoreProvider from "./context/user";
function App() {
  return (
    <UserStoreProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </UserStoreProvider>
  );
}

export default App;
