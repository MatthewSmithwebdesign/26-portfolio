import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono p-4 sm:p-6 md:p-8 pt-20">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 md:mb-12">
          <Link href="/" className="text-cyan-500 hover:underline text-sm sm:text-base">&larr; Back to Terminal</Link>
        </header>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-500 mb-6 md:mb-8">About Me</h1>

        <section className="space-y-6">
          <div className="border-l-2 border-cyan-600 pl-4 md:pl-6">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              I'm a <span className="text-cyan-400">Drupal Developer</span> at an enterprise company 
              with 4 plus years of experience building scalable web solutions. and over 8 year of Fullstack development experience. I specialize in Drupal, but also have extensive experience with WordPress, Shopify, and custom web applications using React, Vue.js, PHP, and Python.
            </p>
          </div>

          <p className="text-base sm:text-lg leading-relaxed">
            As a <span className="text-cyan-400">freelance full-stack developer</span>, I help businesses 
            create custom websites and web applications. My expertise spans from enterprise-level CMS 
            implementations to modern AI-powered applications.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-cyan-500 mt-10 md:mt-12 mb-4">What I Do</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-cyan-500">▸</span>
              <span><strong className="text-gray-200">Drupal Development</strong> - Custom modules, themes, migrations, and enterprise solutions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500">▸</span>
              <span><strong className="text-gray-200">E-commerce</strong> - Shopify stores, custom integrations, and payment solutions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500">▸</span>
              <span><strong className="text-gray-200">Web Development</strong> - Custom websites using React, Vue.js, PHP, Python</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500">▸</span>
              <span><strong className="text-gray-200">AI Integration</strong> - Implementing AI solutions, machine learning models, and automation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500">▸</span>
              <span><strong className="text-gray-200">Technical Consulting</strong> - Architecture planning, code reviews, team leadership</span>
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-cyan-500 mt-10 md:mt-12 mb-4">Current Role</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Currently serving as a <span className="text-cyan-400">Full-Stack Drupal Developer</span> at an enterprise company, 
            where I lead development of large-scale, high-traffic Drupal applications. I mentor junior developers 
            and architect solutions that serve millions of users.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-cyan-500 mt-10 md:mt-12 mb-4">Freelance Services</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Available for freelance projects including WordPress development, Shopify stores, custom web applications, 
            and AI integration services. I work with clients to deliver high-quality solutions on time and within budget.
          </p>

          <div className="mt-10 md:mt-12 p-4 md:p-6 border border-cyan-800 bg-cyan-900/10 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3">Let's Work Together</h3>
            <p className="mb-4">Interested in working with me? Check out my projects or get in touch.</p>
            <div className="flex gap-4">
              <Link href="/projects" className="text-cyan-500 hover:underline">View Projects →</Link>
              <Link href="/blog" className="text-cyan-500 hover:underline">Read Blog →</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
