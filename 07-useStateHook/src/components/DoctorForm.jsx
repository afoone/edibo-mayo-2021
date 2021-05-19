import React, { useState } from "react";
import axios from 'axios'

const DoctorForm = () => {

  // Estado
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const save = () => {
      const objeto = {
          name: name,
          service: service
      }
      axios.post("http://localhost:4000/doctors/", objeto)
  }

  return (
    <div className="doctor-form">
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
          <input
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
          />
        </div>
      </div>
      <button className="ui primary button" onClick={save}>Submit</button>
    </div>
  );
};

export default DoctorForm;
