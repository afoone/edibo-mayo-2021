import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/patients/")
      .then((res) => setPatients(res.data));
  }, []);

  return (
    <div className="patient-list">
      <div>
        <h2>Patients</h2>
        <Link to="/patients/new">
          <button className="ui primary button">New Patient</button>
        </Link>
      </div>

      <table class="ui celled table">
        <thead>
          <th>Name</th>
          <th>Age</th>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr>
              <td>{p.name}</td>
              <td>{p.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
