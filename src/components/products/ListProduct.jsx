import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import CardProduct from "./CardProduct";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";
import SideBar from "../SideBar";

export default function ListProduct() {
  const { products, getProducts } = useProducts();
  // const { products2, getProducts2 } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(1);
  const itemsPerPage = 3;
  const count = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  const handlePage = (e, p) => {
    console.log(p);
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  // useEffect(() => {
  //   getProducts2();
  // }, []);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const s1 = {
    display: "flex",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "1.5rem",
    letterSpacing: "0.01071em",
    verticalAlign: "inherit",
    borderBottom: "1px solid rgb(81, 81, 81)",
    textAlign: "left",
    padding: "16px",
    color: "rgb(255, 255, 255)",
    position: "sticky",
    top: "0px",
    zIndex: "2",
    backgroundColor: "rgb(18, 18, 18)",
  };

  return (
    <>
      <div className="standart-back">
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2%",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="Class C"
                {...a11yProps(0)}
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              />
              <Tab
                label="Class B"
                {...a11yProps(1)}
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              />
              <Tab
                label="Class A"
                {...a11yProps(2)}
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              />
              <Tab
                label="Class S"
                {...a11yProps(3)}
                sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              />
            </Tabs>
          </Box>
          <SideBar />
          <Box sx={s1}>
            <div style={{ marginRight: "6vw" }}>Picture</div>
            <div style={{ marginRight: "20vw" }}>Name</div>
            <div style={{ marginRight: "7vw" }}>Type</div>
            <div style={{ marginRight: "8vw" }}>Price</div>
            <div style={{ marginRight: "1vw" }}>Action</div>
          </Box>
          <TabPanel value={value} index={0} className="name1-in">
            {currentData() ? (
              currentData().map((item, index) => (
                <CardProduct item={item} key={index} />
              ))
            ) : (
              <h2>Loading..</h2>
            )}
          </TabPanel>
          <div className="pag-card-all">
            <Pagination
              variant="outlined"
              shape="rounded"
              sx={{ m: "0 auto" }}
              count={count}
              page={page}
              onChange={handlePage}
              className="pag-card"
            />
          </div>
          <TabPanel value={value} index={1} className="name1-in">
            {/* {products2 ? (
              products2.map((item2, index2) => (
                <CardProduct item={item2} key={index2} />
              ))
            ) : (
              <h2>Loading..</h2>
            )} */}
          </TabPanel>
          <TabPanel value={value} index={2} className="name1-in"></TabPanel>
          <TabPanel value={value} index={3} className="name1-in"></TabPanel>
        </Box>
      </div>
    </>
  );
}
