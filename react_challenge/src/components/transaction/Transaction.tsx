import { count, log } from 'console';
import { PaymentType, getAllPayments } from '../data/DataFunction';
import './Transaction.css';
import PaymentTableRow from './PaymentTableRow';
import { ChangeEvent, useState } from 'react';

function Transaction() {


    const payments: PaymentType[] = getAllPayments();


    const countries: string[] = Array.from(new Set(payments.map(payment => payment.country)));

     const [selectedCountry, setSelectedCountry] = useState<string>(countries[0]);


    // const [selCountry, setSelectedCountry] = useState<>[]

    const onCountryChange = (e:ChangeEvent<HTMLSelectElement>) => {
        // setSelectedCountry(e.target.value);
    }


return(<div className="transaction">
<div className="transactionCountrySelector">
Country <select onChange={onCountryChange}>
    {countries.map(country =><option value={country} key={country}> {country}</option>)}
    </select>
    </div>    
<table border={1}>

        <th>Id</th>
        <th>Amount</th>
        <th>Order Id</th>
        <th>Country</th>
        <th>Currency</th>

        <th>Date</th>
       <tbody>
        {payments.filter(payment => payment.country== selectedCountry).map(payment => <PaymentTableRow key = {payment.id} {...payment}></PaymentTableRow>)}
       </tbody>
</table>



</div>);

}

export default Transaction;