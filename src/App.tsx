import { Github, Mail, FileText, ChevronDown, User, Briefcase, Code, Send, Linkedin, Twitter } from 'lucide-react';

function App() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-lg z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center items-center">
            <h2 className="text-4xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Portfolio
            </h2>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-16">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
              <h1 className="relative font-heading text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 pb-2">
                Kshitij Shallesh Tater
              </h1>
          </div>
          <p className="text-2xl font-light tracking-wide text-gray-300">
            Full Stack Developer | Software Engineer
          </p>
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/Rxhuljain" 
              className="group flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300"
            >
              <Github className="w-5 h-5 group-hover:text-blue-400" />
              <span className="font-medium tracking-wide group-hover:text-blue-400">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/kshitij-shallesh-tater-a643481ab/" 
              className="group flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 group-hover:text-blue-400" />
              <span className="font-medium tracking-wide group-hover:text-blue-400">LinkedIn</span>
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              className="group flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300"
            >
              <Twitter className="w-5 h-5 group-hover:text-blue-400" />
              <span className="font-medium tracking-wide group-hover:text-blue-400">Twitter</span>
            </a>
          </div>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce w-6 h-6 text-blue-400" />
      </section>

      {/* About Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-12 flex items-center gap-3 group">
            <User className="w-8 h-8 group-hover:text-blue-400 transition-colors" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              About Me
            </span>
          </h2>
          <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500">
            <p className="text-gray-300 leading-relaxed text-lg tracking-wide">
              I'm a Software Engineer pursuing B.Tech in Electrical and Electronics Engineering at VIT. Skilled in Java, Node.js, React, Next.js, AWS, and Android development, I’ve interned at LG Electronics and JP Morgan Chase & Co.. I’ve built projects like a Zoom Clone, AI Voice Assistant, and Hotstar Clone, showcasing my full-stack and AI expertise. Always eager to learn and innovate! 🚀
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-12 flex items-center gap-3 group">
            <Code className="w-8 h-8 group-hover:text-blue-400 transition-colors" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Project One"
              description="Description of your first project goes here. Explain the tech stack and your role."
              link="https://voiceassistant-ten.vercel.app/"
              tags={['React', 'TypeScript','AI - Integration']}
            />
            <ProjectCard 
              title="Project Two"
              description="Description of your second project goes here. Explain the tech stack and your role."
              link="https://men-mental-health.vercel.a/"
              tags={['Next.js', 'Tailwind', 'AI - Integration']}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-12 flex items-center gap-3 group">
            <Briefcase className="w-8 h-8 group-hover:text-blue-400 transition-colors" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Experience
            </span>
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group">
              <h3 className="font-heading text-2xl font-semibold group-hover:text-blue-400 transition-colors">Internship</h3>
              <p className="text-gray-400 mt-2 text-lg font-medium">LG Electronics • August 2023 - September 2023</p>
              <p className="text-gray-300 mt-4 leading-relaxed tracking-wide">
              Conducted quality control tests on TV products, identifying and resolving 15 defects, leading to a 5% reduction in production errors. Gained expertise in LED panel technology and display calibration.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">Quality Control</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">Testing</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">Display calibration, and Data analysis</span>
              </div>
            </div>
            <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 group">
              <h3 className="font-heading text-2xl font-semibold group-hover:text-blue-400 transition-colors">Software Engineering Internship</h3>
              <p className="text-gray-400 mt-2 text-lg font-medium">JP Morgan Chase & Co. • April 2024 - May 2024</p>
              <p className="text-gray-300 mt-4 leading-relaxed tracking-wide">
              Set up a local development environment and fixed broken repository files to ensure correct web application output. Utilized JPMorgan Chase's Perspective library to create a real-time data visualization graph for traders.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">JavaScript</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">ReactJS</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">A Real-time Data Visualization graph</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-12 flex items-center gap-3 group">
            <Send className="w-8 h-8 group-hover:text-blue-400 transition-colors" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Contact
            </span>
          </h2>
          <div className="bg-gray-800/30 rounded-2xl p-8 backdrop-blur-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500">
            <p className="text-gray-300 mb-8 text-lg tracking-wide leading-relaxed">
              Interested in working together? Let's connect and create something amazing!
            </p>
            <div className="flex gap-6">
              <a 
                href="mailto:rahul.tater010@gmail.com"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-6 py-3 rounded-lg group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium tracking-wide">Email Me</span>
              </a>
              <a 
                href="/Resume.pdf"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 transition-all duration-300 px-6 py-3 rounded-lg group"
              >
                <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium tracking-wide">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="text-lg">
            Developed by <span className="font-semibold text-blue-400">Kshitij Tater</span> ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, link, tags }: { 
  title: string; 
  description: string; 
  link: string;
  tags: string[];
}) {
  return (
    <div className="group bg-gray-800/30 rounded-2xl p-8 backdrop-blur-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500">
      <h3 className="font-heading text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed tracking-wide">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">{tag}</span>
        ))}
      </div>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block bg-blue-500 hover:bg-blue-600 transition-all duration-300 px-6 py-3 rounded-lg"
      >
        View Project
      </a>
    </div>
  );
}

export default App;
