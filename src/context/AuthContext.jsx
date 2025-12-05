import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

// Mock users - можна замінити на API виклики
const MOCK_USERS = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
  { id: 2, username: 'user', password: 'user123', role: 'user' },
  { id: 3, username: 'test', password: 'test123', role: 'user' },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Перевірка збереженого стану при завантаженні
  useEffect(() => {
    const savedUser = localStorage.getItem('authUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error('Error parsing saved user:', e);
        localStorage.removeItem('authUser');
      }
    }
    setIsLoading(false);
  }, []);

  // Логін
  const login = async (username, password) => {
    // Симуляція API виклику
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundUser = MOCK_USERS.find(
          u => u.username === username && u.password === password
        );

        if (foundUser) {
          const userData = {
            id: foundUser.id,
            username: foundUser.username,
            role: foundUser.role,
          };
          setUser(userData);
          localStorage.setItem('authUser', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Невірний логін або пароль'));
        }
      }, 500); // Симуляція затримки мережі
    });
  };

  // Реєстрація
  const register = async (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Перевірка чи користувач вже існує
        const existingUser = MOCK_USERS.find(u => u.username === username);
        if (existingUser) {
          reject(new Error('Користувач з таким іменем вже існує'));
          return;
        }

        // Валідація
        if (username.length < 3) {
          reject(new Error('Ім\'я користувача має бути мінімум 3 символи'));
          return;
        }

        if (password.length < 6) {
          reject(new Error('Пароль має бути мінімум 6 символів'));
          return;
        }

        // Створення нового користувача
        const newUser = {
          id: MOCK_USERS.length + 1,
          username,
          password, // В реальному додатку пароль має бути хешований
          role: 'user',
        };

        // Додаємо до списку (в реальному додатку це буде API виклик)
        MOCK_USERS.push(newUser);

        const userData = {
          id: newUser.id,
          username: newUser.username,
          role: newUser.role,
        };

        setUser(userData);
        localStorage.setItem('authUser', JSON.stringify(userData));
        resolve(userData);
      }, 500);
    });
  };

  // Вихід
  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  // Перевірка чи користувач авторизований
  const isAuthenticated = !!user;

  // Перевірка ролі
  const hasRole = (role) => {
    return user?.role === role;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        login,
        register,
        logout,
        hasRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

