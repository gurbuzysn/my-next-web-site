import styles from "@/core/components/header/header.module.css";


export default function Header() {
  return (
    <header>
        <div className={styles.container}>
          <div>
            Logo
          </div>
          <div>
            Menu
          </div>
        </div>
    </header>
  )
}
