import { Link } from 'react-router-dom';
import style from './Navigation.module.scss';

function Navigation() {
  return (
    <header className={style.header}>
      <div className={style.links}>
        <Link to='/'>Home</Link>
        <Link to='/new-post'> Create New Post </Link>
      </div>
      <div>React sample Project</div>
    </header>
  );
}

export default Navigation;
