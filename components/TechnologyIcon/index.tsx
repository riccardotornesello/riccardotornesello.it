import clsx from "clsx";
import styles from "./styles.module.css";
import { FC, SVGProps } from "react";
import Image from "next/image";

export interface TechnologyIconProps {
  readonly icon: FC<SVGProps<SVGElement>>;
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
      <div className={clsx(styles.icon, { [styles.color]: color })}>
        <Image src={icon} alt="Tech" width={60} height={60} />
      </div>
      <div>{children}</div>
    </div>
  );
}
