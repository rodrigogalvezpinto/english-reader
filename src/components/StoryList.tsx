"use client";

import StoryCard from "@/components/StoryCard";
import React from "react";

const StoryList: React.FC = () => {
  const stories = [
    {
      title: "The Little Cat",
      englishText: "Once upon a time, there was a little cat. The cat liked to play in the garden.",
      translationMap: {
        "Once": "Había",
        "upon": "una",
        "a": "vez",
        "time,": "vez,",
        "there": "había",
        "was": "era",
        "little": "pequeño",
        "cat.": "gato.",
        "The": "Al",
        "cat": "gato",
        "liked": "gustaba",
        "to": "de",
        "play": "jugar",
        "in": "en",
        "the": "el",
        "garden.": "jardín."
      }
    },
    {
      title: "The Big Dog",
      englishText: "Once upon a time, there was a big dog. The dog liked to eat a lot.",
      translationMap: {
        "Once": "Había",
        "upon": "una",
        "a": "vez",
        "time,": "vez,",
        "there": "había",
        "was": "era",
        "big": "grande",
        "dog.": "perro.",
        "The": "Al",
        "dog": "perro",
        "liked": "gustaba",
        "to": "de",
        "eat": "comer",
        "a": "mucho",
        "lot.": "mucho."
      }
    }
  ];

  return (
    <div>
      {stories.map((story, index) => (
        <StoryCard
          key={index}
          title={story.title}
          englishText={story.englishText}
          translationMap={story.translationMap}
        />
      ))}
    </div>
  );
};

export default StoryList;
