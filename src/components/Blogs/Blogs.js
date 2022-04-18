import React from 'react';

const Blogs = () => {
  return (
    <section className='py-5'>
      <div className="container">
        <h2 className='text-center fw-bold mb-5'>Blogs</h2>
        <div className="row">
          <div className="col col-lg-8 mx-auto rounded">
            <article>
              <div className='border p-3 rounded mb-3'>
                <h3 className='mb-3'>Difference between authorization and authentication</h3>
                <p>
                  <strong>Ans:</strong> Authorization is the process by which a user is given the ability to do certain things in a system. Authorization is the process of deciding what kind of access a user will get or be given to a system that can have many users. Authentication on the other hand is another type of process where the user is verified whether he is included in the system.
                </p>
              </div>
              <div className='border p-3 rounded mb-3'>
                <h3 className='mb-3'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>
                  <strong>Ans:</strong> If we want to create an authentication and authorization system on our own, we can, but it will not be as strong as Firebase will give us. This is because Firebase is a very powerful authentication service provider made by Google. As a result, we use Firebase for how many developers have created the system by checking and selecting how the data will be here and how it will be secure. With Firebase we can easily use different authentication providers. Other 3rd party authentication provides are Auth0, okta, MongoDB, JSON Web Token, Amazon Cognito etc.
                </p>
              </div>
              <div className='border p-3 rounded'>
                <h3 className='mb-3'>What other services does firebase provide other than authentication</h3>
                <p>
                  <strong>Ans:</strong> Others services of firebae except authentication:-</p>
                <ul>
                  <li>Realtime Database</li>
                  <li>Firestore Database</li>
                  <li>Storage</li>
                  <li>Hosting</li>
                  <li>Functions</li>
                  <li>Machine Learning</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;