import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom'
import './NavBar.css';

function NavBar() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header" scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/dataviz">DataViz</Link>
                </Navigation>
            </Header>
            <Drawer>
                <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/dataviz">DataViz</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
            </Content>
        </Layout>
    </div>

  );
}

export default NavBar;
