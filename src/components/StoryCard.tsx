"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useState } from "react";
import { Story } from "@/services/story-service";
import { aDayAtTheParkDictionary } from "@/lib/dictionaries/aDayAtTheParkDictionary";

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({
  story,
}) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const handleWordClick = (word: string) => {
    setSelectedWord(word);
  };

  const getTranslation = (word: string) => {
    const lowerCaseWord = word.toLowerCase();
    return aDayAtTheParkDictionary[lowerCaseWord] || "Translation not found";
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{story.title}</CardTitle>
        <Popover>
          <PopoverTrigger asChild>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">English</h3>
              <p>
                {story.content.split(/\s+/).map((word, index) => (
                  <span
                    key={index}
                    className="cursor-pointer hover:bg-accent/20 rounded-md px-1"
                    onClick={() => handleWordClick(word)}
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </CardContent>
          </PopoverTrigger>
          <PopoverContent className="w-auto">
            {selectedWord && getTranslation(selectedWord)}
          </PopoverContent>
        </Popover>
      </CardHeader>
    </Card>
  );
};

export default StoryCard;
