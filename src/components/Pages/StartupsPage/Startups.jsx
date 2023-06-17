import info from './startupsInfo';
import StartupItem from './StartupItem';
import './StartupStyles.css';
import CardGroup from 'react-bootstrap/CardGroup';

const Startups = () => {
  return (
    <CardGroup>
      {info.map((item) => (
        <StartupItem {...item} key={item.id} />
      ))}
    </CardGroup>
  );
};
export default Startups;
