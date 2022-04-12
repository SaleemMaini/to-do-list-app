import { ReactNode } from "react";
import Header from "./Header";
import styles from "./Layout.module.css";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <section>{props.children}</section>
    </div>
  );
};

export default Layout;
