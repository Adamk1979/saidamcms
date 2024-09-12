import React from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import '../styles/mytext.css'; 

const MyText = ({ blok }) => {
  if (!blok) {
    return null;
  }

  const { title, text } = blok;

  const extractText = (richText) => {
    if (!richText || !richText.content) return '';
    return richText.content
      .flatMap(paragraph => paragraph.content.map(text => text.text))
      .join(' ');
  };

  return (
    <div className="mytext" {...storyblokEditable(blok)}>
      {title && <h1 className="mytext-title">{title}</h1>}
      {text && <p className="mytext-text">{extractText(text)}</p>}
    </div>
  );
};

export default MyText;
