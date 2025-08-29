"use client";

import { useEffect, useRef, useState } from 'react';
import styles from '../app/page.module.css';
import { Row, Particle } from '@once-ui-system/core';

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
            try { el.releasePointerCapture(e.pointerId); } catch { }
        }
        baseOffsetRef.current = { x: position.x, y: position.y };
        setIsDragging(false);
    };

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;
        el.style.setProperty('--drag-x', `${position.x}px`);
        el.style.setProperty('--drag-y', `${position.y}px`);
    }, [position]);

    return (
        <Row className={styles.glass_container} vertical="center" horizontal="center" background="page">
            <Particle 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                }}
                fill
                density={300}
                size="4"
                speed={1}
                interactive
                interactionRadius={20}
            />
            <Row vertical="center" horizontal="center">
                {children}
            </Row>
            <Row
                ref={cardRef}
                className={`${styles.glass_card} ${isDragging ? styles.dragging : ''}`}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                vertical="center"
                horizontal="center"
            />
            <svg style={{ display: 'none' }}>
                <filter id="displacementFilter">
                    <feTurbulence type="turbulence" baseFrequency="0.005" numOctaves="2" result="turbulence" seed="1" />
                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="180" xChannelSelector="R" yChannelSelector='G' />
                </filter>
            </svg>
        </Row>
    )
}