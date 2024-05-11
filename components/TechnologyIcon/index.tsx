import clsx from "clsx";
import styles from "./styles.module.css";

export interface TechnologyIconProps {
  readonly icon: JSX.Element;
  readonly children: string;
  readonly color?: string;
}

export default function TechnologyIcon({
  icon,
  children,
  color,
}: TechnologyIconProps) {
  const style = { "--color": color } as React.CSSProperties;

  return (
    <div className={styles.container} style={style}>
      <div className={clsx(styles.icon, { [styles.color]: color })}>{icon}</div>
      <div>{children}</div>
    </div>
  );
}
