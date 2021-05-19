import React from "react";
import DoctorForm from "./components/DoctorForm";
import PatientForm from "./components/PatientForm";
import PatientList from './components/PatientList'
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app ui container">
      <Router>
        <div className="ui menu inverted red">
          <Link className="item" to="/">
            <div className="header item">
              <h4>Edibo 2021</h4>
            </div>
          </Link>

          <Link className="item" to="/doctors">
            Doctors
          </Link>
          <Link className="item" to="/patients">
            Patients
          </Link>
        </div>
        <Route exact path="/" component={Main} />
        <Route exact path="/doctors" component={DoctorForm} />
        <Route exact path="/patients" component={PatientList} />
        <Route exact path="/patients/new" component={PatientForm} />
      </Router>
    </div>
  );
}

export default App;
