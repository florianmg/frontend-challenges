import { ReactElement } from 'react';

import styles from './Layout.module.scss';

interface ILayout {
  children: ReactElement;
}

const Layout: React.FC<ILayout> = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Layout;
