import { MantineProvider } from "@mantine/core";
import "./App.css";
import { AuthenticationForm } from "./components/Login/AuthenticationForm";

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
      }}>
      <AuthenticationForm style={{ width: "33%", margin: "30px auto" }} />
    </MantineProvider>
  );
}

export default App;
