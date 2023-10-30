import ArrowIcon from "@/components/ArrowIcon";
import Calender from "@/components/Calender";
import { kv } from "@vercel/kv";
import Link from "next/link";

interface Params {
  params: { habit: string };
}

export default async function Habit({ params: { habit } }: Params) {
  const decodedHabit = decodeURI(habit);

  const habitStreak: Record<string, boolean> | null = await kv.hget(
    "habits",
    decodedHabit
  );

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-2xl font-light text-center text-white font-display">
        {decodedHabit}
      </h1>

      <Link
        href="/"
        className="flex items-center font-sans text-xs text-neutral-300 gap-2"
      >
        <ArrowIcon width={12} height={12} />
        voltar
      </Link>

      <Calender habit={decodedHabit} habitStreak={habitStreak} />
    </main>
  );
}
