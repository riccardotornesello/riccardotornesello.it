import NextLink from "next/link";
import styles from "./styles.module.css";

export type LinkProps = {
  readonly href: string;
  readonly children: React.ReactNode;
};

export default function Link({ href, children }: LinkProps) {
  return (
    <NextLink className={styles.link} href={href} target="_blank">
      {children}
    </NextLink>
  );
}
