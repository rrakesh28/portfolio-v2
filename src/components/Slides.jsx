'use client';

import React, { useState, useEffect } from "react";
import slides from "@/data/slides";
import styles from "@/app/page.module.css";
function Slides() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    generateRandomNumber();
    const interval = setInterval(generateRandomNumber, 300);

    return () => {
      clearInterval(interval); 
    };
  }, []);

   const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 4);
    setIndex(randomNum);
  }

  return (
    <div className={styles.slides__container}>
      <img src={slides[index].image} alt="Picture of the author" />
    </div>
  );
}

export default Slides;
