import Image from "next/image";
import styles from "./styles.module.css";

export interface TechnologyIconProps {
  readonly icon: string;
  readonly children: string;
}

export default function TechnologyIcon({
  icon,
  children,
}: TechnologyIconProps) {
  return (
    <div className={styles.container}>
      <Image src={icon} alt={children} width={64} height={64} />
      <div>{children}</div>
    </div>
  );
}
