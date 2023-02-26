import './App.css';
import Aside from './Components/Aside';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Achievements from './Components/Achievements';

// This is our main component (although this is exported to our index file) that imports many components and displays them here
// it is here that the containing divs are named for our CSS styling
function App() {
  return (
    <div className="container">
      <div className='allContents'>
        <div className='aside'>
          <Aside />
        </div>
        <div className='body'>
        <h1>My CV on React</h1>
        <Experience />
        <Education />
        <Achievements />
        </div>
      </div>
    </div>
  );
}

export default App;
