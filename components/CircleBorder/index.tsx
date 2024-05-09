import styles from "./styles.module.css";

export type CircleBorderProps = {
  readonly radius: number;
  readonly color: string;
  readonly thickness?: number;
};

export default function CircleBorder({
  radius,
  color,
  thickness = 3,
}: CircleBorderProps) {
  return (
    <div
      style={{
        width: radius * 2,
        height: radius * 2,
        borderRadius: "50%",
        border: `${thickness}px dashed ${color}`,
        animation: `${styles.spin} 60s linear infinite`,
      }}
    ></div>
  );
}
