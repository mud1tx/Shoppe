import React, { useEffect } from "react";
import {  useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../../redux/actions/productActions";

const ProductsListing = (props) => {

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const productCounteHandler = (products) => {
    props.totalProducts(products.length);
    return;
  };

  return (
    <div>
      <ProductComponent ProductCounting={productCounteHandler} />
    </div>
  );
};

export default ProductsListing;
