//O useRouter, serve para auxiliar na construcao de rotas dinamicas no next
import { useRouter } from "next/router";

export default function buscar(){
    const router  = useRouter()
    //Nesse caso colocanos o nome da pasta código dentro de colchetes para indicar que a pasta é dinamica permitindo capturar o codigo passado via URL
    const codigo = router.query.codigo

    return(
        <div>
            <h1>Rotas/{codigo}/Buscar!!!</h1>
        </div>
    )
}