import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className='text-center text-lg-start bg-light text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with me on social networks:</span>
          </div>

          <div>
            <a
              href='mailto:sonubhadana838@gmail.com'
              className='me-4 text-reset'
            >
              <i className='far fa-envelope'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/sonu-bhadana/'
              className='me-4 text-reset'
            >
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='https://github.com/Prince0047' className='me-4 text-reset'>
              <i className='fab fa-github'></i>
            </a>
          </div>
        </section>

        <section>
          <div className='row'>
            <div className='col-auto mx-auto'>
              <h6 className='text-uppercase fw-bold mb-4 p-1'>Contact :</h6>
            </div>
            <div className='col-auto mx-auto p-1'>
              <p>
                <i className='fas fa-envelope me-3 p-1'></i>
                sonubhadana838@gmail.com
              </p>
            </div>
            <div className='col-auto mx-auto p-1'>
              <p>
                <i className='fas fa-phone me-3'></i>+91-9643844647
              </p>
            </div>
          </div>
        </section>
        <div className='text-center '>
          © 2021 Copyright by{' '}
          <a
            className='text-reset fw-bold'
            href='https://sonubhadana.netlify.app/'
          >
            Sonu Bhadana
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
