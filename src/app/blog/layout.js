import { Roboto } from "next/font/google";

export const metadata = {
  title: "Blog with Nextjs and Google Sheets",
  description:
    "This is a blog created with nextjs using google sheets as headless CMS",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <main className={`${roboto.className} container mx-auto py-5`}>
          {children}
        </main>
      </body>
    </html>
  );
}
