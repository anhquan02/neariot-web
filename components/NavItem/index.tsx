import { useRouter } from "next/router";
import { memo } from "react";
import styles from "./NavItem.module.scss"

const NavItem = memo((props:any)=>{

    const {href, icon, content, actived} = props;
    const router = useRouter()
    const onNavItemClicked = () =>{
        router.push(href)
    }

    return(
        <div className={styles.root} onClick={onNavItemClicked}>
                <div className={actived ? styles.nav_icon_active : styles.nav_icon}>{icon}</div>
                <div className={actived ? styles.nav_content_active : styles.nav_content}>{content}</div>
            </div>
    )
})

export default NavItem