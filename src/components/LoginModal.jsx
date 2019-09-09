import React from 'react'
// import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import '../assets/sass/components/Modals/LoginModal.scss';

function LoginModal(props) {
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
            <input className="input" type="text" placeholder="Username"/>
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input className="input" type="password" placeholder="Password"/>
          </div>
        </div>
        <Button className="btn-lte-green" onClick={props.onHide}>Login</Button>
      <span className="text link">Forgot password?</span>
      </Modal.Body>
      <Modal.Footer>
        <div className="text">Don't have an account? <span className="link">Create one</span></div>
      </Modal.Footer>
    </Modal>
  )
}

export default LoginModal