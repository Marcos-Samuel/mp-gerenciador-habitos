"use client";

import { deleteHabit } from "@/app/actions";
import Image from "next/image";

export default function DeleteButton({ habit }: { habit: string }) {
  return (
    <button onClick={() => deleteHabit(habit)} className="transparent circle">
      <Image src="/images/trash.svg" alt="icon-trash" width={12} height={12} />
    </button>
  );
}
