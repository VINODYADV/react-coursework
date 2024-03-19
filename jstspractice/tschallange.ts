{
    type Transaction = {description:string, amount:number, date:Date};
    const transactions:Transaction[]=[];
    let balance:number=0;
    const addTransaction = () =>{
     console.log('HHHHHHHHHHH');
        const docElement = document.getElementById('Descriptiosn') as HTMLInputElement;
   const docAmount = document.getElementById('Amount') as HTMLInputElement;
     const transaction:Transaction = {description:docElement.value, amount:+docAmount.value, date :new Date() } 
     transactions.push(transaction);

     console.log(transactions);

update(transactions);
     //  updateBalence(transactions);

     const balanceElement = document.getElementById('Balance') as HTMLSpanElement;
     balanceElement.innerText = transactions.reduce((total,transaction) => total+transaction.amount,0).toString(); 

    }

    const update = (transactions : Transaction[]) => {
        const divElement = document.getElementById('Transactions') as HTMLDivElement;
const list = transactions.map(transaction => {
    return (`<li>${transaction.date} ${transaction.description} ${transaction.amount}</li>`)
});

divElement.innerHTML= "<ul>"+list.join('')+"</ul>";

};

function updateBalence(transactions:Transaction[]):void{
    const divElement = document.getElementById('Transactions') as HTMLDivElement;
const list = transactions.map(transaction => {
    return (`<li>${transaction.date} ${transaction.description} ${transaction.amount}</li>`)
});

divElement.innerHTML= "<ul>"+list.join('')+"</ul>";

}

}