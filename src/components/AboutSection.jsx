import { Code, User, Briefcase } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 p-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Col */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Programmer & <br></br> Cybersecurity Enthusiast</h3>
                    
                    <p className="text-muted-foreground">
                        I love getting creative and making games with Unity, building on 3 years of experience. 
                        I’m also currently studying for my CompTIA Security+ to deepen my knowledge of the cybersecurity landscape.
                    </p>

                    <p className="text-muted-foreground">
                        My passion began with a curiosity about how games work behind the scenes,  
                        and grew into exploring how I could secure and improve my own computer systems against online threats.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>
                    </div>

                </div>

                {/* Right Col */}
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold textlg"> Web Development</h4>
                                <p className="text-muted-foreground">
                                    Creating responsive websites with modern frameworks such as 
                                    ReactJS, Angular and TailwindCSS.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold textlg">UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                    Designing intuitive user interfaces and 
                                    crafting seamless user experiences 
                                    that blend creativity with functionality.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold textlg"> Project Management</h4>
                                <p className="text-muted-foreground">
                                    Led a team in developing Unity game projects, 
                                    managing tasks and progress with GitHub.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
}