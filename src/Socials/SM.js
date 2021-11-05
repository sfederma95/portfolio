import React from 'react';
import './socials.css';
import Jello from 'react-reveal/Jello';

function SM () {
    return (
        <div id="Socials">
            <h4>Let's chat about what I do and what I'm working on!</h4>
            <Jello>
                <div id='social-container'>
                    <ul class="social-icons">
                        <li><a href="https://github.com/sfederma95" rel="noopener noreferrer" target="_blank"><i className="fa fa-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/sfederman/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.facebook.com/stephfed95" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/stephu_nee" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="mailto: sfederma@yahoo.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-envelope"></i></a></li>
                    </ul>
                </div>
            </Jello>
            <p>Site by Stephanie Federman</p>
        </div>
    )
}

export default SM;