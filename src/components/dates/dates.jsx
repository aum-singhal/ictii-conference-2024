import "./dates.css";

export default function ImportantDates (){
  return <div id="dates" className="important-dates padding-3-2">
    <div className="font-28 font-rubic-mono text-center">Important Dates</div>
    
    <br /><br />

    <div className="flex-a-cen-j-cen flex-wrap">
      <div className="date-card">
        <div className="title font-22 semi-bold">
          Full Length Paper Submission
          </div>
        
        <div className="font-20 medium-bold">
          10<sup>th</sup> Feb, 2024
        </div>
      </div>

      <div className="date-card">
        <div className="title font-22 semi-bold">
          Acceptance
          </div>
        
        <div className="font-20 medium-bold">
          20<sup>th</sup> Feb, 2024
        </div>
      </div>

      <div className="date-card">
        <div className="title font-22 semi-bold">
          Registration
          </div>
        
        <div className="font-20 medium-bold">
          25<sup>th</sup> Feb, 2024
        </div>
      </div>
    </div>
  </div>
}