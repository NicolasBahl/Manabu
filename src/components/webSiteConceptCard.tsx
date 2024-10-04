import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardUiProps = {
  icon: string;
  title: string;
  description: string;
};

export default function WebSiteConceptCard({
  icon,
  title,
  description,
}: CardUiProps) {
  return (
    <Card
      className={`max-w-[400px] max-h-[300px] mt-2 mb-2 ml-2 mr-2 bg-primary text-primary-foreground`}
    >
      <CardHeader className="text-center space-y-2">
        <div className="flex justify-center text-4xl" aria-hidden="true">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-primary-foreground/70 font-medium">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center line-clamp-3 overflow-hidden">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
