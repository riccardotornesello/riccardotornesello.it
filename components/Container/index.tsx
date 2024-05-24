export type ContainerProps = {
  readonly children: React.ReactNode;
  readonly maxWidth?: string;
};

export default function Container({
  children,
  maxWidth = "1200px",
}: ContainerProps) {
  return (
    <div style={{ maxWidth, width: "100%", margin: "auto" }}>{children}</div>
  );
}
