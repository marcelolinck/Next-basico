export default(req, res) =>{
    if (req.method === "GET") {
        res.status(200).json({nome: "Pedro",
        metodo: req.method})
    } else {
        res.status(200).json({nome: "João",
        metodo: req.method})
    }
}