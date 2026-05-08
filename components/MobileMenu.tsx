import UIButton from "@/util/UIButton";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

export type Locale = "en" | "ar";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: { label: string; href: string }[];
    active: string;
    onSelect: (href: string) => void;
    locale: Locale;
    contactLabel: string;
    dict: any;
}

export default function MobileMenu({
    isOpen,
    onClose,
    links,
    active,
    onSelect,
    locale,
    contactLabel,
    dict,
}: MobileMenuProps) {
    // English -> slide from right; Arabic -> slide from left
    const fromRight = locale === "en";
    const xHidden = fromRight ? "100%" : "-100%";

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.06, delayChildren: 0.1 },
        },
        exit: {
            transition: { staggerChildren: 0.04, staggerDirection: -1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: fromRight ? 40 : -40 },
        visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 260, damping: 24 } },
        exit: { opacity: 0, x: fromRight ? 40 : -40, transition: { duration: 0.15 } },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                    />
                    <motion.aside
                        key="panel"
                        dir={locale === "ar" ? "rtl" : "ltr"}
                        initial={{ x: xHidden }}
                        animate={{ x: 0 }}
                        exit={{ x: xHidden }}
                        transition={{ type: "spring", stiffness: 220, damping: 30 }}
                        className={`fixed top-0 ${fromRight ? "right-0" : "left-0"} z-50 h-screen w-[82%] max-w-[360px] bg-[#0a0a0a] border-${fromRight ? "l" : "r"} border-white/10 flex flex-col md:hidden`}
                    >
                        <div className="flex items-center justify-between p-5 border-b border-white/10">
                            <span className="text-white/80 text-sm tracking-[0.2em] uppercase">Menu</span>
                            <button
                                onClick={onClose}
                                aria-label="Close menu"
                                className="flex items-center justify-center size-10 rounded-full border border-white/10 text-white hover:bg-white/5 transition"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <motion.nav
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex-1 flex flex-col gap-1 px-5 py-8"
                        >
                            {links.map((link) => {
                                const isActive = active === link.href;
                                return (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        variants={itemVariants}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            onSelect(link.href);
                                            onClose();
                                        }}
                                        className={`group flex items-center justify-between px-4 py-4 rounded-2xl border transition-colors ${isActive
                                                ? "bg-[rgba(37,48,21,0.9)] border-[#253015] text-[#EAFFE1]"
                                                : "border-transparent text-white/85 hover:bg-white/[0.04]"
                                            }`}
                                    >
                                        <span className="text-[18px] font-medium tracking-tight">{link.label}</span>
                                        <ArrowUpRight
                                            size={18}
                                            className="opacity-0 -translate-x-1 group-hover:opacity-70 group-hover:translate-x-0 transition-all"
                                        />
                                        
                                    </motion.a>
                                );
                            })}

                            <motion.div variants={itemVariants} className="mt-6" onClick={onClose}>
                               
                                    <UIButton href="/#contact" label={contactLabel} locale={locale} /> 
                                
                            </motion.div>
                        </motion.nav>

                        <div className="p-5 border-t border-white/10 text-xs text-white/40">
                            {dict.footer.copyright}
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}
