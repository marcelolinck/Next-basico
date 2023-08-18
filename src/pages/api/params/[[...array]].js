export default function params(req, res){
    res.status(200).json({
        params: req.query
    })
}


//Colocando os ... tres pontos na frente do nome do arquivo, ele passará a receber todos os parametros passados no array
//Exemplo:
// http://localhost:3000/api/params/2/c/w/e

// O nome da pasta somente envolvido com um par de colchetes, será tratado como se pedisse os parametros obrigatórios.O
//[...array].js
// Agora se passar dois pares de colchetes, a url funcionará mesmo sem passar parametro nenhum.Agora
//[[...array]].js
//Ira aparecer dessa forma, na mesma ordem que foi passado
// {
//     "params": {
//     "array": [
//     "2",
//     "c",
//     "w",
//     "e"
//     ]
//     }
// }