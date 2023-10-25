import './App.css'
import NavBar from './components/NavBar';
import AppContainer from './components/AppContainer';


const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="App">
        <AppContainer />
      </div>
    </>
  );
}

export default App
