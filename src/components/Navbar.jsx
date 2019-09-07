import React from 'react';
import '../assets/sass/components/Lander.scss';
import '../assets/sass/components/Navbar.scss'
import '../assets/fonts/micons/micons.css';
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-offerup.png';
import menu from '../assets/images/menu-icon.png';
import { Form, FormControl, Button } from 'react-bootstrap';
import PostModal from './PostModal';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export default function Navbar() {
  const [registerModalShow, setRegisterModalShow] = React.useState(false);
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  const [postModalShow, setPostModalShow] = React.useState(false);
  return (
    <nav>
      <PostModal
        show={postModalShow}
        onHide={() => setPostModalShow(false)}
      />
      <LoginModal
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
      />
      <RegisterModal
        show={registerModalShow}
        onHide={() => setRegisterModalShow(false)}
      />
      <div className="nav-container">
        <Link to='/'><img className="logo" src={logo} alt="Logo" /></Link>
        <Form>
          <div className="search-icon"><i className="fas fa-search"></i></div>
          <FormControl type="text" placeholder="Search" />
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
          <div className="link" onClick={() => setLoginModalShow(true)}>Login</div>
          <div className="link" onClick={() => setRegisterModalShow(true)}>Sign up</div>
        </div>
        <div className="menu-icon"><img src={menu} alt="Menu"/></div>
      </div>
    </nav>
  );
}
