import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import { Box, TextField } from "@mui/material";

const AddProduct = () => {
  const { addProduct } = useProducts();
  // const { addProduct2 } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    picture: "",
    name: "",
    tier: "",
    type: "",
    price: "",
  });

  // const [product2, setProduct2] = useState({
  //   picture: "",
  //   name: "",
  //   type: "",
  //   price: "",
  // });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  // const handleInp2 = (e) => {
  //   if (e.target.name === "price") {
  //     let obj = {
  //       ...product2,
  //       [e.target.name]: Number(e.target.value),
  //     };
  //     setProduct2(obj);
  //   } else {
  //     let obj2 = {
  //       ...product2,
  //       [e.target.name]: e.target.value,
  //     };
  //     setProduct2(obj2);
  //   }
  // };

  return (
    <div className="standart-back">
      <div className="theme-add">
        ADMIN PANEL
        <b style={{ color: "#808080" }}>ADD PRODUCT</b>
      </div>
      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            },
          }}
          noValidate
          autoComplete="off"
          className="inp-add"
        >
          <b style={{ fontSize: "24px" }}>Class C</b>
          <TextField
            id="standard-basic"
            label="Picture"
            variant="standard"
            className="inp-c-add"
            onChange={handleInp}
            name="picture"
          />
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            className="inp-c-add"
            onChange={handleInp}
            name="name"
          />
          <TextField
            id="standard-basic"
            label="Type"
            variant="standard"
            className="inp-c-add"
            onChange={handleInp}
            name="type"
          />
          <TextField
            id="standard-basic"
            label="Tier"
            variant="standard"
            className="inp-c-add"
            onChange={handleInp}
            name="tier"
          />
          <TextField
            id="standard-basic"
            label="Price"
            variant="standard"
            className="inp-c-add"
            onChange={handleInp}
            name="price"
          />
          <button
            class="button-1"
            role="button"
            variant="outlined"
            fullWidth
            size="large"
            onClick={() => {
              addProduct(product);
              navigate("/products");
            }}
          >
            ADD PRODUCT
          </button>
        </Box>
      </div>

      {/* <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          },
        }}
        noValidate
        autoComplete="off"
        className="inp-add"
      >
        <b style={{ fontSize: "24px" }}>Class B</b>
        <TextField
          id="standard-basic"
          label="Picture"
          variant="standard"
          className="inp-c-add"
          onChange={handleInp2}
          name="picture"
        />
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          className="inp-c-add"
          onChange={handleInp2}
          name="name"
        />
        <TextField
          id="standard-basic"
          label="Type"
          variant="standard"
          className="inp-c-add"
          onChange={handleInp2}
          name="type"
        />
        <TextField
          id="standard-basic"
          label="Price"
          variant="standard"
          className="inp-c-add"
          onChange={handleInp2}
          name="price"
        />
        <button
          class="button-1"
          role="button"
          variant="outlined"
          fullWidth
          size="large"
          onClick={() => {
            addProduct2(product2);
            navigate("/products");
          }}
        >
          ADD PRODUCT
        </button>
      </Box> */}
    </div>
  );
};

export default AddProduct;
