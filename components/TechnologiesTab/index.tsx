import styles from "./styles.module.css";

export interface TechnologiesTabProps {
  readonly color?: string;
  readonly label: string;
  readonly children?: React.ReactNode;
}

export default function TechnologiesTab({
  color = "#f0f0f0",
  label,
  children,
}: TechnologiesTabProps) {
  const style = { "--color": color } as React.CSSProperties;

  return (
    <div className={styles.container} style={style}>
      <div className={styles.sidebar}>
        <span>{label}</span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
