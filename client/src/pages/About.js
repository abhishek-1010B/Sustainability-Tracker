import React from 'react';
import './assets/css/about.css';

const About = () => {
  return (
    <section className="team-main">
      <h1>
        Take your first Carbon <span>Footsteps</span> with us
      </h1>
      <div className="about-info">
        <div className="about-p">
          <div className="about-h3">
            Carbon Footsteppers believe that it is important for all of us to
            reduce our carbon footprints.
          </div>
          <p>
            We are a team of full-stack developers who were inspired to ask “how
            can we lower our carbon emissions?” We looked for carbon footprint
            calculators and intentional steps we could take to reduce our own
            footprints. We couldnt find a tool that combined self-awareness and
            action in one place. We knew what an effective carbon footprint
            calculator needed to do, so we made it. The entire calculator and
            pledge workflow, each piece of the calculator, each graph, each
            pledge was designed and crafted by our team.
          </p>
          <div className="about-h3">
            We believe that individual positive change can go hand-in-hand with
            education.
          </div>
          <p>
            We know it can be tough to learn about your personal impact on
            climate change. With a little help you can take the first steps to
            reduce and offset your carbon emissions, and feel proud of your
            completed pledges.
          </p>
          <p>
            Contact any member of the team if you have questions about Carbon
            Footsteps and check out our individual GitHub repositories to see
            more of our work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
