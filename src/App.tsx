import { useState, useEffect } from 'react';
import NavigationBar from 'components/Navbar/NavigationBar';
import axios from "axios";
import { 
  LineChart, 
  Line, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Label, 
  ResponsiveContainer 
} from 'recharts';
import { recordsFilterUtil } from 'utils/inputsRecordsFilter';
import { Dropdown } from "react-bootstrap";
import { chartDataUtil } from 'utils/chartsData';
import { Spinner } from 'react-bootstrap';
import logo from 'assets/logo/tenet.png';
import './App.css';

function App() {
  const [selectedModel, setSelectedModel] = useState("Audi");
  
  const [tripsData, setTripsData] = useState([]);
  const [inputsData, setInputsData] = useState([]);
  
  const fetchData = async () => {
    const inputsResponse = await axios.get('/inputs')
      .then(resp => {setInputsData(resp.data);})
      .catch(err => {console.error(err);});

    const tripsResponse = await axios.get('/trips')
      .then(resp => {setTripsData(resp.data);})
      .catch(err => {console.error(err);});
  }

  useEffect(() => {
    fetchData();
  }, []);

  if(!inputsData.length || !tripsData.length) {
    return (
      <div className="container-fluid Spinner">
        <Spinner className="SpinnerStyle" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const baseModel = inputsData[0];

  const filterAudi = recordsFilterUtil.filterInputByTrip(inputsData,'audi');
  const filterTesla = recordsFilterUtil.filterInputByTrip(inputsData,'tesla');
  const filterVolvo = recordsFilterUtil.filterInputByTrip(inputsData,'volvo');
  const filterToyota = recordsFilterUtil.filterInputByTrip(inputsData,'toyota');

  const audiTrip = tripsData[0];
  const teslaTrip = tripsData[1];
  const volvoTrip = tripsData[2];
  const toyotaTrip = tripsData[3];

  const audiChartData = chartDataUtil.chartData(baseModel, filterAudi, audiTrip);
  const teslaChartData = chartDataUtil.chartData(baseModel, filterTesla, teslaTrip);
  const volvoChartData = chartDataUtil.chartData(baseModel, filterVolvo, volvoTrip);
  const toyotaChartData = chartDataUtil.chartData(baseModel, filterToyota, toyotaTrip);

  
  const modelToChart: { [key: string]: any} = {}
  modelToChart.Audi = audiChartData;
  modelToChart.Tesla = teslaChartData;
  modelToChart.Volvo = volvoChartData;
  modelToChart.Toyota = toyotaChartData
  
  
  const handleModelSelect = (e: { target: { innerHTML: any; }; }) => {
    const value = e.target.innerHTML;
    setSelectedModel(value)
  }

  return (
    <div className="container-fluid">
      <NavigationBar/>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className='medium'>Welcome to Tenet Analytics.</p> 
          <br></br>
          <p >Select your car model below to view emissions savings you can make by switching to an EV today.</p>
          <Dropdown title="Select Model" id="basic-nav-dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Model
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={(e: any)=>handleModelSelect(e)}>Audi</Dropdown.Item>
              <Dropdown.Item onClick={(e: any)=>handleModelSelect(e)}>Tesla</Dropdown.Item>
              <Dropdown.Item onClick={(e: any)=>handleModelSelect(e)}>Volvo</Dropdown.Item>
              <Dropdown.Item onClick={(e: any)=>handleModelSelect(e)}>Toyota</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <p>{selectedModel}</p>
          <br></br>
          <p className="label">Emissions savings over a year</p>
          <ResponsiveContainer width="90%" height={400}>
            <LineChart data={modelToChart[selectedModel]} margin={{ top: 5, right: 20, bottom: 25, left: 15 }}>
              <Line type="monotone" dataKey="s" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Label value="emissions savings" offset={0} position="top" />
              <XAxis dataKey="name" label={{ value: 'Month', position: 'bottom', fill:'#576675' }}/>
              <YAxis label={{ value: 'lbs CO2', angle: -90, position: 'left', fill:'#576675' }}/>
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
          <br></br>
          <p className='smaller'>(These are typical CO2 savings by switching from your gas guzzler to an EV)</p>
        </header>
      </div>
    </div>
  );
}

export default App;
