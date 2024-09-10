import { StoryblokComponent } from "@storyblok/react/rsc";
import StoryRich from '@/components/nestable/RichText';  // Adjust path if necessary
import Hero from '@/components/nestable/Hero';  // Ensure Hero is registered

// About component to render the "About" page
const About = ({ blok }) => {
  return (
    <div>
      {/* Iterate through the blocks in the Storyblok content */}
      {blok?.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default About;
