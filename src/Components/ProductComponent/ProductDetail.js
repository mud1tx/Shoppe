import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/productActions";
import classes from "./ProductDetail.module.css";
import NavigationBar from "../../HomeComponents/NavigationBar/NavigationBar";
import Footer from "../../HomeComponents/Footer/Footer";
import { useWishlistProducts } from "../../contexts/WishlistContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { wishlistState, wishlistdispatch } = useWishlistProducts();
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(product);
  const { id, image, title, price, category, description, rating } = product;
  const itemInWishlist = wishlistState.wishlist.find((item) => item.ID === id);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <NavigationBar />
          <div className={classes["product-Container"]}>
            <div className={classes["image-Container"]}>
              <img className={classes.image} src={image} alt="" />
            </div>
            <div className={classes["product-info"]}>
              <h2>{title}</h2>
              <p>{rating.rate}⭐</p>
              <h3>${price}</h3>
              <h3>{category}</h3>
              <p>{description}</p>
              <button
                className={classes.btn}
                onClick={() => {
                  itemInWishlist
                    ? navigate("/wishlist")
                    : wishlistdispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: {
                          ID: id,
                          PRICE: price,
                          CATEGORY: category,
                          DESCRIPTION: description,
                          IMAGE: image,
                          TITLE: title,
                          VALUE: 1,
                        },
                      });
                      if (!itemInWishlist) {
                        toast.success(" Added to Wishlist", {
                          position: "top-right",
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                        });
                      }
                }}
              >
                {itemInWishlist ? "Go To Wishlist" : "Add To Wishlist"}
              </button>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default ProductDetail;
