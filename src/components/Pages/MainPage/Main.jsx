import styles from './main.module.css';
import { useEffect, useState } from 'react';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import fade from '../../Animations/fade.module.css';
import slide from '../../Animations/slide.module.css';

const Main = () => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <header className={styles.mainContainer}>
      <div>
        <CSSTransition in={mount} timeout={3000} classNames={fade}>
          <h1>GoitTeens Lab</h1>
        </CSSTransition>
        <CSSTransition in={mount} timeout={3000} classNames={slide}>
          <h3>GoITeens Lab - лабораторія стартапів розроблених підлітками🚀</h3>
        </CSSTransition>
      </div>

      <div className={styles.downBar}>
        <div className={styles.snIcons}>
          <a className={styles.snIconsLink} href="/">
            <FontAwesomeIcon
              icon={icon({ name: 'twitter', style: 'brands' })}
              size="2x"
            />
          </a>
          <a className={styles.snIconsLink} href="/">
            <FontAwesomeIcon
              icon={icon({ name: 'instagram', style: 'brands' })}
              size="2x"
            />
          </a>
          <a className={styles.snIconsLink} href="/">
            <FontAwesomeIcon
              icon={icon({ name: 'facebook', style: 'brands' })}
              size="2x"
            />
          </a>
          <a className={styles.snIconsLink} href="/">
            <FontAwesomeIcon
              icon={icon({ name: 'telegram', style: 'brands' })}
              size="2x"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
export default Main;
