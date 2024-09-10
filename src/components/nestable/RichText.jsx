import React from 'react';
import { render, MARK_LINK, NODE_HEADING, NODE_PARAGRAPH, NODE_UL, NODE_LI, NODE_OL } from 'storyblok-rich-text-react-renderer';
import Link from 'next/link';

// The StoryRich component
const StoryRich = ({ blok }) => {
  const { rich_text } = blok;

  // Resolve nodes for specific elements like headings, lists, and paragraphs
  const resolveNodeHeading = (children, { level }) => {
    return React.createElement(`h${level}`, { style: { margin: '1.5rem 0', fontWeight: 'bold' } }, children);
  };

  const resolveNodeParagraph = (children) => {
    return <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>{children}</p>;
  };

  const resolveNodeUL = (children) => {
    return <ul style={{ listStyleType: 'disc', marginLeft: '2rem' }}>{children}</ul>;
  };

  const resolveNodeOL = (children) => {
    return <ol style={{ listStyleType: 'decimal', marginLeft: '2rem' }}>{children}</ol>;
  };

  const resolveNodeLI = (children) => {
    return <li style={{ marginBottom: '0.75rem' }}>{children}</li>;
  };

  const resolveMarkLink = (children, props) => {
    const { linktype, href } = props;
    const linkStyles = { fontWeight: 'bold', textDecoration: 'underline', color: '#0070f3' };

    // Handle email links
    if (linktype === 'email') {
      return <a style={linkStyles} href={`mailto:${href}`}>{children}</a>;
    }

    // Handle external links
    if (href.match(/^(https?:)?\/\//)) {
      return <a style={linkStyles} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
    }

    // Handle internal links
    return (
      <Link href={href}>
        <a style={linkStyles}>{children}</a>
      </Link>
    );
  };

  // Define the resolvers for handling rich text rendering
  const resolvers = {
    markResolvers: {
      [MARK_LINK]: resolveMarkLink,
    },
    nodeResolvers: {
      [NODE_HEADING]: resolveNodeHeading,
      [NODE_PARAGRAPH]: resolveNodeParagraph,
      [NODE_UL]: resolveNodeUL,
      [NODE_OL]: resolveNodeOL,
      [NODE_LI]: resolveNodeLI,
    },
  };

  // Render the rich text using the provided resolvers
  const renderedRichText = render(rich_text, resolvers);

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', fontSize: '1.2rem', lineHeight: '1.6' }}>
      {renderedRichText}
    </div>
  );
};

export default StoryRich;
