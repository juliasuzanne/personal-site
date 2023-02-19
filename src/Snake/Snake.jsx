import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import { CANVAS_SIZE, SNAKE_START, APPLE_START, SCALE, SPEED, DIRECTIONS } from "./constants";
import axios from "axios";

// FOUNDATION CODE FROM THIS VIDEO: https://www.youtube.com/watch?v=OrpJdVP-hO4

// YOUTUBE VIDEO GITHUB LINK: https://github.com/weibenfalk/react-snake-starter-files

export function Snake() {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [points, setPoints] = useState(0);
  const [errors, setErrors] = useState([]);

  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
    setPoints(0);
  };

  const moveSnake = ({ keyCode }) => keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const createApple = () => apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (piece[0] * SCALE >= CANVAS_SIZE[0] || piece[0] < 0 || piece[1] * SCALE >= CANVAS_SIZE[1] || piece[1] < 0) {
      return true;
    }

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) {
        return true;
      }
    }
    return false;
  };

  const checkAppleCollision = (newSnake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      setPoints(points + 5);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) {
      endGame();
    } else if (!checkAppleCollision(snakeCopy)) {
      snakeCopy.pop();
    }
    setSnake(snakeCopy);
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
    setPoints(0);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "black";
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "lightgreen";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "red";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  return (
    <div className="snake">
      <div role="button" tabIndex="0" onKeyDown={(e) => moveSnake(e)}>
        <canvas
          onClick={startGame}
          style={{ border: "1px solid green" }}
          ref={canvasRef}
          width={`${CANVAS_SIZE[0]}px`}
          height={`${CANVAS_SIZE[1]}px`}
        />
        <div>
          <nav className="navbar">
            <div id="navbarSnake">
              <ul className="navbar-nav">
                <li className="nav-item" onClick={startGame}>
                  <p className="nav-link"> Click to start </p>
                </li>
                <li className="nav-item">
                  <p className="nav-link"> POINTS: {points} </p>
                </li>
                <li className="nav-item" onClick={startGame}>
                  {gameOver && (
                    <p id="red" className="nav-link">
                      {" "}
                      GAME OVER!{" "}
                    </p>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
