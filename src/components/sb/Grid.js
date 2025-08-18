import ServerComponent from "./ServerComponent";

export default function Grid({ blok }) {
  console.log(blok);
  return (
    <div
      className="grid gap-4 w-full grid-cols-[repeat(auto-fit,minmax(15.625rem,1fr))]"
    >
      {blok.columns.map((nestedBlok) => (
        <ServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
