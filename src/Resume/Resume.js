import React, {useState} from 'react';
import stephPhoto from '../Media/stephprofile.png';
import './resume.css';

function Resume () {
    const [displaySkill, setDisplaySkill] = useState(true);
    const [displayContact, setDisplayContact] = useState(true);
    const [displayProjects, setDisplayProjects] = useState(true);
    const [displayExperience, setDisplayExperience] = useState(false);
    const [displayEducation, setDisplayEducation] = useState(false);

    const skillClick = () => {
        displaySkill ? setDisplaySkill(false) : setDisplaySkill(true);
    }

    const contactClick = () => {
        displayContact ? setDisplayContact(false) : setDisplayContact(true);
    }

    const projectClick = () => {
        displayProjects ? setDisplayProjects(false) : setDisplayProjects(true);
    }

    const expClick = () => {
        displayExperience ? setDisplayExperience(false) : setDisplayExperience(true);
    }

    const eduClick = () => {
        displayEducation ? setDisplayEducation(false) : setDisplayEducation(true);
    }

    return (
        <div id='Resume'>
            <div id='left'>
                <div id='my-info'>
                    <img src={stephPhoto} alt='Stephanie'/>
                    <h1>Stephanie Federman</h1>
                    <p>Full Stack Developer</p>
                </div>
                <div className='break'></div>
                <div>
                    <h3 onClick={contactClick}>Contact <i class={displayContact ? "fa fa-caret-down" : "fa fa-caret-right"}></i></h3>
                    {displayContact ? <div className='icons'>
                        <div>
                            <i className="fa fa-envelope" style={{fontSize:"2em"}}></i>
                            <a href="mailto: sfederma@yahoo.com" rel="noopener noreferrer" target="_blank">sfederma@yahoo.com</a>
                        </div>
                        <div>
                            <i className="fa fa-phone" style={{fontSize:"2.5em"}}></i>
                            <span>760-902-9623</span>
                        </div>
                        <div>
                            <i className="fa fa-github" style={{fontSize:"2.5em"}}></i>
                            <a href='https://github.com/sfederma95' rel="noopener noreferrer" target="_blank">github.com/sfederma95</a>
                        </div>
                        <div>
                            <i className="fa fa-linkedin" style={{fontSize:"2.5em"}}></i>
                            <a href='https://www.linkedin.com/in/sfederman/' rel="noopener noreferrer" target="_blank">linkedin.com/sfederman</a>
                        </div>
                    </div> : null }
                </div>
                <div>
                    <h3 onClick={skillClick}>Skills <i class={displaySkill ? "fa fa-caret-down" : "fa fa-caret-right"}></i></h3>
                    {displaySkill ? 
                    <div id='skills'>
                        <ul>
                            <li>Python</li>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SQL</li>
                            <li>Node</li>
                            <li>C#</li>
                            <li>Bootstrap</li>
                        </ul>
                        <ul>
                            <li>Flask</li>
                            <li>Express</li>
                            <li>React/Redux</li>
                            <li>Postgres</li>
                            <li>Unity</li>
                            <li>Testing</li>
                            <li>Git</li>
                            <li>Japanese</li>
                        </ul>
                    </div> : null}
                </div>
            </div>
            <div id='right'>
                <div id='right-container'>
                    <div>
                        <h3 onClick={projectClick}>Projects <i class={displayProjects ? "fa fa-caret-down" : "fa fa-caret-right"}></i></h3>
                        {displayProjects ? <div className='projects'>
                            <h4>Pixeloos</h4>
                            <ul>
                                <li><a href='https://github.com/sfederma95/pixeloos' rel="noopener noreferrer" target="_blank">github.com/sfederma95/pixeloos</a></li>
                                <li>A kid-friendly website for users to interact with and care for virtual pets, play mini-games (Deck of Cards API)</li>
                                <li>Made in React, Express, Node.js</li>
                            </ul>
                            <h4>Aniroku</h4>
                            <ul>
                                <li><a href='https://github.com/sfederma95/aniroku' rel="noopener noreferrer" target="_blank">github.com/sfederma95/aniroku</a></li>
                                <li>Created a website for users to share and discuss Japanese
                                animation using Jikan API, rate and organize titles based on
                                preferences, created first iteration of app's recommendation
                                algorithm
                                </li>
                                <li>Made with Python, Flask, Bootstrap</li>
                            </ul>
                        </div> : null }
                    </div>
                    <div>
                        <h3 onClick={expClick}>Experience <i class={displayExperience ? "fa fa-caret-down" : "fa fa-caret-right"}></i></h3>
                        {displayExperience ? <div>
                            <h4>Recruiting Coordinator</h4>
                            <p>Tailored Brands | 2018-2020</p>
                            <ul>
                                <li>Full-cycle recruitment and onboarding for corporate office of 800+ employees</li>
                                <li>Technical support for Taleo applicant tracking system, such as
                                aiding applicants in accessing their portals/paperwork,
                                creating and pulling reports, locating issues on user profiles
                                and posted jobs, training new recruiters on the platform
                                </li>
                                <li>Manage scheduling and calendaring of interviews, meetings
                                with outside agencies, departmental meetings, and
                                coordinating team business trips
                                </li>
                                <li>Coordinated office support in company HR initiatives for
                                team/department restructuring
                                </li>
                            </ul>
                        </div> : null }
                    </div>
                    <div>
                        <h3 onClick={eduClick}>Education <i class={displayEducation ? "fa fa-caret-down" : "fa fa-caret-right"}></i></h3>
                        {displayEducation ? <div>
                            <h4>Springboard, 2020-2021</h4>
                            <p>Software Engineering Program, Certificate</p>
                            <ul>
                                <li>Javascript, Python, and fundamentals of
                                object oriented programing, data
                                structures and algorithms, big O notation
                                </li>
                                <li>Two capstone projects in the form of full-
                                stack applications using Flask and React
                                </li>
                                <li>Gained understanding of databases, SQL, servers, HTTP/HTTPS, usage of the terminal, Git, npm, pip</li>
                            </ul>
                            <h4>UC Santa Cruz, 2014-2018</h4>
                            <p>Bachelors in Political Science</p>
                        </div> : null }
                    </div>
                    <div>
                        <h3>Hobbies</h3>
                        <p>Anime, Gaming, Figure Collecting, Cats</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;