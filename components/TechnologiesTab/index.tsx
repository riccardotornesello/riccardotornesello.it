import React from "react";
import styles from "./styles.module.css";

export interface TechnologiesTabProps {
  readonly color?: string;
  readonly labelTextColor?: string;
  readonly label: string;
  readonly children?: React.ReactNode;
  readonly maxRowSize?: number;
}

export default function TechnologiesTab({
  color = "#f0f0f0",
  labelTextColor = "#000",
  label,
  children,
  maxRowSize = 5,
}: TechnologiesTabProps) {
  const style = {
    "--color": color,
    "--label-text-color": labelTextColor,
  } as React.CSSProperties;

  const rows = React.Children.toArray(children).reduce(
    (rows: React.ReactNode[][], child, i) => {
      if (i % maxRowSize === 0) {
        rows.push([]);
      }

      rows[rows.length - 1].push(child);

      return rows;
    },
    []
  );

  return (
    <div className={styles.container} style={style}>
      <div className={styles.label}>
        <span>{label}</span>
      </div>
      <div className={styles.content}>
        {rows.map((row, i) => (
          <div key={i} className={styles.row}>
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}
