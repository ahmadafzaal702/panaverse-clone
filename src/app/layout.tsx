import "./globals.css";

// layout imports
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Panaverse Clone - Afzaal Ahmad",
  creator: "Afzaal Ahmad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />

        {/* Main */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
