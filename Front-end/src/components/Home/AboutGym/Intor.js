import React from "react"

const Intro = () => {
    const introStyle = {
        height : '100%'
      }
    const spanStyle = {
        color : 'rgb(255, 115, 0)'
      }
    return(
        <div style={introStyle} class="card text-center">
            <div style={introStyle} class="card-body">
                <h1 class="card-title"><b>DON’T <span style={spanStyle}>THINK</span>, BEGIN <span style={spanStyle}>TODAY</span>!</b></h1>
                <p class="card-text">Your mind gives up before your legs do.
                <br/>A one-hour workout is only 4% of your day.  NO EXCUSES.
                <br/>Fitness is like marriage.  You can’t cheat on it and expect it to work.</p>
            </div>
        </div>
    )
}

export default Intro;