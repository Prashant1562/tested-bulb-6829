import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Logo from "./Components/Images/Logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Footer,
  Home,
  WomensProductsPage,
  MansProductsPage,
  KidsProductsPage,
  HomeAndLivinProductsPage,
  SingleProduct,
} from "./Components";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 2, 2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "18ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function App() {
  const [value, setValue] = useState(0);
  const { loginWithRedirect,logout,isAuthenticated  } = useAuth0();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {/* Header starts */}
        <Box sx={{ flexGrow: 1 }} className="header">
          <AppBar
            position="static"
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              
              {/* Navbar starts */}
              <Box sx={{ width: "100%", pl: 5 }}>
                <Link to="/man" className="header--navbar">
                  <Tab
                    value="one"
                    label="Men"
                    className="header--navbar--nav"
                  />
                </Link>

                <Link to="/women" className="header--navbar">
                  <Tab
                    value="women"
                    label="Women"
                    className="header--navbar--nav"
                  />
                </Link>
                <Link to="/kids" className="header--navbar">
                  <Tab
                    value="kids"
                    label="Kids"
                    className="header--navbar--nav"
                  />
                </Link>
                <Link to="/homeandliving" className="header--navbar">
                  <Tab
                    value="home and livings"
                    label="Home & Livings"
                    className="header--navbar--nav"
                  />
                </Link>
          
                <Link to="/singlepage" className="header--navbar">
                  <Tab
                    value="singlepage"
                    label="Single Page"
                    className="header--navbar--nav"
                  />
                </Link>
                
              </Box>
              <br />
              <br />
              {/* Navbar ends */}
              <Link to="/">
                {" "}
                <img src={Logo} alt="" width="250" />
              </Link>
              {/* SearchBar Starts */}
              <Box sx={{ flexGrow: 1 }} className="searchInput">
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Box>

              
            
              
              {/* SearchBar Ends */}

              {/* Notification Starts */}
        
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon label tabs example"
                className="app--Lists"
              >
                  {
                isAuthenticated ? <button className="logout" onClick={() => logout({ returnTo: window.location.origin })}>
                LOG OUT
              </button> : <button className="login" onClick={() => loginWithRedirect()}>LOG IN</button>
              }    

                {/* <Tab
             
                  icon={<PersonOutlineOutlinedIcon />}
                  label="Profile"
                  size="small"
                /> */}
                <Tab
                  icon={<FavoriteBorderIcon />}
                  label="Wishlist"
                  size="small"
                />
                <Tab
                  icon={<ShoppingBagOutlinedIcon />}
                  label="Bag"
                  size="small"
                />
              </Tabs>
              {/* Notification Ends */}
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/man" element={<MansProductsPage />} />
          <Route path="/women" element={<WomensProductsPage />} />
          <Route path="/kids" element={<KidsProductsPage />} />
           <Route path="/homeandliving" element={<HomeAndLivinProductsPage />} />
          <Route path="/singlepage" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
