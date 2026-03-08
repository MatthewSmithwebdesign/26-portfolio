import Link from 'next/link';

const skillCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'PHP', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Vue.js', 'Tailwind CSS', 'SCSS', 'HTML5', 'CSS3'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Django', 'Laravel', 'Express', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite'],
  },
  {
    name: 'CMS & Platforms',
    skills: ['Drupal', 'Shopify', 'WordPress', 'Vercel', 'AWS'],
  },
  {
    name: 'AI & Machine Learning',
    skills: ['OpenAI API', 'LLM Integration', 'AI Automation', 'Chatbots', 'ML Models'],
  },
  {
    name: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'CI/CD', 'Linux', 'Nginx', 'Apache'],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <Link href="/" className="text-cyan-500 hover:underline">&larr; Back to Terminal</Link>
        </header>

        <h1 className="text-4xl font-bold text-cyan-500 mb-8">Technical Skills</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.name} className="border border-cyan-800/50 rounded-lg p-6 hover:border-cyan-600 transition-colors">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">{category.name}</h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-cyan-900/20 border border-cyan-700/30 rounded-full text-sm text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-cyan-500 mb-6">Specializations</h2>
          <div className="space-y-4">
            <div className="p-4 border-l-2 border-cyan-600">
              <h3 className="text-lg font-bold text-gray-200">Drupal Expert</h3>
              <p className="text-gray-400">6+ years building enterprise Drupal sites. Custom module development, theme creation, performance optimization, and Drupal migrations.</p>
            </div>
            <div className="p-4 border-l-2 border-cyan-600">
              <h3 className="text-lg font-bold text-gray-200">E-commerce Specialist</h3>
              <p className="text-gray-400">Shopify development, WooCommerce, custom checkout solutions, payment gateway integrations, and e-commerce optimization.</p>
            </div>
            <div className="p-4 border-l-2 border-cyan-600">
              <h3 className="text-lg font-bold text-gray-200">AI Integration</h3>
              <p className="text-gray-400">Building AI-powered applications, LLM integrations, chatbot development, and AI automation workflows.</p>
            </div>
            <div className="p-4 border-l-2 border-cyan-600">
              <h3 className="text-lg font-bold text-gray-200">Full-Stack Development</h3>
              <p className="text-gray-400">End-to-end development from database design to frontend implementation using modern frameworks and best practices.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
