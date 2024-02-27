import "./App.css";

import logo from "./asserts/logo.png";
import pic1 from "./asserts/1.png";
import pic2 from "./asserts/2.png";
import pic3 from "./asserts/3.png";

const Header = () => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <i class="fa-solid fa-phone"></i>
        Toll free: 18002001234
      </div>
      <div>
        <i class="fa-brands fa-facebook"></i>
        www.facebook.com/cripumps
      </div>
      <div>
        <i class="fa-solid fa-globe"></i>
        www.crigroups.com
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="content">
      <div className="first-page">
        <img src={pic1} alt="logo" />
        <div className="first-page-details">
          <ol>
            <b>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </b>
            <br />
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </ol>
          <img src={pic2} alt="logo" />
          <div className="matter">
            Government of India has awarded the
            <span className="bold-text">
              "National Energy Conservation Award 2018"
            </span>
            . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </div>
          <br />
        </div>
      </div>
      <div className="second-page">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
        <img src={pic3} alt="pic3" />
        <div>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </div>
      </div>
      <div className="third-page">
        <div class="line"></div>
        <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
        <div className="services">
          <div className="service">CHEMICALS & PROCESS</div>
          <div className="service">POWER WATER & WASTE WATER</div>
          <div className="service">OILS & GAS</div>
          <div className="service">PHARMA</div>
          <div className="service">SUGARS & DISTILLERIES</div>
          <div className="service">PAPER & PULP</div>
          <div className="service">MARINE & DEFENCE</div>
          <div className="service">METAL & MINING</div>
          <div className="service">FOOD & BEVERAGE</div>
          <div className="service">PETROCHEMICAL & REFINERIES</div>
          <div className="service">SOLAR</div>
          <div className="service">BUILDING</div>
          <div className="service">HVAC</div>
          <div className="service">FIRE FIGHTING</div>
          <div>AGRICULTURE & RESIDENTIAL</div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
