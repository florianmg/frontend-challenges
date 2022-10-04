import Image from 'next/image';
import styles from './BottomBar.module.scss';

const BottomBar: React.FC = () => (
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id
          potenti faucibus nec, rhoncus, vulputate
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
);

export default BottomBar;
