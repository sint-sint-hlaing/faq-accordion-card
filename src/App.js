import './App.css';
import illustration from './images/illustration.png';
import Accordion from './Accordion';
import { accordionData } from './accordionData/accorionData';

function App() {

  return (
    <div className="App">
      <h1 className="heading">FAQ</h1>
      <div className="container">
        <div className="left" >
          <img src={illustration} alt="illustration" className="img" />
        </div>
        <div className='right'>
          {accordionData.map((data) => {
            return (
              <Accordion data={data} />
            )
          })}

        </div>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/sint-sint-hlaing">Sint Sint Hlaing</a>.
      </div>
    </div>
  );
}

export default App;
