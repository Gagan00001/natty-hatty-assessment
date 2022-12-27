import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const SubHeader = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", marginTop: "10px", marginBottom: "10px" }}
    >
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          flexGrow: 1,
          display: "flex",
          fontFamily: "monospace",
          fontWeight: 400,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        My Account
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#cef2da",
          color: "#549762",
          padding: "4px",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: "flex",
            fontFamily: "monospace",
            fontWeight: 100,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Success Message Here
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: "end",
          margin: "auto",
          display: "flex",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#232e3e",
            color: "white !important",
            textTransform: "capitalize",
            fontFamily: "monospace",
            fontWeight: 100,
          }}
          size="small"
        >
          Save Changes
        </Button>
      </Box>
    </Container>
  );
};

export default SubHeader;
