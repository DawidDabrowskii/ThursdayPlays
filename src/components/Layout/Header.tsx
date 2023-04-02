import logo from '../../assets/images/logo_1.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex text-white text-xl justify-around Mont-normal'>
      <div className='hidden md:block w-24 mt-[-12px] pt-4'>
        <img src={logo} />
      </div>
      <ul className='flex gap-8 pt-8 md:pr-48 text-sm tracking-[.1rem] items-start px-3'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-white pb-1  duration-300' : ''
          }>
          HOME
        </NavLink>
        <NavLink
          to='/generate'
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-white pb-1  duration-300' : ''
          }>
          GENERATE TEAMS
        </NavLink>
        <NavLink
          to='/teams'
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-white pb-1  duration-300' : ''
          }>
          TEAMS
        </NavLink>
        <NavLink
          to='/players'
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-white pb-1 duration-300' : ''
          }>
          PLAYERS
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
