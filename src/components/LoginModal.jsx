import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { setUsername, setPassword } from '../redux/reducers/authReducer'
import { updateSession } from '../redux/reducers/userReducer'
import '../assets/sass/components/Modals/LoginModal.scss'
import Axios from 'axios'

function LoginModal(props) {
  function login() {
    const { username, password, toggleModal } = props
    Axios
      .post('/auth/login', { username, password })
      .then((res) => { 
        props.updateSession(res.data)
        console.log(res);
       })
      .catch(err => console.log(err))
    toggleModal(!props.loginModalShow)
  }

  function setUsername(e) {
    props.setUsername(e.target.value) 
  }

  function setPassword(e) {
    props.setPassword(e.target.value) 
  }

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="login-body">
        <h4>Login</h4>
        <div className="input-wrap">
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input 
              className="input" 
              type="text" 
              placeholder="Username"
              value={props.username}
              onChange={setUsername} 
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input 
              className="input" 
              type="password" 
              placeholder="Password"
              value={props.password}
              onChange={setPassword} 
            />
          </div>
        </div>
        <Button className="btn-lte-green" onClick={login}>Login</Button>
        <span className="text link">Forgot password?</span>
      </Modal.Body>
      <Modal.Footer>
        <div className="text">Don't have an account? <span className="link">Create one</span></div>
      </Modal.Footer>
    </Modal>
  )
}

function mapStateToProps(reduxState) {
  return {
    username: reduxState.authReducer.username,
    password: reduxState.authReducer.password,
  }
}

export default connect(mapStateToProps, { setUsername, setPassword, updateSession })(LoginModal);