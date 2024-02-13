import React, { useState } from 'react';
import { BsDashSquare, BsPlusSquare,BsSearch } from 'react-icons/bs';

function FAQ() {
  const faqData = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.'
    },
    {
      question: 'How do I install React?',
      answer: 'You can install React by using the following command: `npx create-react-app my-app`.'
    },
    {
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript recommended by React. It looks similar to XML/HTML and allows you to write HTML elements and components in your JavaScript files.'
    },
    {
      question: 'What are React Hooks?',
      answer: 'React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8.'
    },
    {
      question: 'How can I pass data between components in React?',
      answer: 'Data can be passed between components in React by using props. Props are arguments passed into React components.'
    },
    {
      question: 'What is the virtual DOM?',
      answer: 'The virtual DOM (Document Object Model) is a programming concept where an ideal, or "virtual", representation of the user interface is kept in memory and synced with the "real" DOM by a library such as React.'
    },
    {
      question: 'What is the significance of keys in React?',
      answer: 'Keys are used to give a unique identity to elements in a list. They help React identify which items have changed, are added, or are removed.'
    },
    {
      question: 'What is the role of ReactDOM?',
      answer: 'ReactDOM is a package that provides DOM-specific methods that can be used at the top level of an app to enable the React rendering. It is responsible for updating the DOM to match React elements.'
    },
    {
      question: 'How can I handle forms in React?',
      answer: 'In React, forms can be handled by using controlled components. You can control the form elements by keeping their values in the component state and updating them through onChange handlers.'
    },
    {
      question: 'What is the purpose of useEffect in React?',
      answer: 'The useEffect hook in React is used for side effects in your components. It allows you to perform actions in function components that have side effects, such as data fetching, subscriptions, or manually changing the DOM.'
    },
    {
      question: 'What is Redux?',
      answer: 'Redux is a state management library for JavaScript applications. It helps in managing the state of your application in a predictable way.'
    },
    {
      question: 'How can I optimize performance in React?',
      answer: 'Performance in React can be optimized by using techniques such as memoization, PureComponent, React.memo, and by avoiding unnecessary re-renders of components.'
    },
    {
        question: 'What is the difference between state and props in React?',
        answer: 'In React, state is used to manage and store data within a component, and it can be changed over time by the component. On the other hand, props (short for properties) are used to pass data from a parent component to a child component. Props are immutable and cannot be changed by the child component.'
      },
      {
        question: 'Explain the concept of lifting state up in React.',
        answer: 'Lifting state up is a pattern in React where the state of a child component is moved to its parent component. This is done when multiple components need to share the same state or when a parent component needs to control the state of its children. By lifting state up, the state becomes a single source of truth in the parent component.'
      },
      {
        question: 'What is the purpose of the `key` attribute in React lists?',
        answer: 'The `key` attribute is used in React lists to give each item a unique identifier. React uses these keys to efficiently update the DOM by identifying which items have changed, been added, or been removed. Keys should be stable, unique, and associated with the item’s identity.'
      },
      {
        question: 'What are React Fragments?',
        answer: 'React Fragments are a way to group multiple elements without introducing unnecessary parent elements in the DOM. They allow you to return multiple elements from a component without needing to create an additional wrapper element. Fragments are particularly useful in situations where adding a wrapper div would interfere with styling or layout.'
      },
      {
        question: 'Explain the purpose of the `dangerouslySetInnerHTML` attribute in React.',
        answer: 'The `dangerouslySetInnerHTML` attribute in React is used to insert raw HTML into a component. It should be used with caution because it can expose the application to cross-site scripting (XSS) attacks if user input is not properly sanitized. It is typically used in situations where you need to render HTML received from an external source.'
      },
      {
        question: 'What is the role of the `componentDidMount` lifecycle method?',
        answer: 'The `componentDidMount` lifecycle method is called after a React component has been inserted into the DOM. It is commonly used to perform tasks such as data fetching, subscriptions, or manually changing the DOM. This method is a good place to initialize state or perform actions that need to happen once the component is mounted.'
      },
      {
        question: 'What is the purpose of the `key` attribute in React?',
        answer: 'The `key` attribute is used in React lists to give each item a unique identifier. React uses these keys to efficiently update the DOM by identifying which items have changed, been added, or been removed. Keys should be stable, unique, and associated with the item’s identity.'
      },
      {
        question: 'What is the role of the `componentDidUpdate` lifecycle method?',
        answer: 'The `componentDidUpdate` lifecycle method is called after a component has been updated in the DOM. It is useful for performing actions or side effects when the component’s state or props have changed. It receives the previous props and state as parameters, allowing you to compare the current and previous values.'
      },
      {
        question: 'What is the purpose of the `shouldComponentUpdate` method?',
        answer: 'The `shouldComponentUpdate` method in React is a lifecycle method that determines whether a component should update or not. By default, it returns `true`, meaning the component will update. You can override this method to implement custom logic for optimizing performance by preventing unnecessary re-renders.'
      },
      {
        question: 'Explain the concept of Higher Order Components (HOC) in React.',
        answer: 'Higher Order Components (HOC) are functions that take a component and return a new component with enhanced functionality. They are a way to reuse component logic, share code between components, and abstract common patterns. HOCs are a form of composition in React and are widely used for code reuse and separation of concerns.'
      },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFAQ = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-8">
      <div className="flex items-center mb-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search FAQ..."
            className="py-2 pl-8 pr-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BsSearch className="text-gray-500" />
          </div>
        </div>
      </div>
      <div className="p-8 bg-white shadow-md rounded-md" style={{ background: 'linear-gradient(to bottom left, #E0E0E0 50%, #FFFFFF 50%)' }}>
        <div className="flex flex-wrap -mx-4">
          {filteredFAQs.map((faq, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white border border-gray-300 p-4 rounded shadow-md">
                <div
                  className="flex items-center justify-between cursor-pointer transition-transform transform duration-300 ease-in-out"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="font-semibold">{faq.question}</div>
                  <div className={`text-primary-500 ${expandedIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                    {expandedIndex === index ? <BsDashSquare /> : <BsPlusSquare />}
                  </div>
                </div>
                {expandedIndex === index && <div className="mt-4">{faq.answer}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;