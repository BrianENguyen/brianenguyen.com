import { Container } from '@mui/material';

import Jumbotron from '../../components/UI/Jumbotron';
import Button from '../../components/UI/Button/Button';
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

        <div>
          <p>
            <a
              href='https://github.com/TheBoiZcecs491/Kraken-Bracket/tree/master'
              target='_blank'
              rel='noreferrer'
            >
              <Button>View Repository</Button>
            </a>
          </p>
        </div>

        <img
          src='https://res.cloudinary.com/buraiyen/image/upload/v1620240516/BEN_Website/projects/krakenbracket_wvd57j.jpg'
          className='project-view__image'
        />
      </Container>
      <Container>
        <div className='project-view__personal-notes'>
          <h2>Personal Notes:</h2>
          <p>
            Working on this project with my other five group members made me
            feel like I was working for a software development company, and it
            was all thanks to our professor. He simulated the class so that it
            would be the same as one would expect from working in a software
            development position; this includes documents (business
            requirements, project plans, sprint backlogs, etc.), core
            requirements, unit & integration tests, scope & resource creep, and
            front-end views
          </p>
          <p>
            My group and I spent countless hours to dedicate to our senior
            project. We met many times each week, both weekdays and weekends, at
            school to work on our tasks. We would even spend 12 hours straight
            on a Saturday to work together. It was definitely a stressful
            experience and there are many times that we wanted to give up. I
            would wake up every morning, panicking that I don't have a task done
            or that I might fail this class, because that was how hard it was.
          </p>
          <p>
            The coronavirus hit our class hard and everything had to shift
            online. Although meeting with my group members and attending class
            were easier, they both had a different dynamic and they were not as
            engaging as meeting in person. Also, we were promised funds from
            Google to deploy our application, but we never received them. These
            hard times led to our project to be incomplete when the semester
            ended.
          </p>
          <p>
            Overall, I am forever grateful for taking this class with the
            professor that I had. Although we experienced a lot of stress and
            hardships, I have learned what it's like to be a software developer.
            I will take everything that I have learned in this class to heart
            and will apply my knowldege in my future positions.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default KrakenBracketView;
