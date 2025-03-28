import styles from "./TransactionHistory.module.css"
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem"

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className={styles.item}>Type</th>
          <th className={styles.item}>Amount</th>
          <th className={styles.item}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TransactionHistoryItem
            key={item.id} 
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;