import { kv } from "@vercel/kv";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function NewHabitPage() {
  async function NewHabit(FormData: FormData) {
    "use server";

    const habit = FormData.get("habit");
    await kv.hset("habits", { [habit as string]: {} });

    revalidatePath("/");
    redirect("/");
  }
  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-4xl font-light text-certer text-white font-display">
        Novo hábito
      </h1>

      <form action={NewHabit} className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          name="habit"
          className="p-2 font-sans text-xl text-white  rounded-md bg-neutral-800"
        />
        <button
          type="submit"
          className=" text-neutral-900 bg-[#45EDAD] font-display font-regular 
           text-2xl p-2 rounded-r-md "
        >
          Cadastrar
        </button>

        <Link
          href="/"
          className=" text-center bottom-10 w-4/4 
         text-neutral-800 bg-[#F85858] font-display font-regular 
          text-2xl p-2 rounded-md "
        >
          Cencelar
        </Link>
      </form>
    </main>
  );
}
