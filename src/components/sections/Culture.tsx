"use client";

import { motion } from "framer-motion";
import { Users, Clock, Calendar, Rocket, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Culture = () => {
    const metrics = [
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            label: "平均年齢",
            value: "28",
            unit: "歳",
            description: "若手が主役として活躍できる環境です。",
        },
        {
            icon: <Clock className="w-8 h-8 text-primary" />,
            label: "平均残業時間",
            value: "4",
            unit: "h/月",
            description: "効率的な働き方でメリハリを重視。",
        },
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            label: "男女比",
            value: "2:8",
            unit: "",
            description: "誰もが輝ける職場。",
        },
        {
            icon: <GraduationCap className="w-8 h-8 text-primary" />,
            label: "社員数",
            value: "30",
            unit: "人",
            description: "元々校舎数だったので変更した。",
        },
        {
            icon: <Calendar className="w-8 h-8 text-primary" />,
            label: "年間休日",
            value: "125",
            unit: "日",
            description: "しっかり休み、最高のパフォーマンスを。",
        },
        {
            icon: <Heart className="w-8 h-8 text-primary" />,
            label: "有給取得率",
            value: "98",
            unit: "%",
            description: "自分と家族の時間も大切にできます。",
        },
    ];

    return (
        <section id="culture" className="py-16 md:py-32 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row items-end justify-between mb-10 md:mb-16 gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold tracking-[0.2em] text-sm mb-2 md:mb-4 block">NUMBERS</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-balance">
                            データで知る、<br className="block md:hidden" /><span className="inline-block text-primary">CAI</span>のカルチャー。
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/60 max-w-sm text-balance"
                    >
                        教育業界の「当たり前」をデータから変えていく。<br className="block md:hidden" />
                        私たちの働きやすさと熱量の源泉を公開しています。
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {metrics.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="rounded-none border-none shadow-none bg-white hover:bg-primary group transition-colors duration-500">
                                <CardContent className="p-8 md:p-10 flex flex-col items-center text-center">
                                    <div className="mb-4 md:mb-6 p-4 rounded-full bg-slate-50 group-hover:bg-white transition-colors">
                                        {item.icon}
                                    </div>
                                    <span className="text-xs font-bold tracking-widest text-foreground/50 group-hover:text-white/60 mb-2 uppercase">
                                        {item.label}
                                    </span>
                                    <div className="flex items-baseline gap-1 group-hover:text-white transition-colors duration-500">
                                        <span className="text-5xl font-black">{item.value}</span>
                                        <span className="text-xl font-bold">{item.unit}</span>
                                    </div>
                                    <p className="mt-4 text-sm text-foreground/60 group-hover:text-white/80 line-clamp-2">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
