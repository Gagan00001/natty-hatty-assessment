import React from "react";

import Container from "@mui/system/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const BankAccounts = ({ style = {} }) => {
  return (
    <div className="family-details">
      <Container maxWidth="xl" sx={{ marginBottom: "12px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingTop: "12px",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            href="/"
            sx={{
              // mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 100,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Bank Account
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "noWrap",
              justifyContent: "space-between !important",
              ...style,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "white",
                borderRadius: "4px",
                marginTop: "12px",
              }}
            >
              <Box sx={{ display: "flex", p: "6px", marginLeft: "12px" }}>
                <img src="Maestro.svg" alt="svg" width={"24px"} />
                <Box>
                  <Typography
                    variant="h6"
                    noWrap
                    component="p"
                    href="/"
                    fontSize={"12px"}
                    sx={{
                      mr: 2,
                      display: "flex",
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: "12px",
                      lineHeight: "unset",
                      ml: "1rem",
                    }}
                  >
                    **** **** **** 5967
                  </Typography>
                  <Typography
                    variant="h6"
                    noWrap
                    component="p"
                    href="/"
                    sx={{
                      mr: 2,
                      display: "flex",
                      fontWeight: 100,
                      color: "#c7c7c7",
                      textDecoration: "none",
                      fontSize: "12px",
                      lineHeight: "unset",
                      ml: "1rem",
                    }}
                  >
                    Expires 09/27
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "white",
                borderRadius: "4px",
                marginTop: "12px",
              }}
            >
              <Box sx={{ display: "flex", p: "6px", marginLeft: "12px" }}>
                <img src="Maestro.svg" alt="svg" width={"24px"} />
                <Box>
                  <Typography
                    variant="h6"
                    noWrap
                    component="p"
                    href="/"
                    fontSize={"12px"}
                    sx={{
                      mr: 2,
                      display: "flex",
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: "12px",
                      lineHeight: "unset",
                      ml: "1rem",
                    }}
                  >
                    **** **** **** 5967
                  </Typography>
                  <Typography
                    variant="h6"
                    noWrap
                    component="p"
                    href="/"
                    sx={{
                      mr: 2,
                      display: "flex",
                      fontWeight: 100,
                      color: "#c7c7c7",
                      textDecoration: "none",
                      fontSize: "12px",
                      lineHeight: "unset",
                      ml: "1rem",
                    }}
                  >
                    Expires 09/27
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default BankAccounts;
