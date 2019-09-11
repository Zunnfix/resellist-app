import React from 'react'
import '../assets/sass/components/Lander.scss'
import '../assets/sass/components/Navbar.scss'
import '../assets/fonts/micons/micons.css'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Sellist-Logo.png'
import icon from '../assets/images/Sellist-Icon.png'
import { Form, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import PostModal from './PostModal'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import { connect } from 'react-redux'
import Axios from 'axios'
import { resetState } from '../redux/reducers/userReducer';

function Navbar(props) {
  const [registerModalShow, setRegisterModalShow] = React.useState(false)
  const [loginModalShow, setLoginModalShow] = React.useState(false)
  const [postModalShow, setPostModalShow] = React.useState(false)

  function logout() {
    props.resetState()
    Axios
      .get('/auth/logout')
      .catch(err => console.log(err))
  }

  return (
    <nav>
      <PostModal
        show={postModalShow}
        onHide={() => setPostModalShow(false)}
      />
      <LoginModal
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
        loginModalShow={loginModalShow}
        toggleModal={setLoginModalShow}
      />
      <RegisterModal
        show={registerModalShow}
        onHide={() => setRegisterModalShow(false)}
      />
      <div className="nav-container">
        <Link to='/'><img className="logo" src={logo} alt="Logo" /></Link>
        <Link to='/'><img className="icon" src={icon} alt="Logo" /></Link>
        <Form>
          <FormControl type="text" placeholder="Search" />
          <div className="search-icon"><i className="fas fa-search"></i></div>
          <Button className="btn-lte-green">GO</Button>
        </Form>
        <div className="link-wrap">
          <div className="link" onClick={() => setPostModalShow(true)}>
            <div className="item-feature__icon">
              <i className="icon-camera"></i>
            </div>
            Sell
          </div>
          <Link to=''>About</Link>
          {!props.isLoggedIn
            ? <div className="logged-out">
              <div className="link" onClick={() => setLoginModalShow(true)}>Login</div>
              <div className="link" onClick={() => setRegisterModalShow(true)}>Sign up</div>
            </div>
            : <div className="logged-in">
              <div className="chat">
                <i className="fas fa-comment-dots"></i>
              </div>
              <div className="user">
                <img src="https://images.offerup.com/G_WanU6u5IpL1vVVfMajOkU48es=/100x100/smart/cb71/o63608076_48635.jpg" alt="" />
                <DropdownButton
                  title="Chase"
                  className="profile-dropdown"
                  variant="none"
                  alignRight
                  id="dropdown-menu-align-right"
                >
                  <Dropdown.Item eventKey="1">Sell</Dropdown.Item>
                  <Dropdown.Item eventKey="1">About</Dropdown.Item>
                  <Dropdown.Item eventKey="1">My offers</Dropdown.Item>
                  <Dropdown.Item eventKey="2">My boards</Dropdown.Item>
                  <Dropdown.Item eventKey="3">My profile</Dropdown.Item>
                  <Dropdown.Item eventKey="4">My account</Dropdown.Item>
                  <Dropdown.Item onClick={logout} eventKey="5">Log out</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          }
        </div>
        {!props.isLoggedIn
          ? <DropdownButton
            title=""
            className="menu-icon"
            variant="none"
            alignRight
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item eventKey="1">Login</Dropdown.Item>
            <Dropdown.Item eventKey="2">Sign up</Dropdown.Item>
            <Dropdown.Item eventKey="3">About</Dropdown.Item>
          </DropdownButton>
          : <DropdownButton
            title=""
            className="menu-icon"
            variant="none"
            alignRight
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item eventKey="1">Sell</Dropdown.Item>
            <Dropdown.Item eventKey="1">About</Dropdown.Item>
            <Dropdown.Item eventKey="1">My offers</Dropdown.Item>
            <Dropdown.Item eventKey="2">My boards</Dropdown.Item>
            <Dropdown.Item eventKey="3">My profile</Dropdown.Item>
            <Dropdown.Item eventKey="4">My account</Dropdown.Item>
            <Dropdown.Item onClick={logout} eventKey="5">Log out</Dropdown.Item>
          </DropdownButton>
        }
      </div>
    </nav>
  );
}

function mapStateToProps(reduxState) {
  return {
    isLoggedIn: reduxState.userReducer.login
  }
}

export default connect(mapStateToProps, { resetState })(Navbar)