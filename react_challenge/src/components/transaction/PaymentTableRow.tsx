import { PaymentType } from "../data/DataFunction";


const PaymentTableRow = (props:PaymentType) => {

    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.amount}</td>
            <td>{props.orderId}</td>
            <td>{props.country}</td>
            <td>{props.currency}</td>
            <td>{props.date}</td>

        </tr>

    );


}

export default PaymentTableRow;