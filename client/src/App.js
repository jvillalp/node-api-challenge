import React, {useState} from 'react';
import './App.css';

import ProjectsDisplay from './component/ProjectsDisplay';
import ProjectsForm from './component/ProjectsForm';

import ActionsDisplay from './component/ActionsDisplay';
import ActionsForm from './component/ActionsForm';

import axios from 'axios'

import styled from 'styled-components';

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
background:papayawhip;
`;

const App = () =>  {

  const [projects, setProjects] = useState([]);
  const [actions, setActions] = useState([]);

  const getProjects =() => {
    axios
        .get('http://localhost:5500/api/projects/')
        .then(res => {
          console.log("this is the api",res.data);
          setProjects(res.data)
        })
        .catch(err => {
          console.log(`this is an error ${err}`)
        })
  }

  const getActions = () => {
      axios 
          .get('http://localhost:5500/api/actions')
          .then(res => {
            console.log('this is the api for actions', res.data);
            setActions(res.data)
          })
          .catch(err => {
            console.log(`this is an error ${err}`)
          })
  }


  return (
    <div className="App">
      <Title> Click to find the Projects or Actions! </Title>
      <ProjectsDisplay ProjectsDisplay={projects}/>
      <ActionsDisplay ActionsDisplay={actions}/>
      <ProjectsForm getProjectsBtn={getProjects} />
      <ActionsForm getActionsBtn={getActions}/>
    </div>
  );
}

export default App;
