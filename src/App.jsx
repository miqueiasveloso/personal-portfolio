
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "🛒 Shopping Store",
    description: "A modern e-commerce store built with React and TailwindCSS. Features include cart functionality, product filtering, and responsive design.",
    link: "https://github.com/miqueiasveloso/shopping-store",
    live: "https://miqueiasveloso.github.io/shopping-store/"
  },
  {
    title: "🎬 Streaming App",
    description: "A Netflix-style streaming app with movie previews, responsive layout, and stylish UI animations.",
    link: "https://github.com/miqueiasveloso/streaming-app",
    live: "https://miqueiasveloso.github.io/streaming-app/"
  },
  {
    title: "☁️ Weather App",
    description: "A weather forecast app using a weather API to show real-time conditions based on user location or search.",
    link: "https://github.com/miqueiasveloso/weather-app",
    live: "https://miqueiasveloso.github.io/weather-app/"
  },
  {
    title: "📊 Social Media Dashboard",
    description: "A responsive dashboard that tracks engagement stats across multiple platforms. Clean design and mobile-friendly.",
    link: "https://github.com/miqueiasveloso/social-media-dashboard",
    live: "https://miqueiasveloso.github.io/social-media-dashboard/"
  },
  {
    title: "🎥 Movie Search App",
    description: "A fast and simple movie search app using the OMDb API. Search for movies, view details, and enjoy a clean, responsive UI.",
    link: "https://github.com/miqueiasveloso/movie-search",
    live: "https://miqueiasveloso.github.io/movie-search/"
  },
  {
    title: "🐾 Cat Coffee Shop Restaurant Page",
    description: "A cozy, cat-themed coffee shop restaurant page. Features a playful design, menu, and interactive elements for a delightful user experience.",
    link: "https://github.com/miqueiasveloso/coffee-shop",
    live: "https://miqueiasveloso.github.io/coffee-shop/"
  },
];

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <main
      className={`min-h-screen bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black text-zinc-900 dark:text-white px-6 py-10 font-sans transition-colors duration-500 ${theme === "dark" ? "dark" : ""}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex justify-end w-full mb-4">
            <Button
              className="rounded-full p-2 bg-zinc-800 dark:bg-zinc-700 border border-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:hover:bg-zinc-900 transition-colors duration-300"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/84027511?v=4"
            alt="Profile of Miquéias's cat"
            className="rounded-full w-24 h-24 border-4 border-white mb-4 shadow-md object-cover"
          />
          <h1 className="text-4xl font-bold tracking-tight">Miquéias Veloso</h1>
          <p className="text-gray-400 dark:text-gray-300 mt-2 max-w-md">
            Full-Stack Web Developer passionate about crafting modern, scalable, and user-friendly web applications. Skilled in ReactJS, Node.js, TailwindCSS, and JavaScript. I love building smooth, responsive experiences and solving real-world problems with code.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-zinc-700 dark:border-zinc-600">💼 Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
                whileTap={{ scale: 0.98 }}
                className="transition-transform h-full flex"
              >
                <Card className="bg-zinc-800 dark:bg-zinc-900 border border-zinc-700 dark:border-zinc-600 rounded-2xl shadow-xl flex flex-col justify-between h-full hover:border-blue-500 hover:shadow-blue-500/20 duration-300 min-h-[260px]">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-2 text-blue-400 dark:text-blue-300">{project.title}</h3>
                    <p className="text-gray-300 dark:text-gray-400 mb-6 text-sm leading-relaxed flex-1">{project.description}</p>
                    <div className="flex gap-3 mt-auto">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button className="text-white border-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 duration-200">
                          <Github className="w-4 h-4 mr-2" /> Code
                        </Button>
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button className="text-white border-white hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 duration-200">
                          <ExternalLink className="w-4 h-4 mr-2" /> Live
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center">
            <p className="text-gray-500 dark:text-gray-400 mb-3 text-center">These are just a few of my projects. See more on my GitHub page!</p>
            <a href="https://github.com/miqueiasveloso" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full flex items-center gap-2">
                <Github className="w-4 h-4" /> My GitHub
              </Button>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
