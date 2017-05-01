import React, { Component } from 'react';

export default class Company extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Catalysts',
      logo: 'logo.png',
      employees: [
        {
          name: 'Dominik Sumer',
          job: 'Software Engineer'
        },
        {
          name: 'David Joech',
          job: 'Software Engineer'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <p>Company Name: {this.state.name}</p>
        <img src={this.state.logo} />
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}

const EmployeeList = props => {
  return (
    <div>
      {props.employees.map(employee => {
        return <Employee name={employee.name} job={employee.job} />;
      })}
    </div>
  );
};

const Employee = props => {
  return (
    <div>
      <p>Employee: {props.name} Job: {props.job}</p>
    </div>
  );
};
