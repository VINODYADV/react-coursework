import { ReactElement } from "react";
import { JsxElement } from "typescript";

type Transactions = {name:string,amount:number};
const ListTransaction = () => {

    return (
        <table className="transactionsTable">
        <thead>
       <tr>
       
       <th>Id</th><th>Date</th><th>Country</th><th>Currency</th><th>Amount</th>
       </tr>
        </thead>
        <tbody>
        <tr>
       <td>1</td><td>2020-05-22</td><td>USA</td><td>USD</td><td>17.55</td>
        </tr>
        <tr>
        <td>2</td><td>2020-05-
       23</td><td>UK</td><td>GBP</td><td>36.50</td>
        </tr>
        <tr>
        <td>3</td><td>2020-05-
       24</td><td>SWE</td><td>EUR</td><td>42.00</td>
        </tr>
        </tbody>
        </table>
);
}


// function getTransactions(transactions : Transactions[]):JsxElement[]
// {
//     transactions.map((transaction) => )
//  return (<tr>{tr}</tr>);
// }
export default ListTransaction;