import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const DoctorForm = () => {
  // Estado
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [redirect, setRedirect] = useState(false);

  const save = () => {
    const objeto = {
      name: name,
      service: service,
    };
    axios
      .post("http://localhost:4000/doctors/", objeto)
      .then(() => setRedirect(true));
  };

  return (
    <div className="doctor-form">
      {redirect && <Redirect to="/" />}
      <h4 className="ui dividing header">New Doctor</h4>
      <div className="ui form">
        <div className="ui field">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="ui field">
          <label>Service</label>
          {/* <input
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
          /> */}

          <select test-id="select-service"  value={service}
            onChange={(e) => setService(e.target.value)}>
            <option value=""></option>
            <option value="traumatologia">Traumatología</option>
            <option value="cardiologia">Cardiología</option>
            <option value="oncologia">Oncología</option>
          </select>
        </div>
      </div>
      <button className="ui primary button" onClick={save}>
        Submit
      </button>
    </div>
  );
};

export default DoctorForm;
