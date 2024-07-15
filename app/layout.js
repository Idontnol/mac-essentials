
import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReduxProvider } from "./utils/provider";

const inter = Inter({ subsets: ["latin"] });
// Define the Poppins font
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata = {
  title: "Mac Essentials",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-[100vw] overflow-x-hidden`} >
      <ReduxProvider>
          <Navbar/>
          {children}
          </ReduxProvider>
      </body>
    </html>
  );
}
