{
    type Transaction = {
        description : string,
        amount : number,
        date : Date
    };

    const transactions : Transaction[] = [];

    const total = 0;

    const addTransaction = () => {
         const description = document.getElementById('description') as HTMLInputElement;
         const amount = document.getElementById('amount') as HTMLInputElement;

         const newTransaction:Transaction = {
            description: description.value,
            amount:+amount.value,
            date:new Date()
         }

         transactions.push(newTransaction);
         console.log(transactions);
         updateDisplay();
    }

    const updateDisplay =() => {
        const description = document.getElementById('description') as HTMLInputElement;
        const amount = document.getElementById('amount') as HTMLInputElement;
        const balance = document.getElementById('balance') as HTMLSpanElement;

        const transactionList = document.getElementById('transactions') as HTMLDivElement;
        const lis = transactions.map(transaction => {return (`<li>${transaction.date} ${transaction.description} ${transaction.amount}</li>`)}) 
        
        transactionList.innerHTML = "<ul>"+lis.join('')+"</ul>";

        description.value ="";
        amount.value="";

        balance.innerText = transactions.reduce((total, transaction) => total+transaction.amount,0).toString();

    }
}