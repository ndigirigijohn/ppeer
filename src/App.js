import './App.css';
import video from './back.mp4'
import logo from './logo-transparent.png'

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted id='video' >
        <source src={video} type="video/mp4" />
      </video>
      <div className="content">
        <img src={logo} alt="PPEER" />
        <h3>We enable seamless staking in peer to peer gaming</h3>
        </div>
        <div className="buttons">
          <a href='mailto:johnndigirigi01@gmail.com'>CONTACT US</a>
          <a onClick={()=>{alert("APP UNDER DEVELOPMENT")}} href='#video'>DOWNLOAD APP</a>
        </div>
    </div>
  );
}

export default App;
