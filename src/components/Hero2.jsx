import React from 'react';

function Hero2() {
  return (
    <div>
      <div className="hero2">
        <fieldset className="hero2-text">
          <legend className="border-text">&nbsp; be impressed</legend>
          <h1>Classy Site</h1>
          <p>This is a classy site so it has a serious photo, classic font, and a gold and black colour palette.</p>
          <a href="#scroll2"><button>click me</button></a>
        </fieldset>
      </div>

      <div id="scroll2" className="hero-container">
        <div className="hero1"></div>
        <div className="hero-text">
          <h1><b>Fun Site</b></h1>
          <p>This is a fun site so it has a fun photo, rounded font and a rounded button!</p>
          <a href="#scroll3"><button><b>CLICK ME</b></button></a>
        </div>
      </div>

      <div id="scroll3" className="hero3">
        <div className="hero3-text">
          <h1><b>Inspiring Site</b></h1>
          <p>Inspiring site strikes a balance between fun/soft and sharp/professional.</p>
          <a href="#"><button><b>click me</b></button></a>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
