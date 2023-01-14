import "./expensesItem.css";
// this is our component
export const ExpensesItem = (props) => {
  const { title, price, date } = props;
  const newDate = new Date(date);
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  const monthNotCorrect = newDate.getMonth();

  const monthArray = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const month = monthArray[monthNotCorrect];

  return (
    <div className="expenceItem">
      <div className="row">
        <div className="date">
          <p className="month">{month}</p>
          <p className="year"> {year}</p>
          <p className="day">{day}</p>
        </div>
        <p className="title">{title}</p>
      </div>

      <p className="price">{price}сом</p>
    </div>
  );
};
