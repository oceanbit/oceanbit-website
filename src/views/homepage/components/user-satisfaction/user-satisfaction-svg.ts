const userSatisSvgWidth = 234;
const userSatisMin = userSatisSvgWidth / 2;
const userSatisMax = userSatisSvgWidth + 1;
const userSatisContainer = document.getElementById(
  "user-satisfaction-container",
) as HTMLDivElement;
const userSatisLinePath = document.getElementById(
  "user-satisfaction-line-path",
) as never as SVGGeometryElement;
const userSatisCircle = document.getElementById(
  "user-satisfaction-circle",
) as never as SVGElement;

const userSatisInnerCircle = document.getElementById(
  "user-satisfaction-inner-circle",
) as never as SVGGeometryElement;

let userSatisX = userSatisMin;
let userSatisAnimationFrameId: number | null = null;
let userSatisIsAnimating = false;

// Easing function for smooth animation
function userSatisEaseInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function userSatisAnimate(targetX: number, duration: number) {
  if (userSatisIsAnimating) {
    cancelAnimationFrame(userSatisAnimationFrameId!);
  }

  userSatisIsAnimating = true;
  const startX = userSatisX;
  // The SVG scales with the card; its circle size stays fixed during this animation.
  const circleHeight = userSatisInnerCircle.getBoundingClientRect().height;
  const startTime = performance.now();

  function step() {
    const currentTime = performance.now();
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easedProgress = userSatisEaseInOutCubic(progress);

    userSatisX = startX + (targetX - startX) * easedProgress;
    const { x: newX, y: newY } = userSatisLinePath.getPointAtLength(userSatisX);
    userSatisCircle.setAttribute("x", `${newX - 83 - circleHeight / 2}`);
    userSatisCircle.setAttribute("y", `${newY - 83 - circleHeight / 2}`);

    if (progress < 1) {
      userSatisAnimationFrameId = requestAnimationFrame(step);
    } else {
      userSatisIsAnimating = false;
    }
  }

  userSatisAnimationFrameId = requestAnimationFrame(step);
}

userSatisContainer.addEventListener("mouseenter", () => {
  userSatisAnimate(userSatisMax, 300);
});

userSatisContainer.addEventListener("mouseleave", () => {
  userSatisAnimate(userSatisMin, 300);
});
