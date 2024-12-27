import "./globals.css";
import NAVbar from "./component/navbar";
import Footer from "./component/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-pink-200">
        <NAVbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
