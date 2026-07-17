import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id: 1,
        title: "Track Tasks",
        description: "A full-stack Kanban-style task management app for organizing projects, assigning ownership, and tracking work from To Do to Done.",
        image: "/projects/TrackTasks.png",
        tags: ["Angular", ".NET", "PostgresSQL"],
        demoUrl: "https://track-tasks-nine.vercel.app/",
        githubUrl: "https://github.com/Jr3582/track-tasks",
    },
    {
        id: 2,
        title: "StockHacks",
        description: "An interactive stock analysis web application deployed on Vercel, integrated with Inngest, and Google's Gemini for background task automation, and powered by a MongoDB database.",
        image: "/projects/dashboard.png",
        tags: ["MongoDB", "Next.js", "Inngest"],
        demoUrl: "https://stock-hacks.vercel.app/sign-in",
        githubUrl: "https://github.com/Jr3582/StockHacks",
    },
    {
        id: 3,
        title: "Nike E-Commerce Application",
        description: "A Nike E-Commerce application that allows users to browse and purchase Nike products. Built with React and Next.js, featuring a sleek UI and seamless user experience.",
        image: "/projects/nike-ecommerce-app.png",
        tags: ["E-Commerce", "React", "Next.js"],
        demoUrl: "https://nike-ecommerce-app-eight.vercel.app/sign-in",
        githubUrl: "https://github.com/Jr3582/ecommerce-app",
    },
    {
        id: 4,
        title: "Fading Light",
        description: "The tile screen for Fading Light, a 2D Unity platformer game, collaborated with 2 other individuals, deployed on to a AWS S3 Bucket",
        image: "/projects/FadingLight.png",
        tags: ["Unity", "AWS", "Game"],
        demoUrl: "https://unitygame-te.s3.us-east-1.amazonaws.com/index.html",
        githubUrl: "https://github.com/Jr3582/TheElevator",
    },
    {
        id: 5,
        title: "ChasingPRs",
        description: "The landing page for ChasingPRs. ChasingPRs is a interactive fitness application that calculates your maximum PR for squat, bench, and deadlift using Epley's formula. The app also includes a way to determine a calorie goal for weight gain or weight lost.",
        image: "/projects/chasingPRs.png",
        tags: ["React", "TailwindCSS", "Math"],
        demoUrl: "https://chasing-prs.vercel.app/",
        githubUrl: "https://github.com/Jr3582/ChasingPRs",
    },
    {
        id: 6,
        title: "Vanguard Communication Clearing House",
        description: "Landing page for Vanguard Communication Clearing House, made with React, Node.js, Material UI, PostgreSQL, and Python.",
        image: "/projects/vanguardComClearingHouse1.png",
        tags: ["Material UI", "React", "Node.js"],
        demoUrl: "https://1513041.mediaspace.kaltura.com/id/1_fp9vkw3s",
        githubUrl: "https://github.com/Jr3582/CommClearingHouse",
    },
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
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full">
                            <div className="h-48 overflow-hidden">
                                {/* Project Image*/}
                                <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Project Tags*/}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            {/* Project Name*/}
                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <div className="flex flex-col justify-between w-full h-full">
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