import React from 'react';
import prof from '../assets/images/profPic.jpeg'
import './Home.css'

function Home() {
  return (
    <div className="content">
      <div className='title-pic'>
        <h2>Home Page</h2>
        <img className='prof-pic' src={prof} alt='linkedin pic'/>
      </div>
      <div className="title">
        <h2>Web Development | Data Visualization</h2>
        <hr/>
        <p>React (Redux) | Ruby on Rails | JavaScript | R | Tableau | HTML | CSS</p>
        <div className="social-links">
          <a href="http://www.linkedin.com/in/nick-ramsey-pdx/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/NickRamsey6" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true"></i>
          </a>
          <a href="mailto:nramseysc@gmail.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-at" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
