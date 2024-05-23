import styles from "./styles.module.css";

export type LinkProps = {
  readonly href: string;
  readonly children: React.ReactNode;
};

export default function Link({ href, children }: LinkProps) {
  // TODO: use next link

  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
}
