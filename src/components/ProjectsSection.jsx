import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Vanguard Communication Clearing House",
        description: "Landing page for Vanguard Communication Clearing House, made with React, Node.js, Material UI, PostgreSQL, and Python.",
        image: "/projects/vanguardComClearingHouse1.png",
        tags: ["Material UI", "React", "Node.js"],
        demoUrl: "NotFound",
        githubUrl: "NotFound",
    },
    {
        id: 2,
        title: "Echo Fighters Game",
        description: "Echo Fighters title page, the game was made using the Unity game engine, and developed over a 10-week period, and coded in C#. Collaborated with one other person.",
        image: "/projects/EchoFighters.png",
        tags: ["Unity", "C#", "Game"],
        demoUrl: "https://jimbro0o0o.itch.io/echo-fighters",
        githubUrl: "https://github.com/Jr3582/Echo-Fighters-CS342",
    },
    {
        id: 3,
        title: "ChasingPRs",
        description: "ChasingPRs is a interactive fitness application that calculates your maximum PR for squat, bench, and deadlift using Epley's formula. The app also includes a way to determine a calorie goal for weight gain or weight lost",
        image: "/projects/chasingPRs.png",
        tags: ["Unity", "C#", "Game"],
        demoUrl: "https://chasing-prs.vercel.app/",
        githubUrl: "https://github.com/Jr3582/ChasingPRs",
    }
    
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:-text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured<span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center tet-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects from the past two years, spanning game development in Unity and full-stack applications. 
                    Each was built with a focus on creative design, smooth performance, and an engaging user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                {/* Project Image*/}
                                <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Project Tags*/}
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            {/* Project Name*/}
                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                    href={project.demoUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a 
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="tet-center mt-12">
                    <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-1"
                    target="_blank" 
                    href="https://github.com/Jr3582">
                      Check Out My <span className="text-teritary2">Github!</span> <ArrowRight size={16}/>  
                    </a>

                </div>

            </div>
        </section>
    )
}