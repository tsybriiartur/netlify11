import React from 'react';
import { useAuth } from '../context/AuthContext';

function Home() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl mb-4">Лабораторна робота — Авторизація</h2>

          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Мета: навчитися працювати з авторизацією та захищеними маршрутами в React.
            </p>

            {isAuthenticated ? (
              <div className="alert alert-success mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ви увійшли як: <strong>{user?.username}</strong></span>
              </div>
            ) : (
              <div className="alert alert-warning mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Для доступу до світлофорів потрібна авторизація. Використайте кнопки "Увійти" або "Реєстрація" у верхньому меню.</span>
              </div>
            )}

            <h3 className="text-2xl font-semibold mt-6 mb-4">Завдання</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Створити інтерфейс авторизації з кнопками "Увійти" та "Реєстрація".</li>
              <li>Реалізувати перевірку логіна та пароля (mock користувачі).</li>
              <li>Реалізувати стан авторизації та вихід (logout).</li>
              <li>Обмежити доступ до захищених маршрутів.</li>
              <li>Приховати/деактивувати елементи інтерфейсу до авторизації.</li>
            </ol>

            <div className="alert alert-info mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p className="font-semibold mb-2">Тестові облікові записи:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Логін: <code>admin</code>, Пароль: <code>admin123</code> (роль: admin)</li>
                  <li>Логін: <code>user</code>, Пароль: <code>user123</code> (роль: user)</li>
                  <li>Логін: <code>test</code>, Пароль: <code>test123</code> (роль: user)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;