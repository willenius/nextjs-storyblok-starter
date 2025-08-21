import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { storyblokEditable } from "@storyblok/react";

export default function Teaser({ blok }) {
  return (
    <Card {...storyblokEditable(blok)} className="teaser">
      <CardHeader>
        <CardTitle className="text-2xl">{blok.headline}</CardTitle>
        <CardDescription>{blok.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
