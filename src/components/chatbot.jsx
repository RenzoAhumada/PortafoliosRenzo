import React, { useState } from 'react';

const ChatBot = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faq = [
    { question: "¿Qué hago de mi vida?", answer: "En mi vida personal entreno crossfit lo cual me apasiona, además también me gustan mucho los videojuegos."},
    { question: "¿Cómo puedo contactarte?", answer: "Puedes contactarme a través de LinkedIn o enviando un correo a mi dirección personal." },
    { question: "¿Qué proyectos has desarrollado?", answer: "He podido trabajar en desarrollos para pequeñas empresas, páginas web y proyectos de estudios." },
  ];

  const handleQuestionClick = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faq.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="flex items-center justify-start w-full p-3 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 focus:outline-none"
            onClick={() => handleQuestionClick(index)}
          >
            <span className="flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            {item.question}
          </button>
          {selectedQuestion === index && (
            <div className="mt-2 flex justify-end">
              <div className="bg-gray-200 rounded-lg p-3 text-sm text-gray-900">
                {item.answer}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatBot;
