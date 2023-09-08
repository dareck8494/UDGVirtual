
import './App.css';
import React, { Component } from 'react';


class StakeholderRequirementsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stakeholderName: '',
      requirementDescription: '',
      stakeholders: [],
      requirements: [],
    };
  }

  handleStakeholderChange = (e) => {
    this.setState({ stakeholderName: e.target.value });
  };

  handleRequirementChange = (e) => {
    this.setState({ requirementDescription: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Agregar el stakeholder y el requisito a las listas
    const newStakeholder = this.state.stakeholderName;
    const newRequirement = this.state.requirementDescription;

    this.setState((prevState) => ({
      stakeholders: [...prevState.stakeholders, newStakeholder],
      requirements: [...prevState.requirements, newRequirement],
      stakeholderName: '',
      requirementDescription: '',
    }));
  };

  render() {
    return (
      <div>
        <h1>Identificar Stakeholders y Requisitos</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nombre del Stakeholder:</label>
            <input
              type="text"
              value={this.state.stakeholderName}
              onChange={this.handleStakeholderChange}
            />
          </div>
          <div>
            <label>Descripción del Requisito:</label>
            <input
              type="text"
              value={this.state.requirementDescription}
              onChange={this.handleRequirementChange}
            />
          </div>
          <button type="submit">Agregar</button>
        </form>
        <div>
          <h2>Stakeholders:</h2>
          <ul>
            {this.state.stakeholders.map((stakeholder, index) => (
              <li key={index}>{stakeholder}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Requisitos:</h2>
          <ul>
            {this.state.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}




export default StakeholderRequirementsForm;


