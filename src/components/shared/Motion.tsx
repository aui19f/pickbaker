"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

/**
 * 서버 컴포넌트에서 직접 motion.div 등을 사용하면 에러가 발생하므로,
 * 클라이언트 컴포넌트로 래핑된 요소들을 export 하여 사용
 */

export const m = motion;
export const MDiv = motion.div;
export const MSection = motion.section;
export const MMain = motion.main;
export const MNav = motion.nav;
export const MUl = motion.ul;
export const MLi = motion.li;
export const MSpan = motion.span;
export const MButton = motion.button;

// 애니메이션 그룹 및 존재 여부 트리거
export const MAnimatePresence = AnimatePresence;
export const MLayoutGroup = LayoutGroup;
