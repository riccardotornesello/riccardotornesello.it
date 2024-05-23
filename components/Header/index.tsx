import clsx from "clsx";
import { clashDisplay } from "@/assets/fonts";
import avatar from "@/assets/pictures/avatar.png";
import Circle from "@/components/Circle";
import styles from "./styles.module.css";

export default function Header() {
  // TODO: if the h1 goes to the next line, the width of the header should be reduced

  return (
    <header className={clsx(clashDisplay.className, styles.header)}>
      <div className={styles.triangle}>
        <Triangle />
      </div>

      <div className={styles.square}>
        <Square />
      </div>

      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>Riccardo Tornesello</h1>
          <h2 className={styles.subtitle}>Software Engineer</h2>
        </div>

        <Circle>{avatar}</Circle>
      </div>
    </header>
  );
}

function Triangle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      viewBox="0.0 -0.0 352.0 535.5"
      zoomAndPan="magnify"
    >
      <linearGradient
        xmlnsXlink="http://www.w3.org/1999/xlink"
        gradientTransform="matrix(1 0 0 -1 0 535.89)"
        gradientUnits="userSpaceOnUse"
        id="gradient_triangle"
        x1="176"
        x2="176"
        xlinkActuate="onLoad"
        xlinkShow="other"
        xlinkType="simple"
        y1="535.89"
        y2=".39"
      >
        <stop offset="0" stopColor="#a5ffd9" />
        <stop offset="1" stopColor="#ff5e84" />
      </linearGradient>
      <path
        d="M1.7,268L351,2v531.5L1.7,268z"
        fill="none"
        stroke="url(#gradient_triangle)"
        strokeWidth="5"
      />
    </svg>
  );
}

function Square() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 433 433">
      <path
        d="M1 432H432V863H1z"
        stroke="url(#paintsquare_linear)"
        strokeWidth="5"
        transform="rotate(-90 1 432)"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paintsquare_linear"
          x1="216.5"
          x2="216.5"
          y1="433"
          y2="866"
        >
          <stop stopColor="#3E8BFF" />
          <stop offset="1" stopColor="#FF5E84" />
        </linearGradient>
      </defs>
    </svg>
  );
}
