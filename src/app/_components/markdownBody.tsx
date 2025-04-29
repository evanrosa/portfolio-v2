// src/app/_components/MarkdownBody.tsx
'use client'
import React, { useEffect } from "react";
import mermaid from "mermaid";

export default function MarkdownBody({ html }: { html: string }) {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true, theme: "default" });
        document.querySelectorAll("code.language-mermaid").forEach((block, i) => {
            const parent = block.parentElement;
            if (parent && !parent.querySelector("svg")) {
                const chart = block.textContent || "";
                const id = `mermaid-${i}-${Math.random()}`;
                const div = document.createElement("div");
                div.className = "my-8 overflow-x-auto";
                parent.replaceWith(div);
                mermaid.render(id, chart).then(({ svg }) => {
                    div.innerHTML = svg;
                });
            }
        });
    }, [html]);

    return (
        <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}