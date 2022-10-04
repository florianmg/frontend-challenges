import Link from 'next/link';
import Image from 'next/image';

import cn from 'classnames';

import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
  return (
    <div className={styles['nav-bar']}>
      <ul className={styles.list}>
        <Link href="/">
          <a
            className={cn(styles.item, {
              [styles.active]: true,
            })}
          >
            Home
          </a>
        </Link>
        <Link href="/">
          <a
            className={cn(styles.item, {
              [styles.active]: false,
            })}
          >
            About
          </a>
        </Link>
        <Link href="/">
          <a
            className={cn(styles.item, {
              [styles.active]: false,
            })}
          >
            Gallery
          </a>
        </Link>
        <Link href="/">
          <a
            className={cn(styles.item, {
              [styles.active]: false,
            })}
          >
            Contact
          </a>
        </Link>
      </ul>
      <div className={styles['theme-switch']}>
        <Image
          src="/images/icons/theme-switcher.svg"
          width={35}
          height={35}
          layout="fixed"
          alt="Thème switcher"
        />
      </div>
    </div>
  );
};

export default NavBar;
