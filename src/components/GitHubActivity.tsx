import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, BookMarked, Users, Code2 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const GITHUB_USER = 'kkc-ritwik';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
}

interface GitUser {
  public_repos: number;
  followers: number;
  following: number;
}

// Fixed palette for language bars (static classes → no safelist needed)
const LANG_BAR = [
  'bg-indigo-500',
  'bg-sky-500',
  'bg-cyan-500',
  'bg-emerald-500',
  'bg-fuchsia-500',
  'bg-violet-500',
];

const REPO_FALLBACK_COPY: Record<string, { title?: string; description: string }> = {
  'HRMS-SaaS-Platform': {
    title: 'HRMS SaaS Platform',
    description:
      'Enterprise-grade multi-tenant HRMS built with Spring Boot microservices, covering payroll, recruitment, compliance, and employee lifecycle management.',
  },
  RecruitHub: {
    description:
      'Role-based recruitment system for HR teams and candidates, built to streamline hiring workflows, interviews, and application tracking.',
  },
  'Foodie-Express': {
    title: 'Foodie Express',
    description:
      'Scalable backend for food delivery with secure authentication, order lifecycle APIs, and restaurant operations management.',
  },
  'Study-Notion': {
    title: 'Study Notion',
    description:
      'MERN ed-tech platform with dashboards, course management, and end-to-end student purchase and learning flow.',
  },
  HRPulse: {
    description:
      'Human resource management backend focused on payroll automation, leave workflows, attendance, and role-based access control.',
  },
  'ProductInventoryAPI': {
    title: 'Product Inventory API',
    description:
      '.NET Web API for product inventory management using SQL Server and EF Core with clean architecture and Swagger docs.',
  },
  'IIA-DB': {
    title: 'IIA DB',
    description:
      'Database design and SQL practice repository used for schema design, query optimization, and relational modeling exercises.',
  },
  'Sai-Frontend': {
    title: 'Sai Frontend',
    description:
      'Frontend application repository focused on reusable UI, responsive layouts, and practical web app workflows.',
  },
  'Export-Blazor-DataGrid-to-Excel': {
    title: 'Export Blazor DataGrid to Excel',
    description:
      'Blazor utility demonstrating reliable DataGrid export to Excel in enterprise-style reporting scenarios.',
  },
};

function humanizeRepoName(repoName: string): string {
  return repoName.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function getRepoTitle(repo: Repo): string {
  return REPO_FALLBACK_COPY[repo.name]?.title || humanizeRepoName(repo.name);
}

function getRepoDescription(repo: Repo): string {
  const githubDescription = repo.description?.trim();
  if (githubDescription) return githubDescription;
  return (
    REPO_FALLBACK_COPY[repo.name]?.description ||
    'Production-ready repository by Ritwik Raj. Open on GitHub to view implementation details.'
  );
}

export default function GitHubActivity() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<GitUser | null>(null);
  const [totalStars, setTotalStars] = useState(0);
  const [langs, setLangs] = useState<{ name: string; pct: number }[]>([]);
  const [streakOk, setStreakOk] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const opts = { signal: controller.signal };

    fetch(`https://api.github.com/users/${GITHUB_USER}`, opts)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((u: GitUser) => setUser(u))
      .catch(() => {});

    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`, opts)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: Repo[]) => {
        const owned = data.filter((r) => !r.fork);

        setTotalStars(owned.reduce((sum, r) => sum + r.stargazers_count, 0));

        setRepos(
          [...owned].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6),
        );

        const counts: Record<string, number> = {};
        owned.forEach((r) => {
          if (r.language) counts[r.language] = (counts[r.language] || 0) + 1;
        });
        const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
        setLangs(
          Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 6)
            .map(([name, n]) => ({ name, pct: Math.round((n / total) * 100) })),
        );
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  const stats = [
    { icon: BookMarked, label: 'Public Repos', value: user ? `${user.public_repos}` : '—' },
    { icon: Star, label: 'Total Stars', value: `${totalStars}` },
    { icon: Users, label: 'Followers', value: user ? `${user.followers}` : '—' },
    { icon: Code2, label: 'Top Language', value: langs[0]?.name || '—' },
  ];

  return (
    <section id="github" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-indigo-500 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-sky-500 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <Github className="text-5xl md:text-6xl text-indigo-400 mr-4 stroke-[1.5]" />
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-sky-500">
              GitHub Activity
            </h2>
          </div>
          <p className="text-gray-300 max-w-2xl text-lg">
            Live from my GitHub — real code, real commits, updated automatically.
          </p>
        </motion.div>

        {/* Native stat cards (built from the live GitHub API) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-indigo-500/30 flex flex-col items-center text-center"
                variants={fadeInUp}
                whileHover={{ y: -6 }}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-sky-600 flex items-center justify-center mb-3 shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl md:text-3xl font-bold text-white break-words leading-tight">{s.value}</span>
                <span className="text-sm text-gray-400 mt-1">{s.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 items-start">
          {/* Native top-languages bar */}
          <motion.div
            className="backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-indigo-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-indigo-300" /> Most Used Languages
            </h3>
            {langs.length > 0 ? (
              <>
                <div className="flex h-3 rounded-full overflow-hidden mb-4">
                  {langs.map((l, i) => (
                    <div key={l.name} className={LANG_BAR[i % LANG_BAR.length]} style={{ width: `${l.pct}%` }} />
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                  {langs.map((l, i) => (
                    <div key={l.name} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className={`w-2.5 h-2.5 rounded-full ${LANG_BAR[i % LANG_BAR.length]}`} />
                      {l.name} <span className="text-gray-500 ml-auto">{l.pct}%</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-500">Loading language data…</p>
            )}
          </motion.div>

          {/* Contribution streak (external image, hides itself if the service is down) */}
          {streakOk && (
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USER}&hide_border=true&background=0f172a&stroke=818cf8&ring=38bdf8&fire=38bdf8&currStreakLabel=cbd5e1&sideLabels=cbd5e1&dates=64748b&currStreakNum=ffffff&sideNums=ffffff`}
                alt="GitHub contribution streak"
                loading="lazy"
                onError={() => setStreakOk(false)}
                className="w-full max-w-md rounded-2xl border border-white/10"
              />
            </motion.div>
          )}
        </div>

        {/* Live repositories */}
        {repos.length > 0 && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {repos.map((repo) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-sm bg-white/10 p-5 rounded-xl border border-indigo-500/30 hover:border-indigo-400/60 transition-colors group"
                variants={fadeInUp}
                whileHover={{ y: -6 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white truncate group-hover:text-indigo-300 transition-colors">
                    {getRepoTitle(repo)}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                </div>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2 min-h-[2.5rem]">
                  {getRepoDescription(repo)}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  {repo.language && (
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                      {repo.language}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" /> {repo.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" /> {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        <div className="mt-12 text-center">
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
