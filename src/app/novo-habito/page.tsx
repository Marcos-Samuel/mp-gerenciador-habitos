export default function NewHabit() {
  async function NewHabit(FormData: FormData) {
    "use server";

    const habit = FormData.get("habit");

    console.log(habit);
  }
  return (
    <main className="row center-align">
      <div className="">
        <h3 className="small center-align white-text">Novo hábito</h3>

        <form action={NewHabit}>
          <div className="field label border small ">
            <input type="text" className="white-text" name="habit" id="habit" />
            <label className="grey-text">Novo habito</label>
          </div>
          <button type="submit" className="green responsive bottom-margin">
            <span className="black-text">Cadastrar</span>
          </button>
          <button className="grey9  responsive">
            <span className="red-text">Cancelar</span>
          </button>
        </form>
      </div>
    </main>
  );
}
