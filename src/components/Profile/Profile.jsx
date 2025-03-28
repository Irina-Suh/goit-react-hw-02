import styles from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img className={styles.img} src={image} alt={"User avatar"} />
        <p className={styles.nameUser}>{name}</p>
        <p className={styles.tagUser}>@{tag}</p>
        <p className={styles.locationUser}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span className={styles.statsUSer}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.statsUSer}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.statsUSer}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;