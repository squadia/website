'use client';
import React from 'react';
import { motion } from 'framer-motion';

const kicker = { fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8A6D3B', marginBottom: '0.75rem' };
const h2Style = { fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 700, color: '#1C2B27', lineHeight: 1.2 };
const chapo = { fontSize: '1.1rem', color: 'rgba(28,43,39,0.6)', maxWidth: '640px', lineHeight: 1.6 };

export const EASE_PREMIUM = [0.16, 1, 0.3, 1];
// Section header reveal: kicker, then title rising from a mask, then chapo, each at its own pace
export const RevealHeader = ({ kickerText, title, text, center = false, titleStyle = {}, textStyle = {}, wrapStyle = {} }) => (
  <div style={{ textAlign: center ? 'center' : 'left', ...wrapStyle }}>
    <motion.p style={kicker} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: EASE_PREMIUM }}>{kickerText}</motion.p>
    <div style={{ overflow: 'hidden', paddingBottom: '0.15em' }}>
      <motion.h2 style={{ ...h2Style, ...titleStyle }} initial={{ opacity: 0, y: '100%' }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.1, ease: EASE_PREMIUM, delay: 0.12 }}>{title}</motion.h2>
    </div>
    {text && (
      <motion.p style={{ ...chapo, ...(center ? { margin: '0 auto' } : {}), ...textStyle }} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 1.3, ease: EASE_PREMIUM, delay: 0.35 }}>{text}</motion.p>
    )}
  </div>
);
