'use client';

import React, { useState, useEffect,useMemo } from "react";
import slides from "@/data/slides";
import styles from "@/app/page.module.css";
function Slides() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(generateRandomNumber, 300);

    return () => {
      clearInterval(interval); 
    };
  }, []);

   const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * slides.length);
    setIndex(randomNum);
  }

   const currentSlide = useMemo(() => slides[index], [index]);

  return (
    <div className={styles.slides__container}>
      <img src={currentSlide.image} alt="Picture of the author" />
    </div>
  );
}

export default Slides;
