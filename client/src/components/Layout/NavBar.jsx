import React, { useState } from 'react';
import { animated, useSpring, config } from 'react-spring';
import Logo from "../../assets/logo.jpeg";
import SearchIcon from "../../assets/search.svg";
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
          <a href="/"><h1 className="title-h1"> LSS ABUAD</h1></a>
        <nav>
          <ul className='nav-links'>
            <li className='nav-item'>
              <Link
                to='/leadership'
                onClick={() => setActive('leadership')}
                className={active === 'leadership' ? 'active' : null}
              >
                LEADERSHIP
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gallery'
                onClick={() => setActive('gallery')}
                className={active === 'gallery' ? 'active' : null}
              >
                ACTIVITIES
              </Link>
            </li>
            <li className='nav-item cont'>
              <Link
                to='/articles'
                onClick={() => setActive('articles')}
                className={active === 'articles' ? 'active' : null}
              >
              ARTICLES
              </Link>
            </li>
            <li className='nav-item cont'>
              <Link
                to='/honourrole'
                onClick={() => setActive('honourrole')}
                className={active === 'honourrole' ? 'active' : null}
              >
              HONOUR ROLE
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
                to='/leadership'
                onClick={() => setActive('leadership')}
                className={active === 'leadership' ? 'active' : null}
              >
                LEADERSHIP
              </Link>
            </li>
            <li className='nav-item dropped'>
              <Link
                to='/gallery'
                onClick={() => setActive('gallery')}
                className={active === 'gallery' ? 'active' : null}
              >
              ACTIVITIES
              </Link>
            </li>
            <li className='nav-item dropped'>
              <Link
                to='/articles'
                onClick={() => setActive('articles')}
                className={active === 'articles' ? 'active' : null}
              >
                ARTICLES
              </Link>
            </li>
            <li className='nav-item dropped'>
              <Link
                to='/honourrole'
                onClick={() => setActive('honourrole')}
                className={active === 'honourrole' ? 'active' : null}
              >
                HONOUR ROLE
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
     <div className="search-div"><a href="https://www.google.com/search?q=LSS+ABUAD&sxsrf=ALeKk00GLLRLebhdwiSN0QNKvstDIUcDKw%3A1621692142642&source=hp&ei=7g6pYN23JI6fUJacroAL&iflsig=AINFCbYAAAAAYKkc_gt_fBbdQfX8STgYHLPojt-LuBxS&oq=LSS+ABUAD&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECc6BQgAEJECOgUIABCxAzoCCAA6CgguELEDEIMBEAo6BQguELEDOggILhDHARCvAToCCC46CAgAELEDEIMBOgYIABAWEB46CAgAEBYQChAeUOYDWL0SYKwWaABwAHgAgAGKAogB3RCSAQMyLTmYAQCgAQGqAQdnd3Mtd2l6&sclient=gws-wiz&ved=0ahUKEwjd5uCAut3wAhWODxQKHRaOC7AQ4dUDCAc&uact=5"><img src={SearchIcon} alt="search-icon" className="search-img"/></a></div> 
      </header>
      <div className="below-header">
      <p className="below-p">nav</p>
      </div>
    </div>
  );
};

export default NavBar;




