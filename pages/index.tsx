import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import Layout from '../components/layout';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <div className={styles['left-panel']}>
          <Image
            src="/images/logo.png"
            layout="fixed"
            width={95}
            height={35}
            alt="XAE Logo"
          />
          <div className={styles.icons}>
            <div className={styles.icon}>
              <Link href="*">
                <Image
                  src="/images/icons/facebook.svg"
                  layout="fixed"
                  width={32}
                  height={32}
                  alt="Logo Facebook"
                />
              </Link>
            </div>
            <div className={styles.icon}>
              <Link href="*">
                <Image
                  src="/images/icons/instagram.svg"
                  layout="fixed"
                  width={32}
                  height={32}
                  alt="Logo Instagram"
                />
              </Link>
            </div>
            <div className={styles.icon}>
              <Link href="*">
                <Image
                  src="/images/icons/twitter.svg"
                  layout="fixed"
                  width={32}
                  height={32}
                  alt="Logo twitter"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles['nav-bar']}>
          <ul className={styles.list}>
            <li
              className={cn(styles.item, {
                [styles.active]: true,
              })}
            >
              Home
            </li>
            <li
              className={cn(styles.item, {
                [styles.active]: false,
              })}
            >
              About
            </li>
            <li
              className={cn(styles.item, {
                [styles.active]: false,
              })}
            >
              Gallery
            </li>
            <li
              className={cn(styles.item, {
                [styles.active]: false,
              })}
            >
              Contact
            </li>
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
        <div className={styles['bottom-panel']}>
          <div className={styles.article}>
            <Image
              className={styles.thumbnail}
              layout="fixed"
              src="/images/thumbnail.png"
              width={324}
              height={253}
              alt="Article 'Exploration' thumbnail"
            />
            <div className={styles.article__content}>
              <p className={styles.article__title}>Exploration</p>
              <p className={styles.article__extract}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Placerat id potenti faucibus nec, rhoncus, vulputate
              </p>
              <div className={styles.button}>
                <Image
                  src="/images/icons/arrow-right.png"
                  layout="fixed"
                  width={60}
                  height={14}
                  alt="Voir l'article"
                />
              </div>
            </div>
          </div>
          <div className={styles.article}>
            <div className={styles.article__content}>
              <p className={styles.article__title}>Footprint</p>
              <p className={styles.article__extract}>
                Lorem ipsum dolor sit amet, consectetur.
              </p>
              <div className={styles.button}>
                <Image
                  src="/images/icons/arrow-right.png"
                  layout="fixed"
                  width={60}
                  height={14}
                  alt="Voir l'article"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Home;
