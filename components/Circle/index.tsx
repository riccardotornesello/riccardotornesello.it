import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";

export type CircleProps = {
  readonly children: StaticImageData;
};

export default function Circle({ children }: CircleProps) {
  return (
    <div className={styles.circle}>
      <Image className={styles.image} src={children} alt="avatar" />
      <div className={styles.border} />
    </div>
  );
}
