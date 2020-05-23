import React from 'react';
import './Info.css';

const Info = (props) => {
  const {
    title,
    text,
    readMore,
    url,
    imageName,
  } = props;

  return (
    <div>
      <div className="flex-row-center info-card">
        <div className="info-text info-content">
          <h1>{title}</h1>
          <p>{text}</p>
          {readMore ? <a href={url || '#'}>Read more</a> : ''}
        </div>

        <div className="info-image info-content">
          <img src={require(`../../assets/images/${imageName}.svg`)} alt="card" width="100%" height="auto" />
        </div>
      </div>
    </div>
  );
};

export default Info;
