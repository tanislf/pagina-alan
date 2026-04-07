import { Link } from "react-router-dom";
// import SplitText from "../components/Animations/Splitext";
import sayarlogo from "../images/Sayar-L.png";
// import cafartaza from "../images/cafartaza.jpg";

function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section className="home">
      <h1 className="home__title">
        DISEÑO <br /> <span className="home__title-span">INDUSTRIAL</span>
      </h1>
      <p className="home__subtitle">Puebla. México</p>
    </section>
  );
}

export default Home;
