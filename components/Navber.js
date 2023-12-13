import Link from 'next/link';
import styles from "@/styles/My.module.css";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <Link href="/">| Home</Link> |
      <Link href="/About"> About</Link> |
      <Link href="/Contact"> Contacts</Link> |
    </div>
  );
}