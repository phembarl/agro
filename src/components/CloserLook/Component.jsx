import React from 'react';
import './CloserLook.css';

const CloserLookComponent = (props) => {
  const {
    image_name,
    title,
    text,
    url,
    alt,
  } = props;
  return (
    <div className="clc_container">
      <div className="clc_contents flex-column-center">
        <div className="clc_image_wrapper">
          <img src={require(`../../assets/images/${image_name}.svg`)} alt={alt} />
        </div>
        <div className="clc_content_wrapper">
          <h1 className="clc_title capitalize">{title}</h1>
          <p className="clc_text">{text}</p>
          <a href={url} className="clc_link" target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default CloserLookComponent;
