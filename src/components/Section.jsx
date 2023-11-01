const Section = ({category, image})=>{
    // console.log(image);
return (
    <div className="section"> 
    <p className="name">{category}</p> 

    <div className="imgMovies">
    {image.map((img)=> {
        // console.log(img);
      return(
      <img key={img} src= {img} alt="images" />
      )})}
      </div>
    </div>
)
}
export default Section