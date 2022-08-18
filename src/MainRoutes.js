import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductPage from "./pages/ProductPage";
import Article from "./pages/Article";
import Darling from "./pages/Anime/Darling";
import Overlord from "./pages/Anime/Overlord";
import Akame from "./pages/Anime/Akame";
import Voice from "./pages/Anime/Voice";
import Kimetsu from "./pages/Anime/Kimetsu";
import Slime from "./pages/Anime/Slime";
import AddProduct from "./components/products/AddProduct";
import EditProductPage from "./pages/EditProductPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"


const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/about",
      element: <AboutUsPage />,
      id: 2,
    },
    {
      link: "/products",
      element: <ProductPage />,
      id: 3,
    },
    {
      link: "/article",
      element: <Article />,
      id: 4,
    },
    {
      link: "/darling-in-the-franxx",
      element: <Darling />,
      id: 5,
    },
    {
      link: "/overlord",
      element: <Overlord />,
      id: 6,
    },
    {
      link: "/akame-ge-kill",
      element: <Akame />,
      id: 7,
    },
    {
      link: "/voice-form",
      element: <Voice />,
      id: 8,
    },
    {
      link: "/kimetsu-no-yaiba",
      element: <Kimetsu />,
      id: 9,
    },
    {
      link: "/rebirth-slime",
      element: <Slime />,
      id: 10,
    },
    {
      link: "/add-product",
      element: <AddProduct />,
      id: 11,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 12,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 13,
    },
    {
      link: "/register",
      element: <RegisterPage />,
      id: 14,
    }
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
