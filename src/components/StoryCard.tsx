"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import React, {useState} from "react";

interface StoryCardProps {
  title: string;
  englishText: string;
  spanishText: string;
}

const StoryCard: React.FC<StoryCardProps> = ({title, englishText, spanishText}) => {
  const [highlightedWord, setHighlightedWord] = useState<string | null>(null);

  const handleWordClick = (word: string) => {
    setHighlightedWord(word);
  };

  // Simple translation logic - replace with a more robust solution if needed
  const getTranslation = (word: string) => {
    const englishWords = englishText.split(/\s+/);
    const spanishWords = spanishText.split(/\s+/);
    const wordIndex = englishWords.indexOf(word);

    if (wordIndex !== -1 && wordIndex < spanishWords.length) {
      return spanishWords[wordIndex];
    }
    return "Translation not found";
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Tap on any word to see its translation</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <h3 className="text-lg font-semibold mb-2">English</h3>
          <p>
            {englishText.split(/\s+/).map((word, index) => (
              <span
                key={index}
                className="cursor-pointer hover:bg-teal-100"
                onClick={() => handleWordClick(word)}
              >
                {word}{" "}
              </span>
            ))}
          </p>
          {highlightedWord && (
            <div className="mt-4">
              <h3 className="text-md font-semibold">
                Translation of "{highlightedWord}":
              </h3>
              <p>{getTranslation(highlightedWord)}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
