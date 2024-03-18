// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.
import React, {useState} from "react";

function App() {
  const [hobbies, setHobbies] = useState([]);
  const [newHobby, setNewHobby] = useState([]);

  const addHobby = () => {
    if(newHobby.trim() !== '') {
      setHobbies([...hobbies, newHobby]);
      setNewHobby('');
    }
  };

  const deletHobby = (index) => {
    const newHobbies = [...hobbies];
    newHobbies.splice(index, 1);
    setHobbies(newHobbies);
  };

  return (
  <div>
    <h1>Mina Hobbies</h1>
    <ul>
      {hobbies.map((hobby, index) => (
        <li key={index}>
          {hobby}
          <button onClick={() => deletHobby(index)}>Radera</button>
        </li>
      ))}
    </ul>
    <input type="text" value={newHobby} onChange={(e) => setNewHobby(e.target.value)} />
    <button onClick={addHobby}>Lägg till new Hobby</button>
  </div>);
}

export default App;
