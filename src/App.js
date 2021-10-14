import React from 'react';
import style from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import Routes from './routes';

function App() {
  return (
    <main className={ style.main }>
      {document.querySelectorAll('*').forEach((el) => {
        if (el.offsetWidth > document.documentElement.offsetWidth) {
          console.log('Found the worst element ever: ', el);
        }
      })}
      <Routes />
    </main>
  );
}

export default App;
