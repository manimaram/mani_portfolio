import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import {
  Mail,
  FileText,
  ExternalLink,
  Award,
  Send,
  User,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { certifications } from "@/data/certifications";
import { achievements } from "@/data/achievements";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* About Me Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              I am an Information Technology undergraduate passionate about
              building modern and impactful digital solutions. With strong
              expertise in frontend technologies like React, JavaScript, HTML,
              and CSS, I have developed responsive web applications that
              integrate real-time APIs and deliver seamless user experiences. My
              technical foundation includes Data Structures, Algorithms, OOP,
              and database management with MySQL, enabling me to write clean,
              efficient, and optimized code. I enjoy working on projects that
              combine creativity with problem-solving, from weather forecasting
              apps to language translators and canteen management systems.
              Continuously exploring new tools and frameworks, I aim to grow as
              a full-stack developer and contribute to building innovative,
              user-focused applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="project-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  Information Technology
                </div>
                <div className="text-muted-foreground">Student</div>
              </div>
              <div className="project-card text-center">
                <div className="text-3xl font-bold text-secondary mb-2">
                  15+
                </div>
                <div className="text-muted-foreground">Skills Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for full-stack
            development
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {/* DSA */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/dsa.png"
                  alt="HTML"
                  className="w-16 h-16 mx-auto mb-4"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                DSA
              </h3>
            </div>

            {/* HTML */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/html.png"
                  alt="HTML"
                  className="w-16 h-16 mx-auto mb-4"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                HTML
              </h3>
            </div>

            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/php.png"
                  alt="HTML"
                  className="w-16 h-16 mx-auto mb-4"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                PHP
              </h3>
            </div>

            {/* CSS */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/css.png"
                  alt="HTML"
                  className="w-16 h-16 mx-auto mb-4"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                CSS
              </h3>
            </div>

            {/* FULL STACK */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/fullstack.png"
                  alt="HTML"
                  className="w-16 h-16 mx-auto mb-4"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                FULL STACK
              </h3>
            </div>

            {/* JS */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/js.png"
                  alt="HTML"
                  className="w-16 h-16 mx-auto mb-4"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                JS
              </h3>
            </div>

            {/* JAVA */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/java.png"
                  alt="HTML"
                  className="w-16 h-16 mx-auto mb-4"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                JAVA
              </h3>
            </div>

            {/* PYTHON */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/python.png"
                  alt="HTML"
                  className="w-16 h-16 mx-auto mb-4"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                PYTHON
              </h3>
            </div>

            {/* C */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/c.png"
                  alt="HTML"
                  className="w-16 h-16 mx-auto mb-4"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                C
              </h3>
            </div>

            {/* SQL */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/mysql.png"
                  alt="HTML"
                  className="w-16 h-16 mx-auto mb-4"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                SQL
              </h3>
            </div>

            {/* REACT */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/react.png"
                  alt="HTML"
                  className="w-16 h-16 mx-auto mb-4"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                REACT
              </h3>
            </div>

            {/* Figma */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/figma.png"
                  alt="HTML"
                  className="w-16 h-16 mx-auto mb-4"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                Figma
              </h3>
            </div>

            {/* OOPs */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/oops.png"
                  alt="HTML"
                  className="w-16 h-16 mx-auto mb-4"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                OOPs
              </h3>
            </div>

            {/* GitHub */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/git.png"
                  alt="HTML"
                  className="w-16 h-16 mx-auto mb-4"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                GitHub
              </h3>
            </div>

            {/* Render */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/render.png"
                  alt="HTML"
                  className="w-16 h-16 mx-auto mb-4"
                />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                Render
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-card/20"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">
                    Oracle Certified Professional
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Issued by Oracle
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    September 2025
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BCF72A3A6AE4A8A03C6F21727625FE8559807CA2AE7A8CE011802C21AD3FCA58",
                        "_blank"
                      )
                    }
                    className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn"
                  >
                    <ExternalLink
                      size={14}
                      className="group-hover/btn:scale-110 transition-transform"
                    />
                    <span>Access Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">
                    FULL STACK WEB DEVELOPMENT
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Issued by Edu Skills
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    July 2025
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1qoQJirQsO9vnW6ZWpH1w_FWasWBvGPj9/view?usp=sharing",
                        "_blank"
                      )
                    }
                    className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn"
                  >
                    <ExternalLink
                      size={14}
                      className="group-hover/btn:scale-110 transition-transform"
                    />
                    <span>Access Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">
                    COMPUTER HARDWARE
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Issued by Cisco
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">May 2025</p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1FXP182F_exCU5cnsPJEA8eLTVDyRUHuH/view?usp=sharing",
                        "_blank"
                      )
                    }
                    className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn"
                  >
                    <ExternalLink
                      size={14}
                      className="group-hover/btn:scale-110 transition-transform"
                    />
                    <span>Access Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">
                    AI TOOLS EXPERT
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Issued by Be 10x
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">May 2025</p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1n4FNiOXMq5KjKLNJ5l_jAML8leLzJntK/view?usp=sharing",
                        "_blank"
                      )
                    }
                    className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn"
                  >
                    <ExternalLink
                      size={14}
                      className="group-hover/btn:scale-110 transition-transform"
                    />
                    <span>Access Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">
                    LANGUAGE PROFICENCY CERTIFICATE
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Issued by EF SET
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">May 2025</p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1XIi_NF4k07dtDT7yfnXH2Kmk9-U9ZCdK/view?usp=sharing",
                        "_blank"
                      )
                    }
                    className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn"
                  >
                    <ExternalLink
                      size={14}
                      className="group-hover/btn:scale-110 transition-transform"
                    />
                    <span>Access Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">
                    HTML
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Issued by Simplilearn
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    April 2025
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/10mG9ylr83aRL8jeC5ArybY_fabOYQBmD/view?usp=sharing",
                        "_blank"
                      )
                    }
                    className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn"
                  >
                    <ExternalLink
                      size={14}
                      className="group-hover/btn:scale-110 transition-transform"
                    />
                    <span>Access Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">
                    CSS
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Issued by Simplilearn
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    April 2025
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1ILiERoz1Nv9Bv42o4FFoONi47IxkqMko/view?usp=sharing",
                        "_blank"
                      )
                    }
                    className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn"
                  >
                    <ExternalLink
                      size={14}
                      className="group-hover/btn:scale-110 transition-transform"
                    />
                    <span>Access Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">
                    Linux Unhatched
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Issued by Cisco
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">May 2025</p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1F4lxy_VNW9fB2-LziCtLLDEvspnf5bf7/view?usp=sharing",
                        "_blank"
                      )
                    }
                    className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn"
                  >
                    <ExternalLink
                      size={14}
                      className="group-hover/btn:scale-110 transition-transform"
                    />
                    <span>Access Certificate</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">
                    Problem Solving Using C
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Issued by CodeTantra
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">May 2024</p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1Uu5A63fowXBpcqoDWSYtro5EXGFfUAi4/view?usp=sharing",
                        "_blank"
                      )
                    }
                    className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn"
                  >
                    <ExternalLink
                      size={14}
                      className="group-hover/btn:scale-110 transition-transform"
                    />
                    <span>Access Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {" "}
                Hack-IT-On 1st prize winner
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {" "}
                Won 1st Prize in Hack-IT-On Hackathon for developing an
                innovative web-based solution demonstrating strong technical and
                teamwork skills.
              </p>
            </div>

            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {" "}
                Merit Scholarship Recipient
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {" "}
                Awarded 50,000 consecutively for two years in recognition of
                outstanding academic performance.
              </p>
            </div>

            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                TANA DEBATE WINNER
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                secured 1st prize in the debate organised by Telugu Associsation
                of North America
              </p>
            </div>

            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                Best Debate Awardee
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Awarded the “Best Debater” title by TV9 for outstanding
                articulation, clarity of thought, and persuasive communication
                skills.
              </p>
            </div>

            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                Top 1%
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Consistently ranked in the top 1% of the branch for 2
                consecutive academic years
              </p>
            </div>

            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                Designer & PR lead
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Have been working continuously for the past 2 years with CSAC in
                the domains of Designing and Publicity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a question or want to collaborate? I'd love to hear from you.
            Send me a message!
          </p>

          {/* Social Connect Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/mvsnagamani/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero glow-border group"
            >
              <span className="flex items-center space-x-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </span>
            </a>

            <a
              href="https://www.instagram.com/mani_maram__?igsh=c2s2c29iMjI4emZ2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero glow-border group"
            >
              <span className="flex items-center space-x-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:scale-110 transition-transform"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </span>
            </a>

            <a
              href="mailto:manimaram781@gmail.com"
              className="btn-hero glow-border group"
            >
              <span className="flex items-center space-x-3">
                <Mail
                  size={24}
                  className="group-hover:scale-110 transition-transform"
                />
                <span>Gmail</span>
              </span>
            </a>
          </div>

          {/* Alternative Contact Methods */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1byIKRvPVr0AeK7jfsCkGIHhGEzpvoXna/view?usp=sharing",
                  "_blank"
                )
              }
              className="btn-hero glow-border group"
            >
              <span className="flex items-center space-x-2">
                <FileText size={20} />
                <span>Download Resume</span>
                <ExternalLink
                  size={16}
                  className="group-hover:scale-110 transition-transform"
                />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Index;
