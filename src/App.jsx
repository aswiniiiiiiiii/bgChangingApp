import './App.css'
import Changeclr from './Changeclr'
function App() {
   //javaScript code
  
   const changeSkyblue = () => {
    document.body.style.backgroundColor = "skyblue";
  };
  const changeViolet = () => {
    document.body.style.backgroundColor = "violet";
  };
  const changeOrange = () => {
    document.body.style.backgroundColor = "yellowgreen";
  };
  const changeRed = () => {
    document.body.style.backgroundColor = "#f96e63";
  };
  const changeYellow = () => {
    document.body.style.backgroundColor = "Yellow";
  };
  //css styles
  const myStyle = {
      height : '300px',
       backgroundImage:
      "url('https://static.vecteezy.com/system/resources/previews/011/628/246/large_2x/lgbtq-concept-rainbow-blured-background-gradient-ombre-color-blend-abstract-background-free-photo.jpeg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      gap: '1rem',
      borderRadius :' 25px',
      margin: '10rem'

  }
  const textStyle ={
    paddingTop: '6rem',
    color :'#284a7d'
  }
  return (
  
   <>
      <div style={myStyle} >
      <h1 style={textStyle} className='text-center fw-bolder'>CHANGE BACKGROUND COLOR </h1>
      <div st className='d-flex justify-content-center align-items-center gap-4 mt-5'>
        <button onClick={changeSkyblue} style={{backgroundColor :'skyblue'}} className='btn shadow border  border-light fw-bold px-3'>SkyBlue</button>
        <button onClick={changeOrange} style={{backgroundColor :'yellowgreen'}} className='btn shadow border  border-light fw-bold px-3'>Green</button>
        <button onClick={changeYellow} style={{backgroundColor :'Yellow'}} className='btn shadow border border-light fw-bold px-3'>Yellow</button>
        <button onClick={changeRed} style={{backgroundColor :'#f96e63'}} className='btn shadow border border-light fw-bold px-3 '>Peache</button>
        <button onClick={changeViolet} style={{backgroundColor :'Violet'}} className='btn shadow border border-light fw-bold px-3'>Violet</button>
  
      </div>
      </div>
      <Changeclr/>
   </>
    
  )
}

export default App
