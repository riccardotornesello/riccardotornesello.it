import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";

export type CircleProps = {
  readonly children: StaticImageData;
};

export default function Circle({ children }: CircleProps) {
  return (
    <div className={styles.container}>
      <Image
        style={{ width: "250px", height: "250px", objectFit: "cover" }}
        src={children}
        alt="avatar"
      />
      <div className={styles.border}>
        <GradientBorder />
      </div>
    </div>
  );
}

function GradientBorder() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 670 670">
      <circle
        cx="335"
        cy="335"
        r="330"
        stroke="url(#paint0_linear)"
        strokeWidth="10"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear"
          x1="335"
          x2="335"
          y1="0"
          y2="670"
        >
          <stop stopColor="#A5FFD9" />
          <stop offset="1" stopColor="#FF5E84" />
        </linearGradient>
      </defs>
    </svg>
  );
}
