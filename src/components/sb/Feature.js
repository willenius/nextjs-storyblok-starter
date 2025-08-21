import { storyblokEditable } from "@storyblok/react/rsc";
import ServerComponent from "./ServerComponent";
import { Card, CardContent } from "@/components/ui/card";

export default function Feature({ blok }) {
  return (
    <Card
    {...storyblokEditable(blok)}
      className="w-75 pt-0"
    >
      <img
        src={`https://picsum.photos/250/250?random=${blok._uid}`}
        alt={blok.name}
        className="w-full aspect-square object-cover rounded-t-md"
      />
      <CardContent className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">{blok.name}</h2>
      <p className="text-gray-600">{blok.description}</p>
        {blok?.cta?.map((nestedBlok) => (
          <ServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </CardContent>

    </Card>
  );
}
