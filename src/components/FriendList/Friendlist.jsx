import styles from "./Friendlist.module.css";
import FriendListItem from "../FriendListItem/FriendlistItem"

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.list}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li key={id} className={styles.item}>
                    <FriendListItem 
                        avatar={avatar} 
                        name={name} 
                        isOnline={isOnline} 
                    />
                </li>
            ))}
        </ul>
    );
};

export default FriendList;
