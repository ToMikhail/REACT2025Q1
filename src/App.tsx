import './App.css';
import Button from './components/Button';
import ErrorBoundary from './components/ErrorBoundary';
import Results from './components/Results';
import TopControls from './components/TopControls';

function App() {
  return (
    <div className="container">
      <TopControls />
      <ErrorBoundary>
        <Results />
      </ErrorBoundary>
      <Button type="submit" name="Error" />
    </div>
  );
}

export default App;
