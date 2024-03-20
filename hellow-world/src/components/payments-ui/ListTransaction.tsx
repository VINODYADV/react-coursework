import { ChangeEvent, ReactElement, useState } from "react";
import { JsxElement } from "typescript";
import { getAllPayments,PaymentType } from "../../DataFunctions";
import PaymentTableRow from "./PaymentTableRow";
import { count } from "console";
import './transaction.css';
type Transactions = {name:string,amount:number};
const ListTransaction = () => {
const payments: PaymentType[] = getAllPayments();
const contries: string[] = Array.from(new Set(payments.map((payment,index) => payment.country)));
const [selectedContry, setSelectedCountry] = useState(contries[0]);
console.log(contries);
 const filterCountry = (e: ChangeEvent<HTMLSelectElement>):void => {
    console.log(e.target.value)
    setSelectedCountry(e.target.value);
 }

    return (
        <>        
        <div className="txCountrySelector">
        <select onChange={filterCountry}>
            {contries.map((country)  => <option value={country} key={country}>{country}</option>)}
        </select>
        </div>
        <table className="transactionsTable">
        <thead>
       <tr>
       
       <th>Id</th><th>Date</th><th>Country</th><th>Currency</th><th>Amount</th><th>Date</th>
       </tr>
        </thead>
        <tbody>
        {payments.filter(payment => payment.country===selectedContry).
        map((payment,index) => <PaymentTableRow key={payment.id} {...payment}/>)}
        </tbody>
        </table>

        </>
);
}


// function getTransactions(transactions : Transactions[]):JsxElement[]
// {
//     transactions.map((transaction) => )
//  return (<tr>{tr}</tr>);
// }
export default ListTransaction;