import './Chart.css'
import { ChartBar } from './ChartBar'

export const Chart = ( props)=>{

const months = [
 {
   label: "January",
   currentPrice: 0,
 },
 {
   label: "February",
   currentPrice: 0,
 },
 {
   label: "March",
   currentPrice: 0,
 },
 {
   label: "April",
   currentPrice: 0,
 },
 {
   label: "May",
   currentPrice: 0,
 },
 {
   label: "June",
   currentPrice: 0,
 },
 {
   label: "July",
   currentPrice: 0,
 },
 {
   label: "August",
   currentPrice: 0,
 },
 {
   label: "September",
   currentPrice: 0,
 },
 {
   label: "Oktober",
   currentPrice: 0,
 },
 {
   label: "November",
   currentPrice: 0,
 },
 {
   label: "December",
   currentPrice: 0,
    },
  ];

props.expenses.forEach((element)=>{
 const newDate = new Date(element.date)
 const monthNumber = newDate.getMonth()
 months[monthNumber].currentPrice += element.price 
})


 return(
  <div className='chart'>
 {months.map((element)=>{
  return (
<ChartBar  
key={element.label}
label={element.label} currentPrice = {element.currentPrice}
/>
  )
 })}
    
    

  </div>
 )
}