import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div>
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} alt="" />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <div className="">
      <Images />
    </div>
  );
}
