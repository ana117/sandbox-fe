import Card from "./Card.tsx";

export default function NavCard(
  props: Readonly<
    { url: string; title: string; description: string; image?: string }
  >,
) {
  const content = (
    <a
      href={props.url}
      className="flex flex-col items-center justify-center gap-4 p-4 h-full bg-primary rounded-lg"
    >
      <h3 className="text-lg font-semibold text-white">{props.title}</h3>
      <p className="text-sm text-white">{props.description}</p>
    </a>
  );

  if (props.image) {
    let image = props.image;
    if (!image.startsWith("/images/")) {
      image = "/images/" + image;
    }
    const imageFace = (
      <a href={props.url} className="relative block h-full rounded-lg">
        {image && (
          <img
            src={image}
            alt={props.title}
            className="w-full h-full object-cover rounded-lg"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background from-5% flex items-end justify-center p-2 rounded-md">
          <h3 className="text-lg font-bold text-primary">{props.title}</h3>
        </div>
      </a>
    );

    return <Card component={imageFace} backComponent={content} />;
  }

  return <Card component={content} />;
}
