import styles from "./styles.module.css";

export type HighlightProps = {
  readonly children: React.ReactNode;
};

export default function Highlight({ children }: HighlightProps) {
  return <span className={styles.highlight}>{children}</span>;
}
