import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Teaser({ blok }) {
  return (
    <Card className="teaser">
      <CardHeader>
        <CardTitle className="text-2xl">{blok.headline}</CardTitle>
        <CardDescription>{blok.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
