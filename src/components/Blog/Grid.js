import Image from "next/image";
import Link from "next/link";
import Social from "../../components/Social/index";

export default async function Grid({ blogs }) {
  return (
    <>
      <h1 className="text-center text-4xl mb-5">Bienvenidos al blog</h1>
      <Social />
      <section className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <article
            className="w-full h-full rounded-lg shadow-md bg-white"
            key={blog.uid}
          >
            <Image
              src={blog.thumbnail}
              width={300}
              height={300}
              alt="Blog thumbnail"
              priority
              className="object-cover mb-2 w-full"
            />
            <div className="flex flex-col gap-y-3 p-3">
              <h5 className="text-xl mb-2">{blog.title}</h5>
              <p className="text-base">
                {blog.description} <br />
                <Link className="" href={`blog/${blog.uid}`}>
                  Seguir leyendo...
                </Link>
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
