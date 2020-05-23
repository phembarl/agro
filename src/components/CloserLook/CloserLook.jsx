import React from 'react';
import Component from './Component';
import './CloserLook.css';

const CloserLook = () => {
  const data = [
    {
      image_name: 'how',
      title: 'how it works',
      text: 'AgroCola’s efficient and easy to use registration allows users to get onboard in a few easy steps.',
      alt: 'how it works',
    },
    {
      image_name: 'associations',
      title: 'associations',
      text: 'The AgroCola Association is an independent, not-for-profit membership organisation',
      alt: 'associations',
    },
    {
      image_name: 'newDeal',
      title: 'the new deal',
      text: 'AgroCola will bring financial benefits to the young ones of Nigeria that participate in 5 possibility',
      alt: 'money grows',
    },
    {
      image_name: 'tractor',
      title: 'the case of agroCola',
      text: 'We believe that if 2 million educated young farmers are engaged to cultivate 2 million hectares',
      alt: 'the case of agrocola',
    },
    {
      image_name: 'community',
      title: 'community',
      text: 'AgroCola is creating a vibrant collaborative community where young persons and other',
      alt: 'community',
    },
    {
      image_name: 'partners',
      title: 'partners',
      text: 'Partnerships will support in several categories for the rapid development and deployment',
      alt: 'partners',
    },
    {
      image_name: 'cola',
      title: 'cola',
      text: 'AgroCola will drive financial inclusion of the youth in agriculture and the rural economy by',
      alt: 'cola',
    },
    {
      image_name: 'research',
      title: 'research and knowledge',
      text: 'The intersection of youth and digital technology holds the promise of unlocking exponential',
      alt: 'research and knowledge',
    },
  ];
  return (
    <div className="closer_look_container">
      <div className="closer_look" />
      <div className="closer_look_body flex-column-center">
        <div className="closer_look_contents">
          <div>
            <h1>A Closer Look</h1>
          </div>
          <div className="look_grid">
            {
            data.map((detail, i) => (
              <Component
                key={i}
                image_name={detail.image_name}
                title={detail.title}
                text={detail.text}
                url={detail.url}
                alt={detail.alt}
              />
            ))
                  }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloserLook;
