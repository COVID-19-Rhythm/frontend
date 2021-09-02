import React from "react";
import logo from "../images/logo3.png";
import phone from "../images/phone2.png";
import "./home.css";
import Particles from 'react-particles-js';
function Home() {
  return (
    <div>
      <div className="background">
        <div className="background2">
          <div className="orientation">
            <div className="logo">
            <svg width="262" height="111" viewBox="0 0 262 111" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.96875 68V35.1875H5.15625V68H1.96875ZM7.40625 53.5156V50.5625H12.9844C16.0469 50.5625 17.7969 49.0938 18.2344 46.1562C18.2969 45.625 18.3281 45.0469 18.3281 44.4219C18.3281 40.8281 16.8906 38.7656 14.0156 38.2344C13.4219 38.1094 12.7812 38.0469 12.0938 38.0469H7.40625V35.1875H12.9375C18.5938 35.4688 21.4375 38.5 21.4688 44.2812C21.4375 48.0625 20.3594 50.6406 18.2344 52.0156C20.2031 52.9219 21.3438 54.7344 21.6562 57.4531C21.6875 57.6094 21.7031 57.7344 21.7031 57.8281L22.5 68H19.4531L18.75 59.6562C18.5312 56.8438 17.8281 55.0469 16.6406 54.2656C15.7969 53.7344 14.6875 53.4844 13.3125 53.5156H7.40625ZM25.6875 68.0938V35.0469H28.6875V45.5C29.9062 44.1875 31.5312 43.5156 33.5625 43.4844V46.3906C32.0625 46.3906 30.7656 47.0312 29.6719 48.3125C29.0469 49.0625 28.7344 49.7969 28.7344 50.5156V68.0938H25.6875ZM35.7188 46.3906V43.4844C38.625 43.4844 40.7812 44.5156 42.1875 46.5781C42.9375 47.6719 43.3125 48.8438 43.3125 50.0938V68.0938H40.3125V50.5156C40.3125 49.0469 39.6875 47.9062 38.4375 47.0938C37.6562 46.625 36.75 46.3906 35.7188 46.3906ZM45.2812 43.1562H48.4688L55.9219 62.6094L51.2344 76.7656H48.0938L52.6875 62.5625L45.2812 43.1562ZM55.4062 55.625L60.4688 43.1562H63.7031L57.0938 59.7031H56.7656L55.4062 55.625ZM64.6875 46.5312V43.5312H67.7344V35H70.875V43.5312H73.8281V46.5312H70.875V60.3594C70.875 62.6719 71.6562 64.0938 73.2188 64.625C73.8438 64.8125 74.5625 64.9062 75.375 64.9062H75.7969L76.4531 68H75.1875C71.375 67.9688 69.0469 66.5312 68.2031 63.6875C67.8906 62.6562 67.7344 61.3906 67.7344 59.8906V46.5312H64.6875ZM78.4688 68.0938V35.0469H81.4688V45.5C82.6875 44.1875 84.3125 43.5156 86.3438 43.4844V46.3906C84.8438 46.3906 83.5469 47.0312 82.4531 48.3125C81.8281 49.0625 81.5156 49.7969 81.5156 50.5156V68.0938H78.4688ZM88.5 46.3906V43.4844C91.4062 43.4844 93.5625 44.5156 94.9688 46.5781C95.7188 47.6719 96.0938 48.8438 96.0938 50.0938V68.0938H93.0938V50.5156C93.0938 49.0469 92.4688 47.9062 91.2188 47.0938C90.4375 46.625 89.5312 46.3906 88.5 46.3906ZM99.6094 68V49.8125C99.6094 47.9688 100.281 46.375 101.625 45.0312C102.969 43.6875 104.703 43.0156 106.828 43.0156V46.0156C105.016 46.0156 103.781 46.8125 103.125 48.4062C102.875 49 102.75 49.6094 102.75 50.2344V68H99.6094ZM108.891 46.0156V43.0156C111.234 43.0156 113.047 43.7969 114.328 45.3594C114.453 45.5156 114.562 45.6562 114.656 45.7812C115.781 44.2188 117.219 43.3281 118.969 43.1094C119.406 43.0469 119.859 43.0156 120.328 43.0156V46.0156C118.453 46.0156 117.188 46.8281 116.531 48.4531C116.312 49.0156 116.203 49.6094 116.203 50.2344V68H113.062V50.2344C113.062 48.4844 112.359 47.2344 110.953 46.4844C110.328 46.1719 109.641 46.0156 108.891 46.0156ZM122.438 46.0156V43.0156C125.375 43.0156 127.5 44.25 128.812 46.7188C129.375 47.7812 129.656 48.8125 129.656 49.8125V68H126.516V50.2344C126.516 48.3594 125.781 47.0781 124.312 46.3906C123.75 46.1406 123.125 46.0156 122.438 46.0156Z" fill="white"/>
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="137" y="0" width="125" height="111">
<path d="M139 51.2795H169.474L181.574 80.6397L193.226 1L204.878 110L214.737 26.3232L220.563 51.2795H260" stroke="black" stroke-width="4" stroke-linecap="round"/>
</mask>
<g mask="url(#mask0)">
<rect x="126.971" y="-6.35583" width="145.058" height="119.699" fill="url(#paint0_linear)"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="199.5" y1="-6.35583" x2="199.5" y2="113.344" gradientUnits="userSpaceOnUse">
<stop stop-color="#56CFE1"/>
<stop offset="1" stop-color="#72EFDD" stop-opacity="0.56"/>
</linearGradient>
</defs>
</svg>

              {/* <img src={logo} alt="logo" className="logoImage" /> */}
            </div>
            <br/>
            <h1 className="home-text">Detect COVID-19<br/> with your Heart Rate </h1>
            
          </div>
        </div>
        <div>
          
        </div>
        <Particles/>
      </div>
    </div>
  );
}

export default Home;
