import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class PatientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      errors: {},
      message: "",
      redirect: false,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value.toUpperCase(),
    });
  }

  onChangeAge(e) {
    const age = parseInt(e.target.value);
    if (age < 0 || age > 110) return;
    this.setState({
      age: e.target.value,
    });
  }

  save() {
    if (!this.validate()) return;
    const objeto = {
      name: this.state.name,
      age: parseInt(this.state.age),
    };
    axios.post("http://localhost:4000/patients/", objeto).then(
      (res) =>
        this.setState({
          redirect: true,
        })
      // this.setState({
      //   message: `Paciente ${res.data.name} guardado satisfactoriamente` ,
      //   name: "",
      //   age: 0
      // })
    );
  }

  validate() {
    if (this.state.name === "") {
      this.setState({
        errors: {
          name: "El nombre es obligatorio",
        },
      });
      return false;
    }
    this.setState({
      errors: {},
    });
    return true;
  }

  render() {
    return (
      <div className="patient-form">
        {this.state.redirect && <Redirect to="/patients" />}
        <h4 className="ui dividing header">New Patient</h4>
        <div
          className={
            "ui form " +
            (this.state.errors.name ? "error" : "") +
            (this.state.message ? "success" : "")
          }
        >
          {this.state.message && (
            <div class="ui success message">
              <div class="header">Form Completed</div>
              <p>{this.state.message}</p>
            </div>
          )}
          <div className={"field " + (this.state.errors.name ? "error" : "")}>
            <label>Name</label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.onChangeName(e)}
              placeholder="Name"
            />
          </div>
          {this.state.errors.name && (
            <div class="ui error message">
              <div class="header">Error</div>
              <p>{this.state.errors.name}</p>
            </div>
          )}
          <div className="field">
            <label>Age</label>
            <input
              type="number"
              placeholder="Age"
              value={this.state.age}
              onChange={(e) => this.onChangeAge(e)}
            />
          </div>
          <button
            className="ui primary button"
            disabled={!this.state.name}
            onClick={() => this.save()}
          >
            Submit
          </button>
          <button
            className="ui negative button"
            onClick={() =>
              this.setState({
                redirect: true,
              })
            }
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default PatientForm;
