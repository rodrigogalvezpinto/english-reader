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
import { ScrollArea } from "@/components/ui/scroll-area";
import { globalDictionary } from "@/lib/dictionary";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  const handleWordClick = (word: string) => {
    setSelectedWord(word);
  };

  const getTranslation = (word: string) => {
    const translation = globalDictionary.getTranslation(word);
    return translation || "Translation not found";
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{story.title}</CardTitle>
        <div className="flex justify-end">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">View Dictionary</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Story Dictionary</DialogTitle>
                <DialogDescription>
                  Translations for "{story.title}"
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="h-[400px] w-full rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left font-medium">English</th>
                      <th className="text-left font-medium">Español</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(story.word_translations).map(
                      ([english, spanish]) => (
                        <tr key={english}>
                          <td className="py-2">{english}</td>
                          <td className="py-2">{spanish}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
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
                {selectedWord && getTranslation(selectedWord)}
              </PopoverContent>
            </Popover>
          ))}
        </p>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
