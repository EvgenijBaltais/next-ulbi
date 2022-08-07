import Link from "next/link"
import styles from '../styles/A.module.css'

export default function ({text, href}) {

    console.log(styles)

    return (
        <Link href = {href}>
            <a className={styles.navbarLink}>{text}</a>
        </Link>
    )
}