import React from 'react';
import { Grid, Cell } from 'react-mdl';
import prof from '../assets/images/profPic.jpeg'
import './Home.css'

function Home() {
  return (
    <div className="content">
      <Grid className="home-grid">
        <Cell col={12}></Cell>
        <h2>Home Page</h2>
        <img className='prof-pic' src={prof} alt='linkedin pic'/>
        <div className="title">
          <h2>Full Stack Web Development | Data Visualization</h2>
        </div>
      </Grid>
    </div>
  );
}

export default Home;
