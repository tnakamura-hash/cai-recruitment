"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "MESSAGE", href: "#message" },
        { name: "CULTURE", href: "#culture" },
        { name: "PEOPLE", href: "#people" },
        { name: "RECRUIT", href: "#recruit" },
    ];

    const indeedLink = "https://jp.indeed.com/cmp/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BEcai-2";

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent"
            )}
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <div className="relative w-32 h-10 md:w-48 md:h-14">
                            <Image
                                src="/images/logo-new.png"
                                alt="CAI Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-bold tracking-widest transition-colors hover:text-primary",
                                isScrolled ? "text-foreground" : "text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button asChild size="lg" className="rounded-none font-bold px-8 bg-primary hover:bg-primary/90 text-white">
                        <a href={indeedLink} target="_blank" rel="noopener noreferrer">
                            ENTRY
                        </a>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} className={cn(!isScrolled && "text-white")} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-white z-40 transition-transform duration-500 flex flex-col items-center justify-center gap-8 md:hidden",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <button
                    className="absolute top-6 right-6 text-foreground"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <X size={32} />
                </button>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-2xl font-bold tracking-widest text-foreground hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
                <Button asChild size="lg" className="mt-4 rounded-none font-bold px-12 bg-primary">
                    <a href={indeedLink} target="_blank" rel="noopener noreferrer">
                        ENTRY
                    </a>
                </Button>
            </div>
        </header>
    );
};
