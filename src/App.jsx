// src/App.jsx

import React, { useState } from 'react';
import { PriorityQueue, Stack } from './utils/structures';

const queue = new PriorityQueue();
const stack = new Stack();

const translations = {
  fr: {
    title: "🎖️ Simulation de file et pile militaire",
    addTask: "Ajouter une tâche de soldat",
    placeholder: "Nom du soldat ou tâche",
    priority: "Priorité",
    high: "1 - Haute priorité",
    medium: "2 - Moyenne",
    low: "3 - Faible",
    addBtn: "➕ Ajouter à la File et Pile",
    queueTitle: "📋 File (Priorité)",
    dequeueBtn: "🗑️ Retirer (File)",
    stackTitle: "📦 Pile (LIFO)",
    popBtn: "🧹 Retirer (Pile)",
    language: "Langue",
    footerSignature: "L'ACADEMIE MILITAIRE DE CHERCHELL (AMC)",
  },
  ar: {
    title: "🎖️ محاكاة الطابور والمكدس العسكري",
    addTask: "إضافة مهمة جندي",
    placeholder: "اسم الجندي أو المهمة",
    priority: "الأولوية",
    high: "١ - أولوية عالية",
    medium: "٢ - متوسطة",
    low: "٣ - منخفضة",
    addBtn: "➕ أضف إلى الطابور والمكدس",
    queueTitle: "📋 الطابور (حسب الأولوية)",
    dequeueBtn: "🗑️ إزالة (الطابور)",
    stackTitle: "📦 المكدس (LIFO)",
    popBtn: "🧹 إزالة (المكدس)",
    language: "اللغة",
    footerSignature: "أكاديمية شرشال العسكرية (AMC)",
  },
};

function App() {
  const [lang, setLang] = useState('fr');
  const t = translations[lang];

  const [queueData, setQueueData] = useState([]);
  const [stackData, setStackData] = useState([]);
  const [name, setName] = useState('');
  const [priority, setPriority] = useState(1);

  const handleAdd = () => {
    if (!name.trim()) return;
    const item = { name, priority: parseInt(priority) };
    queue.enqueue(item);
    stack.push(item);
    setQueueData(queue.getAll());
    setStackData(stack.getAll());
    setName('');
    setPriority(1);
  };

  const handleDequeue = () => {
    queue.dequeue();
    setQueueData(queue.getAll());
  };

  const handlePop = () => {
    stack.pop();
    setStackData(stack.getAll());
  };

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-gray-100 p-6 font-sans ${lang === 'ar' ? 'text-right' : 'text-left'}`}
    >
      <div className="flex justify-between mb-6 items-center max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">{t.title}</h1>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="fr">🇫🇷 Français</option>
          <option value="ar">🇸🇦 العربية</option>
        </select>
      </div>

      <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto mb-8">
        <h2 className="text-xl font-semibold mb-4">{t.addTask}</h2>
        <div className="flex flex-col gap-4">
          <input
            className="border rounded px-4 py-2"
            placeholder={t.placeholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            className="border rounded px-4 py-2"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="1">{t.high}</option>
            <option value="2">{t.medium}</option>
            <option value="3">{t.low}</option>
          </select>
          <button
            onClick={handleAdd}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {t.addBtn}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Queue */}
        <div className="bg-white p-6 rounded shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{t.queueTitle}</h2>
            <button
              onClick={handleDequeue}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              {t.dequeueBtn}
            </button>
          </div>
          <ul className="space-y-2">
            {queueData.map((item, idx) => (
              <li key={idx} className="p-2 border rounded bg-gray-50">
                {item.name} ({t.priority} {item.priority})
              </li>
            ))}
          </ul>
        </div>

        {/* Stack */}
        <div className="bg-white p-6 rounded shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{t.stackTitle}</h2>
            <button
              onClick={handlePop}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              {t.popBtn}
            </button>
          </div>
          <ul className="space-y-2">
            {stackData.map((item, idx) => (
              <li key={idx} className="p-2 border rounded bg-gray-50">
                {item.name} ({t.priority} {item.priority})
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer with Signature */}
      <footer className="mt-8 text-center text-sm text-gray-600">
        <p>{t.footerSignature}</p>
      </footer>
    </div>
  );
}

export default App;
