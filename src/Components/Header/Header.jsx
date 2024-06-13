import './header.scss'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/Hook/useAuthContext'

const Header = () => {
  const linkIsActive = ({ isActive }) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  const { logout, isAuth } = useAuthContext()
  return (
    <>
      <nav className='header'> {/*  BLOQUE */}
        <div>
          <img src='/icono_logo_tienda.svg' alt='' className='header__logo-img' />
          <NavLink className='header__logo' to='/'>Shoping</NavLink>
        </div>
        <ul className='header__nav-list'>
          <li className='header__list-item'>
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/'>Home</NavLink>
          </li>
          <li className='header__list-item'>
            <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/dashboard'>Dashboard</NavLink>
          </li>

          {isAuth
            ? (
              <>
                <li className='header__list-item'>
                  <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/secret'>Secret</NavLink>
                </li>
                <li className='header__list-item'>
                  <NavLink className='header__item-link' onClick={logout}>Logout</NavLink>
                </li>
              </>
              )
            : <>
              <li className='header__list-item'>
                <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/login'>Login</NavLink>
              </li>
              <li className='header__list-item'>
                <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/signup'>Signup</NavLink>
              </li>
            </>}
        </ul>
      </nav>
    </>
  )
}

export default Header
