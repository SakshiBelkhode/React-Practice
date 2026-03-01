import { useState } from "react";

function App() {

  // 1️⃣ FAQ Data (Array of objects)
  const faqs = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library used to build user interfaces."
    },
    {
      id: 2,
      question: "What is useState?",
      answer: "useState is a React Hook used to manage state in functional components."
    },
    {
      id: 3,
      question: "What is useEffect?",
      answer: "useEffect is a Hook used to perform side effects like API calls."
    }
  ];

  // 2️⃣ State to store opened question id
  const [activeId, setActiveId] = useState(null);

  // 3️⃣ Toggle function
  const toggleAnswer = (id) => {
    if (activeId === id) {
      setActiveId(null);   // close if same clicked
    } else {
      setActiveId(id);     // open clicked one
    }
  };

  return (
    <div className="container">
      <h1>FAQ Accordion</h1>

      {faqs.map((item) => (
        <div key={item.id} className="faq-item">

          <div
            className="question"
            onClick={() => toggleAnswer(item.id)}
          >
            {item.question}
          </div>

          {activeId === item.id && (
            <div className="answer">
              {item.answer}
            </div>
          )}

        </div>
      ))}

    </div>
  );
}

export default App;