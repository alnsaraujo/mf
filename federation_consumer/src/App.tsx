import './App.css';
import ProviderButton from 'federation_provider/button';
import { useStore } from 'federation_provider/store';

const App = () => {

  const movies = useStore(state => state.movies);
  const addMovie = useStore(state => state.addMovie);

  const handleClick = () => {
    addMovie({ title: 'Inception', image: 'https://www.google.com' });
  }

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>
        <ProviderButton onClick={handleClick} />
      </div>
      <ul>{movies.map(movie => <li>{movie.title}</li>)}</ul>
    </div>
  );
};


export default App;
