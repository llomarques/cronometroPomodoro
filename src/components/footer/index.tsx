import styles from './styles.module.css'


type FooterProps = {
    children:React.ReactNode;
};

export function Footer ({children}:FooterProps){
    return <h3 className ={styles.footer}>{children}</h3>
}