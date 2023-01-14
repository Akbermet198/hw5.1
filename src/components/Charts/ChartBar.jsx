import "./ChartBar.css"

export const ChartBar = (props)=>{
 const maximalPrice = 2000
 const percentage = (props.currentPrice/maximalPrice)*100

 return(
  <div className="chart-bar">
    <div className="chart-bar__inner"    >
     <div className="chart-bar__fill" style={{height: `${percentage}%` }}></div>
    </div>
    <p className="chart-bar__label"> {props.label}</p>
  </div>
 )
}