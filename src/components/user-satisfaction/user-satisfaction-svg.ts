const svgWidth = 234;
const min = svgWidth / 2;
const max = svgWidth + 1;
const container = document.getElementById(
  "user-satisfaction-container",
) as HTMLDivElement;
const linePath = document.getElementById(
  "user-satisfaction-line-path",
) as never as SVGGeometryElement;
const circle = document.getElementById(
  "user-satisfaction-circle",
) as never as SVGElement;

const innerCircle = document.getElementById(
  "user-satisfaction-inner-circle",
) as never as SVGGeometryElement;

let x = min;
let animationFrameId: number | null = null;
let isAnimating = false;

// Easing function for smooth animation
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animate(targetX: number, duration: number) {
  if (isAnimating) {
    cancelAnimationFrame(animationFrameId!);
  }

  isAnimating = true;
  const startX = x;
  const startTime = performance.now();

  function step() {
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    x = startX + (targetX - startX) * easedProgress;
    const { x: newX, y: newY } = linePath.getPointAtLength(x);
    // We can't just use `7` despite the circle being 14x14 because the circle is not scaled 1:1
    const circleHeight = innerCircle.getBoundingClientRect().height;
    circle.setAttribute("x", `${newX - 83 - circleHeight / 2}`);
    circle.setAttribute("y", `${newY - 83 - circleHeight / 2}`);

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(step);
    } else {
      isAnimating = false;
    }
  }

  animationFrameId = requestAnimationFrame(step);
}

container.addEventListener("mouseover", () => {
  animate(max, 300);
});

container.addEventListener("mouseout", () => {
  animate(min, 300);
});
