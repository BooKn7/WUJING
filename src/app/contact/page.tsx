import { Mail, MapPin, Github, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <div className="py-12 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-pixel tracking-wider text-brand-primary">
                _CONTACT
            </h1>
            <p className="text-brand-muted mb-12 text-lg">
                Have a question or want to work together? Leave a message below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-brand-bg-dark/50 border border-brand-primary/20 p-8">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block font-pixel text-sm text-brand-text mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-transparent border-b border-brand-primary/30 py-2 text-brand-text focus:outline-none focus:border-brand-primary transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-pixel text-sm text-brand-text mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-transparent border-b border-brand-primary/30 py-2 text-brand-text focus:outline-none focus:border-brand-primary transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block font-pixel text-sm text-brand-text mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-transparent border border-brand-primary/30 p-2 text-brand-text focus:outline-none focus:border-brand-primary transition-colors resize-none"
                                placeholder="Hello..."
                            ></textarea>
                        </div>
                        <button
                            type="button"
                            className="w-full py-3 bg-brand-primary/10 border border-brand-primary text-brand-primary font-pixel text-lg hover:bg-brand-primary hover:text-brand-bg-dark transition-all duration-300 uppercase tracking-widest mt-4"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h3 className="font-pixel text-xl text-brand-text mb-6">Connect</h3>
                        <div className="space-y-4">
                            <div className="flex items-center text-brand-muted hover:text-brand-primary transition-colors">
                                <Mail className="w-5 h-5 mr-4 text-brand-secondary" />
                                <a href="mailto:hello@example.com">hello@example.com</a>
                            </div>
                            <div className="flex items-center text-brand-muted">
                                <MapPin className="w-5 h-5 mr-4 text-brand-secondary" />
                                <span>Earth, Solar System</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-pixel text-xl text-brand-text mb-6">Socials</h3>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 border border-brand-primary/20 text-brand-muted hover:text-brand-primary hover:border-brand-primary transition-all rounded-full">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 border border-brand-primary/20 text-brand-muted hover:text-brand-primary hover:border-brand-primary transition-all rounded-full">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 border border-brand-primary/20 text-brand-muted hover:text-brand-primary hover:border-brand-primary transition-all rounded-full">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
