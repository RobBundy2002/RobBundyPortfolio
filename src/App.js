import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Rob Bundy Portfolio</h1>
          <p>Welcome to my portfolio website!</p>
        </header>
        <main className="App-main">
          <section>
            <h2>About Me</h2>
            <p>I'm a current third year CS student at the University of Virginia with experience in Java, Python, JavaScript, C, x86-64 Assembly, React, and more.</p>
          </section>
          <section>
            <h2>Projects</h2>
            <div className="project">
              <h3>College Hoops Matrix Madness</h3>
              <p>Web App Game that serves as a college basketball version of the popular immaculate grid game.</p>
            </div>
            <div className="project">
              <h3>Celestial Arcade</h3>
              <p>Web App Page built with React.js that provides a place to play a variety of games!</p>
            </div>
              <div className="project">
                  <h3>UVA CS 1112 Website</h3>
                  <p>Helped build and maintain a website for CS1112 at UVA using the just-the-docs jekyll theme, allowing students to more easily find their course material and providing students with additional materials to study for the course</p>
              </div>
              <div className="project">
                  <h3>Course Review Application</h3>
                  <p>Web Application that uses a SQLite Database and JavaFx to provide an interface to add, delete, and edit course reviews, as well as add users and classes to the database for more broad-reaching functionality.</p>
              </div>
          </section>
          <section>
            <h2>Contact Me</h2>
            <p>You can reach me at Robbielbundy@gmail.com</p>
          </section>
        </main>
        <footer className="App-footer">
          <p>&copy; 2024 Rob Bundy. All rights reserved.</p>
        </footer>
      </div>
  );
}

export default App;
