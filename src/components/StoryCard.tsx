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

interface StoryCardProps {
  title: string;
  englishText: string;
  translationMap: { [key: string]: string };
}

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  englishText,
  translationMap,
}) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const handleWordClick = (word: string) => {
    setSelectedWord(word);
  };

  const getTranslation = (word: string) => {
    return translationMap[word] || "Translation not found";
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Tap on any word to see its translation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <h3 className="text-lg font-semibold mb-2">English</h3>
          <p>
            {englishText.split(/\s+/).map((word, index) => (
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
                  Translation: {getTranslation(word)}
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
