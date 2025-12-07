import { BookOpen, FileText, Shield } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      type: 'Conference',
      icon: BookOpen,
      title: 'Enhancing Object Detection through Auditory-Visual Fusion on Edge Devices with FogBus Integration',
      venue: 'IEEE ICDICI 2024',
      pages: 'pp. 342–347',
      year: '2024',
    },
    {
      type: 'Conference',
      icon: BookOpen,
      title: 'BreastNet: Design and Evaluation of a Deep Learning Model for Recognizing Breast Cancer from Images',
      venue: 'IEEE ICECA 2022',
      pages: 'pp. 960–965',
      year: '2022',
    },
  ];

  const patent = {
    title: 'Enhancing Object Detection through Auditory-Visual Fusion on Raspberry Pi and FogBus',
    number: 'Patent No. 202441104766',
    date: 'Filed: 31 December 2024',
  };

  return (
    <section id="publications" className="py-20 md:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Publications & Patents
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
              Research <span className="gradient-text">Contributions</span>
            </h2>
          </div>

          {/* Publications */}
          <div className="space-y-6 mb-12">
            <h3 className="font-heading text-xl font-semibold flex items-center gap-2">
              <FileText size={20} className="text-primary" />
              Publications
            </h3>
            {publications.map((pub, index) => (
              <div
                key={index}
                className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <pub.icon size={20} />
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {pub.type} • {pub.year}
                    </span>
                    <h4 className="font-heading font-semibold text-lg mt-2 group-hover:text-primary transition-colors">
                      {pub.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-2">
                      {pub.venue}, {pub.pages}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Patent */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl font-semibold flex items-center gap-2">
              <Shield size={20} className="text-primary" />
              Patent
            </h3>
            <div className="card-gradient rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px]" />
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <Shield size={20} />
                </div>
                <div className="flex-grow">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    Patent Filed
                  </span>
                  <h4 className="font-heading font-semibold text-lg mt-2 group-hover:text-primary transition-colors">
                    {patent.title}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3 text-sm text-muted-foreground">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit">
                      {patent.number}
                    </span>
                    <span>{patent.date}</span>
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

export default PublicationsSection;
