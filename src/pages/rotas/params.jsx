import { useRouter } from "next/router";
import Link from "next/link";

export default function params() {
  // http://localhost:3000/rotas/params?nome=Marcelo&id=1234
  // Se passar parametros como o exemplo acima, podemos pega-lo da seguinte forma
  //Essa é a segunda forma de efetuar a criacao e rota dinamina passando os params

  const router = useRouter();

  const id = router.query.id;
  const nome = router.query.nome;
  return (
    <div>
      <h1>
        Rotas Params: {id} e {nome}
      </h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
