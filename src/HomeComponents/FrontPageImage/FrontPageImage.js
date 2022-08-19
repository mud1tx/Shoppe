import React, { useState, useEffect } from "react";
import classes from "./FrontPageImage.module.css";
import { NavLink } from "react-router-dom";

const allImages = [
  "./images/image-0.jpg",
  "./images/image-1.jpg",
  "./images/image-2.jpg",
  "./images/image-3.jpg",
  "./images/image-4.jpg",
  "./images/image-5.jpg",
];
const FrontPageImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interValid = setInterval(() => {
      if (currentIndex === allImages.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 4000);

    return () => {
      clearInterval(interValid);
    };
  }, [currentIndex]);

  return (
    <div className={classes["front-container"]}>
      <div className={classes["front-pageContainer"]}>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          perferendis nemo delectus. Cumque nostrum, rem doloremque asperiores
        </p>
        <NavLink to={"/products"}>
          <button>Shop</button>
        </NavLink>
      </div>
      <div className={classes["image-container"]}>
        <img
          className={classes["changing-images"]}
          src={allImages[currentIndex]}
          alt=""
        />
      </div>
    </div>
  );
};

export default FrontPageImage;
