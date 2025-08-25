"use client";

import { useEffect, useRef, useState } from 'react';
import styles from '../app/page.module.css';

export default function GlassCard({ children }) {
    const cardRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const dragOriginRef = useRef({ x: 0, y: 0 });
    const baseOffsetRef = useRef({ x: 0, y: 0 });

    const handlePointerDown = (e) => {
        const el = cardRef.current;
        if (!el) return;
        el.setPointerCapture(e.pointerId);
        setIsDragging(true);
        dragOriginRef.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - dragOriginRef.current.x;
        const deltaY = e.clientY - dragOriginRef.current.y;
        setPosition({ x: baseOffsetRef.current.x + deltaX, y: baseOffsetRef.current.y + deltaY });
    };

    const endDrag = (e) => {
        const el = cardRef.current;
        if (el && e.pointerId != null) {
            try { el.releasePointerCapture(e.pointerId); } catch {}
        }
        baseOffsetRef.current = { x: position.x, y: position.y };
        setIsDragging(false);
    };

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        el.style.transform = `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`;
    }, [position]);

    return (
        <>
            <div
                ref={cardRef}
                className={`${styles.glass_card} ${isDragging ? styles.dragging : ''}`}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
            >
                {children}
            </div>
            <svg style={{ display: 'none' }}>
                <filter id="displacementFilter">
                    <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence" />
                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="200" xChannelSelector="R" yChannelSelector='G' />
                </filter>
            </svg>
        </>
    )
}