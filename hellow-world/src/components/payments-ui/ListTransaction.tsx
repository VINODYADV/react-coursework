import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { JsxElement } from "typescript";
import {  getAllPayments,getAllPyametsAxios,PaymentType } from "../../DataFunctions";
import PaymentTableRow from "./PaymentTableRow";
import { count } from "console";
import './transaction.css';
type Transactions = {name:string,amount:number};
const ListTransaction = () => {

    const [payments,setPayments] = useState<PaymentType[]>([]);
    const contries: string[] = Array.from(new Set(payments.map((payment,index) => payment.country)));


    const [selectedContry, setSelectedCountry] = useState(contries[0]);

    const loadData = () => {
    //     getAllPayments().then(response => response.json().then(data => {
    //     setPayments(data);
    // }));

    getAllPyametsAxios().then(response =>         setPayments(response.data))
    }


useEffect(()=>{loadData()},[])
 
// getAllPaymentRestVersion();


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