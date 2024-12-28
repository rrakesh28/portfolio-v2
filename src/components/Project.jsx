"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/project.module.css";

function Project({ project, index }) {
  const containerClass =
    index % 2 === 0 ? styles.image__containerEven : styles.image__containerOdd;

  return (
    <div className={styles.container}>
      <div className={containerClass}>
        <img src={project.image} alt="" className={styles.image} />
        <div className={styles.text__container}>
          <p className={styles.project__title}>{project.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
