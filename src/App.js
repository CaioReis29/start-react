// Styles
import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const cars = [
    {id: 1, brand: 'Ferrari' ,km: 400000, color: 'Yellow', newCar: true},
    {id: 2, brand: 'Toyota' ,km: 280000, color: 'Blue', newCar: false},
    {id: 3, brand: 'Mercedes' ,km: 360000, color: 'Green', newCar: true},
  ]

  function showMessage() {
    console.log('Evento do componente é pai');
  }

  const [message, setmessage] = useState("");

  const handleMessage = (msg) => {
    setmessage(msg)
  }

  return (
    <div className="App">
      <h1>Fundamentos react</h1>
      {/* Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem"></img>
      </div>
      {/* Imagem em asset*/}
      <div>
        <img src={City} alt="Cidade"></img>
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name="Caio"/>
      {/* destructuring */}
      <CarDetails brand="Fiat" km={100000} color="White" newCar={true}/>
      {/* reaproveitando */}
      <CarDetails brand="Fiat" km={90000} color="Black" newCar={false}/>
      <CarDetails brand="Honda" km={300000} color="Blue" newCar={true}/>
      <CarDetails brand="WV" km={600000} color="Red" newCar={false}/>
      {/* loop em array de objetos */}
      <h1>Loop em array de objetos</h1>
      {cars.map((car) => (
        <CarDetails
        key={car.id} 
        brand={car.brand} 
        km={car.km} 
        color={car.color} 
        newCar={car.newCar}
        />
      ))}
      {/* fragment */}
      <Fragment propFragment="Teste"/>
      {/* children */}
      <Container>
        <p>Isto é o conteúdo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
