import { useState } from 'react'
import './App.css'
import Papers from './components/papers/papers'
import ImportantDates from './components/dates/dates'
import Navbar from './components/navbar/navbar'
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDateRange, MdLocationOn  } from "react-icons/md";
import Partners from './components/partners/partners'
import Convernor from './components/convernor/convernor'

function App() {
  const [count, setCount] = useState(0);
  const objective = [
    {title: "Emerging Industry 5.0 Challenges", desc:" Includes areas like advanced materials, AI and robotics, intelligent manufacturing, data security, and human-machine interaction."},
    {title: "Prominent Solutions and Research Directions", desc:"Encourage debate and discussion on existing approaches and opportunities for further innovation."},
    {title:"Collaboration Across Sectors", desc:"Facilitate networking and knowledge exchange to bridge the gap between research and practical applications."},
    {title:"Identifying Research Gaps and Needs", desc:"This could involve discussions on funding opportunities, infrastructure development, and talent acquisition."},
    {title:"Showcasing Successful Collaborations", desc:" Use case studies to demonstrate the value of cross-disciplinary partnerships in tackling industrial challenges."},
  ]

  return (
    <>
      <Navbar />
      <div id='home' className="landing-section flex-d-col flex-j-cen padding-3-2">

        <div className="font-28 semi-bold">
          International Conferrence on 
          <br />
          <div className="title bold">
            Technological Innovations in Industry 5.0 (ICTII)
          </div>
        </div>
        <div className="font-22 medium-bold">
          Organised by: Dronacharya College of Engineering (DCE)
        </div>

        <br />
        <div className="flex flex-wrap">
          <a className='submit-paper' href="">Abstract Submition</a>
          <a className='register' href="">Register</a>
        </div>
      </div>

      <div id='about' className="conference-details flex">
        <div className="dates item">
          <div className="left"><MdDateRange /></div>
          <div className="right">
            <div className="font-24 bold">Conference Date</div>
            <div className="font-20 semi-bold">25<sup>th</sup> Feb, 2024</div>
          </div>
        </div>
        <div className="venue item">
          <div className="left"><MdLocationOn /></div>
          <div className="right">
            <div className="font-24 bold">Conference Venue</div>
            <div className="font-20 semi-bold">DCE, Khentawas, Gurgaon, India</div>
          </div>
        </div>
        <div className="contact item">

        </div>
      </div>
      
      <div className="about-conference padding-0-1">
        <div className="font-36 bold  text-center">Industry 5.0</div>
        <div className="font-20 medium-bold text-justify padding-2-3">
          Industry 5.0 is the next industrial revolution to leverage the creativity of human experts in collaboration with efficient, intelligent and collaborative robots.  
          It will obtain resource-efficient and user preferred manufacturing solutions. 
          The potential applications of Industry 5.0 are intelligent healthcare, cloud manufacturing, supply chain management and manufacturing production. 
          The supporting technologies for Industry 5.0 are edge computing, digital-twins collaborative robots, Internet of every things, blockchain, and 6G and beyond networks.
        </div>
      </div>

      <div className="objective padding-2-3">
        <div className="font-36 bold text-center">Objective of ICTII, 24</div>
        <br />
        <div className="objective-elements">
          {
            objective.map((item,index)=><div key={index} className='item'>
              <div className="title bold font-22 flex-a-cen"><FaRegCheckCircle /> &nbsp; {item.title}</div>
               <div className="font-18 semi-bold">{item.desc}</div>
            </div>)
          }
        </div>
      </div>

      {/* <div className="about-college padding-3-2">
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
      </div> */}

      <ImportantDates />

      <Convernor />

      <Papers />

      <Partners />

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
