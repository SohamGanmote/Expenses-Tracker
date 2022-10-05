import "./ExpensesLists.css";
import ExpenseItem from "./ExpenseItem";
function ExpensesLists(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback ">No Expense Found</h2>;
  }
  return (
    <ul className="expenses-list ">
      {props.items.map(function expense(e) {
        return (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        );
      })}
    </ul>
  );
}
export default ExpensesLists;
