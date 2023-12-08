
import './App.css';
import Header from './Header';
import Movie from './Movie';
import TextField from './TextField';
import movies from './movie.json'
function App() {
  
  return (
    <div className="App">
       <Header/>
      
      <div className='main'>
       
        {
          
          movies.map((e) => {
            return(
            //console.log(e);
            <Movie title={e.Title} year={e.Year}
                img={e.Poster} />
            )
          })
        }
      </div> 
    </div>
  );
  
}

export default App;
