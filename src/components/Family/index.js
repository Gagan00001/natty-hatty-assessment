import React from "react";
import { Box, Container } from "@mui/system";
import { Avatar, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FamilyDetails = [
  { name: "John Smith", type: "Member" },
  { name: "Dianner Russell", type: "Member" },
  { name: "Lisa Smith", type: "Member" },
  { name: "Sean Michaeltz", type: "Member" },
];

const Family = () => {
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "12px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "12px",
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
            // paddingTop: '12px'
          }}
        >
          Family
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "end",
            margin: "auto",
            display: "flex",
          }}
        >
          <SearchIcon sx={{ p: "4px" }} />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2f621b",
              color: "white !important",
              textTransform: "capitalize",
              fontFamily: "monospace",
              fontWeight: 100,
            }}
            size="small"
          >
            Add New
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#f5981f",
          borderRadius: "4px",
          marginTop: "12px",
        }}
      >
        <Box sx={{ display: "flex", p: "6px", marginLeft: "12px" }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
            sx={{ width: 24, height: 24, marginTop: "4px" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontSize: "16px",
              fontWeight: 400,
              color: "white",
              textDecoration: "none",
              ml: "1rem",
            }}
          >
            John Smith
          </Typography>
        </Box>
        <Box sx={{ display: "block", padding: "8px" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "inherit",
              fontSize: "8px",
              fontWeight: 400,
              textTransform: "capitalize",
            }}
            size="small"
          >
            Admin
          </Button>
        </Box>
      </Box>
      {FamilyDetails?.map((item, index) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#dee8ff",
            borderRadius: "4px",
            marginTop: "12px",
          }}
          key={index}
        >
          <Box sx={{ display: "flex", p: "4px", marginLeft: "12px" }}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/2.jpg"
              sx={{ width: 24, height: 24, marginTop: "4px" }}
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              href="/"
              sx={{
                mr: 2,
                display: "flex",
                fontSize: "16px",
                fontWeight: 400,
                color: "inherit",
                textDecoration: "none",
                ml: "1rem",
              }}
            >
              {item.name}
            </Typography>
          </Box>
          <Box sx={{ display: "block", padding: "8px" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#cad7f5",
                color: "inherit",
                fontSize: "8px",
                fontWeight: 400,
                textTransform: "capitalize",
              }}
              size="small"
            >
              {item.type}
            </Button>
          </Box>
        </Box>
      ))}
    </Container>
  );
};
export default Family;
