import { Code2, Brain, Wrench, Users } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code2,
      skills: ['Python', 'Java', 'SQL', 'TypeScript'],
    },
    {
      title: 'ML/AI Frameworks',
      icon: Brain,
      skills: [
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Hugging Face',
        'LangChain',
        'LangGraph',
        'Keras',
        'RAG',
        'LLMs',
        'GenAI',
        'Streamlit',
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'Docker', 'Jira', 'VS Code', 'Power BI', 'Azure'],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Communication', 'Analytical Thinking', 'Team Collaboration', 'Debugging', 'Problem Solving'],
    },
  ];

  const certifications = [
    'Principles of Generative AI – Infosys Springboard',
    'Artificial Intelligence Primer – Infosys Springboard',
    'Analytics Insights Launchpad Program – PwC',
  ];

  const achievements = [
    '1st Place – Idea Spark Project Presentation',
    '2nd Place – INNOV-CODE Hackathon',
    'Secured internship through AI-INNOV-CODE Hackathon',
    'Top 10 out of 150+ participants – Kaggle Competition',
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Skills & Expertise
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-heading font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Achievements */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div className="card-gradient rounded-2xl p-6 md:p-8 border border-border">
              <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Certifications
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="card-gradient rounded-2xl p-6 md:p-8 border border-border">
              <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Achievements
              </h3>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
