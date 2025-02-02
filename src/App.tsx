import './App.css';
import Button from './components/Button';
import Results from './components/Results';
import TopControls from './components/TopControls';

function App() {
  return (
    <div className="container">
      <TopControls />
      <main className="main">
        <Results />
        <Button type="submit" name="Error" />
      </main>
    </div>
  );
}

export default App;
