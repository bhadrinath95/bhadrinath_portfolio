import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Bhadrinath</span>
          <br />Full Stack Developer
        </span>
        <p className="introPara">
          I'm a Full Stack Python Developer with expertise in building scalable web applications <br />
          using modern frontend and backend technologies.
        </p>
        
        <a href="/Bhadrinath_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">
          <button className="btn">
            <img src={btnImg} className="btnImg" alt="Resume" /> Resume
          </button>
        </a>

      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
