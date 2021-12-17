import { Container } from '@mui/material';

import Jumbotron from '../../components/UI/Jumbotron';
import BtnStandard from '../../components/UI/Button/BtnStandard';
import './ProjectView.css';

const KrakenBracketView = () => {
  const jumboTitle = 'Senior Project: Kraken Bracket';

  return (
    <div>
      <Jumbotron title={jumboTitle} />
      <Container maxWidth='md'>
        <p className='project-view__description'>
          <span className='project-view__description__title'>
            Kraken Bracket
          </span>{' '}
          makes tournament experiences smoother for tournament organizers,
          competitors, and spectators alike. This web-app is practical for local
          / small tournaments or large scale ones
        </p>
        <p className='project-view__description'>
          Registered users have the ability to create tournament brackets and/or
          events. From there, other registered users may sign up and participate
          in the brackets/events. Those who manage brackets can update scores
          and move players in the brackets. Once a bracket is finished, the
          bracket's page will display the standings of all competitors, which is
          viewable for all users.
        </p>
        <p className='project-view__description'>
          All brackets support at minimum 4 players and at maximum 128 players;
          events encompass a collection of brackets so users can follow and be
          updated for all brackets within a single event.
        </p>
        <p className='project-view__description'>
          <b>NOTE:</b> this project is neither finished nor deployed. This
          yearlong project was developed from 2019 to 2020, and the coronavirus
          lockdowns caused many problems for me and my team.{' '}
          <em>(see personal notes below for more details) </em>
        </p>
        <div className='project-view__tech-stack'>
          <h2>Tech Stack</h2>
          <ul>
            <li>Vue.js</li>
            <li>Vuetify</li>
            <li>ASP .NET 2.2</li>
            <li>.NET Core 2.2</li>
            <li>MySQL</li>
          </ul>
        </div>
      </Container>
      <Container>
        <div className='project-view__personal-notes'></div>
      </Container>
    </div>
  );
};

export default KrakenBracketView;
