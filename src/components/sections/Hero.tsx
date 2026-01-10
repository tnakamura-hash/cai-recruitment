"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const indeedLink = "https://jp.indeed.com/cmp/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BEcai-2";
    const backgroundImages = [
        "/images/hero_vibrant_office_staff.png",
        "/images/takeda_juku_study_space.png",
        "/images/staff_suzuki.jpg",
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000); // 5 seconds interval
        return () => clearInterval(timer);
    }, [backgroundImages.length]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Slideshow with Blur and Overlay */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={backgroundImages[currentImageIndex]}
                            alt="Background"
                            fill
                            className="object-cover object-center blur-sm scale-110"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-8 text-balance"
                >
                    教育業界の<br className="block md:hidden" />
                    <span className="inline-block text-primary italic">常識</span> を覆す
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-base md:text-xl max-w-2xl mx-auto mb-10 text-white/90 leading-relaxed font-medium text-balance"
                >
                    「授業をしない」という<br className="block md:hidden" />合理的な<span className="inline-block">自力学習</span>の形を追求し、<br className="hidden md:block" />
                    日本の知力の底上げを目指す、<br className="block md:hidden" /><span className="inline-block text-white">武田塾</span>のプロフェッショナル集団。
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button asChild size="lg" className="w-full sm:w-auto rounded-none font-bold py-8 px-12 text-lg bg-primary hover:bg-primary/90">
                        <a href={indeedLink} target="_blank" rel="noopener noreferrer">
                            ENTRY
                        </a>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] tracking-[0.3em] font-bold">SCROLL</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
};
