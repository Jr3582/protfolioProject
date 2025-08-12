import { useState, useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const BIRTH_MS = Date.UTC(2002, 8, 1, 0, 0, 0);
const YEAR_MS = 365.2425 * 24 * 60 * 60 * 1000;

export const HeroSection = () => {
    const[age, setAge] = useState(0);
    const raf = useRef(0);

    useEffect(() => {
        const tick = () => {
            setAge((Date.now() - BIRTH_MS) / YEAR_MS);
            raf.current = requestAnimationFrame(tick);
        };
        raf.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf.current);
    }, [])




    return <section id="#hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-6xl mx-auto text-center z-10">
            <div className="spae-y-6">
                <h1 className = "text-4xl md:text-6xl font-bold tracking-tight">
                    <span className ="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className ="text-primary opacity-0 animate-fade-in-delay-1"> Jimmy </span>
                    <span className ="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Ren <br></br> </span>
                    <span className = "pt-3 block opacity-0 animate-fade-in-delay-2">
                        I am a <span className = "font-semibold text-secondary">{age.toFixed(8)}</span>
                        {" "}Year-Old Developer<br></br>
                    </span>
                </h1>

                <p className="mx-auto pt-4 max-w-3xl text-balance text-base md:text-xl leading-normal opacity-0 animate-fade-in-delay-3">
                    I specialize in front-end development using 
                    <span className="text-primary"> ReactJS </span> &
                    <span className="text-primary"> TailWindCSS </span>
                    I also specialize in game development using 
                    <span className="text-secondary"> Unity </span>
                    and I have a keen interest in anything related to 
                    <span className="text-teritary"> Cybersecurity </span>
                </p>

                <div className="pt-8 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
}