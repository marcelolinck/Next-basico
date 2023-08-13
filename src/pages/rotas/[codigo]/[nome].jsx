//O useRouter, serve para auxiliar na construcao de rotas dinamicas no next
import { useRouter } from "next/router";

export default function buscar(){
    const router  = useRouter()
    //Nesse caso colocanos o nome do arquivo dentro de colchetes para indicar que o arquivo é dinamico permitindo capturar o codigo passado via URL
    const codigo = router.query.codigo
    const nome = router.query.nome

    return(
        <div>
            <h1>Rotas/{codigo}/{nome}</h1>
        </div>
    )
}