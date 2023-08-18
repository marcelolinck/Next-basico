import { useState } from "react";

export default function form() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [usuarios, setUsuarios] = useState([])

  const estilo = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };


 async function salvarUsuario(){
    
    //Primeiro envia os dados via POST para que seja salvo no banco ou onde for
    await fetch('/api/form',{
        method: 'POST',
        body: JSON.stringify({nome, idade})
    })

    //Aqui limpa os dados dos campos.
    setNome("")
    setIdade(0)

    //Agora aqui, ele faz uma nova requisicao para buscar os dados atualizados para depois sim renderizar na tela
    const resp  = await fetch('/api/form')
    const usuarios = await resp.json()
    setUsuarios(usuarios)
  }

  function renderizarUsuarios(){
    return usuarios.map((usuario, i) => {
        return <li key={i}>{usuario.nome} tem {usuario.idade} anos.</li>
    })
  }

  return (
    <div style={estilo}>
      <h1>Integrando com API #02</h1>
      <label htmlFor="">Nome:</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <label htmlFor="">Idade:</label>
      <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
      <button onClick={salvarUsuario}>Enviar</button>

      <ul>
        {renderizarUsuarios()}
      </ul>
    </div>
  );
}
