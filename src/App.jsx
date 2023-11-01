import './App.css'
import Movies from './assets/movies.json'
import Section from './components/Section'

function App() {
  return (
    <div className="site">
      <img className='logo' src="https://lereacteur-react-netflix.netlify.app/static/media/logo.696c2101.png" alt="logo" />
    {Movies.map((elem)=>{
      console.log(elem);
      // console.log(elem.images);
      return(
        <Section key={elem.id} category={elem.category} image={elem.images}/>
      )
    })}
    </div>
  )
}

export default App
