import { storyblokEditable } from "@storyblok/react/rsc";
import ServerComponent from "./ServerComponent";

export default function Feature({ blok }) {
  return (
    <div
      className="feature shadow-md p-4 rounded-md w-75"
      {...storyblokEditable(blok)}
    >
      <img
        src={`https://www.dif.se/_next/image?url=https%3A%2F%2Fbackend.dif.se%2Fmedia%2Fqw2frz1n%2Fdif_fotboll_lockup_vertical_rgb.png&w=828&q=80=${blok._uid}`}
        alt={blok.name}
        className="w-full aspect-square object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold">{blok.name}</h2>
      <p className="text-gray-600">{blok.description}</p>
      <div className="flex flex-col gap-2">
        {blok?.cta?.map((nestedBlok) => (
          <ServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>

    </div>
  );
}
