import Image from "next/image";
import Footer from "./components/Footer";
import TopSellings from "./components/landing-page/TopSellings";
import WeeklyDiscounts from "./components/landing-page/WeeklyDiscounts";
import NewProducts from "./components/landing-page/NewProducts";
import LandingHeader from "./components/LandingHeader";


export default function Home() {
  return (
    <main className="w-full">
      
        <LandingHeader/>
        <NewProducts/>
        <WeeklyDiscounts/>
        <TopSellings/>
        <Footer/>
      
    </main>
  );
}
