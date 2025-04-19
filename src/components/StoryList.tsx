"use client";

import StoryCard from "@/components/StoryCard";
import React from "react";

const StoryList: React.FC = () => {
  const stories = [
    {
      title: "The Little Cat",
      englishText: "Once upon a time, there was a little cat. The cat liked to play in the garden.",
      spanishText: "Había una vez, un pequeño gato. Al gato le gustaba jugar en el jardín."
    },
    {
      title: "The Big Dog",
      englishText: "Once upon a time, there was a big dog. The dog liked to eat a lot.",
      spanishText: "Había una vez, un perro grande. Al perro le gustaba comer mucho."
    }
  ];

  return (
    <div>
      {stories.map((story, index) => (
        <StoryCard
          key={index}
          title={story.title}
          englishText={story.englishText}
          spanishText={story.spanishText}
        />
      ))}
    </div>
  );
};

export default StoryList;
