import React, { useState } from 'react';
import { animated, useSpring, config } from 'react-spring';
import Logo from "../../assets/logo.jpeg";
import {Link} from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState('Home');
  const [open, setOpen] = useState(false);

  const props = useSpring({
    opacity: open ? 1 : 0,
    zIndex: open ? 1 : -1,
    minHeight: open ? '50%' : '0%',
    config: { ...config.molasses, duration: 450 },
  });

  return (
    <div className='sticky'>
      <header className='header'>
          <a href="/"><img src={Logo} className= "logo" alt="logo"/></a>
        <nav>
          <ul className='nav-links'>
            <li className='nav-item'>
              <Link
                to='/home'
                onClick={() => setActive('home')}
                className={active === 'home' ? 'active' : null}
              >
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <a
                to='/leadership'
                onClick={() => setActive('leadership')}
                className={active === 'leadership' ? 'active' : null}
              >
                LEADERSHIP
              </a>
            </li>
            <li className='nav-item'>
              <Link
                to='/gallery'
                onClick={() => setActive('gallery')}
                className={active === 'gallery' ? 'active' : null}
              >
                GALLERY
              </Link>
            </li>
            <li className='nav-item cont'>
              <Link
                to='/news'
                onClick={() => setActive('news')}
                className={active === 'contact' ? 'active' : null}
              >
              NEWS
              </Link>
            </li>
            <li className='nav-item cont'>
              <Link
                to='/contact'
                onClick={() => setActive('contact')}
                className={active === 'contact' ? 'active' : null}
              >
              CONTACT US
              </Link>
            </li>
                       
          </ul>
          <div onClick={() => setOpen(!open)} className='hamburger'>
            <div className={open ? 'hamburger-icon none' : 'hamburger-icon'}>
              <span className="cross"></span>
              <span className="cross"></span>
            </div>
          </div>
        </nav>
        <animated.div style={props} className='menubar'>
          <ul className='menu-links'>
            <li className='nav-item dropped'>
              <Link
                to='/home'
                onClick={() => setActive('home')}
                className={active === 'home' ? 'active' : null}
              >
                HOME
              </Link>
            </li>
            <li className='nav-item dropped'>
              <a
                to='/leadership'
                onClick={() => setActive('leadership')}
                className={active === 'leadership' ? 'active' : null}
              >
                LEADERSHIP
              </a>
            </li>
            <li className='nav-item dropped'>
              <Link
                to='/gallery'
                onClick={() => setActive('gallery')}
                className={active === 'gallery' ? 'active' : null}
              >
                GALLERY
              </Link>
            </li>
            <li className='nav-item dropped'>
              <Link
                to='/news'
                onClick={() => setActive('news')}
                className={active === 'news' ? 'active' : null}
              >
                NEWS
              </Link>
            </li>
            <li className='nav-item dropped'>
              <Link
                to='/contact'
                onClick={() => setActive('contact')}
                className={active === 'contact' ? 'active' : null}
              >
                CONTACT US
              </Link>
            </li>
     
          </ul>
        </animated.div>
      
      </header>
      <div className="below-header">
      <p className="below-p">nav</p>
      </div>
    </div>
  );
};

export default NavBar;




