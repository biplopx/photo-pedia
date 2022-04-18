import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className='py-5'>
      <div className="container">
        <div className="row gap-4 mx-auto">
          <div className="col-12 col-lg-5 col-md-12 col-sm-12 mx-auto">
            <img src='https://i.postimg.cc/QMQ8qgRL/biplop-frame.jpg' className='d-block img-fluid mx-auto' alt='biplop' />
          </div>
          <div className="col-12 col-lg-5 col-md-12 col-sm-12">
            <div className='mb-4'>
              <span class="about-me rounded-pill">About Me</span>
            </div>
            <h3 className='fs-3 mb-3 fw-bold'>Hello I'm MD <span style={{ color: 'var(--primary-color)' }}>Biplop</span> Hossain</h3>
            <p style={{ textAlign: 'justify' }}>My goal is to become a skilled full stack web developer. To prepare myself as a skilled web developer, I enrolled in a programming hero's web development course to make this learning journey easier. I spend hours learning every day to reach my goals. Not only relying on the course, I am constantly learning new work from Google and YouTube and if there is any problem, I try to find it from Google. Hopefully, one day I will be able to reach my goal and make myself a skilled developer.</p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;