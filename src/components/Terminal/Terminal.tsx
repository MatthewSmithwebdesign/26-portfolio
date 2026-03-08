'use client';

import { useState, useRef, useEffect, KeyboardEvent, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface TerminalLine {
  type: 'input' | 'output' | 'error' | 'success';
  content: string;
}

const COMMANDS = {
  help: 'Show available commands',
  about: 'Learn about me',
  projects: 'View my projects',
  skills: 'See my technical skills',
  blog: 'Read my blog posts',
  contact: 'Get my contact information',
  clear: 'Clear the terminal',
  ls: 'List available pages',
  whoami: 'Display user information',
};

const ASCII_LOGO = `
 _      _      _      _      _      _      _   
/ \\    / \\    / \\    / \\    / \\    / \\    / \\
( W ) ( e ) ( l ) ( c ) ( o ) ( m ) ( e )
\\_/    \\_/    \\_/    \\_/    \\_/    \\_/   

   Full-Stack Developer Portfolio
`;

export default function Terminal() {
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState('');
  const [currentPath, setCurrentPath] = useState('~');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const welcomeLines: TerminalLine[] = [
      { type: 'success', content: 'Welcome to Matthew Smith Portfolio v1.0.0' },
      { type: 'output', content: 'Type "help" to see available commands or "ls" to list pages.' },
      { type: 'output', content: '' },
    ];
    setHistory(welcomeLines);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const executeCommand = (cmd: string): TerminalLine[] => {
    const command = cmd.trim().toLowerCase();
    const lines: TerminalLine[] = [];

    switch (command) {
      case 'help':
        lines.push({ type: 'output', content: 'Available commands:' });
        Object.entries(COMMANDS).forEach(([name, desc]) => {
          lines.push({ type: 'output', content: `  ${name.padEnd(12)} - ${desc}` });
        });
        break;

      case 'ls':
        lines.push({ type: 'output', content: 'Pages:' });
        ['about', 'projects', 'skills', 'blog', 'contact'].forEach(page => {
          lines.push({ type: 'success', content: `  ${page}/` });
        });
        break;

      case 'about':
        router.push('/about');
        lines.push({ type: 'success', content: 'Navigating to about page...' });
        break;

      case 'projects':
        router.push('/projects');
        lines.push({ type: 'success', content: 'Navigating to projects page...' });
        break;

      case 'skills':
        router.push('/skills');
        lines.push({ type: 'success', content: 'Navigating to skills page...' });
        break;

      case 'blog':
        router.push('/blog');
        lines.push({ type: 'success', content: 'Navigating to blog...' });
        break;

      case 'contact':
        lines.push({ type: 'output', content: 'Contact Information:' });
        lines.push({ type: 'success', content: '  Email: hello@yourdomain.com' });
        lines.push({ type: 'output', content: '  GitHub: github.com/yourusername' });
        lines.push({ type: 'output', content: '  LinkedIn: linkedin.com/in/yourusername' });
        break;

      case 'whoami':
        lines.push({ type: 'output', content: 'visitor@matthew-smith' });
        lines.push({ type: 'output', content: 'Role: Guest User' });
        lines.push({ type: 'output', content: 'Permission: Read-only' });
        break;

      case 'clear':
        setHistory([]);
        return [];

      case '':
        break;

      default:
        lines.push({ type: 'error', content: `Command not found: ${command}` });
        lines.push({ type: 'output', content: 'Type "help" for available commands.' });
    }

    return lines;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newHistory: TerminalLine[] = [
      ...history,
      { type: 'input', content: `${currentPath}$ ${input}` },
    ];

    const output = executeCommand(input);
    newHistory.push(...output);

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'c' && e.ctrlKey) {
      setHistory([...history, { type: 'input', content: `${currentPath}$ ${input}` }, { type: 'error', content: '^C' }]);
      setInput('');
    }
  };

  const getLineClass = (type: TerminalLine['type']) => {
    switch (type) {
      case 'input': return 'text-cyan-400';
      case 'error': return 'text-red-400';
      case 'success': return 'text-cyan-400 font-bold';
      default: return 'text-gray-300';
    }
  };

  return (
    <div 
      className="min-h-screen bg-black text-gray-300 font-mono p-4 md:p-8 cursor-text"
      onClick={focusInput}
      role="application"
      aria-label="Terminal interface"
    >
      <div 
        ref={terminalRef}
        className="max-w-4xl mx-auto space-y-1"
      >
        <pre className="text-cyan-500 text-xs md:text-sm mb-6 whitespace-pre-wrap">
          {ASCII_LOGO}
        </pre>

        {history.map((line, i) => (
          <div key={i} className={`${getLineClass(line.type)} whitespace-pre-wrap`}>
            {line.content}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-cyan-500">{currentPath}$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-gray-300 caret-cyan-500"
            autoComplete="off"
            autoFocus
            spellCheck={false}
            aria-label="Terminal command input"
          />
        </form>
      </div>

      <div className="fixed bottom-4 right-4 text-gray-600 text-sm">
        <Link href="/about" className="hover:text-cyan-500 transition-colors">[Click for GUI mode]</Link>
      </div>
    </div>
  );
}
