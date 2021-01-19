import styles from "./Header.module.scss";

export const Header = (props) => {
    return (
        <header>
            {props.children}
        </header>  
    )
}