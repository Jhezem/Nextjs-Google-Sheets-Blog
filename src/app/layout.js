import "./globals.css";

export const metadata = {
  title: "Blog with Nextjs and Google Sheets",
  description:
    "This is a blog created with nextjs using google sheets as headless CMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
