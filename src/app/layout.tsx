import { Nunito } from "next/font/google";
import "./globals.css";
import MyAuth0Provider from "@/providers/MyAuth0Provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Dish Dash",
  description: "Online food order shop",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MyAuth0Provider>
      <html lang="en" className="scroll-smooth">
        <body className={nunito.className}>
          <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">{children}</div>
          </main>
          <Footer />
        </body>
      </html>
    </MyAuth0Provider>
  );
};

export default RootLayout;
