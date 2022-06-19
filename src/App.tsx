import { MantineProvider } from "@mantine/core";
import { AuthenticationForm } from "./components/Login/AuthenticationForm";
import "./App.css";

function App() {
  return (
    <div className="container">
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
        <AuthenticationForm />
      </MantineProvider>
    </div>
  );
}

export default App;
