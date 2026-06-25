import styles from "./MovieDetailSkeleton.module.css";

function MovieDetailSkeleton() {
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.backButton} />
      <div className={styles.content}>
        <div className={styles.poster} />

        <div className={styles.info}>
          <div className={styles.title} />
          <div className={styles.actors} />
          <div className={styles.favoriteButton} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetailSkeleton;
