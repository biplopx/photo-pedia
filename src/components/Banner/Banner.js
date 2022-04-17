import React from 'react';
import './Banner.css';
const Banner = () => {
  return (
    <section className='banner'>
      <div className="content">
        <h4>Welcome</h4>
        <h1>I'm MD <span style={{ color: "var(--primary-color)" }}>Biplop</span> Hossain</h1>
        <div class="job-title">Professional Photographer</div>
      </div>
    </section>
  );
};

export default Banner;