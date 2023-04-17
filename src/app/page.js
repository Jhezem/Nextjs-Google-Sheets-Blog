import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Social from "../components/Social/index";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main
      className={` ${roboto.className} flex min-h-screen flex-col items-center justify-start p-10 gap-y-5`}
    >
      <div className="container">
        <h1 className="text-5xl mb-3">Hola, bienvenido!</h1>
        <h2 className="text-3xl">
          Este <Link href={"/blog"}>blog</Link> es un ejemplo creado con Nextjs
          13 :D y Google Sheets
        </h2>
      </div>
      <section className="container">
        <h3 className="text-2xl mb-2">Este es un ejemplo del sheet :O</h3>
        <div className="relative w-full h-full shadow-md mb-5">
          <Image
            src="/img/sheet.png"
            width={1200}
            height={420}
            alt="sheet example"
            className="object-contain w-full"
            priority
          />
        </div>
        <div className="text-center">
          <Link
            href="/blog"
            className="text-xl bg-indigo-600 hover:bg-indigo-700	text-white px-6 py-3 rounded-full"
          >
            ver blog
          </Link>
        </div>
      </section>
      <section>
        <Social />
      </section>
    </main>
  );
}
