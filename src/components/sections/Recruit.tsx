```
"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Ban } from "lucide-react";
import Link from "next/link";

export const Recruit = () => {
    const activeJobs = [
        {
            title: "教室長・校舎長候補（総合職）",
            type: "正社員",
            tags: ["未経験歓迎", "急成長企業", "研修充実", "実力主義"],
            description: "「授業をしない」武田塾の校舎運営全般をお任せします。生徒のカウンセリング、講師のマネジメント、広報活動、そして校舎の経営改善。教育業界の常識を覆し、生徒の逆転合格をプロデュースする情熱ある方を募集しています。未経験からでも、徹底した研修カリキュラムで校舎長としてのスキルを身につけることが可能です。",
        }
    ];

    const suspendedJobs = [
        {
            title: "経理スタッフ",
            type: "アルバイト",
            tags: ["経験者優遇", "募集停止中"],
            description: "本部の経理事務全般を担当いただきます。現在は定員に達したため募集を停止しておりますが、欠員が出た際にご連絡を希望される方はお問い合わせください。",
        },
        {
            title: "大学受験の教務スタッフ",
            type: "正社員 / アルバイト",
            tags: ["募集停止中"],
            description: "現在は募集を停止しております。",
        }
    ];

    const indeedLink = "https://jp.indeed.com/cmp/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BEcai-2";
    const contactEmail = "rrcruit@cai.co.jp";

    return (
        <section id="recruit" className="py-24 md:py-32 bg-slate-900 text-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-bold tracking-[0.2em] text-sm mb-4 block">JOB OPENING</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                            現在募集中のポジション
                        </h2>
                        <p className="text-white/60">
                            私たちは、生徒の未来を本気で底上げしたいと願う「校舎長」候補を募集しています。
                        </p>
                    </motion.div>

                    {/* Active Jobs */}
                    <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4 mb-20">
                        {activeJobs.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <AccordionItem value={`item - ${ index } `} className="border-b border-white/10 px-6 bg-white/5 hover:bg-white/10 transition-colors">
                                    <AccordionTrigger className="hover:no-underline py-8">
                                        <div className="flex flex-col md:flex-row md:items-center text-left gap-4 w-full">
                                            <span className="text-primary font-black text-xs tracking-widest whitespace-nowrap bg-white px-3 py-1 inline-block w-fit">
                                                {job.type}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-bold flex-1">{job.title}</h3>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-8 pt-2">
                                        <div className="space-y-6">
                                            <div className="flex flex-wrap gap-2">
                                                {job.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] font-bold border border-white/20 px-2 py-1 uppercase tracking-widest">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="text-white/70 leading-relaxed text-lg">
                                                {job.description}
                                            </p>
                                            <Button asChild className="mt-4 rounded-none font-bold bg-primary hover:bg-primary/90 text-white px-8 h-12">
                                                <a href={indeedLink} target="_blank" rel="noopener noreferrer">
                                                    ENTRY NOW <ArrowUpRight className="ml-2 w-4 h-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>

                    {/* Suspended Jobs */}
                    <div className="mb-20">
                        <h3 className="text-xl font-bold mb-8 text-white/40 flex items-center gap-2">
                            <Ban className="w-5 h-5" /> 現在募集停止中のポジション
                        </h3>
                        <Accordion type="single" collapsible className="w-full space-y-2 opacity-60">
                            {suspendedJobs.map((job, index) => (
                                <AccordionItem key={index} value={`suspended - ${ index } `} className="border-b border-white/5 px-6 bg-white/5">
                                    <AccordionTrigger className="hover:no-underline py-4">
                                        <div className="flex items-center text-left gap-4 w-full">
                                            <span className="text-[10px] font-bold border border-white/20 px-2 py-0.5 uppercase tracking-widest">
                                                {job.type}
                                            </span>
                                            <h4 className="text-lg font-bold flex-1">{job.title}</h4>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-4 pt-2">
                                        <p className="text-white/50 text-sm leading-relaxed">
                                            {job.description}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 p-12 border-2 border-primary bg-primary/5 text-center"
                    >
                        <h3 className="text-3xl font-bold mb-6">校舎運営のプロとして、<br className="md:hidden" />未来を創りませんか？</h3>
                        <p className="text-white/60 mb-10">
                            教育の常識を覆すのは、あなたの情熱です。<br className="hidden md:block" />
                            CAIは、次代の教育リーダーとなる仲間を募集しています。
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button asChild size="lg" className="w-full sm:w-auto rounded-none font-bold py-8 px-12 text-lg bg-primary hover:bg-primary/90 text-white">
                                <a href={indeedLink} target="_blank" rel="noopener noreferrer">
                                    エントリーする
                                </a>
                            </Button>
                            <a href={`mailto:${ contactEmail } `} className="text-sm font-bold tracking-widest hover:text-primary transition-colors flex items-center gap-2">
                                <Mail className="w-4 h-4" /> MAIL INQUIRY
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <footer className="mt-32 border-t border-white/10 pt-20 pb-10">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                        <div>
                            <Link href="/" className="text-3xl font-black italic tracking-tighter mb-8 block">
                                CAI<span className="text-primary not-italic text-sm ml-2 tracking-widest">RECRUIT</span>
                            </Link>
                            <p className="text-white/40 max-w-sm mb-10">
                                株式会社CAI (Computer Assisted Instruction)<br />
                                「合理的な教育」をITと情熱で追求する。
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-white/60">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    <span className="text-sm">東京都渋谷区道玄坂1-9-1 梅山ビル2F</span>
                                </div>
                                <div className="flex items-center gap-4 text-white/60">
                                    <Phone className="w-5 h-5 text-primary" />
                                    <span className="text-sm">03-3461-2626 (平日 11:00-19:00)</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <h4 className="text-xs font-black tracking-widest text-primary uppercase">Menu</h4>
                                <nav className="flex flex-col gap-2">
                                    <Link href="#message" className="text-sm text-white/60 hover:text-white transition-colors tracking-tight">MESSAGE</Link>
                                    <Link href="#culture" className="text-sm text-white/60 hover:text-white transition-colors tracking-tight">CULTURE</Link>
                                    <Link href="#people" className="text-sm text-white/60 hover:text-white transition-colors tracking-tight">PEOPLE</Link>
                                    <Link href="#recruit" className="text-sm text-white/60 hover:text-white transition-colors tracking-tight">RECRUIT</Link>
                                </nav>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xs font-black tracking-widest text-primary uppercase">Socials</h4>
                                <nav className="flex flex-col gap-2">
                                    <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors tracking-tight">X (Twitter)</Link>
                                    <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors tracking-tight">Instagram</Link>
                                    <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors tracking-tight">Facebook</Link>
                                </nav>
                            </div>
                            <div className="col-span-2 md:col-span-1 space-y-4">
                                <h4 className="text-xs font-black tracking-widest text-primary uppercase">Links</h4>
                                <nav className="flex flex-col gap-2">
                                    <Link href="https://www.takeda.tv/" target="_blank" className="text-sm text-white/60 hover:text-white transition-colors tracking-tight flex items-center gap-1">
                                        武田塾 公式サイト <ArrowUpRight className="w-3 h-3" />
                                    </Link>
                                    <Link href="https://cai.co.jp/" target="_blank" className="text-sm text-white/60 hover:text-white transition-colors tracking-tight flex items-center gap-1">
                                        株式会社CAI <ArrowUpRight className="w-3 h-3" />
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-10 text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
                        <p>© 2026 CAI CO., LTD. ALL RIGHTS RESERVED.</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <Link href="#">Privacy Policy</Link>
                            <Link href="#">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};
