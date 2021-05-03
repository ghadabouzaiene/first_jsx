import './App.css';
import './style.css'
import imageInSrc from './imageInSrc.jpg'
import Video from './Reactvideo.mp4'

function App() {
  return (
    
    <div className="App">
    <div style={{border:'solid(1px)' , maxWidth:'100vw'}}>
    <h1 className="title red">Ghada Bouzaiene</h1>
    <br />
    <img className="image" src={imageInSrc} alt="profile" ></img>
    <br />
    <img className="image" src='./imageInPublic.jpg' alt="profile2" />
    </div>
    <br />
    <video style = {{width:'320px' , height:'240px' }} src={Video} controls></video>
    <br />


    </div>
  );
}

export default App;
