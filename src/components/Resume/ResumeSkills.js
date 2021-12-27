import './Resume.css';

const ResumeSkills = () => {
  return (
    <div>
      <h2 className='resume__header'>Skills</h2>
      <ul className='resume__list'>
        <li>
          <p>
            <b>Languages:</b> HTML, CSS, JavaScript, Embedded JavaScript
          </p>
        </li>
        <li>
          <p>
            <b>Libraries / Frameworks:</b> Vue.js, React.js Bootstrap 4
          </p>
        </li>
        <li>
          <p>
            <b>Version Control:</b> Git
          </p>
        </li>
        <li>
          <p>
            <b>Methodology:</b> Agile through Scrum Methodology
          </p>
        </li>
        <li>
          <p>
            <b>Operating Systems:</b> Windows 10, Linux
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ResumeSkills;
