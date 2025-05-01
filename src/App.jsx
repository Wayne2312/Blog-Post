import { useState } from 'react';
import Blog from './components/Blog.jsx';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <h1 className="text-3xl font-bold text-center">Welcome to My Blog</h1>
      </header>
      <main className="flex-grow flex justify-center items-start py-10 px-4">
        <Blog />
      </main>
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My Blog. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
