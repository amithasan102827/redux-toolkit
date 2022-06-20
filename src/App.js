import logo from './logo.svg';
import './App.css';
import CounterView from './CounterView/CounterView';
import { ViewUsers } from './ViewUsers/ViewUsers';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ViewUserDetails } from './ViewUserDetails/ViewUserDetails';



function App() {
  return (
    <div className="App">
      


      <BrowserRouter>
       
      <Routes>
          <Route path="/" element={<ViewUsers></ViewUsers>} />
          <Route path="ViewUserDetails/:detailsId" element={<ViewUserDetails></ViewUserDetails>} />

    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
