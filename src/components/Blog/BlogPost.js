import JSXMapper from "@/utils/contentGenerator/contentMapper";
import Link from "next/link";

export default function BlogPost({ post }) {
  return (
    <main>
      <nav className="mb-5">
        <Link
          className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-full"
          href={"/blog"}
        >
          Regresar
        </Link>
      </nav>
      <article className="container p-5">
        <JSXMapper content={post.content} />
      </article>
    </main>
  );
}
