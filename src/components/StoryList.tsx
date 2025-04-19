"use client";

import StoryCard from "@/components/StoryCard";
import React, { useEffect, useState } from "react";
import { getStoriesByLevel } from "@/services/story-service";
import { Story } from "@/services/story-service";

const StoryList: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const fetchStories = async () => {
      const stories = await getStoriesByLevel("a1");
      setStories(stories);
    };

    fetchStories();
  }, []);

  return (
    <div>
      {stories.map((story, index) => (
        <StoryCard
          key={index}
          story={story}
        />
      ))}
    </div>
  );
};

export default StoryList;
