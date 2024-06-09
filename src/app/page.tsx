import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/29bd5eea-b25c-4db1-96ef-7e22b8962405-23a.jpg",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/63bc0488-30ad-4ab1-9950-12af9cc622a3-1t9xah.jpg",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/24575920-d901-4b15-80d4-35fb9a13f11a-fd1imo.jpg",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/19af4aa7-6967-4a22-8314-0b2e69f82611-3pnpbx.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
