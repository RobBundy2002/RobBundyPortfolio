import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>My Portfolio</h1>
          <p>Welcome to my portfolio website!</p>
        </header>
        <main className="App-main">
          <section>
            <h2>About Me</h2>
            <p>I'm a passionate developer with experience in React, Node.js, and more.</p>
          </section>
          <section>
            <h2>Projects</h2>
            <div className="project">
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </div>
          </section>
          <section>
            <h2>Contact Me</h2>
            <p>You can reach me at myemail@example.com</p>
          </section>
        </main>
        <footer className="App-footer">
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </footer>
      </div>
  );
}

export default App;
