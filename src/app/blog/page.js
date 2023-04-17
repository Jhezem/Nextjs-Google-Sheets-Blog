import Grid from "@/components/Blog/Grid";
import { getDocuments } from "@/utils/fetchBlogs";

export default async function Page() {
  const posts = await getDocuments("blog");
  return <Grid blogs={posts} />;
}