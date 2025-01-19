"use client";
import React, { useState, useEffect, useCallback } from "react";
import GamePieces from "./GamePieces";
import Image from "next/image";
import {
  BiSolidLeftArrow,
  BiSolidRightArrow,
  BiSolidDownArrow,
  BiSolidUpArrow,
} from "react-icons/bi";

const Game = () => {






  return (
    <div className="border border-black rounded-[8px] p-4 bg-gradient-to-br from-[#175553] to-[#43D9AD]/13">
      <div className="flex items-center justify-between">
        <Image
          src={"/assets/images/bolt.png"}
          height={20}
          width={20}
          alt="bolt"
        />
        <Image
          src={"/assets/images/bolt.png"}
          height={20}
          width={20}
          alt="bolt"
        />
      </div>
      <div className="flex items-start gap-4 my-2 mx-8">
        <GamePieces
          score={score}
          setScore={setScore}
          gameOver={gameOver}
          onGameOver={(type) => handleGameOver(type)}
        />
        <div>
          <div className="bg-[#011423] p-4 bg-opacity-[18%] rounded-[8px]">
            <p className="text-white">// use keyboard</p>
            <p className="text-white">// arrows to play</p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <div></div>
              <div className="border border-[#1E2D3D] rounded-lg bg-[#010C15] flex justify-center py-2 px-6">
                <BiSolidUpArrow className="text-[#ffffff] text-lg" />
              </div>
              <div></div>
              <div className="border border-[#1E2D3D] rounded-lg bg-[#010C15] flex justify-center py-2 px-6">
                <BiSolidLeftArrow className="text-[#ffffff] text-lg" />
              </div>
              <div className="border border-[#1E2D3D] rounded-lg bg-[#010C15] flex justify-center py-2 px-6">
                <BiSolidDownArrow className="text-[#ffffff] text-lg" />
              </div>
              <div className="border border-[#1E2D3D] rounded-lg bg-[#010C15] flex justify-center py-2 px-6">
                <BiSolidRightArrow className="text-[#ffffff] text-lg" />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-white">// food left</p>
            <div className="mt-2 grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }).map((_, index) => {
                const itemsToHide = score / 2;
                let shouldDisable = false;

                if (index >= 10 - itemsToHide) {
                  shouldDisable = true;
                }

                return (
                  <span key={index} className="relative flex h-3 w-3">
                    {!shouldDisable && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#43D9AD] opacity-75"></span>
                    )}
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#43D9AD]"></span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
      <div className="mt-4 flex items-center justify-between">
        <Image
          src={"/assets/images/bolt.png"}
          height={20}
          width={20}
          alt="bolt"
        />
        <Image
          src={"/assets/images/bolt.png"}
          height={20}
          width={20}
          alt="bolt"
        />
      </div>
    </div>
  );
};

export default Game;
