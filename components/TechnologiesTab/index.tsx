import styles from "./styles.module.css";

export interface TechnologiesTabProps {
  readonly color?: string;
  readonly labelTextColor?: string;
  readonly label: string;
  readonly children?: React.ReactNode;
}

export default function TechnologiesTab({
  color = "#f0f0f0",
  labelTextColor = "#000",
  label,
  children,
}: TechnologiesTabProps) {
  const style = {
    "--color": color,
    "--label-text-color": labelTextColor,
  } as React.CSSProperties;

  return (
    <div className={styles.container} style={style}>
      <div className={styles.label}>
        <span>{label}</span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
