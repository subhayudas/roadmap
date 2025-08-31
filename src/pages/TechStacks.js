import React, { useState } from 'react';
import './techStacks.css';

export default function TechStacks() {
  const [expandedSections, setExpandedSections] = useState({
    dynamic: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const techStacks = {
    dynamic: {
      title: "Dynamic Web Applications",
      description: "Full-stack applications with server-side processing, databases, and dynamic content generation.",
      technologies: [
        {
          name: "JavaScript Stacks",
          items: [
            {
              name: "MERN Stack",
              description: "MongoDB, Express.js, React, Node.js",
              technologies: [
                { name: "MongoDB", image: "/img/mongodb.png" },
                { name: "Express.js", image: "/img/Expressjs.png" },
                { name: "React", image: "/img/react.png" },
                { name: "Node.js", image: "/img/node.png" }
              ]
            },
            {
              name: "MEAN Stack",
              description: "MongoDB, Express.js, Angular, Node.js",
              technologies: [
                { name: "MongoDB", image: "/img/mongodb.png" },
                { name: "Express.js", image: "/img/Expressjs.png" },
                { name: "Angular", image: "/img/angular.png" },
                { name: "Node.js", image: "/img/node.png" }
              ]
            },
            {
              name: "Vue.js Stack",
              description: "Vue.js, Express.js, MongoDB, Node.js",
              technologies: [
                { name: "Vue.js", image: "/img/vue.png" },
                { name: "Express.js", image: "/img/Expressjs.png" },
                { name: "MongoDB", image: "/img/mongodb.png" },
                { name: "Node.js", image: "/img/node.png" }
              ]
            }
          ]
        },
        {
          name: "Traditional Stacks",
          items: [
            {
              name: "LAMP Stack",
              description: "Linux, Apache, MySQL, PHP",
              technologies: [
                { name: "Linux", image: "/img/linux.jpg" },
                { name: "Apache", image: "/img/apache.png" },
                { name: "MySQL", image: "/img/mysql.png" },
                { name: "PHP", image: "/img/php.png" }
              ]
            },
            {
              name: "Django Stack",
              description: "Python, Django, Apache, MySQL",
              technologies: [
                { name: "Python", image: "/img/python.png" },
                { name: "Django", image: "/img/django.png" },
                { name: "Apache", image: "/img/apache.png" },
                { name: "MySQL", image: "/img/mysql.png" }
              ]
            },
            {
              name: "Ruby on Rails",
              description: "Ruby, Rails, MySQL, Linux",
              technologies: [
                { name: "Ruby", image: "/img/ruby.png" },
                { name: "MySQL", image: "/img/mysql.png" },
                { name: "Linux", image: "/img/linux.jpg" }
              ]
            }
          ]
        },
        {
          name: "Enterprise Stacks",
          items: [
            {
              name: "ASP.NET Stack",
              description: "C#, .NET, SQL Server, Azure",
              technologies: [
                { name: "C#", image: "/img/csharp.png" },
                { name: ".NET", image: "/img/dotnet.png" },
                { name: "SQL Server", image: "/img/sql.png" },
                { name: "Azure", image: "/img/azure.png" }
              ]
            },
            {
              name: "Java Stack",
              description: "Java, Spring, Oracle, Linux",
              technologies: [
                { name: "Java", image: "/img/java.png" },
                { name: "Oracle", image: "/img/oracle.png" },
                { name: "Linux", image: "/img/linux.jpg" }
              ]
            }
          ]
        },
        {
          name: "Additional Technologies",
          items: [
            {
              name: "Firebase Stack",
              description: "Firebase, React/Vue, JavaScript",
              technologies: [
                { name: "Firebase", image: "/img/firebase.jpg" },
                { name: "React", image: "/img/react.png" },
                { name: "JavaScript", image: "/img/js.png" }
              ]
            },
            {
              name: "Redis Cache",
              description: "Redis, Node.js, Express.js",
              technologies: [
                { name: "Redis", image: "/img/redis.png" },
                { name: "Node.js", image: "/img/node.png" },
                { name: "Express.js", image: "/img/Expressjs.png" }
              ]
            }
          ]
        }
      ]
    }
  };

  return (
    <div className="tech-stacks-container">
      <h1 className="main-title">Technology Stack Roadmap</h1>
      <p className="main-description">
        Choose the right technology stack based on your project requirements and goals
      </p>

      {Object.entries(techStacks).map(([key, section]) => (
        <div key={key} className="tech-section">
          <div 
            className="section-header"
            onClick={() => toggleSection(key)}
          >
            <h2>{section.title}</h2>
            <span className={`expand-icon ${expandedSections[key] ? 'expanded' : ''}`}>
              ▼
            </span>
          </div>
          
          {expandedSections[key] && (
            <div className="section-content">
              <p className="section-description">{section.description}</p>
              
              <div className="tech-tree">
                {section.technologies.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="tech-category">
                    <h3 className="category-title">{category.name}</h3>
                    
                    <div className="tech-items">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="tech-item">
                          {item.technologies ? (
                            // Stack with multiple technologies
                            <div className="tech-stack">
                              <div className="stack-header">
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                              </div>
                              <div className="stack-technologies">
                                {item.technologies.map((tech, techIndex) => (
                                  <div key={techIndex} className="tech-logo">
                                    <img src={tech.image} alt={tech.name} />
                                    <span>{tech.name}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            // Single technology
                            <div className="single-tech">
                              <img src={item.image} alt={item.name} />
                              <span>{item.name}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
