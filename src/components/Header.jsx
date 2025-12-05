import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar bg-base-100 shadow-lg mb-6">
      <div className="container mx-auto">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost text-xl">
            Світлофори
          </NavLink>
        </div>
        <nav className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => 
                  isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
                }
              >
                Головна
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/horizontal"
                className={({ isActive }) => 
                  isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
                }
              >
                Горизонтальний світлофор
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/vertical"
                className={({ isActive }) => 
                  isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
                }
              >
                Вертикальний світлофор
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;