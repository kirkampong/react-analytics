import logo from 'assets/logo/tenet.png';
import './About.css';
import NavigationBar from 'components/Navbar/NavigationBar';

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
            <li>How to run this project locally: </li>
              <ol>
                <li>Download the repo <a href="https://github.com/kirkampong/tenet-analytics">here</a></li>
                <li>Run npm install</li>
                <li>Run 'npm start' to launch the project</li>
              </ol>
            <br></br>
            <li>How emissions savings were calculated: </li>
            Emissions savings were calculate for the base model and each car model in trips.csv,
            using the miles driven in that month.
              <ul>
                <li>Base Model (Audi Q7): </li>
                <ol>
                  <li>Divide the 'milesDriven' by 'Miles per Gallon'(from inputs.csv) to get the equivalent gallons of fuel used by the base model car.</li>
                  <li>The result was multiplied by the national average lbs CO2/gal gas to get the baseModel CO2 emissions</li>
                </ol>
                <li>Other Models: </li>
                <ol>
                <li>Divide the 'milesDriven' by 'Miles per KWh'(from inputs.csv) to get the equivalent energy used by the car selected by the user.</li>
                <li>The result was multiplied by the national average lbs CO2/Kwh to get the car's CO2 emissions</li>
                </ol>
              </ul>
          </ul>
          </div>
        </header>
      </div>
    </div>
  );
}

export default About;
