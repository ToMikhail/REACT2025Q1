import './App.css';
import Button from './components/Button';
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
      </ErrorBoundary>
      <Button type="submit" name="Error" />
    </SearchProvider>
  );
}

export default App;
