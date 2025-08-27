import React, { useMemo, useState } from "react";
import { ExternalLink, Package as PackageIcon, Copy, Check, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const packages = [
  {
    name: "cloudy-upload",
    description:
      "A robust and easy-to-use file upload utility for cloud storage integrations.",
    link: "https://www.npmjs.com/package/cloudy-upload",
  },
  {
    name: "boilerbackend-cli",
    description:
      "CLI tool to quickly scaffold and manage backend boilerplate projects.",
    link: "https://www.npmjs.com/package/boilerbackend-cli",
  },
  {
    name: "sabarishelpdesk",
    description:
      "A lightweight helpdesk ticketing system built for developers and support teams.",
    link: "https://www.npmjs.com/package/sabarishelpdesk",
  },
];

export default function PackageShowcase() {
  const [q, setQ] = useState("");
  const [copied, setCopied] = useState(null);
  const [sort, setSort] = useState("az");

  const filtered = useMemo(() => {
    const norm = (s) => s.toLowerCase();
    const list = packages.filter(
      (p) => norm(p.name).includes(norm(q)) || norm(p.description).includes(norm(q))
    );
    return list.sort((a, b) => (sort === "az" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
  }, [q, sort]);

  const copyCmd = async (pkg) => {
    const cmd = `npm i ${pkg}`;
    try {
      await navigator.clipboard.writeText(cmd);
      setCopied(pkg);
      setTimeout(() => setCopied(null), 1500);
    } catch (e) {
      console.error("Clipboard failed", e);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <header className="max-w-6xl mx-auto px-6 pt-14 pb-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight"
        >
          Sabari's <span className="text-indigo-400">NPM</span> Packages
        </motion.h1>
        <p className="mt-3 text-gray-400 max-w-3xl mx-auto text-lg">
          A curated set of tools I've published to speed up backend scaffolding, cloud uploads, and developer support.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center">
          <label className="relative w-full sm:w-1/2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search packages…"
              className="w-full bg-gray-800 rounded-full pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-400"
            />
          </label>

          <div className="flex gap-2 bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setSort("az")}
              className={`px-4 py-2 rounded-full text-sm transition ${
                sort === "az" ? "bg-indigo-500 text-white" : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              A → Z
            </button>
            <button
              onClick={() => setSort("za")}
              className={`px-4 py-2 rounded-full text-sm transition ${
                sort === "za" ? "bg-indigo-500 text-white" : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              Z → A
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filtered.map((pkg, i) => (
              <motion.article
                key={pkg.name}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-indigo-500/20 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-indigo-600/20">
                      <PackageIcon className="h-6 w-6 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-semibold truncate">{pkg.name}</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {pkg.description}
                  </p>
                  <code className="bg-gray-900 rounded-full px-4 py-2 text-sm truncate">
                    npm i {pkg.name}
                  </code>
                  <div className="flex gap-3">
                    <button
                      onClick={() => copyCmd(pkg.name)}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 text-sm"
                    >
                      {copied === pkg.name ? (
                        <>
                          <Check className="h-4 w-4" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" /> Copy
                        </>
                      )}
                    </button>
                    <a
                      href={pkg.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-sm text-white"
                    >
                      View on npm <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center mt-24 text-gray-400">No packages match your search.</div>
        )}
      </main>

      <footer className="max-w-6xl mx-auto px-6 pb-14 text-gray-400 text-sm text-center">
        <div className="border-t border-gray-700 pt-6">
          <p>© {new Date().getFullYear()} Sabari M — All rights reserved.</p>
          <p className="opacity-80 mt-1">Built with React, Tailwind CSS & Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
}
