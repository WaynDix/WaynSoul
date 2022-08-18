import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bt-login">
        <button className="but-login" onClick={() => navigate("/register")}>REGISTER</button>
      </div>
      <div className="bt-login">
        <button className="but-login"  onClick={() => navigate("/login")}>LOGIN</button>
      </div>
      <div className="navbar">
        <button
          className="button-37 home"
          role="button"
          onClick={() => navigate("/")}
        >
          <HomeIcon sx={{ mr: 1 }} />
          HOME
        </button>

        <button
          className="button-37 art"
          role="button"
          onClick={() => navigate("/article")}
        >
          <ArticleIcon sx={{ mr: 1 }} />
          ARTICLE
        </button>

        <button
          className="button-37 shop"
          role="button"
          onClick={() => navigate("/products")}
        >
          <ShoppingBagIcon sx={{ mr: 1 }} />
          SHOP
        </button>

        <button
          className="button-37 about"
          role="button"
          onClick={() => navigate("/about")}
        >
          <SupportAgentIcon sx={{ mr: 1 }} />
          ABOUT US
        </button>
        <button
          className="button-37 add-product"
          role="button"
          onClick={() => navigate("/add-product")}
        >
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
