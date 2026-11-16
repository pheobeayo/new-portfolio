import React, { useState, useEffect } from "react";
import { projects } from "../data/projects";
import { BsLink45Deg } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { VscStarFull } from "react-icons/vsc";
import { BiGitCommit, BiGitPullRequest } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const filters = [
  { key: "all", label: "All Projects" },
  { key: "web3", label: "Web3" },
  { key: "web2", label: "Web2" },
  { key: "ai", label: "AI / ML" },
];

// GitHub's unauthenticated API allows 60 requests/hour per visitor, so repo
// stats are cached in sessionStorage and only fetched once per hour.
const CACHE_KEY = "gh-repo-stats-v1";
const CACHE_TTL = 60 * 60 * 1000;

const readCache = () => {
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY));
    if (cached && Date.now() - cached.at < CACHE_TTL) return cached.data;
  } catch {
    // storage unavailable or corrupt — fall through and refetch
  }
  return null;
};

const writeCache = (data) => {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }));
  } catch {
    // ignore — caching is only an optimisation
  }
};

// Fetch GitHub data for a single repo. `missing` marks repos that are private
// or deleted so the card can hide a link that would 404 for visitors.
const fetchRepoData = async (repoPath) => {
  try {
    const res = await fetch(`https://api.github.com/repos/${repoPath}`);
    if (res.status === 404) return { missing: true };
    if (!res.ok) return null;
    const data = await res.json();
    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      lastPush: data.pushed_at,
      language: data.language,
    };
  } catch {
    return null;
  }
};

// Format relative time (e.g. "3 days ago")
const timeAgo = (dateStr) => {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
};

// Placeholder card for projects without images yet
const PlaceholderImage = ({ title, category }) => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0d2137] to-[#1a3a5c]">
    <span className="text-[#FF5823] text-2xl font-bold tracking-widest opacity-40 select-none">
      {title}
    </span>
    <span className="text-sub text-xs mt-1 tracking-widest opacity-40 uppercase">
      {category}
    </span>
  </div>
);

