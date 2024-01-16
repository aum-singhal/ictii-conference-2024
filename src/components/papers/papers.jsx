import "./papers.css";
import ai from "../../assets/papers/ai.png";
import cloud from "../../assets/papers/cloud.png"
import security from "../../assets/papers/security.png"
import nanotech from "../../assets/papers/nanotech.png"
import sixg from "../../assets/papers/6g.jpg"
import robotics from "../../assets/papers/robotics.jpeg"

export default function Papers (){
  const data = [
    {title: "Artificial Intelligence and Machine Learning for Industry 5.0", img: ai},
    {title: "Next Generation Virtualization Technology: Cloud to Sky computing", img: cloud},
    {title: "Block Chain, Cyber Security, and Digital Forensics for Industry 5.0", img: security},
    {title: "Mechatronics and Nanotechnology in Industry 5.0", img: nanotech},
    {title: "5G/6G Smart Networks in Industry 5.0", img: sixg},
    {title: "Advanced Robotics and Automation in Industry 5.0", img: robotics}
  ];

  return <div id="tracks" className="flex papers flex-d-col">
    <div className="text-center font-28 font-rubic-mono">
      Session Tracks
    </div>
    <br />
    <div className="flex">
      {
        data.map(item=><Card item={item} />)
      }

    </div>
  </div>
}

const Card = ({item}) =>{
  return <div className="card text-left">
    <img src={item.img} alt="" />
    <div className="text font-24 font-rubic-mono">{item.title}</div>
  </div>
}