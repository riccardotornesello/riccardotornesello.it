import clsx from "clsx";
import { clashDisplay } from "@/assets/fonts";
import avatar from "@/assets/pictures/avatar.png";
import Circle from "@/components/Circle";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={clsx(clashDisplay.className, styles.header)}>
      <h1 className={styles.title}>
        Riccardo
        <br />
        <span className={styles.surname}>Tornesello</span>
      </h1>

      <div>
        <Circle
          radius={120}
          color="green"
          borderGap={20}
          picture={avatar}
          thickness={4}
        />
      </div>
    </header>
  );
}
