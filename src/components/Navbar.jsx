import React from 'react';
import '../assets/sass/components/Lander.scss';
import '../assets/sass/components/Navbar.scss'
import '../assets/fonts/micons/micons.css';
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-offerup.png';
import menu from '../assets/images/menu-icon.png';
import { Form, FormControl, Button } from 'react-bootstrap';
import PostModal from './PostModal';

export default function Navbar() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <nav>
      <PostModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="nav-container">
        <Link to='/'><img className="logo" src={logo} alt="Logo" /></Link>
        <Form>
          <div className="search-icon"><i className="fas fa-search"></i></div>
          <FormControl type="text" placeholder="Search" />
          <Button className="btn-lte-green">GO</Button>
        </Form>
        <div className="link-wrap">
          <div className="link" onClick={() => setModalShow(true)}>
            <div className="item-feature__icon">
              <i className="icon-camera"></i>
            </div>
            Sell
          </div>
          <Link to=''>About</Link>
          <Link to=''>Login</Link>
          <Link to=''>Sign up</Link>
        </div>
        <div className="menu-icon"><img src={menu} alt="Menu"/></div>
      </div>
    </nav>
  );
}
