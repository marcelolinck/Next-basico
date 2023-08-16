import Link from "next/link";
import router, { useRouter } from "next/router";

export default function rotas() {
  //Aqui o metodo está recebendo um parametro
  function navegacaoSimples(url) {
    router.push(url);
  }
  function navegacaoComParams(){
    router.push({
        pathname: "/rotas/params",
        query:{
            id: 123,
            nome: 'Ana',
        }
    })
  }

  return (
    <div>
      <h2>Rotas</h2>
      <ul>
        <Link href="/rotas/params?id=12&nome=Ana">
          <li>Params</li>
        </Link>
        <Link href="/rotas/123/buscar">
          <li>Buscar</li>
        </Link>
        <Link href="/rotas/123/Daniel">
          <li>Daniel</li>
        </Link>
      </ul>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <button type="button" onClick={() => router.push("/rotas/123/buscar")}>
          Buscar
        </button>

        {/* Botao fazendo a navegacao via metodo */}
        <button
          type="button"
          onClick={() => navegacaoSimples("/rotas/123/Daniel")}
        >
          Daniel
        </button>

        <button
          type="button"
          onClick={() => navegacaoComParams()}
        >
          Com Params
        </button>
      </div>
    </div>
  );
}
