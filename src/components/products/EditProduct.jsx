import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const EditProduct = () => {
  const { productDetails, saveEditedProduct, getProductDetails } =
    useProducts();

  const [product, setProduct] = useState(productDetails);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  useEffect(() => {
    getProductDetails(id);
  }, []);

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

  return (
    <div className="standart-back">
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
          variant="outlined"
          className="inp-c-add"
          onChange={handleInp}
          value={product.picture || ""}
          name="picture"
        />
        <TextField
          id="standard-basic"
          label="Name"
          variant="outlined"
          className="inp-c-add"
          onChange={handleInp}
          value={product.name || ""}
          name="name"
        />
        <TextField
          id="standard-basic"
          label="Tier"
          variant="outlined"
          className="inp-c-add"
          onChange={handleInp}
          value={product.tier || ""}
          name="tier"
        />
        <TextField
          id="standard-basic"
          label="Type"
          variant="outlined"
          className="inp-c-add"
          onChange={handleInp}
          value={product.type || ""}
          name="type"
        />
        <TextField
          id="standard-basic"
          label="Price"
          variant="outlined"
          className="inp-c-add"
          onChange={handleInp}
          value={product.price || ""}
          name="price"
        />
        <button
          class="button-1"
          role="button"
          variant="outlined"
          fullWidth
          size="large"
          onClick={() => {
            saveEditedProduct(product);
            navigate("/products");
          }}
        >
          SAVE PRODUCT
        </button>
      </Box>
    </div>
  );
};

export default EditProduct;
