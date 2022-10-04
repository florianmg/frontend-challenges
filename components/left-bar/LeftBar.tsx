import Image from 'next/image';

import SocialIcon from '../social-icon/SocialIcon';

import styles from './LeftBar.module.scss';

const Leftbar: React.FC = () => {
  return (
    <div className={styles['left-panel']}>
      <Image
        src="/images/logo.png"
        layout="fixed"
        width={95}
        height={35}
        alt="XAE Logo"
      />
      <div className={styles.icons}>
        <SocialIcon name="facebook" />
        <SocialIcon name="instagram" />
        <SocialIcon name="twitter" />
      </div>
    </div>
  );
};

export default Leftbar;
