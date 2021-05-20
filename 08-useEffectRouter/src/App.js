import React from "react";
import DoctorForm from "./components/DoctorForm";
import PatientForm from "./components/PatientForm";
import PatientList from './components/PatientList'
import PatientDetail from './components/PatientDetail'
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app ui container" style={{paddingBottom:"5rem"}}>
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
        <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/doctors" component={DoctorForm} />
        <Route exact path="/patients" component={PatientList} />
        <Route exact path="/patients/new" component={PatientForm} />
        <Route exact path="/patients/:id/" component={PatientDetail}/>
        <Route exact path="/patients/:id/edit" component={PatientForm}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
