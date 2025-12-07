import { GraduationCap, Award, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Passionate about <span className="gradient-text">AI Innovation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm an aspiring AI/ML Engineer with hands-on experience in Generative AI, 
                Deep Learning, and RAG pipelines. My journey in technology is driven by a 
                passion for building scalable and impactful AI-driven solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently working as a Technology Solutions Intern at Diebold Nixdorf, 
                I've engineered multi-modal RAG data pipelines, automated document processing 
                workflows, and integrated advanced LLMs to optimize knowledge retrieval systems.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With a strong foundation from Kalasalingam Academy of Research and Education 
                (GPA: 9.16/10), I bring both academic excellence and practical expertise to 
                every project I undertake.
              </p>
            </div>

            {/* Right - Stats Cards */}
            <div className="grid gap-4">
              <div className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Education</h3>
                    <p className="text-muted-foreground text-sm">B.Tech in Computer Science</p>
                    <p className="text-primary font-semibold mt-1">GPA: 9.16/10.0</p>
                  </div>
                </div>
              </div>

              <div className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Experience</h3>
                    <p className="text-muted-foreground text-sm">Technology Solutions Intern</p>
                    <p className="text-primary font-semibold mt-1">Diebold Nixdorf</p>
                  </div>
                </div>
              </div>

              <div className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">Achievements</h3>
                    <p className="text-muted-foreground text-sm">2 IEEE Publications, 1 Patent</p>
                    <p className="text-primary font-semibold mt-1">Multiple Hackathon Wins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
