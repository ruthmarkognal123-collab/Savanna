import { useEffect, useState } from "react";

interface TallyEmbedProps {
  src: string;
  title?: string;
  height?: number;
  className?: string;
}

export default function TallyEmbed({
  src,
  title = "Tally Form",
  height = 900,
  className = "",
}: TallyEmbedProps) {
  const [iframeHeight, setIframeHeight] = useState<number>(height);

  useEffect(() => {
    const updateHeight = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      if (vw < 640) {
        const compact = Math.max(480, Math.floor(vh * 0.82));
        setIframeHeight(compact);
      } else if (vw < 1024) {
        setIframeHeight(Math.min(height, Math.floor(vh * 0.9)));
      } else {
        setIframeHeight(height);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [height]);

  useEffect(() => {
    const id = "tally-embed-js";
    const ensureLoad = () => {
      // @ts-ignore
      if (window.Tally && typeof window.Tally.loadEmbeds === "function") {
        // @ts-ignore
        window.Tally.loadEmbeds();
      }
    };

    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src = "https://tally.so/widgets/embed.js";
      s.async = true;
      document.head.appendChild(s);
      s.onload = ensureLoad;
    } else {
      ensureLoad();
    }
  }, []);

  return (
    <div className={className}>
      <iframe
        data-tally-src={src}
        src={src}
        width="100%"
        height={iframeHeight}
        style={{
          background: "transparent",
          border: "0",
          borderRadius: 12,
          minHeight: iframeHeight,
          display: "block",
        }}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        allow="fullscreen; clipboard-write;"
        title={title}
        loading="lazy"
      />
    </div>
  );
}
