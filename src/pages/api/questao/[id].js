export default function questao(req, res){

    if(req.method ==="GET"){
        //Dessa forma estamos pegando o metodo get e simplificando aqui dentro da validacao se é get
       get(req, res)
    }else{
        res.status(405).send()
    }
    
}


//Aqui está a funcao que está sendo passada acima
function get(req, res){
    const id = req.query.id

    res.status(200).json({
        id,
        enunciado:'Qual é a sua cor preferida?',
        respostas:[
            'Branca', 'Vermelha', 'Amarela', 'Verde'
        ]
    })
}