import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Login from './Login';
import Registration from './Registration';

function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
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
              {isAuthenticated ? (
                <>
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
                </>
              ) : (
                <>
                  <li>
                    <button
                      className="btn btn-ghost btn-sm opacity-50 cursor-not-allowed"
                      disabled
                      title="Потрібна авторизація"
                    >
                      Горизонтальний світлофор
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-ghost btn-sm opacity-50 cursor-not-allowed"
                      disabled
                      title="Потрібна авторизація"
                    >
                      Вертикальний світлофор
                    </button>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <div className="flex-none gap-2">
            {isAuthenticated ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                  <div className="flex items-center gap-2">
                    <div className="avatar placeholder">
                      <div className="bg-neutral text-neutral-content rounded-full w-8">
                        <span className="text-xs">{user?.username?.[0]?.toUpperCase() || 'U'}</span>
                      </div>
                    </div>
                    <span className="hidden sm:inline">{user?.username}</span>
                  </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <button onClick={handleLogout} className="btn btn-error btn-sm w-full">
                      Вийти
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex gap-2">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setShowLogin(true)}
                >
                  Увійти
                </button>
                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => setShowRegister(true)}
                >
                  Реєстрація
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {showRegister && (
        <Registration
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
}

export default Header;