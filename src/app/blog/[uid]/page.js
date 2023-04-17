import BlogPost from "@/components/Blog/BlogPost";
import { getDocuments } from "@/utils/fetchBlogs";

export async function generateStaticParams() {
  const posts = await getDocuments("blog");

  return posts.map((post) => {
    return {
      uid: post.uid,
    };
  });
}

export async function generateMetadata({ params }) {
  const post = await getDocuments("blog", params.uid);
  return { title: post?.title };
}

export default async function Page({ params }) {
  const post = await await getDocuments("blog", params.uid);

  if (!post) return <h1>Oops... No encontramos nada</h1>;

  return <BlogPost post={post} />;
}
