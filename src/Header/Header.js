import Navbar from "../Navbar/Navbar";
import styles from "../Header/Header.module.css";


function Header({ showLogIn, setShowLogIn }) {
    const items = [
        { 
        id: crypto.randomUUID(), title: "tab1" },
         { id: crypto.randomUUID(), title: "tab2" },
          { id: crypto.randomUUID(), title: "tab3" },
           { id: crypto.randomUUID(), title: "tab4" }
        ];

function onClick() {
  setShowLogIn(!showLogIn)
}

    return (
        <div className="header">
            <div className={styles.title}>Bundy Shoes®</div>
            <button className={styles.logInButton} onClick={onClick}>Log In</button>
            <Navbar items={items} />                                   
        </div>
    );
}

export default Header;
