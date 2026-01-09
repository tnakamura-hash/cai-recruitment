"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const People = () => {
    const members = [
        {
            id: 1,
            name: "田中 健太",
            role: "校舎長 / 2022年入社",
            message: "「生徒の自学自習を支える。それが逆転合格への最短距離です」",
            interview: "武田塾の魅力は『授業をしない』という徹底した合理性にあります。生徒が自ら学ぶ力を身につけていく姿を間近で見られるのは、教育者として最高の喜びです。",
            image: "/images/staff_interview_portrait.png",
            tag: "FIELD",
        },
        {
            id: 2,
            name: "佐藤 未希",
            role: "教務リーダー / 2020年入社",
            message: "「合理性と熱量。この二つが不可能を可能にします」",
            interview: "私たちは単に教えるのではなく、学習の仕方を管理します。ITツールを駆使して進捗を可視化し、一歩ずつ志望校に近づくプロセスを全力でサポートしています。",
            image: "/images/staff_interview_portrait.png",
            tag: "LEAD",
        },
        {
            id: 3,
            name: "鈴木 勇気",
            role: "校舎長候補 / 2023年入社",
            message: "「EdTechの力で教育の常識を塗り替えたい」",
            interview: "前職は異業種でしたが、武田塾の理念に共感して入社しました。未経験でも研修が充実しており、現在は校舎長候補として経営と教育の両面を学んでいます。",
            image: "/images/technical.png",
            tag: "CANDIDATE",
        },
    ];

    return (
        <section id="people" className="py-24 md:py-32 bg-white overflow-hidden">
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
                            日本の知力を底上げする、個性豊かな仲間たちのインタビュー。
                        </p>
                    </motion.div>
                </div>

                {/* Horizontal Scroll on Mobile, Grid on Desktop */}
                <div className="flex overflow-x-auto pb-8 md:grid md:grid-cols-3 gap-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="min-w-[85vw] md:min-w-0 snap-center"
                        >
                            <Card className="group relative overflow-hidden rounded-none border-none shadow-xl bg-slate-50 h-full flex flex-col">
                                <div className="relative aspect-[4/3] overflow-hidden shrink-0">
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
                                <CardContent className="p-8 flex-grow flex flex-col">
                                    <div className="mb-4">
                                        <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-1">
                                            {member.role}
                                        </span>
                                        <h3 className="text-2xl font-bold">{member.name}</h3>
                                    </div>
                                    <p className="text-sm font-medium leading-relaxed italic mb-6">
                                        {member.message}
                                    </p>

                                    <div className="mt-auto">
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="interview" className="border-none">
                                                <AccordionTrigger className="text-xs font-bold tracking-widest text-primary hover:no-underline py-2">
                                                    INTERVIEW READ MORE
                                                </AccordionTrigger>
                                                <AccordionContent className="text-sm text-foreground/70 leading-relaxed pt-2">
                                                    {member.interview}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
};
