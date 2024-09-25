import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
        <Contact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
