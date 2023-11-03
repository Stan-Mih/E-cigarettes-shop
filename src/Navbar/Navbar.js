import  styles  from "../Header/Header.module.css";

function Navbar({items}) {
    

    return (
        <>
               
        <div className = {styles.navWrapper}>     
            {
                items.map(({ id, title }) => {
                    return (
                        <button className={styles.navElement} key={id}>{title}</button>
                    )
                })
            }            
        </div>
        </>

    )
}

export default Navbar;