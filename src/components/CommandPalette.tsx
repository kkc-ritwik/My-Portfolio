import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, User, Briefcase, Code, Rocket, Github, Star, FileText,
  HelpCircle, Mail, MessageCircle, Calendar, Linkedin, CornerDownLeft,
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

type Item = {
  label: string;
  hint: string;
  icon: typeof User;
  run: () => void;
  keywords?: string;
};

const RESUME_URL = 'https://drive.google.com/file/d/1i-2LUOIFAOcQ4GQPvzuJtJt-FP55bya2/view?usp=sharing';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const go = (id: string) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const openUrl = (url: string) => () => window.open(url, '_blank', 'noopener,noreferrer');

  const items: Item[] = useMemo(
    () => [
      { label: 'About', hint: 'Who I am', icon: User, run: go('about'), keywords: 'bio intro' },
      { label: 'Services', hint: 'What I offer', icon: Briefcase, run: go('services'), keywords: 'offer hire' },
      { label: 'Skills', hint: 'Tech stack', icon: Code, run: go('skills'), keywords: 'tech stack' },
      { label: 'Projects', hint: 'Featured work', icon: Rocket, run: go('projects'), keywords: 'work portfolio' },
      { label: 'GitHub Activity', hint: 'Live repos & stats', icon: Github, run: go('github'), keywords: 'code repos' },
      { label: 'Reviews', hint: 'Client testimonials', icon: Star, run: go('testimonials'), keywords: 'testimonials' },
      { label: 'FAQ', hint: 'Common questions', icon: HelpCircle, run: go('faq'), keywords: 'questions' },
      { label: 'Book a Free Call', hint: 'Discuss your project', icon: Calendar, run: go('contact'), keywords: 'call meeting hire' },
      { label: 'Open AI Assistant', hint: 'Chat about my work', icon: MessageCircle, run: () => window.dispatchEvent(new CustomEvent('open-chat')), keywords: 'chatbot ai ask' },
      { label: 'Download Resume', hint: 'PDF', icon: FileText, run: openUrl(RESUME_URL), keywords: 'cv pdf' },
      { label: 'Email Ritwik', hint: 'ritwiksinghkkc@gmail.com', icon: Mail, run: openUrl('mailto:ritwiksinghkkc@gmail.com'), keywords: 'contact mail' },
      { label: 'GitHub Profile', hint: 'github.com/kkc-ritwik', icon: Github, run: openUrl('https://github.com/kkc-ritwik'), keywords: 'code' },
      { label: 'LinkedIn', hint: 'Connect with me', icon: Linkedin, run: openUrl('https://www.linkedin.com/in/kkc-ritwik/'), keywords: 'social network' },
    ],
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) => i.label.toLowerCase().includes(q) || i.hint.toLowerCase().includes(q) || i.keywords?.includes(q),
    );
  }, [query, items]);

  // Global ⌘K / Ctrl+K toggle
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    const openCmd = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('open-command', openCmd);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-command', openCmd);
    };
  }, []);

  useEffect(() => {
    if (open) {
      trackEvent('command_palette_opened');
      setQuery('');
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  const select = (item: Item) => {
    trackEvent('command_palette_item_selected', { item_label: item.label });
    setOpen(false);
    setTimeout(item.run, 120);
  };

  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter' && filtered[active]) {
      e.preventDefault();
      select(filtered[active]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] px-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="w-full max-w-lg rounded-2xl overflow-hidden border border-indigo-500/40 bg-gray-900 shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onListKey}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section or action…"
                className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
              />
              <kbd className="text-[10px] text-gray-500 border border-white/10 rounded px-1.5 py-0.5">ESC</kbd>
            </div>

            <div className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-center text-sm text-gray-500">No matches.</p>
              )}
              {filtered.map((item, i) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => select(item)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                      i === active ? 'bg-indigo-600/30' : 'hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-indigo-300 flex-shrink-0" />
                    <span className="text-sm text-white">{item.label}</span>
                    <span className="text-xs text-gray-500 ml-auto truncate max-w-[45%]">{item.hint}</span>
                    {i === active && <CornerDownLeft className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 text-[11px] text-gray-500">
              <span>↑↓ to navigate · ↵ to select</span>
              <span className="text-indigo-300">Ritwik's Portfolio</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
