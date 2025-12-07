import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Technology Solutions Intern / Apprentice (AI/ML)',
      company: 'Diebold Nixdorf',
      location: 'Mumbai, India',
      period: 'January 2025 – Present',
      techStack: ['Azure App Services', 'Azure VM', 'GenAI', 'RAG Systems', 'Langfuse', 'Python', 'Bitbucket', 'Jira', 'Git', 'Streamlit'],
      achievements: [
        'Engineered a multi-modal RAG data pipeline to process image and text-based internal documentation, improving response relevance by ~28%',
        'Automated PDF-to-Markdown conversion for over 10,000 pages, eliminating manual effort and accelerating preprocessing workflows by 90%',
        'Integrated Azure OpenAI and LLAMA 3.3 LLMs into the pipeline, reducing document query latency by 40%',
        'Improved multilingual document retrieval performance by 35% using Multilingual-e5-large and Reranker models',
        'Contributed across 20+ Agile/Scrum sprints involving model debugging, data validation, and feature deployment',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Experience
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Where I've <span className="gradient-text">Worked</span>
            </h2>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="card-gradient rounded-2xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-heading font-semibold text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span>{exp.company}</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
