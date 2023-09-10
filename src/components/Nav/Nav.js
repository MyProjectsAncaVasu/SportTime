import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

export function Nav() {
  return (
    <nav className={styles['main-menu']}>
      <ul>
        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ">
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/home"
          >
            Home
          </NavLink>
        </li>

        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/appointment/schedule"
          >
            Appointment
          </NavLink>
        </li>
        <li className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110">
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : '')}
            to="/activities"
          >
            Activities
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
