import { Nunito } from "next/font/google";
import "./globals.css";
import MyAuth0Provider from "@/providers/MyAuth0Provider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Default Form",
  description: "login user form",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MyAuth0Provider>
      <html lang="en">
        <body className={nunito.className}>
          <main>{children}</main>
        </body>
      </html>
    </MyAuth0Provider>
  );
};

export default RootLayout;
