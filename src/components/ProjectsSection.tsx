import { Github, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Resume Screening Tool',
      date: 'April 2025',
      description: 'AI-driven resume screening system using RAG-based pipeline to match resumes with job descriptions, achieving 93% match accuracy.',
      highlights: [
        'Processed 500+ resumes during testing',
        'Reduced manual screening by 60%',
        'Automated context-aware insights & scoring',
        'Containerized with Docker for scalability',
      ],
      techStack: ['GenAI', 'FastAPI', 'LangChain', 'ChromaDB', 'LangGraph', 'Agentic RAG', 'REST API', 'React', 'TypeScript'],
      featured: true,
    },
    {
      title: 'BreastNet: Breast Cancer Detection',
      date: 'October 2022',
      description: 'CNN-based breast tumor classification model using X-ray images, achieving 90% prediction accuracy.',
      highlights: [
        '90% prediction accuracy',
        'Improved inference speed by 25%',
        'Real-time diagnosis support via Flask',
        'Published at IEEE ICECA 2022',
      ],
      techStack: ['CNN', 'Machine Learning', 'Flask', 'HTML', 'Python'],
      featured: false,
    },
    {
      title: 'Auditory-Visual Fusion for Object Detection',
      date: '2024',
      description: 'Real-time auditory-visual fusion model on Raspberry Pi with edge inference latency under 200ms.',
      highlights: [
        'Edge inference under 200ms',
        'Improved detection accuracy by 30%',
        'FogBus integration for distributed processing',
        'Published at IEEE ICDICI 2024 & Patent Filed',
      ],
      techStack: ['Raspberry Pi', 'Edge Computing', 'FogBus', 'Computer Vision', 'Deep Learning'],
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Projects
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in AI/ML, GenAI, and building impactful solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group flex flex-col ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Sparkles size={24} />
                  </div>
                  <span className="text-xs text-muted-foreground">{project.date}</span>
                </div>

                {/* Title & Description */}
                <h3 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2 py-0.5 text-xs rounded-md bg-secondary text-muted-foreground">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
                    <a href="https://github.com/LagisettyRavikiran" target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com/LagisettyRavikiran?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
