import clsx from "clsx";
import { clashDisplay } from "@/assets/fonts";
import avatar from "@/assets/pictures/avatar.png";
import Circle from "@/components/Circle";
import styles from "./styles.module.css";

export default function Header() {
  // TODO: if the h1 goes to the next line, the width of the header should be reduced

  return (
    <header className={clsx(clashDisplay.className, styles.header)}>
      <div>
        <h1>Riccardo Tornesello</h1>
        <h2>Software Engineer</h2>
      </div>

      <Circle>{avatar}</Circle>
    </header>
  );
}
