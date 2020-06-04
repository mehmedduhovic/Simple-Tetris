import { blocks, nextBlocks, width, colors, scores, speeds } from "./blocks.js";

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let squares = Array.from(document.querySelectorAll(".grid div"));
  const ScoreDisplay = document.querySelector("#score");
  const StartBtn = document.querySelector("#start");
  let displayNextShape = document.querySelectorAll(".mini-grid div");
  let timerId;
  let score = 0;
  let blockVariationCount = 4;
  let randomBlock;
  let randomRotation;
  let newBlock;
  let newRotation;
  let currentIndex = 4;

  let currElement;
  let displayIndex = 0;
  let shouldInitiallyRunDisplayShapes = true;
  let intervalSpeed = 800;
  let scoresCount = 0;

  randomBlock = Math.floor(Math.random() * blocks.length);
  randomRotation = Math.floor(Math.random() * blockVariationCount);
  currElement = blocks[randomBlock][randomRotation];

  function draw() {
    currElement.forEach((index) => {
      squares[index + currentIndex].classList.add("block", colors[randomBlock]);
    });
  }

  function undraw() {
    currElement.forEach((index) => {
      squares[index + currentIndex].classList.remove(
        "block",
        colors[randomBlock]
      );
    });
  }

  document.addEventListener("keyup", function (event) {
    if (event.key === "ArrowLeft") {
      moveLeft();
      randomBlock;
    } else if (event.key === "ArrowRight") {
      moveRight();
    } else if (event.key === "ArrowUp") {
      rotate();
    } else if (event.key === "ArrowDown") {
      moveDown();
    }
  });

  function moveDown() {
    undraw();
    currentIndex += width;
    draw();
    freeze();
    updateIntervalSpeed();
  }

  function freeze() {
    if (
      currElement.some((index) =>
        squares[currentIndex + index + width].classList.contains("taken")
      )
    ) {
      currElement.forEach((index) =>
        squares[index + currentIndex].classList.add("taken", "played")
      );
      randomBlock = newBlock;
      randomRotation = newRotation;
      currElement = blocks[randomBlock][randomRotation];
      currentIndex = 4;
      draw();
      displayShape();
      addScore();
      gameOver();
    }
  }

  function moveLeft() {
    undraw();
    const isLeftEdge = currElement.some(
      (index) => (currentIndex + index) % width === 0
    );
    if (!isLeftEdge) currentIndex -= 1;

    if (
      currElement.some((index) =>
        squares[currentIndex + index].classList.contains("taken")
      )
    ) {
      currentIndex += 1;
    }
    draw();
  }

  function moveRight() {
    undraw();
    const isRightEdge = currElement.some(
      (index) => (currentIndex + index) % width === width - 1
    );
    if (!isRightEdge) currentIndex += 1;

    if (
      currElement.some((index) =>
        squares[currentIndex + index].classList.contains("taken")
      )
    ) {
      currentIndex -= 1;
    }
    draw();
  }

  function rotate() {
    undraw();

    //fix for when the block rotates into other edge
    if (randomBlock === 0) {
      if (
        (randomRotation !== 1 && currentIndex % width === width - 1) ||
        (randomRotation !== 3 && currentIndex % width === width - 2)
      ) {
        randomRotation = randomRotation;
      } else {
        randomRotation = randomRotation + 1;
      }
    }

    if (randomBlock === 1) {
      if (
        (randomRotation === 0 || randomRotation === 2) &&
        currentIndex % width === width - 2
      ) {
        randomRotation = randomRotation;
      } else {
        randomRotation = randomRotation + 1;
      }
    }

    if (randomBlock === 2) {
      if (
        (randomRotation === 3 && currentIndex % width === width - 2) ||
        (randomRotation === 1 && currentIndex % width === width - 1)
      ) {
        randomRotation = randomRotation;
      } else {
        randomRotation = randomRotation + 1;
      }
    }

    if (randomBlock === 4) {
      if (
        ((randomRotation === 0 || randomRotation === 2) &&
          currentIndex % width === width - 1) ||
        ((randomRotation === 0 || randomRotation === 2) &&
          currentIndex % width === width - 2)
      ) {
        randomRotation = randomRotation;
      } else if (
        (randomRotation === 0 || randomRotation === 2) &&
        currentIndex % width === width - 3
      ) {
        randomRotation = randomRotation + 1;
        currentIndex -= 1;
      } else {
        randomRotation = randomRotation + 1;
      }
    }

    if (randomRotation == blockVariationCount) {
      randomRotation = 0;
    }

    currElement = blocks[randomBlock][randomRotation];
    draw();
  }

  function displayShape() {
    displayNextShape.forEach((square) => {
      square.classList.remove("block", colors[newBlock]);
    });

    newBlock = Math.floor(Math.random() * blocks.length);
    newRotation = Math.floor(Math.random() * blockVariationCount);

    nextBlocks[newBlock][newRotation].forEach((index) => {
      displayNextShape[displayIndex + index].classList.add(
        "block",
        colors[newBlock]
      );
    });
  }

  function addScore() {
    for (let i = 0; i < 199; i += width) {
      const row = [
        i,
        i + 1,
        i + 2,
        i + 3,
        i + 4,
        i + 5,
        i + 6,
        i + 7,
        i + 8,
        i + 9,
      ];

      if (row.every((index) => squares[index].classList.contains("taken"))) {
        score += 10;
        ScoreDisplay.innerHTML = score;

        row.forEach((index) => {
          squares[index].classList.remove("taken");
          squares[index].removeAttribute("class");
        });

        const squaresRemoved = squares.splice(i, width);
        squares = squaresRemoved.concat(squares);
        squares.forEach((cell) => {
          return grid.appendChild(cell);
        });
      }
    }
  }

  function gameOver() {
    if (
      currElement.some((index) =>
        squares[index + currentIndex].classList.contains("taken")
      )
    ) {
      ScoreDisplay.innerHTML = "GAME OVER. YOUR SCORE WAS " + score;
      clearInterval(timerId);
    }
  }

  function updateIntervalSpeed() {
    if (score > scores[scoresCount]) {
      clearInterval(timerId);
      timerId = null;
      intervalSpeed = speeds[scoresCount];
      timerId = setInterval(moveDown, intervalSpeed);
      if (scoresCount < scores.length) {
        scoresCount++;
      }
    }
  }

  StartBtn.addEventListener("click", () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    } else {
      timerId = setInterval(moveDown, intervalSpeed);
      if (shouldInitiallyRunDisplayShapes) {
        displayShape();
      }
      shouldInitiallyRunDisplayShapes = false;
    }
  });
});
