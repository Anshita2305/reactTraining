import './Transaction.css';

function Transaction() {
return(<div className="transaction">

<table border={1}>

<th>Id</th>
<th>Date</th>
<th>Country</th>
<th>Currency</th>
<th>Amount</th>
<tr>
<td>1</td>
<td>19-3-2024</td>
<td>USA</td>
<td>USD</td>
<td>160</td>
</tr>
<tr>
<td>2</td>
<td>12-3-2024</td>
<td>FRA</td>
<td>EUR</td>
<td>200</td>
</tr>
<tr>
<td>3</td>
<td>21-3-2024</td>
<td>SWE</td>
<td>EUR</td>
<td>100</td>
</tr>

</table>


</div>);

}

export default Transaction;