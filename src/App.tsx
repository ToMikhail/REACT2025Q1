import './App.css';
import Button from './components/Button';
import ErrorBoundary from './components/ErrorBoundary';
import Results from './components/Results';
import TopControls from './components/TopControls';
import { SearchProvider } from './context/SearchContext';

function App() {
  /**
   * clickHandler
   */

  // const clickHandler = (): void => {
  //   throw new Error('Something went wrong!');
  // };

  return (
    <SearchProvider>
      <TopControls />
      <ErrorBoundary>
        <Results />
        <Button type="button" name="Error" />
      </ErrorBoundary>
    </SearchProvider>
  );
}

export default App;
