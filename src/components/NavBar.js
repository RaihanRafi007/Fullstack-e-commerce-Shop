import {
  AppBar,
  Badge,
  Button,
  Card,
  ClickAwayListener,
  Grid,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRoundedIcon ";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useStateValue } from "../state/stateProvider";

const NabBar = () => {
  const [{ profile }, {}] = useStateValue();
  console.log("NabBar===", profile);

  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const search = () => {
    navigate(`/q-${text}`);
  };
  const logoutnow = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };

  const orderpage = () => {
    navigate("/orders");
  };

  const profilepage = () => {
    navigate(`/profile-${profile?.username}`);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container>
          <Button onClick={() => navigate("/")} color="inherit">
            <Typography>CWR-SHOP</Typography>
          </Button>
          <Paper style={{ margin: "0 20px" }}>
            <InputBase
              value={text}
              placeholder="Search Now..."
              style={{ padding: "10px" }}
              onChange={(e) => setText(e.target.value)}
            />
            <IconButton
              disabled={text.length <= 0 ? true : false}
              onClick={search}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        {profile === null ? (
          <Button
            color="inherit"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        ) : (
          <>
            <IconButton onClick={orderpage} color="inherit">
              <Badge badgeContent="3" color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton onClick={() => setShowMenu(true)} color="inherit">
              <AccountCircleIcon />
            </IconButton>
            {showMenu && (
              <ClickAwayListener onClickAway={() => setShowMenu(false)}>
                <Card
                  style={{
                    position: "fixed",
                    top: "50px",
                    right: "10px",
                  }}
                >
                  <MenuItem onClick={profilepage}>Profile</MenuItem>
                  <MenuItem onClick={logoutnow}>Logout</MenuItem>
                </Card>
              </ClickAwayListener>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NabBar;
