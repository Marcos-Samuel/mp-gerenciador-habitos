import Image from "next/image";
import React from "react";

export default function DayState({ day }: { day: boolean | undefined }) {
  let image: [string, string, number?] = [
    "/images/ellipse.svg",
    "gray mark",
    12,
  ];
  day
    ? (image = ["/images/check.svg", "green check mark", 24])
    : day === undefined
    ? image
    : (image = ["/images/x.svg", "red x mark", 24]);

  const [src, alt, size] = image;

  return (
    <div className="">
      <Image src={src} alt={alt} width={size} height={size} />
    </div>
  );
}
