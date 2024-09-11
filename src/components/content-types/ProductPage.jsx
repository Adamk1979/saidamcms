// pages/products.js
import React from 'react';
import Storyblok, { useStoryblokState } from '@storyblok/react/rsc';
import ProductGrid from '@/components/nestable/ProductGrid';

export async function getStaticProps() {
  const { data } = await Storyblok.get('cdn/stories/products', {
    version: 'draft', // Use 'published' for production
  });

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // Revalidate every hour
  };
}

export default function ProductsPage({ story }) {
  const liveStory = useStoryblokState(story);

  if (!liveStory) {
    return <div>No products available</div>;
  }

  return (
    <div>
      <ProductGrid blok={liveStory.content} />
    </div>
  );
}
