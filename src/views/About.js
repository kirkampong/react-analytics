import logo from 'assets/logo/tenet.png';
import './About.css';
import NavigationBar from 'components/Navbar/NavigationBar';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <div className='container-fluid'>
      <NavigationBar/>
      <div className="About">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          About this project:
          <div className='info'>
          <ul>
            <li>To run this project: </li>
              <ol>
                <li>Download the project</li>
                <li>Run npm install</li>
                <li>Run 'json-server --watch src/db.json' in the project root directory</li>
                <li>In a separate terminal window, run 'npm start' to launch the project</li>
              </ol>
            <br></br>
          </ul>
          </div>
        </header>
      </div>
    </div>
  );
}

export default About;
