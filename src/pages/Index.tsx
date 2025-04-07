import { useEffect } from "react";
import {
  Code,
  Laptop,
  Server,
  Database,
  Globe,
  Github,
  Moon,
  Sun,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme-provider";
import ContactInfo, { contactInfo } from "@/components/ContactInfo";
import logoImage from "../assets/logo.png";

const Index = () => {
  const { theme, setTheme } = useTheme();

  // Add animation to elements when they enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 md:pt-40 pb-16 md:pb-24 relative overflow-hidden"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <img
                src={logoImage}
                alt="AbdoPrDZ"
                className="h-24 w-24 rounded-full border-4 border-primary mb-4 object-cover animate-on-scroll opacity-0"
              />
            </div>
            <h1 className="mb-6 animate-on-scroll opacity-0">
              Hi, I'm{" "}
              <span className="text-primary">Abderrahmane GUERGUER</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 animate-on-scroll opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              A passionate software developer specializing in building
              exceptional web and mobile applications.
            </p>
            <div
              className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll opacity-0"
              style={{ animationDelay: "0.4s" }}
            >
              <Button className="btn-primary" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <SectionHeading
            title="About Me"
            subtitle="Get to know more about my background and experience."
            className="animate-on-scroll opacity-0"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll opacity-0">
              <p>
                I am a dedicated software developer with a passion for creating
                efficient and user-friendly applications. My journey in the
                world of programming has equipped me with a diverse skill set
                spanning front-end and back-end technologies.
              </p>
              <p>
                My expertise lies in developing robust web applications and
                mobile solutions. I enjoy tackling complex problems and turning
                ideas into functional, polished products.
              </p>
              <p>
                I am constantly learning and adapting to new technologies, with
                a particular interest in modern development frameworks and tools
                that enhance the developer and user experience.
              </p>
            </div>

            <div
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-lg font-medium mb-4">Quick Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Software Developer with focus on web and mobile
                      applications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Active GitHub contributor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Experience with both front-end and back-end technologies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Constantly exploring new technologies and methodologies
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 border mt-6">
                <h3 className="text-lg font-medium mb-4">
                  Contact Information
                </h3>
                <ContactInfo displayCount={4} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            title="Skills & Technologies"
            subtitle="The tools and technologies I work with to bring ideas to life."
            className="animate-on-scroll opacity-0"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            <SkillCard
              name="Frontend Development"
              icon={<Code size={32} />}
              className="animate-on-scroll opacity-0"
            />
            <SkillCard
              name="Backend Development"
              icon={<Server size={32} />}
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.1s" }}
            />
            <SkillCard
              name="Mobile Development"
              icon={<Laptop size={32} />}
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.2s" }}
            />
            <SkillCard
              name="Database Management"
              icon={<Database size={32} />}
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.3s" }}
            />
            <SkillCard
              name="RESTful APIs"
              icon={<Globe size={32} />}
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.4s" }}
            />
            <SkillCard
              name="Version Control"
              icon={<Github size={32} />}
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <SectionHeading
            title="My Projects"
            subtitle="Here are some of the projects I've worked on."
            className="animate-on-scroll opacity-0"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProjectCard
              title="Pusher Client Socket"
              description="A Flutter plugin that allows your application to listen to events sent through the Pusher service. Supports multiple socket connections and channels with elegant event handling mechanisms."
              technologies={["Flutter", "Pusher", "WebSockets"]}
              github="https://github.com/AbdoPrDZ/pusher_client_socket"
              className="animate-on-scroll opacity-0"
            />

            <ProjectCard
              title="Laravel Echo Null"
              description="A Flutter package that provides Laravel Echo functionality for Flutter. Similar to Laravel Echo in JavaScript, it allows you to connect your app with Laravel Echo server using Pusher client or Socket.io with null safety support."
              technologies={["Flutter", "Laravel", "WebSockets"]}
              github="https://github.com/AbdoPrDZ/laraven_echo_null"
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.1s" }}
            />

            <ProjectCard
              title="Storage Database"
              description="A Flutter package providing flexible data storage with multiple storage type options. Features include file management, API integration, collections, documents, and complex queries with JSON formatting and encryption."
              technologies={["Flutter", "Dart", "Database"]}
              github="https://github.com/AbdoPrDZ/storage_database"
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.2s" }}
            />

            <ProjectCard
              title="Islamic Chat"
              description="A community-focused chat application built with Flutter that provides a safe environment for Islamic discussions. Features include real-time messaging, user authentication, and content moderation following Islamic principles."
              technologies={["Flutter", "Firebase", "Real-time"]}
              github="https://github.com/AbdoPrDZ/islamic-chat"
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.3s" }}
            />

            <ProjectCard
              title="Stock Manager"
              description="A Laravel and React inventory management system for tracking stock levels, clients, products, and orders. Features include comprehensive product tracking, sales management, supplier relationships, and user access control."
              technologies={["Laravel", "React", "MySQL"]}
              github="https://github.com/AbdoPrDZ/StockManagerReact"
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container">
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a project in mind or want to say hello? Feel free to reach out!"
            className="animate-on-scroll opacity-0"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-on-scroll opacity-0">
              <h3 className="text-xl font-bold mb-4">Contact Details</h3>
              <ContactInfo />
            </div>

            <div className="animate-on-scroll opacity-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Theme switcher */}
      <div className="fixed bottom-4 right-4 bg-card border rounded-full p-2 shadow-md flex items-center gap-2">
        <Sun size={16} className="text-muted-foreground" />
        <Switch
          checked={theme === "dark"}
          onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        />
        <Moon size={16} className="text-muted-foreground" />
      </div>
    </div>
  );
};

export default Index;
