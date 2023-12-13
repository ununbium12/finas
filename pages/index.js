import Navbar from "@/components/Navber"; // navbar와 연결
import styles from "@/styles/My.module.css" // styles인 css와 연결

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.title}>/index.js</div>
      <div className={styles.name}>정다훈</div>
      <div className={styles.no}>201930325</div>
      <div>
        정상동작
      </div>
    </>
  )
}
