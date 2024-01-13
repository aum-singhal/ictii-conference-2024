import { useState } from 'react'
import './App.css'
import Papers from './components/papers/papers'
import ImportantDates from './components/dates/dates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="landing-section flex-d-col flex-j-cen padding-3-2">

        <div className="font-56 font-rubic-mono">
          The Wait is Over!!
        </div>
        <div className="font-20 semi-bold padding-0-1">
          Launching the biggest conference on Technological Innovations in Industry {"("}ICTII 2024{")"}
        </div>

        <br /><br />
        <div className="flex flex-wrap">
          <a className='register' href="">Register for Event</a>
          <a className='submit-paper' href="">Submit Paper</a>
        </div>
      </div>
      
      <div className="about-conference padding-3-2">
        <div className="font-36 font-rubic-mono text-left">About the Conference {"("}ICTTI 2024{")"}</div>
        <br />
        <div className="font-20 medium-bold text-justify padding-0-1">
        <div className="font-24 font-rubic-mono">-{">"} Overview</div>
        Industry 5.0 is the next industrial revolution to leverage the creativity of human experts in collaboration with efficient, intelligent and collaborative robots.  It will obtain resource-efficient and user preferred manufacturing solutions. The potential applications of Industry 5.0 are intelligent healthcare, cloud manufacturing, supply chain management and manufacturing production. The supporting technologies for Industry 5.0 are edge computing, digital-twins collaborative robots, Internet of every things, blockchain, and 6G and beyond networks.
        <br /><br />
        <div className="font-24 font-rubic-mono">-{">"} Objective</div>
        The aim of this conference is to highlight various state-of-art potential challenges to be addressed to researchers, academicians, and industry and with their prominent solutions. ICTITI 24 aims to bring the researchers, academicians, industry, and government personnel together to share and discuss the various challenges, research gaps towards innovations in industry 5.0. It will provide common platform of discussion to various research scholars and academicians to explore new challenges with their solutions. We hope that ICTITI 24 will lead to significant contributions to the knowledge base in these technologies.
        </div>
      </div>

      <div className="about-college padding-3-2">
        <div className="font-36 text-center font-rubic-mono">About the College</div>
        <br />
        <div className="font-20 medium-bold text-justify padding-0-1">
        Dronacharya College of Engineering, Gurgaon is imparting technical education since 1998. 
        The college is undoubtedly, a preferred choice of budding engineers where every aspirant gets an equal opportunity to think, wonder, visualize, explore experiment and design his career as per his interest and demands of the MNCs. 
        Here, we promote the growth of entrepreneurs, technocrats and engineers who contribute to the services of the society and Nation. 
        
        <br /><br />
        We, at Dronacharya College of Engineering, are absolutely committed to serve the society and improve the mode of life by imparting high quality education in the field of Engineering and Management catering to the explicit and implicit needs of the students, society, humanity and industry. "Shiksha evam Sahayata" i.e. 
        Education and Help are the two words etched on our banner soaring higher year after year. 
        Our goal is to continuously improve the healthy learning environment and facilities being provided to the students to achieve academic excellence for employability as world class Technocrats and Managers, apart from making them noble human beings of a nation growing from strength to strength, dispelling the darkness of ignorance and ameliorating the society by means of philanthropic endeavors. 
        The college offers Bachelor of Technology course in CSE, CSEIT, CSE {"("}AI- ML{")"}, CSE {"("}IoT{")"}, IT, ECE, ME, and Robotics and Automation and Master of Technology course in CSE, IT, ECE, and ME.

        <br /><br />

        For more information, <a href="https://ggnindia.dronacharya.info/" target='_blank'>Check our Official Website</a>
        </div>
      </div>

      <ImportantDates />
      <Papers />

      <div className="register-section padding-3-2">
        <div className="font-56 font-bebas">
          So what are you waiting for,
          <br /> Register Now!!
        </div>

        <br /><br />

        <div className="flex flex-wrap">
          <a className='register' href="">Register for Event</a>
          <a className='submit-paper' href="">Submit Paper</a>
        </div>

      </div>
    </>
  )
}

export default App
