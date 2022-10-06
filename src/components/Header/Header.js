import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import ChatIcon from "@mui/icons-material/Chat";
import { Link, useHistory } from "react-router-dom";
import { selectUser } from "../../features/userSlice";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux/es/exports";
import { auth } from "../../firebase";
import Button from "@mui/material/Button";

const Header = () => {
  const user = useSelector(selectUser);
  const history = useHistory();
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to="/">
            <img src="https://bit.ly/3AYpqaC" alt="logo" />
          </Link>
          {/* <a href="/"><img src="https://bit.ly/3AYpqaC" alt='logo' /></a> */}
          <h3>Products</h3>
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="SIGN IN To Access This Website" />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
            <span
              onClick={() => {
                auth.signOut();
                history.push("/auth");
              }}
            >
              <Avatar src={user?.photo} />
            </span>
            <InboxIcon />
            <ChatIcon />
            {user ? (
              <Button
                variant="outlined"
                onClick={() => {
                  auth.signOut();
                  history.push("/auth");
                }}
              >
                Sign Out
              </Button>
            ) : (
              <Button
                variant="outlined"
                onClick={() => {
                  history.push("/auth");
                }}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
