import React, { useState, useEffect, useRef } from 'react';
import './lesgo.css';
import profileImage from './croppedpfp.jpg';
import design from './design.png';
import graphic1 from './graphicdesign/a.png';
import graphic2 from './graphicdesign/b.png';
import graphic3 from './graphicdesign/c.png';
import graphic4 from './graphicdesign/d.png';
import flower from './flower.jpg';
import fb from './contact/fb.png';
import gmail from './contact/gmail.png';
import f1 from './java/f1.PNG';
import f2 from './java/f2.PNG';
import f3 from './java/f3.PNG';
import f4 from './java/f4.PNG';
import form1p1 from './c#/form1p1.PNG';
import form1p2 from './c#/form1p2.PNG';
import form2p1 from './c#/form2p1.PNG';
import form3p1 from './c#/form3p1.PNG';
import form4p1 from './c#/form4p1.PNG';
import dblur from './c#/dblur.jpg';
import e from './graphicdesign/e.png';
import f from './graphicdesign/f.png';
import bking from './graphicdesign/bking.PNG';

export default function Lesgo() {

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [content, setContent] = useState('home');
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const handleMenuToggle = () => {
      setMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menu) => {
    setContent(menu);
    setMenuOpen(false);
  };

  const renderContent = () => {
    if (content === 'home') {
      return (
        <div className="body-content">

          <div className="text-content">
            <span className="normal-text">Hi I am</span>
          </div>

          <div className="text-content2">
            <p className="larger-text">Ayesha Hashmi</p>
            <div className="intro">My journey involves creating <p className="clr">university-level projects</p> to enhance my skills. I specialize in crafting 
              projects using a variety of programming languages such as <p className="clr">C, Java, C#, SQL, HTML, 
              CSS, JS, and React.</p> My expertise spans <p className="clr">app development, web development, and 
              graphic design.</p></div>
          </div>

          <div className="image-content">
            <img src={profileImage} alt="Profile" />
          </div>

          <div className="image-content2">
            <img src={design} alt="design" />
          </div>

        </div>
      );
    } else if (content === 'graphicdesign') {
      return (
        <>
        <p className='text'>My Designs:</p>
        <div className="body-content graphic-design-content">
          <img src={graphic1} alt="Graphic 1" />
          <img src={graphic2} alt="Graphic 2" />
          <img src={graphic3} alt="Graphic 3" />
          <img src={graphic4} alt="Graphic 4" />
        </div>
        <p className='text2'>Business Card:</p>
        <div className="enlarge">
          <img src={e} alt="Business Card Front" />
          <img src={f} alt="Business Card Back" />
        </div>
        <p className='text2'>Burger King Logo REMAKE :D *Note: sorry for the blur zoom in because my sw was not giving me full contents in svg/pdf</p>
        <div className="enlarge">
          <img src={bking} alt="Burger King Logo Remake" />
        </div>
        </>
      );
    } else if (content === 'about') {
      return (
        <div className="about-content">
          <p>Hello, I'm Ayesha Hashmi! As a dedicated student pursuing a BCS degree, I channel my creativity and technical skills 
            into crafting meaningful projects. My experience extends across a range of programming languages, including C, Java, C#, SQL,
            HTML, CSS, JS, and React. Whether it's developing robust applications or designing engaging user interfaces, I am enthusiastic 
            about every aspect of the tech world. Beyond coding, I have a keen interest in graphic design, adding an artistic touch to my 
            projects. Join me as I navigate the challenges and triumphs of university life while exploring the vast possibilities of computer 
            science. <img src={flower} alt="Flower" /> </p>
        </div>
      );
    }else if (content === 'contact') {
      return (
        <div className="contact-content">

          <div className="contact-info">
            <p> 
              <img src={gmail} alt="Gmail"/> 
              <a href="mailto:ayeshaahashmi4@gmail.com" target="_blank">ayeshaahashmi4@gmail.com</a>
            </p>
            <p> 
                <img src={fb} alt="FaceBook"/> 
                <a href="https://www.facebook.com/ayesha.hashmi.1671?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Ayesha Hashmi</a>
            </p>
          </div>

           <img className="flr" src={flower} alt="Flower" /> 

        </div>
      );
    }else if (content === 'java') {
      return (
        <div className="java-content">

          <img className="k" src={f1} alt="f1"/> 
          <img className="j" src={f2} alt="f2"/> 
          <img className="j" src={f3} alt="f3"/> 
          <img className="j" src={f4} alt="f4"/>

        </div>
      );
    }else if (content === 'c#') {
      return (
        <div className="c#-content">
 
          <img className="d" src={form1p1} alt="form1p1"/> 
          <img className="d" src={form1p2} alt="form1p2"/> 
          <img className="c" src={form2p1} alt="form2p1"/> 
          <img className="c" src={form3p1} alt="form3p1"/> 
          <div>          
            <img className="c" src={form4p1} alt="form4p1"/> 
          </div>
          <img className="c" src={dblur} alt="DataBase"/> 

        </div>
      );
    }
  };

  return (
    <div>

      <nav className={`custom-navbar ${isMenuOpen ? 'menu-open' : ''}`}>

        <div className="container-fluid">
          <a className="navbar-brand" href="#">MyPortfolio</a>
        </div>

        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="custom-nav-links">
            <li className="nav-item">
              <a className={`nav-link ${content === 'home' ? 'active' : ''}`} onClick={() => handleMenuClick('home')} href="#">Home</a>            
            </li>
            <li className="nav-item">
              <a className={`nav-link ${content === 'about' ? 'active' : ''}`} onClick={() => handleMenuClick('about')} href="#">About</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${content === 'contact' ? 'active' : ''}`} onClick={() => handleMenuClick('contact')} href="#">Contact</a>
            </li>
          </ul>
        </div>
        
      </nav>

      <div className="menu-container" ref={menuRef}>

        <div className="hamburger" onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`vertical-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#" onClick={() => handleMenuClick('c#')}>C# Project with DataBase</a>
          <a href="#" onClick={() => handleMenuClick('java')}>Java Project</a>
          <a href="#" onClick={() => handleMenuClick('graphicdesign')}>Graphic Design</a>
        </div>

      </div>

      {renderContent()}

    </div>
  );
}
