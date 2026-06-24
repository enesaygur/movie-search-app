import styles from "./MovieSkeleton.module.css";
function MovieSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.title}></div>
      <div className={styles.year}></div>
    </div>
  );
}

export default MovieSkeleton;
