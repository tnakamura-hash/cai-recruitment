"use client";

import { motion } from "framer-motion";

export const Mission = () => {
    return (
        <section id="message" className="relative py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
                {/* Left Side: Vertical Japanese Accent */}
                <div className="hidden lg:block relative w-1/4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="writing-vertical-rl text-7xl xl:text-8xl font-bold text-gray-100 tracking-[0.2em] select-none"
                    >
                        逆転合格の、その先へ。
                    </motion.div>
                    <div className="absolute top-0 left-12 writing-vertical-rl text-2xl font-bold text-primary tracking-widest pt-4">
                        MISSION / PHILOSOPHY
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-3/4 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-relaxed border-l-4 border-primary pl-6 text-balance">
                            教育の常識を、<br className="block md:hidden" />
                            <span className="inline-block">IT×情熱</span>で<br className="block md:hidden" />アップデートする。
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-base md:text-lg text-foreground/80 leading-loose text-balance"
                    >
                        <p>
                            私たち<span className="inline-block font-bold text-foreground">株式会社CAI</span>は、<span className="inline-block font-bold text-foreground">武田塾</span>の運営を通じて、日本の教育のあり方を再定義しています。
                            「授業を受けるだけで満足していないか？」「本当に自分の力で解けるようになっているか？」
                            そんな疑問から生まれたのが、<span className="inline-block">自学自習</span>を徹底的に管理する<span className="inline-block">武田塾</span>のメソッドです。
                        </p>
                        <p>
                            合理性を追求するITの力と、生徒の心に火を灯す熱い情熱。
                            この二つの融合が、不可能を可能にする「逆転合格」を生み出し続けています。
                        </p>
                        <p>
                            CAIが求めているのは、既存の枠組みに縛られず、日本の教育を本気で変えたいと願う「革新者」です。
                            あなたの熱量で、日本の未来を底上げしていきましょう。
                        </p>
                    </motion.div>

                    <div className="mt-16 space-y-4">
                        {[
                            {
                                id: "01",
                                title: "合理的な教育",
                                description: "無駄を削ぎ落とし、最短で結果を出す「自学自習」の支援を追求します。"
                            },
                            {
                                id: "02",
                                title: "逆転合格のプロデュース",
                                description: "偏差値に関わらず、生徒の可能性を最大化し、劇的な成功体験を提供します。"
                            },
                            {
                                id: "03",
                                title: "ITによる教育革新",
                                description: "現場の経験と最新技術を融合させ、効率的かつ均質な教育サービスを構築します。"
                            },
                            {
                                id: "04",
                                title: "次世代リーダーの育成",
                                description: "自ら考え、行動し、社会をリードする人材を教育を通じて輩出します。"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 + (index * 0.15) }}
                                className="p-8 bg-secondary border border-border flex items-center gap-8 group cursor-default"
                            >
                                <div className="text-primary text-5xl font-black italic opacity-20 group-hover:opacity-100 transition-opacity duration-500 shrink-0">
                                    {item.id}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-foreground/60">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 translate-x-1/2 skew-x-12" />
        </section>
    );
};
