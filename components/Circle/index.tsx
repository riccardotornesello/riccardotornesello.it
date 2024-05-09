import Image, { StaticImageData } from "next/image";
import CircleBorder from "../CircleBorder";

export type CircleProps = {
  readonly radius: number;
  readonly color: string;
  readonly picture: StaticImageData;
  readonly borderGap?: number;
  readonly thickness?: number;
};

export default function Circle({
  radius,
  color,
  picture,
  borderGap = 5,
  thickness,
}: CircleProps) {
  return (
    <div
      style={{
        width: (radius + borderGap) * 2,
        height: (radius + borderGap) * 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          borderRadius: "50%",
          objectFit: "cover",
        }}
        width={radius * 2}
        height={radius * 2}
        src={picture}
        alt="avatar"
      />
      <div style={{ position: "absolute" }}>
        <CircleBorder
          radius={radius + borderGap}
          color={color}
          thickness={thickness}
        />
      </div>
    </div>
  );
}
