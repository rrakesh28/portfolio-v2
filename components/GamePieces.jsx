import React, { useState, useEffect, useRef } from "react";

const GamePieces = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [collisionType, setCollisionType] = useState(null);

  const handleGameOver = (type) => {
    setGameOver(true);

    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score.toString());
    }

    setCollisionType(type);
  };

  const handleResetGame = () => {
    setScore(0);
    setGameOver(false);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver && e.key === "Enter") {
        handleResetGame();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
  }, [gameOver]);

  const canvasRef = useRef();
  const SNAKE_SPEED = 10;
  const [apple, setApple] = useState({ x: 180, y: 100 });
  const [snake, setSnake] = useState([
    { x: 100, y: 50 },
    { x: 95, y: 50 },
  ]);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawSnake = () => {
      snake.forEach((snakePart) => {
        ctx.beginPath();
        ctx.rect(snakePart.x, snakePart.y, 14, 14);
        ctx.fillStyle = "#90EE90";
        ctx.fill();
        ctx.closePath();
      });
    };

    const drawApple = () => {
      ctx.beginPath();
      ctx.rect(apple.x, apple.y, 10, 10);
      ctx.fillStyle = "#FF0000";
      ctx.fill();
      ctx.closePath();
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
        onGameOver("wall");
      }
      if (
        snakeHead.y + SNAKE_SPEED > canvas.height ||
        snakeHead.y + SNAKE_SPEED < 0
      ) {
        onGameOver("wall");
      }
    };

    const handleBodyCollision = (newSnake) => {
      const snakeHead = newSnake[0];
      for (let i = 1; i < newSnake.length; i++) {
        if (snakeHead.x === newSnake[i].x && snakeHead.y === newSnake[i].y) {
          onGameOver("self");
        }
      }
    };

    const handleAppleCollision = (newSnake) => {
      const snakeHead = newSnake[0];

      if (snakeHead.x === apple.x && snakeHead.y === apple.y) {
        setScore((prevScore) => prevScore + 1);

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
      if (!gameOver) {
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
      <div>
        <div className="bg-[#011627] rounded-[8px] bg-opacity-[84%]">
          <canvas
            className="gameCanvas"
            ref={canvasRef}
            width={280}
            height={500}
          />
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

export default GamePieces;
