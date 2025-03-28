import styles from "./TransactionHistoryItem.module.css"
import clsx from "clsx";
const TransactionHistoryItem = ({ type, amount, currency }) => {
    return (
      <tr className={styles.list}>
        <td className={clsx(styles.item, styles.type)}>{type}</td>
        <td className={styles.item}>{amount}</td>
        <td className={styles.item}>{currency}</td>
      </tr>
    );
  };
  
  export default TransactionHistoryItem;