import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PatientList.css";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/patients/?q=" + search)
      .then((res) => setPatients(res.data));
  }, [search]);

  const deletePatient = (id) => {
    console.log("borrando ", id);
    axios
      .delete(`http://localhost:4000/patients/${id}/`)
      .then(() => setPatients(patients.filter((i) => i.id !== id)));
  };

  return (
    <div className="patient-list">
      <div>
        <h2>Patients</h2>
        <div className="button-container">
          <div class="ui icon input">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <i class="circular search icon"></i>
          </div>
          <Link to="/patients/new">
            <button className="ui primary button">New Patient</button>
          </Link>
        </div>
      </div>

      <table class="ui celled table">
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th></th>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>
                <Link to={`/patients/${p.id}/`}>
                  <button className="ui button primary mini basic">See</button>
                </Link>
                <button
                  className="ui button negative mini basic"
                  onClick={() => deletePatient(p.id)}
                >
                  Delete
                </button>
                <Link to={`/patients/${p.id}/edit`}>
                  <button className="ui button positive mini basic">
                    Edit
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
