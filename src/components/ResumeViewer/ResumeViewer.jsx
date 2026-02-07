"use client";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
).toString();

const ResumeViewer = () => {
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setWidth(containerRef.current.offsetWidth);
            }
        };
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);
    return (
        <div ref={containerRef}>
            <Document
                className="w-full max-w-4xl mx-auto"
                file="/resumes/Resume_of_Md_Sajidul_Islam_Frontend_Developer.pdf"
            >
                <Page pageNumber={1} width={width - 15} />
            </Document>
        </div>
    );
};

export default ResumeViewer;
