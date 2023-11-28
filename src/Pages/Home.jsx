import Hero from "../components/Home/Hero";
import Whycbit from "../components/Home/Whycbit";
import CourseInformation from "../components/Home/CourseInformation";
import Eligibility from "../components/Home/Eligibility"
import Ranking from "../components/Home/Ranking"
import Fees from "../components/Home/Fees";
// import Trusted from "../components/Home/Trusted";
export default function Home() {
    return (
      <main>
        <Hero/>
        <Whycbit/>
        <CourseInformation/>
        <Eligibility />
        <Ranking />
        <Fees />
        {/* <Trusted /> */}
      </main>
    );
  }
  