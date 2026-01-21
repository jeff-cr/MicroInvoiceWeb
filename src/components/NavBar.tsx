import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#3f51b5"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            <HomeFilledIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, cursor:"pointer" }}
            onClick={() => navigate("/invoices")}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Invoices
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
