import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";

interface StoryCardProps {
  title: string;
  englishText: string;
  spanishText: string;
}

const StoryCard: React.FC<StoryCardProps> = ({title, englishText, spanishText}) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Tap on any word to highlight it</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">English</h3>
            <p>{englishText}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Español</h3>
            <p>{spanishText}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
