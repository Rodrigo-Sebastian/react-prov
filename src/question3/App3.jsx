// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.
import React from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = React.useState(initialValue);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return { count, increment, decrement };
}

function App3() {
  const {count, increment, decrement} = useCounter();

  return (
  <div>
    <h1>Räkningen</h1>
    <p>Såhär ser räkningen ut: {count}</p>
    <button onClick={increment}>höj räkningen</button>
    <button onClick={decrement}>sänk räkningen</button>
  </div>);
}

export default App3;
