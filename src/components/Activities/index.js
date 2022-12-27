import logo from "../../logo.svg";
import { Box, Button, Typography } from "@mui/material";
import "./activities.scss";

const Activities = () => {
  const data = [
    {
      val: "Leslie Alexander updated her",
      innerVal: "Account Type",
      date: "5 october 11:46 AM",
    },
    {
      val: "John Smith removed Mark from",
      innerVal: "Family member",
      date: "5 October 10:01 AM",
    },
    {
      val: "Leslie Alexander updated her",
      innerVal: "Account Type",
      date: "4 October 11:00 AM",
    },
    {
      val: "John Smith removed Mark from",
      innerVal: "Family member",
      date: "3 October 2:45 PM",
    },
    {
      val: "Leslie Alexander updated her",
      innerVal: "Account Type",
      date: "3 October 2:45 PM",
    },
    {
      val: "John Smith removed Mark from",
      innerVal: "Family member",
      date: "3 October 2:45 PM",
    },
    {
      val: "Leslie Alexander updated her",
      innerVal: "Account Type",
      date: "3 October 2:45 PM",
    },
    {
      val: "John Smith removed Mark from",
      innerVal: "Family member",
      date: "3 October 2:45 PM",
    },
  ];

  return (
    <div className="activities">
      <Box
        className="activities-header"
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          href="/"
          className="header-heading"
          sx={{
            mr: 2,
            display: "flex",
            fontFamily: "monospace",
            color: "inherit",
            textDecoration: "none",
            // paddingTop: '12px'
          }}
        >
          Activities
        </Typography>
        <Box className="header-button">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2f621b",
              color: "white !important",
              fontFamily: "monospace",
              textTransform: "capitalize",
              fontWeight: 100,
            }}
            size="small"
          >
            View All
          </Button>
        </Box>
      </Box>
      {data.map(({ val, innerVal, date }, index) => (
        <div className="activities-content" key={index}>
          <div className="content-logo">
            <img src={logo} height={50} width={50} alt="logo" />
          </div>
          <Box className="main-content">
            <Typography component="div" className="upper-content">
              {val}
              <Typography component="div" className="textInsideUpperContent">
                {innerVal}
              </Typography>
            </Typography>
            <Typography component="div" className="lower-content">
              {date}
            </Typography>
          </Box>
        </div>
      ))}
    </div>
  );
};

export default Activities;
