import Image from "next/image";
import styles from "./page.module.css";
import Slides from "@/components/Slides";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.top__container}>
        <h1 className={styles.content__heading}>
          The Binary Virtuoso Crafting Digital Realities
        </h1>
      </div>
      <Slides />
      <div>
        <h1 className={styles.content__about}>
          Hi, I'm Rakesh - a code conjurer by day and a pencil-wielding artist
          by night. With one hand crafting elegant software solutions and the
          other breathing life into intricate pencil sketches, I traverse the
          realms of both technology and artistry.
        </h1>
        <h1 className={styles.content__about}>
          My days are a dance of algorithms, and my nights are a symphony of
          graphite, creating a unique fusion where lines of code and pencil
          strokes intertwine to shape captivating experiences.
        </h1>
        <h1 className={styles.content__about}>
          Architect of the Virtual Realm ✨ | Crafting code tapestries with
          elegance | Turning complex problems into elegant solutions | Meet me,
          the pixel poet.
        </h1>
        {/* <h1 className={styles.content__about}>
          Explore some of my recent Work below or feel free to get in touch
          ¯I_(ツ)_/¯
        </h1> */}
        {/* <Work /> */}
      </div>
    </main>
  );
}
