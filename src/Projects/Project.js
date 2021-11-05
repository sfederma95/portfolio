import React from 'react';
import './project.css';
import $ from 'jquery';
import Flip from 'react-reveal/Flip';

function Project () {
    const pullOverlay = (e) => {
        const width = document.getElementById('pixeloos-vid').offsetWidth;
        const height = document.getElementById('pixeloos-vid').offsetHeight;
        $(e.currentTarget).find(".overlay").css('opacity','80%');
        $(e.currentTarget).find(".overlay").css('cursor','grab');
        $(e.currentTarget).find(".overlay").css('height',height);
        $(e.currentTarget).find(".overlay").css('width',width);
    }

    const hideOverlay = (e) => {
        $(e.currentTarget).find(".overlay").css('opacity','0%');
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div id="Projects">
            <div className="each-project">
                <Flip right>
                    <h3>Pixeloos</h3>
                </Flip>
                <p>Made in React, a kid-friendly browser-based game. Watch Pixeloos level up as you feed and play with them. Play card games to earn currency. Stats decrease in real-time so check back often! </p>
                <div className='break'></div>
                <div className="videos" onMouseEnter={pullOverlay} onMouseLeave={hideOverlay} onClick={() => openInNewTab('https://pixeloos.herokuapp.com/')}>
                    <div className="overlay">
                        <p>Click Here</p>
                    </div>
                    <iframe id="pixeloos-vid" src="https://www.youtube.com/embed/ul0SWe6wSnU?controls=0&loop=1&mute=1&autoplay=1&playlist=ul0SWe6wSnU" title="Pixeloos Overview"></iframe>
                </div>
            </div>
            <div className="each-project">
                <Flip right>
                    <h3>Aniroku</h3>
                </Flip>
                <p>A hobbyist site made in Flask for sharing opinions on Japanese animation. Thousands of titles to choose from provided by Jikan API. Users are encouraged to interact with each other!</p>
                <div className='break'></div>
                <div className="videos" onMouseEnter={pullOverlay} onMouseLeave={hideOverlay} onClick={() => openInNewTab('https://aniroku.herokuapp.com/')}>
                    <div className="overlay">
                        <p>Click Here</p>
                    </div>
                    <iframe id="aniroku-vid" src="https://www.youtube.com/embed/IdE-b69yUJI?controls=0&loop=1&mute=1&autoplay=1&playlist=IdE-b69yUJI" title="Aniroku Overview"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Project;