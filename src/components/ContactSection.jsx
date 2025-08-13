import { Mail, Phone, Map, Linkedin, Send } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useToast } from '@/hooks/use-toast';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const ContactSection = () => {
    const {toast} = useToast();
    const formRef = useRef(null);
    const [sending, setSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        toast({
            title: "Email not configured",
            description: "Missing EmailJS env vars. Check your .env and restart dev server.",
            variant: "destructive",
        });
        return;
        }

        setSending(true);
        emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            formRef.current?.reset();
            setSending(false);
        }, 1500)
        .catch((err) => {
            console.error(err);
            toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
            });
        })
        .finally(() => setSending(false));
    };

    return (
        <section 
        id="contact" 
        className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch!</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I’m open to connecting with fellow developers, designers, and anyone passionate about creating something amazing. 
                    Whether you want to collaborate on a game, work on a web app, or just chat about tech, feel free to reach out!
                    I'm always open to disscussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "} 
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 items-center justify-center">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium flex flex-col justify-center text-left"> Email:</h4>
                                    <a href="mailto:jimmyren590@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        jimmyren590@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium flex flex-col justify-center text-left"> Phone:</h4>
                                    <a href="tel:+12673423593" className="text-muted-foreground hover:text-primary transition-colors">
                                        +1 (267)-342-3593
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Map className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium flex flex-col justify-center text-left"> Location:</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Philadelphia, PA 19149
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me! <br></br> (〜^∇^)〜</h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                target="_blank"
                                href="https://www.linkedin.com/in/jimmy-ren-dev/">
                                    <Linkedin />
                                </a>
                                <a
                                target="_blank"
                                href="https://discord.gg/ZCD3DS4M"
                                >
                                    <FaDiscord size={28} />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold"> Send a Message</h3>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> {" "}Your Name</label>
                                <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required className="w-full p-4 py-3 rounded-md border border-input bg-background focus:outline-hidden cofus:ring-2 focus:ring-primary"
                                placeholder="Jawn Doe..."/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> {" "}Your Email</label>
                                <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required className="w-full p-4 py-3 rounded-md border border-input bg-background focus:outline-hidden cofus:ring-2 focus:ring-primary"
                                placeholder="jawnDoe@gmail.com"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> {" "}Your Message</label>
                                <textarea 
                                id="message" 
                                name="message" 
                                required className="w-full p-4 py-3 rounded-md border border-input bg-background focus:outline-hidden cofus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello, I am..."/>
                            </div>
                            
                            <button
                                type="submit"
                                disabled={sending}
                                className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2",
                                sending && "opacity-70 cursor-not-allowed"
                                )}
                            >
                                {sending ? "Sending..." : "Send Message"} <Send size={16} />
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )

}