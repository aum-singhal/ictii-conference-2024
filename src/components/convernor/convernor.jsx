import "./convernor.css";

export default function Convernor(){
  const data = [
    {name:"Dr. B/M/k. Prasad", title:"Director, DCE"},
    {name:"Dr. Isha Malhotra", title:"Principal, DCE"},
    {name:"Prof. Yashwardhan Soni", title:"Academic Administrator, DCE"},
    {name: "Dr. Ghanshyam Singh", title:"Professor, University of Johannesburg"},
    {name: "Dr. Shyam S. Pandey", title:"Assistant Profess, Kyushu Institute of Technology"},
    {name:"Dr. Ashima Mehta", title:"HOD, DCE"},
    {name:"Dr. Manoj Kumar", title:"Assistant Professor, DCE"},
    {name:"Ms Renu Narwal", title:"Assistant Professor, DCE"},
    {name: "Dr. Hansraj Yadav", title:"Registrar, DCE"}
  ]

  return <div className="convernor padding-2-3">
    <div className="font-36 bold text-center">Convernors</div>
    <br /><br />
    <div className="flex flex-wrap con-images">
      {
        data.map((item)=><div key={item.name} className="item flex-d-col">
          <div className="font-14 semi-bold">{item.name}</div>
          <div className="font-12 semi-bold">{item.title}</div>  
        </div>)
      }
    </div>

  </div>
}