import styles from "./styles.module.css";

export type SubtitleProps = {
  readonly children: React.ReactNode;
};

export default function Subtitle({ children }: SubtitleProps) {
  return <h2 className={styles.subtitle}>{children}</h2>;
}
