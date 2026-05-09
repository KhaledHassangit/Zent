"use client";

import { motion, AnimatePresence, Variants, Transition, HTMLMotionProps } from "framer-motion";
import React from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type MotionDivTag = "div" | "aside" | "nav" | "section" | "ul" | "li" | "span" | "a";

export interface MotionDivProps extends Omit<HTMLMotionProps<"div">, "children"> {
    /** Content rendered inside the animated element — SSR-safe React nodes */
    children?: React.ReactNode;
    /** Override the rendered HTML tag (default: "div") */
    as?: MotionDivTag;
    /** Named variant set to drive enter / exit / hover states */
    variants?: Variants;
    /** Framer Motion initial state or variant name */
    initial?: HTMLMotionProps<"div">["initial"];
    /** Framer Motion animate state or variant name */
    animate?: HTMLMotionProps<"div">["animate"];
    /** Framer Motion exit state or variant name */
    exit?: HTMLMotionProps<"div">["exit"];
    /** Framer Motion whileHover state */
    whileHover?: HTMLMotionProps<"div">["whileHover"];
    /** Framer Motion whileTap state */
    whileTap?: HTMLMotionProps<"div">["whileTap"];
    /** Transition config (type, duration, stiffness, etc.) */
    transition?: Transition;
    /** Tailwind / CSS class names forwarded to the element */
    className?: string;
    /** Wrap children in AnimatePresence (needed when toggling mount/unmount) */
    withPresence?: boolean;
    /** Forwarded to AnimatePresence – "sync" | "wait" | "popLayout" */
    presenceMode?: "sync" | "wait" | "popLayout";
    /** Any extra HTML attribute (onClick, aria-*, dir, key …) */
    [key: string]: unknown;
}


export default function MotionDiv({
    children,
    as = "div",
    variants,
    initial,
    animate,
    exit,
    whileHover,
    whileTap,
    transition,
    className,
    withPresence = false,
    presenceMode = "sync",
    ...rest
}: MotionDivProps) {
    const MotionTag = motion[as] as typeof motion.div;

    const element = (
        <MotionTag
            variants={variants}
            initial={initial}
            animate={animate}
            exit={exit}
            whileHover={whileHover}
            whileTap={whileTap}
            transition={transition}
            className={className}
            {...(rest as object)}
        >
            {children}
        </MotionTag>
    );

    if (withPresence) {
        return <AnimatePresence mode={presenceMode}>{element}</AnimatePresence>;
    }

    return element;
}