import Footer from "../components/Footer";
import LandingHeader from "../components/LandingHeader";
import NewProducts from "../components/landing-page/NewProducts";
import TopSellings from "../components/landing-page/TopSellings";
import WeeklyDiscounts from "../components/landing-page/WeeklyDiscounts";

const LandingPage=()=>{
    return(
        <div className="w-full">
            <LandingHeader/>
            <NewProducts/>
            <WeeklyDiscounts/>
            <TopSellings/>
            <Footer/>
        </div>
    )
}

export default LandingPage;