const Project = ({ show }) => {
  const [active, setActive] = useState("all");
  const [githubData, setGithubData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const cached = readCache();
    if (cached) {
      setGithubData(cached);
      setLoading(false);
      return;
    }
    const fetchAll = async () => {
      const withRepo = projects.filter((p) => p.repo);
      const results = await Promise.all(
        withRepo.map((p) => fetchRepoData(p.repo).then((d) => [p.id, d]))
      );
      if (cancelled) return;
      const map = {};
      results.forEach(([id, data]) => {
        if (data) map[id] = data;
      });
      setGithubData(map);
      setLoading(false);
      // Don't cache an empty result (e.g. rate-limited) — retry next visit.
      if (Object.keys(map).length) writeCache(map);
    };
    fetchAll();
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  const totalProjects = projects.length;

  return (
    <div className={`${show && "blur-sm"} pt-6 px-5 sm:px-8 md:px-12 lg:pl-24 ff`}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-3"
      >
        <p className="text-[#FF5823] text-xs tracking-widest mb-1">— Portfolio</p>
        <h1 className="text-name text-3xl sm:text-4xl font-bold">Things I've Built</h1>
      </motion.div>

      {/* Live stats summary from GitHub */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="flex flex-wrap gap-6 mb-8"
      >
        <div>
          <p className="text-name text-2xl font-bold">{totalProjects}+</p>
          <p className="text-sub text-xs tracking-widest">Projects</p>
        </div>
        <div className="border-l border-[#233554] pl-6">
          <p className="text-name text-2xl font-bold">
            {Object.values(githubData).reduce((acc, d) => acc + (d?.stars || 0), 0)}
          </p>
          <p className="text-sub text-xs tracking-widest">GitHub Stars</p>
        </div>
        <div className="border-l border-[#233554] pl-6">
          <p className="text-name text-2xl font-bold">
            {Object.values(githubData).reduce((acc, d) => acc + (d?.forks || 0), 0)}
          </p>
          <p className="text-sub text-xs tracking-widest">Forks</p>
        </div>
        <div className="border-l border-[#233554] pl-6">
          <p className="text-name text-2xl font-bold">15+</p>
          <p className="text-sub text-xs tracking-widest">OSS Contributions</p>
        </div>
        {loading && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FF5823] rounded-full animate-pulse" />
            <span className="text-sub text-xs">Fetching GitHub data…</span>
          </div>
        )}
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="flex gap-2 mb-8 flex-wrap"
      >
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            aria-pressed={active === f.key}
            className={`px-4 py-1.5 text-xs tracking-widest rounded-sm border transition-all duration-200 ${
              active === f.key
                ? "bg-[#FF5823] text-[#0a192f] border-[#FF5823] font-bold"
                : "border-[#233554] text-sub hover:border-[#FF5823] hover:text-[#FF5823]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </motion.div>

      {/* Project grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const ghRaw = githubData[project.id];
            const gh = ghRaw && !ghRaw.missing ? ghRaw : null;
            const showRepo = project.repo && !ghRaw?.missing;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: Math.min(i, 8) * 0.04 }}
                className="group bg-[#112240] rounded-sm overflow-hidden hover:bg-[#1d3461] transition-colors duration-300 flex flex-col"
              >
                {/* Image / Placeholder */}
                <div className="overflow-hidden h-44 relative">
                  {project.img ? (
                    <img
                      src={project.img}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-500">
                      <PlaceholderImage title={project.title} category={project.category} />
                    </div>
                  )}

                  {/* Category + year badges */}
                  <div className="absolute top-2 left-2 flex gap-1 flex-wrap">
                    <span className="bg-[#0a192f] text-[#FF5823] text-xs px-2 py-0.5 rounded-sm tracking-wider">
                      {project.category === "ai" ? "AI / ML" : project.category === "web3" ? "Web3" : "Web2"}
                    </span>
                    <span className="bg-[#0a192f] text-sub text-xs px-2 py-0.5 rounded-sm">
                      {project.year}
                    </span>
                    {project.badge && (
                      <span className="bg-[#FF5823] text-[#0a192f] text-xs px-2 py-0.5 rounded-sm font-bold">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* GitHub language badge */}
                  {gh?.language && (
                    <div className="absolute bottom-2 right-2">
                      <span className="bg-[#0a192f] text-[#ccd6f6] text-xs px-2 py-0.5 rounded-sm">
                        {gh.language}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-name font-bold text-base mb-2">{project.title}</h3>
                  <p className="text-sub text-xs leading-relaxed mb-3 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sub text-xs border border-[#233554] px-2 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub live stats row */}
                  {gh ? (
                    <div className="flex items-center gap-4 mb-3 py-2 border-t border-b border-[#233554]">
                      <span className="flex items-center gap-1 text-sub text-xs" title="Stars">
                        <VscStarFull className="text-[#FF5823]" />
                        {gh.stars}
                      </span>
                      <span className="flex items-center gap-1 text-sub text-xs" title="Forks">
                        <BiGitPullRequest className="text-[#FF5823]" />
                        {gh.forks}
                      </span>
                      {gh.lastPush && (
                        <span
                          className="flex items-center gap-1 text-sub text-xs ml-auto"
                          title="Last pushed"
                        >
                          <BiGitCommit className="text-[#FF5823]" />
                          {timeAgo(gh.lastPush)}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="h-8 mb-3" />
                  )}

                  {/* Links */}
                  <div className="flex gap-4 text-lg">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sub hover:text-[#FF5823] transition-colors flex items-center gap-1 text-xs tracking-wider"
                      >
                        <BsLink45Deg className="text-lg" /> Live ↗
                      </a>
                    )}
                    {showRepo ? (
                      <a
                        href={`https://github.com/${project.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sub hover:text-[#FF5823] transition-colors flex items-center gap-1 text-xs tracking-wider"
                      >
                        <AiFillGithub className="text-lg" /> Repo ↗
                      </a>
                    ) : (
                      (project.repo || project.privateRepo) && (
                        <span className="text-sub opacity-60 flex items-center gap-1 text-xs tracking-wider">
                          <AiFillGithub className="text-lg" /> Private repo
                        </span>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Project;