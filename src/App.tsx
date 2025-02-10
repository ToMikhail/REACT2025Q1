import './App.css';
import ButtonError from './components/ButtonError';
import ErrorBoundary from './components/ErrorBoundary';
import Results from './components/Results';
import TopControls from './components/TopControls';
import { SearchProvider } from './context/SearchContext';

function App() {
  return (
    <SearchProvider>
      <TopControls />
      <ErrorBoundary>
        <Results />
        <ButtonError type="button" name="Error" />
      </ErrorBoundary>
    </SearchProvider>
  );
}

export default App;
