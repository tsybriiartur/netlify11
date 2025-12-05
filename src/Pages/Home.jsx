import React from 'react';

function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl mb-4">Лабораторна робота — Маршрутизація</h2>

          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Мета: навчитися працювати з маршрутизацією в React.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-4">Завдання</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Створити сторінку Home з описом лабораторної роботи (ця сторінка).</li>
              <li>Створити ErrorPage з кастомним виводом інформації про помилку / 404.</li>
              <li>Додати Header з меню: «Горизонтальний світлофор» та «Вертикальний світлофор».</li>
              <li>Налаштувати маршрути: /horizontal та /vertical для відповідних виглядів світлофора.</li>
            </ol>

            <div className="alert alert-info mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>
                Використовується React Router v6. Для тестування після встановлення залежностей
                запустіть застосунок і переходьте між пунктами меню.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;