import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PatientList.css";
import PatientListItem, { PatientListItemSkeleton } from "./PatientListItem";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/patients/?q=" + search)
      .then((res) => setPatients(res.data));
  }, [search]);

  const deletePatient = (id) => {
    axios
      .delete(`http://localhost:4000/patients/${id}/`)
      .then(() => setPatients(patients.filter((i) => i.id !== id)));
  };

  const createSkeleton = (n) => {
    const response = [];
    for (let index = 0; index < n; index++) {
      response.push(<PatientListItemSkeleton />);
    }
    return response
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
          {patients.length<1 && createSkeleton(10)}
          {patients.map((p) => (
            <PatientListItem p={p} deleteOne={deletePatient} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
