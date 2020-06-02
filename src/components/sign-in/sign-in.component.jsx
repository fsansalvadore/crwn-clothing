import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../custom-button/custom-button.component';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: "",
      password: ""
    })
  }

  render() {
    // let {email, password} = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
        <h3>I already have an account</h3>
        <p>Fill in the form with your credentials.</p>
        <FormInput
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={this.state.password}
          handleChange={this.handleChange}
          label="password"
          required
          />
        <Button type="submit">
          Sumbit form
        </Button>
      </form>
    )
  }
}