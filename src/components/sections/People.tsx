"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const People = () => {
    const members = [
        {
            id: 1,
            name: "田中 健太",
            role: "校舎長 / 2022年入社",
            message: "「生徒の人生を変える瞬間に立ち会える。これ以上のやりがいはありません。」",
            image: "/images/staff_interview_portrait.png",
            tag: "FIELD",
        },
        {
            id: 2,
            name: "佐藤 未希",
            role: "教務部長 / 2020年入社",
            message: "「合理性と熱量を両立させた武田塾の仕組みを、さらに進化させたい。」",
            image: "/images/staff_interview_portrait.png", // Reusing image since only 1 portait available
            tag: "ADMIN",
        },
        {
            id: 3,
            name: "鈴木 勇気",
            role: "エンジニア / 2023年入社",
            message: "「EdTechの最前線で、学びを科学するツールを開発しています。」",
            image: "/images/technical.png",
            tag: "TECH",
        },
    ];

    return (
        <section id="people" className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold tracking-[0.2em] text-sm mb-4 block uppercase">People & Interviews</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 underline decoration-primary decoration-4 underline-offset-8">
                            現場を創る、プロフェッショナルたち。
                        </h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto italic">
                            日本の知力を底上げする、個性豊かな仲間たちをご紹介します。
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Card className="group relative overflow-hidden rounded-none border-none shadow-xl bg-slate-50 cursor-pointer">
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-white text-[10px] font-black px-3 py-1 tracking-[0.2em]">
                                            {member.tag}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                                </div>
                                <CardContent className="p-8 relative z-10 transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                                    <div className="mb-4">
                                        <span className="text-xs font-bold tracking-widest text-primary group-hover:text-white/80 transition-colors uppercase block mb-1">
                                            {member.role}
                                        </span>
                                        <h3 className="text-2xl font-bold">{member.name}</h3>
                                    </div>
                                    <p className="text-sm font-medium leading-relaxed italic mb-6">
                                        {member.message}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary group-hover:text-white font-bold text-xs tracking-widest transition-colors">
                                        READ STORY <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" className="rounded-none border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold h-14 px-10 transition-all">
                        インタビュー一覧をみる
                    </Button>
                </div>
            </div>
        </section>
    );
};
