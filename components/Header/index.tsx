import clsx from "clsx";
import { clashDisplay } from "@/assets/fonts";
import avatar from "@/assets/pictures/avatar.png";
import Circle from "@/components/Circle";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={clsx(clashDisplay.className, styles.header)}>
      <h1>
        Riccardo
        <br />
        <span className={styles.surname}>Tornesello</span>
      </h1>

      <Circle>{avatar}</Circle>
    </header>
  );
}
