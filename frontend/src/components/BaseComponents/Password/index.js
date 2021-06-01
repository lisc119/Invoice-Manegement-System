import React, {Component, Fragment} from 'react';
import {FormGroup, Input2, Label2} from "../../../style/Inputs";

import PasswordEyeOpen from "../../../assets/icons/icon-eye-yellow.svg";
import PasswordEyeClosed from "../../../assets/icons/icon-eye-grey.svg";


const eyeIcon = {
  closed: '',
  opened: ''
}

class PasswordField extends Component {
  constructor(props){
    super(props)

    this.state = {
      hidden: true,
      password: ''
    }
  this.handlePasswordChange = this.handlePasswordChange.bind(this)
  this.toggleShow = this.toggleShow.bind(this)
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  toggleShow() {
    this.setState({hidden: !this.state.hidden})
  }

  render() {
      return (
        <Fragment>
          <Label2 to="pass">Password</Label2>
          <Input2 type={this.state.hidden ? 'password' : 'type' }
              value={this.state.password}
              onChange={this.handlePasswordChange}
              placeholder=""
              name="pass"
          />
          <img src={ this.state.hidden ? PasswordEyeClosed : PasswordEyeOpen} onClick={this.toggleShow} className={this.state.hidden ? 'closed' : 'opened' } />
      </Fragment>
    )
  }
};


export default PasswordField;
