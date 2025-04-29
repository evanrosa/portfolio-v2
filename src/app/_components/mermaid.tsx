'use client'
import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

export const Mermaid = ({ chart }: { chart: string }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            // Initialize Mermaid only once
            mermaid.initialize({ startOnLoad: false, theme: "default" });
            // Render the diagram
            mermaid.render(`mermaid-${Math.random()}`, chart).then(({ svg }) => {
                ref.current!.innerHTML = svg;
            });
        }
    }, [chart]);

    return <div ref={ref} className="my-8 overflow-x-auto" />;
};