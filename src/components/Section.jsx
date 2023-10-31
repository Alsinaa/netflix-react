const Section = ({category, image})=>{
    console.log(category, image);
return (
    <div className="section"> 
    <p className="name">{category}</p> 
    
    <div className="imgMovies">
    {image.map((img)=> {
      return(
      <img key={img} src='./assets/movies.json' alt="images" />
      )})}
      </div>
    </div>
)
}
export default Section