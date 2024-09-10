// src/components/nestable/Hero.jsx

const Hero = ({ blok }) => {
    const heroSectionStyles = {
      textAlign: 'center',
      margin: '3rem 0',
    };
  
    const headlineStyles = {
      fontSize: '3rem',
      fontWeight: 'bold',
    };
  
    return (
      <section style={heroSectionStyles}>
        <h1 style={headlineStyles}>{blok.headline}</h1>
      </section>
    );
  };
  
  export default Hero;
  