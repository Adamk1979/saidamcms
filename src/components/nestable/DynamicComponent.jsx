// src/components/nestable/DynamicComponent.jsx
import Hero from './Hero';
import RichText from './RichText';

const DynamicComponent = ({ blok }) => {
  switch (blok.component) {
    case 'hero':
      return <Hero blok={blok} />;
    case 'richtext':
      return <RichText blok={blok} />;
    default:
      return <div>Unknown component: {blok.component}</div>;
  }
};

export default DynamicComponent;
