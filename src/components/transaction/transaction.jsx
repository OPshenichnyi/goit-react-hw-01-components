import { CssTableTrans } from "./transaction_styled"

export const TransactionHistory = ({ transactions }) => {
    return (
        <CssTableTrans>
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({ id, currency, amount, type}) => (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </CssTableTrans>
    )
}