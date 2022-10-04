import type { NextPage } from 'next';
import Image from 'next/image';
import cn from 'classnames';

import Layout from '../components/layout';
import leftBar from '../components/left-bar';

import styles from '../styles/Home.module.scss';

import LeftBar from '../components/left-bar';
import NavBar from '../components/nav-bar';
import BottomBar from '../components/bottom-bar';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <div className={styles.decorations}>
          <div className={styles.blocks}>
            <Image
              src="/images/blocks.png"
              width={1104}
              height={848}
              alt="background"
            />
          </div>
          <div className={styles.astronaut}>
            <Image
              src="/images/astronaut.png"
              width={323}
              height={242}
              alt="astronaut"
            />
          </div>
        </div>
        <LeftBar />
        <NavBar />
        <BottomBar />
        <div className={styles['home-container']}>
          <div className={styles.content}>
            <p className={styles.content__title}>Adventure togrther</p>
            <p className={styles.content__text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              id laborum vitae dolorem, illo vero, a modi, aliquam temporibus
              qui quasi dolorum iusto consequuntur maxime ipsam aliquid
              voluptate ullam aperiam.
            </p>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Home;
