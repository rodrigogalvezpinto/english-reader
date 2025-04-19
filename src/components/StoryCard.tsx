"use client";

import {
  Card,
  CardContent,
  CardDescription,
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
    return story.word_translations[word] || "Translation not found";
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{story.title}</CardTitle>
        <CardDescription>
          Tap on any word to see its translation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <h3 className="text-lg font-semibold mb-2">English</h3>
          <p>
            {story.content.split(/\s+/).map((word, index) => (
              <Popover key={index}>
                <PopoverTrigger asChild>
                  <span
                    className="cursor-pointer hover:bg-accent/20 rounded-md px-1"
                    onClick={() => handleWordClick(word)}
                  >
                    {word}{" "}
                  </span>
                </PopoverTrigger>
                <PopoverContent className="w-auto">
                   {getTranslation(word)}
                </PopoverContent>
              </Popover>
            ))}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
