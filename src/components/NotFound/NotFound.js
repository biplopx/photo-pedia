import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div className='py-5'>
      <Container>
        <div className='row'>
          <div className="mx-auto col col-lg-6 col-md-6">
            <img src='/images/page-not-found.svg' width="100%" alt='page not found' />
            <h3 className="mt-5 text-center fw-bold fs-2 text-uppercase">Page Not Found</h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;