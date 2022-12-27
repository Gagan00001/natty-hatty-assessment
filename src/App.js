import { Container } from "@mui/system";
import Family from "./components/Family";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import MobileView from "./screens/Mobile";
import Activities from "./components/Activities";
import "./css/style.scss";
import BankAccounts from "./components/BankAccounts";
import ProfileDetails from "./components/Profile";
import BillingAddress from "./components/Billing Address";
import Invitations from "./components/Invitation";
import TabView from "./screens/Tab";

function App() {
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
        <SubHeader />
        <div className="detail-wrapper">
          <div
            className=" flex profile-details"
            style={{ flexDirection: "column" }}
          >
            <div className="form-background">
              <ProfileDetails />
            </div>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <div
                style={{
                  display: "flex",
                  flexGrow: 2,
                  flexDirection: "column",
                  marginRight: "10px",
                }}
              >
                <div className="form-background">
                  <BankAccounts />
                </div>
                <div className="form-background" style={{ marginTop: "10px" }}>
                  <BillingAddress />
                </div>
              </div>
              <div
                className="form-background"
                style={{ display: "flex", flexGrow: 1.2 }}
              >
                <Activities />
              </div>
            </div>
          </div>
          <div className="family-details" style={{ flexDirection: "column" }}>
            <div className="form-background">
              <Family />
            </div>
            <div className="form-background" style={{ marginRight: 10 }}>
              <Invitations />
            </div>
          </div>
        </div>
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
}

export default App;
