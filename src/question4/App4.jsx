// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.
import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeComponent = () => {
  return(
    <ThemeContext.Consumer>
      {({ theme}) => (
        <div style={{ background: theme === 'light' ? '#ffffff' : '#333333', color: theme === 'light' ? '#000000' : '#ffffff', padding: '10px'}}>
            Tema: {theme}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

const ThemeSwitcher = () => {
  return(
    <ThemeContext.Consumer>
      {({ toggleTheme }) => (
        <button onClick={toggleTheme}>Byt tema</button>
      )}
    </ThemeContext.Consumer>
  );
};

function App4() {
  return (
  <ThemeProvider>
  <div>
    <h1>Temahantering med API</h1>
    <ThemeComponent/>
    <ThemeSwitcher/>
  </div>
  </ThemeProvider>
  );
}

export default App4;
