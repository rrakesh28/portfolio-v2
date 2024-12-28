import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.top__container}>
        <h1 className={styles.content__heading}>About Me</h1>
      </div>
      <div>
        <section className={styles.section__container}>
          <div className={styles.inner__container}>
            <div className={styles.number}>1</div>
            <p className={styles.content__title}>Who I am</p>
          </div>
          <div className={styles.inner__container}>
            <p className={styles.content__about}>
              Hello Amigo, I am Rakesh, a virtuoso programmer living in
              Hyderabad. I'm actively contributing to innovative projects at a
              well-established tech company, constantly pushing the boundaries
              of what's possible in the digital realm.
            </p>
          </div>
        </section>
        <section className={styles.section__container}>
          <div className={styles.inner__container}>
            <div className={styles.number}>2</div>
            <p className={styles.content__title}>Education</p>
          </div>
          <div className={styles.inner__container}>
            <p className={styles.content__about}>
              → B.Tech Computer Science Engineering
            </p>
          </div>
        </section>
        <section className={styles.section__container}>
          <div className={styles.inner__container}>
            <div className={styles.number}>3</div>
            <p className={styles.content__title}>Experience</p>
          </div>
          <div className={styles.inner__container}>
            <p className={styles.content__about}>→ TeachForIndia</p>
          </div>
        </section>
      </div>
    </main>
  );
}
