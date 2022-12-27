import Container from "@mui/system/Container";

import Header from "./components/Header";
import MobileView from "./screens/Mobile";
import TabView from "./screens/Tab";
import WebView from "./screens/Web";

import "./css/style.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          display: {
            lg: "block",
            xl: "block",
            md: "none",
            xs: "none",
            sm: "none",
          },
          padding: "unset !important",
        }}
      >
        <WebView />
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          display: {
            lg: "none",
            xs: "none",
            md: "block",
            sm: "block",
            xl: "none",
          },
        }}
      >
        <TabView />
      </Container>
      <Container maxWidth="xs" sx={{ display: { xs: "flex", sm: "none" } }}>
        <MobileView />
      </Container>
    </div>
  );
};

export default App;
