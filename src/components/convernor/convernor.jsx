import "./convernor.css";

export default function Convernor(){
  const data=[
    {
      head: "Cheif Patron",
      person: [
        {name:"Dr. B/M/k. Prasad", title:"Director, DCE"},
        {name:"Dr. Isha Malhotra", title:"Principal, DCE"},
      ]
    },
    {
      head: "Co-Patrons",
      person: [
        {name:"Prof. Yashwardhan Soni", title:"Academic Administrator, DCE"},
      ]
    },
    {
      head: "Chief Person",
      person: [
        {name: "Dr. Ghanshyam Singh", title:"Professor, University of Johannesburg"},
        {name: "Dr. Shyam S. Pandey", title:"Assistant Profess, Kyushu Institute of Technology"},
      ]
    },
    {
      head: "Conference General Chair",
      person: [
        {name:"Dr. Ashima Mehta", title:"HOD, DCE"},
      ]
    },
    {
      head: "Convenor",
      person: [
        {name:"Dr. Manoj Kumar", title:"Assistant Professor, DCE"},
      ]
    },
    {
      head: "Co-Convenor",
      person: [
        {name:"Ms Renu Narwal", title:"Assistant Professor, DCE"},
      ]
    },
    {
      head: "Organizing Secretary",
      person: [  
        {name: "Dr. Hansraj Yadav", title:"Registrar, DCE"}
      ]
    }
  ];

  return <div className="convernor padding-2-3">
    <div className="font-36 bold text-center">Convenors</div>
    <br /><br />
    <div className="con-groups flex-wrap">
      {
        data.map((item)=><div key={item.head} className="con-images">
          <div className="font-20 semi-bold">{item.head}</div>
          <div className="image-holder flex-wrap">
            {
              item.person.map((element)=><div key={element.name} className="item flex-d-col">
                <div className="font-14 semi-bold">{element.name}</div>
                <div className="font-12 semi-bold">{element.title}</div>  
              </div>)
            }
          </div>
        </div>)
      }
    </div>

  </div>
}