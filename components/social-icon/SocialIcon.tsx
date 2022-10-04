import Image from 'next/image';

import styles from './SocialIcon.module.scss';

interface ISocialIcon {
  name: 'facebook' | 'twitter' | 'instagram';
}

const SocialIcon: React.FC<ISocialIcon> = ({ name }) => {
  switch (name) {
    case 'facebook':
      return (
        <div className={styles.icon}>
          <Image
            src="/images/icons/facebook.svg"
            layout="fixed"
            width={32}
            height={32}
            alt="Logo Facebook"
          />
        </div>
      );
      break;
    case 'instagram':
      return (
        <div className={styles.icon}>
          <Image
            src="/images/icons/instagram.svg"
            layout="fixed"
            width={32}
            height={32}
            alt="Logo Instagram"
          />
        </div>
      );
      break;
    case 'twitter':
      return (
        <div className={styles.icon}>
          <Image
            src="/images/icons/twitter.svg"
            layout="fixed"
            width={32}
            height={32}
            alt="Logo twitter"
          />
        </div>
      );

    default:
      return null;
  }
};

export default SocialIcon;
