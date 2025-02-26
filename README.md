### Hi there, I'm Muhammad Raffi Fabiansyah! 👋

#### 🚀 About Me
- 🔭 I’m a Backend & Software Developer
- 💻 Skilled in JavaScript, TypeScript, PHP
- 🌟 Experienced with React.js, Flutter, Next.js, Fastify
- 🔗 Connect with me on [LinkedIn](#) or [Twitter](#)

#### 🎮 Play a Simple Game!
Click below to play a simple **Pong Game** directly in your browser!

<details>
  <summary>🎮 Click to Play!</summary>
  
  ```html
  <canvas id="gameCanvas" width="400" height="300" style="border:1px solid #000;"></canvas>
  <script>
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    let ball = { x: 200, y: 150, dx: 2, dy: 2, radius: 10 };
    let paddle = { x: 180, y: 280, width: 60, height: 10 };
    let rightPressed = false, leftPressed = false;

    document.addEventListener("keydown", (e) => {
      if (e.key === "Right" || e.key === "ArrowRight") rightPressed = true;
      else if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = true;
    });
    document.addEventListener("keyup", (e) => {
      if (e.key === "Right" || e.key === "ArrowRight") rightPressed = false;
      else if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = false;
    });

    function drawBall() {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.closePath();
    }

    function drawPaddle() {
      ctx.fillStyle = "blue";
      ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      drawPaddle();

      if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) ball.dx = -ball.dx;
      if (ball.y + ball.dy < ball.radius) ball.dy = -ball.dy;
      if (ball.y + ball.dy > paddle.y - ball.radius && ball.x > paddle.x && ball.x < paddle.x + paddle.width) ball.dy = -ball.dy;

      if (ball.y + ball.dy > canvas.height) {
        alert("Game Over!");
        document.location.reload();
      }

      if (rightPressed && paddle.x < canvas.width - paddle.width) paddle.x += 5;
      if (leftPressed && paddle.x > 0) paddle.x -= 5;

      ball.x += ball.dx;
      ball.y += ball.dy;
      requestAnimationFrame(update);
    }
    update();
  </script>
  ```
</details>

---
🚀 Happy Coding! 😃
