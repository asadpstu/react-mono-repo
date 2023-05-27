import './App.css';
import { Header } from './header';
import { Login } from './login';


export function App() {
  return (
    <>
      <Header/>
      <div className="App">
        <Login/>
      </div>
    </>
  );
}

