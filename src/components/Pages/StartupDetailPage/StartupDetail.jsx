import info from '../StartupsPage/startupsInfo';
import { useLocation } from 'react-router-dom';
import styles from './StartupDetailStyles.module.scss';
import Button from 'react-bootstrap/Button';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const StartupDetail = () => {
  const location = useLocation();
  const id = Number(location.pathname.charAt(location.pathname.length - 1));

  let locationId = id;

  const detailStartup = info.find((item) => item.id === id);

  return (
    <div className={styles.startupDetailContainer}>
      <div className={styles.imageContainer}>
        <img src={detailStartup.logoURL} />
      </div>
      <div className={styles.detailStartupInfo}>
        <h1>{detailStartup.name}</h1>
        <p className={styles.detailStartupDescr}>{detailStartup.description}</p>
        <span>Company creation date : {detailStartup.creationDate}</span>

        <h3>Owner : {detailStartup.owner}</h3>
      </div>
      <div className={styles.navigationButtons}>
        {locationId > 1 ? (
          <Link
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
            to={`/startups/startupDetail/${(locationId -= 1)}`}
          >
            <Button variant="primary" size="lg">
              <FontAwesomeIcon icon={icon({ name: 'arrow-left' })} size="lg" />
              <span className={styles.pageNaviagtonText}>Previous</span>
            </Button>
          </Link>
        ) : (
          <div></div>
        )}

        {locationId < info.length - 1 ? (
          <Link
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
            to={`/startups/startupDetail/${(locationId += 2)}`}
          >
            <Button variant="primary" size="lg">
              <span className={styles.pageNaviagtonText}>Next</span>
              <FontAwesomeIcon icon={icon({ name: 'arrow-right' })} size="lg" />
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default StartupDetail;
