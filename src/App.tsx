import React from 'react';
import './App.scss';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';
import {fullName, projectsSection, skills, skillsSection, socialMedia} from './content/contentData';

function App() {
  return (
      <div className="App">
          <Header/>
          <Main/>
          <Skills skills={skillsSection}/>
          <Projects projects={projectsSection}/>
          <Contacts/>
          <Footer
              fullName={fullName}
              socialMedia={socialMedia}
          />
      </div>
  );
}

export default App;
