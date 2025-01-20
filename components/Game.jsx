"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  BiSolidLeftArrow,
  BiSolidRightArrow,
  BiSolidDownArrow,
  BiSolidUpArrow,
} from "react-icons/bi";
import { GameStatus } from "@/utils/enums";

const Game = () => {
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState(GameStatus.READY);

  const startGame = () => {
    setScore(0);
    setDirection("right");
    setGameStatus(GameStatus.PLAYING);
    setSnake([
      { x: 100, y: 50 },
      { x: 95, y: 50 },
      { x: 90, y: 50 },
    ])
  };

  const canvasRef = useRef();
  const SNAKE_SPEED = 10;
  const [apple, setApple] = useState({ x: 180, y: 100 });
  const [snake, setSnake] = useState([
    { x: 100, y: 50 },
    { x: 95, y: 50 },
    { x: 90, y: 50 },
  ]);
  const [direction, setDirection] = useState(null);

  let pingRadius = 0;
  let maxRadius = 15;

  useEffect(() => {
    if (score > 10) {
      setGameStatus(GameStatus.GAME_WON);
    }
  }, [score]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawSnake = () => {
      const colorStart = [67, 217, 173];
      const colorEnd = [67, 217, 173];
      const maxAlpha = 0.2;
      const minAlpha = 1;

      snake.forEach((snakePart, index) => {
        const progress = index / (snake.length - 1);
        const alpha = minAlpha + progress * (maxAlpha - minAlpha);

        const [r, g, b] = colorStart.map(
          (c, i) => c + progress * (colorEnd[i] - c)
        );

        ctx.beginPath();

        if (index === -1) {
          ctx.arc(snakePart.x + 1, snakePart.y + 7, 7, 0, Math.PI);
        } else {
          ctx.rect(snakePart.x, snakePart.y, 10, 10);
        }

        ctx.fillStyle = `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(
          b
        )}, ${alpha})`;
        ctx.fill();
        ctx.closePath();
      });
    };

    const drawApple = () => {
      ctx.beginPath();
      ctx.arc(apple.x + 5, apple.y + 5, pingRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(67, 217, 173, ${1 - pingRadius / maxRadius})`;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(apple.x + 5, apple.y + 5, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#43D9AD";
      ctx.fill();
      ctx.closePath();

      pingRadius += 1;

      if (pingRadius > maxRadius) {
        pingRadius = 0;
      }
    };

    const moveSnake = () => {
      if (direction) {
        setSnake((prevSnake) => {
          const newSnake = [...prevSnake];
          const snakeHead = { x: newSnake[0].x, y: newSnake[0].y };

          for (let i = newSnake.length - 1; i > 0; i--) {
            newSnake[i].x = newSnake[i - 1].x;
            newSnake[i].y = newSnake[i - 1].y;
          }

          switch (direction) {
            case "right":
              snakeHead.x += SNAKE_SPEED;
              break;
            case "left":
              snakeHead.x -= SNAKE_SPEED;
              break;
            case "up":
              snakeHead.y -= SNAKE_SPEED;
              break;
            case "down":
              snakeHead.y += SNAKE_SPEED;
              break;
            default:
              break;
          }

          newSnake[0] = snakeHead;

          handleAppleCollision(newSnake);
          handleWallCollision(snakeHead);
          handleBodyCollision(newSnake);

          return newSnake;
        });
      }
    };

    const handleWallCollision = (snakeHead) => {
      if (
        snakeHead.x + SNAKE_SPEED > canvas.width ||
        snakeHead.x + SNAKE_SPEED < 0
      ) {
        setGameStatus(GameStatus.GAME_OVER);
      }
      if (
        snakeHead.y + SNAKE_SPEED > canvas.height ||
        snakeHead.y + SNAKE_SPEED < 0
      ) {
        setGameStatus(GameStatus.GAME_OVER);
      }
    };

    const handleBodyCollision = (newSnake) => {
      const snakeHead = newSnake[0];
      for (let i = 1; i < newSnake.length; i++) {
        if (snakeHead.x === newSnake[i].x && snakeHead.y === newSnake[i].y) {
          setGameStatus(GameStatus.GAME_OVER);
        }
      }
    };

    const handleAppleCollision = (newSnake) => {
      const snakeHead = newSnake[0];

      if (snakeHead.x === apple.x && snakeHead.y === apple.y) {
        setScore(score + 1);

        setApple({
          x:
            Math.floor((Math.random() * canvas.width) / SNAKE_SPEED) *
            SNAKE_SPEED,
          y:
            Math.floor((Math.random() * canvas.height) / SNAKE_SPEED) *
            SNAKE_SPEED,
        });

        newSnake.push({
          x: newSnake[newSnake.length - 1].x,
          y: newSnake[newSnake.length - 1].y,
        });
      }
    };

    const handleKeyPress = (e) => {
      if (gameStatus !== GameStatus.PLAYING) return;
      switch (e.key) {
        case "ArrowRight":
          setDirection("right");
          break;
        case "ArrowLeft":
          setDirection("left");
          break;
        case "ArrowUp":
          setDirection("up");
          break;
        case "ArrowDown":
          setDirection("down");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    const interval = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSnake();
      drawApple();
      if (gameStatus === GameStatus.PLAYING) {
        moveSnake();
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [snake, direction]);

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
      <div className="flex gap-2 ">
        <div className="bg-[#011627] rounded-[8px] bg-opacity-[84%] relative">
          <canvas
            className="gameCanvas"
            ref={canvasRef}
            width={280}
            height={500}
          />
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            {gameStatus === GameStatus.READY && (
              <button
                onClick={startGame}
                className="bg-accent-orange px-4 py-2 rounded-[8px]"
              >
                start-game
              </button>
            )}

            {gameStatus === GameStatus.GAME_OVER && (
              <div>
                <div className="bg-[#011627] bg-opacity-[84%] w-full py-2 text-center">
                  <p className="text-secondary-teal text-[24px]">GAME OVER!</p>
                </div>
                <div className="flex justify-center">
                  <button onClick={startGame} className="text-secondary-muted">
                    start-game
                  </button>
                </div>
              </div>
            )}

            {gameStatus === GameStatus.GAME_WON && (
              <div>
                <div className="bg-[#011627] bg-opacity-[84%] w-full py-2 text-center">
                  <p className="text-secondary-teal text-[24px]">WELL DONE!</p>
                </div>
                <div className="flex justify-center">
                  <button onClick={startGame} className="text-white">
                    play-again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
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
                    <span
                      className={`relative inline-flex rounded-full h-3 w-3 bg-[#43D9AD] ${
                        shouldDisable ? "bg-opacity-30" : "bg-opacity-100"
                      } `}
                    ></span>
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
