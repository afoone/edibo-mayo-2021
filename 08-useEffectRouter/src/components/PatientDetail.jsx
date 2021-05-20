import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";

const PatientDetail = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/patients/${id}/`)
      .then((res) => setPatient(res.data));
  }, []);

  return (
    <div>
      {redirect && <Redirect to="/patients" />}
      <ul>
        <li>id: {patient.id}</li>
        <li>Name: {patient.name}</li>
        <li>Age: {patient.age}</li>
      </ul>
      <button
        className="ui primary button mini"
        onClick={() => setRedirect(true)}
      >
        {"< "} Back
      </button>
    </div>
  );
};

export default PatientDetail;
