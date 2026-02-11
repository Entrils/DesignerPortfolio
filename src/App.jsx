import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import AppRouter from './components/AppRouter';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <AppRouter/>
        <Contact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
