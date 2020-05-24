import React from 'react';
import Info from '../Info';
import CloserLook from '../CloserLook/CloserLook';
import './Body.css';

const body = () => (
  <div>
    <div className="leaves" />
    <Info
      title="Our Commitment"
      text="The AgroCola’s commitment is to create opportunities for the youth to thrive by engaging in agriculture and various agribusinesses. AgroCola is the integrated agricultural production platform that is built on digital technology."
      imageName="jigsaw"
    />
    <div className="left-curve" />

    <Info
      title="Our Policies and Resolution"
      text="AgroCola provides Nigeria’s young farmers and agriculture value chain participants with an opportunity to create market influence, improve productivity, improve returns, and rightly position to compete in a national and international marketplace."
      imageName="gavel"
      readMore
    />
    <div className="right-curve" />

    <Info
      title="Our Sustainable Agriculture Philosophy"
      text="Our sustainable agriculture approach is anchored on the use of best available knowledge, technologies, and practices to ensure that intensification delivers more with minimal environmental impacts."
      imageName="bulb"
      readMore
    />
    <div className="curvy" />

    <CloserLook />

    <div className="flex-column-center bg-grey sp-text">
      <div className="sp-text-image w-70">
        <img src={require('../../assets/images/youth.svg')} alt="agrocola financial benefits" width="100%" height="auto" />
      </div>
    </div>
    <div className="flex-column-center sp-text">
      <div className="flex-column-center our_story w-40">
        <h1>Hear Our Story</h1>
        <img src={require('../../assets/images/boy.svg')} alt="agrocrop hear our story" width="80%" height="auto" />
        <div className="curviette" />
      </div>
    </div>
    <div className="flex-column reshape_container">
      <div className="right_curve2" />
      <div className="flex-column-center m-auto">
        <div className="flex-row-center r_c">
          <div className="reshape_text">
            <h2>Let's reshape the future of agriculture, one crop at a time.</h2>
            <button>Join us</button>
          </div>
          <div className="reshape_img">
            <img src={require('../../assets/images/phoneLock.svg')} alt="secure phone" width="100%" height="auto" />
          </div>
        </div>
      </div>
      <div className="flex-column-center bg-grey footer">
        <footer className="flex-row footer_wrap">
          <div className="footer_logo">
            <img src={require('../../assets/images/logo2.svg')} alt="footer logo" />
            <div className="copy_rights">
              <p>
                {
                      `Copy right ${new Date().getFullYear()} AgroMall Discovery and Extension Limited
                      All rights reserved`
                    }
              </p>
            </div>
          </div>
          <div className="copy_links">
            <nav className="flex-column">
              <h3>Links</h3>
              <span>Users</span>
              <span>State</span>
              <span>Media</span>
              <span>Experience it</span>
              <span>Join us</span>
            </nav>
          </div>
          <div className="flex-column">
            <h3 className="follow_us">Follow us</h3>
            <nav className="social_icons">
              <a href="https://facebook.com">
                <img src={require('../../assets/images/facebook.svg')} alt="agrocola facebook link" width="100%" height="auto" />
              </a>
              <a href="https://twitter.com">
                <img src={require('../../assets/images/twitter.svg')} alt="agrocola twitter link" width="100%" height="auto" />
              </a>
              <a href="https://instagram.com">
                <img src={require('../../assets/images/instagram.svg')} alt="agrocola instagram link" width="100%" height="auto" />
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  </div>
);

export default body;
