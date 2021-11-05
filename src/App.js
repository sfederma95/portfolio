import React from 'react';
import Main from './Main/Main';
import Resume from './Resume/Resume';
import Project from './Projects/Project';
import SM from './Socials/SM';
import Slide from 'react-reveal/Slide';
import Break from './Break';

function App() {
  return (
    <div className="App">
      <Main/>
      <Break />
      <Project />
      <Break />
      <Slide left duration={1500}>
        <Resume />
      </Slide>
      <Break />
      <SM />
    </div>
  );
}

export default App;
