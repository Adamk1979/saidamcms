import React, { useState } from 'react';
import { useStoryblokState } from '@storyblok/react';
import ProductGrid from '@/components/nestable/ProductGrid';
import Filtering from '@/components/nestable/Filtering';
import MyText from '@/components/nestable/MyText';

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

  const mytext = liveStory.content.mytext;

  return (
    <div>
      {mytext && <MyText blok={mytext} />}
      <Filtering 
        blok={liveStory.content}
        setSelectedCategory={setSelectedCategory}  // Pass the function here
        selectedCategory={selectedCategory}
      />
      <ProductGrid 
        blok={liveStory.content}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}
