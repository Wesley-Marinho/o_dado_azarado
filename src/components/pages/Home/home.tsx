import "./style.scss";
export function Home() {
  return (
    <>
        <main className="contentContainer">
          <section className="hero">
            <span>👏 Hey, Bem vindo!</span>
            <h1>Essa site foi criado para ajudar mestres e jogadores de RPG medieval.</h1>
            <p>
              Aqui você consegue criar & editar fichas de personganes, encontrar
              monstros, itens, magias e fazer rolagens de dados.
            </p>
          </section>
          <img src="images/dragon.png" alt="Map dragon" />
        </main>
    </>
  );
}
