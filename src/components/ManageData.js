import { useState } from 'react';

const ManageData = () => {

    let someData = 10;

    const [number, setNumber] = useState(15);

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={()=> (someData = 15)}>Mudar variável</button> 
        </div>
            <p>valor: {number}</p>
            <button onClick={()=>setNumber(20)}>Mudar o state</button>
        <div>

        </div>
    </div>
  );

};

export default ManageData