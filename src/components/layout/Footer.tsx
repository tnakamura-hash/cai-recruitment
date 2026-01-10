import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="bg-white py-12 border-t border-slate-100">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-4">
                        <div className="relative w-32 h-10 md:w-36 md:h-12">
                            <Image
                                src="/images/logo-new.png"
                                alt="CAI Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <div className="text-slate-500 text-sm leading-relaxed">
                            <p className="font-bold text-slate-900 mb-1">株式会社CAI</p>
                            <p>〒150-0043 東京都渋谷区道玄坂1-9-1 梅山ビル2F</p>
                            <p className="flex items-center gap-1 mt-1">
                                <span className="font-semibold text-slate-700">TEL:</span> 03-3461-2626
                            </p>
                        </div>
                    </div>
                    <div className="text-slate-400 text-xs text-right w-full md:w-auto mt-8 md:mt-0">
                        <p>© {new Date().getFullYear()} CAI Co., Ltd. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
