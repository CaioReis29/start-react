import { useState } from "react";

const ConditionalRender = () => {

    const [x] = useState(false);

    const [name, setName] = useState('Caio');

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim</p>}
        {!x && <p>Agora x é falso</p>}
        <h1>if Ternário</h1>
        {name === 'Caio' ? (
        <div>
            <p>O nome é realmente Caio</p>
        </div>) 
        : (
        <div>
            <p>O nome Caio não foi encontrado, pois o nome escrito foi {name}</p>
        </div>
        )}

        <button onClick={() => setName('Joãozinho')}>Clique aqui para mudar o nome!</button>
        <button onClick={() => setName('Caio')}>Mude o nome para Caio novamente!</button>
        
    </div>
  )
}

export default ConditionalRender