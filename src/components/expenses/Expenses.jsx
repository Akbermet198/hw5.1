import './expenses.css'
import { ExpensesItem } from "../ExpenseItem/ExpensesItem"

 
import { useState } from 'react'
import { ExpensesFilter } from '../expensesFilter/ExpensesFilter.jsx'
 
import { Chart } from '../Charts/Chart'

export const Expenses = (props)=>{
const [selectedYear, setSelectedYear]=useState('2022')

const yearChangeHandler= (event)=>{
setSelectedYear(event.target.value)
}
 

  const filteredItems = props.expenses.filter((element)=>{
   const newDate = new Date(element.date)
  const stringifiedYear =newDate.getFullYear().toString()
   return stringifiedYear === selectedYear
  });
   

 return (
  <ul className='style'>
 <ExpensesFilter value={selectedYear} onChange={yearChangeHandler} />

 <Chart  expenses = {filteredItems}/>
  {filteredItems.map((elem)=>{
   return <ExpensesItem 

   key={elem.title}
   title={elem.title} price={elem.price} date = {elem.date}></ExpensesItem>
  })}
  
 </ul>
 )
}
