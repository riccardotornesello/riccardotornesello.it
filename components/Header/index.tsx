import clsx from "clsx";
import { clashDisplay } from "@/assets/fonts";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={clsx(clashDisplay.className, styles.header)}>
      <h1>
        Riccardo
        <br />
        Tornesello
      </h1>
    </header>
  );
}
