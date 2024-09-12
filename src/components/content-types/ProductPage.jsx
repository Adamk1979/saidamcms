// src/components/content-types/ProductPage.jsx
import React, { useState } from 'react';
import Storyblok, { useStoryblokState } from '@storyblok/react/rsc';
import ProductGrid from '@/components/nestable/ProductGrid';
import Filtering from '@/components/nestable/Filtering';
import MyText from '@/components/nestable/MyText'; // Import MyText component

export async function getStaticProps() {
  const { data } = await Storyblok.get('cdn/stories/products', {
    version: 'draft', // Use 'published' for production
  });

  return {
    props: {
      story: data ? data.story : null,
      key: data ? data.story.id : null,
    },
    revalidate: 3600, // Revalidate every hour
  };
}

export default function ProductPage({ story }) {
  const liveStory = useStoryblokState(story);
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (!liveStory) {
    return <div>No products available</div>;
  }

  // Extract and log mytext block
  const mytext = liveStory.content.mytext;
  console.log("Mytext Block:", mytext);

  return (
    <div>
      {/* Render mytext block */}
      {mytext && <MyText blok={mytext} />}

      {/* Pass setSelectedCategory and selectedCategory as props to Filtering */}
      <Filtering blok={liveStory.content} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />

      {/* Pass selectedCategory to ProductGrid */}
      <ProductGrid blok={liveStory.content} selectedCategory={selectedCategory} />
    </div>
  );
}
