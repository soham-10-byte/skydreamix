import React, { useState, useEffect } from 'react';

const TableOfContents = ({ contentRef }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!contentRef.current) return;

    // Parse headings from the rendered HTML content
    const elements = Array.from(contentRef.current.querySelectorAll("h2, h3"));
    
    const parsedHeadings = elements.map((elem, index) => {
      // Assign an ID if it doesn't have one
      if (!elem.id) {
        elem.id = `heading-${index}`;
      }
      return {
        id: elem.id,
        text: elem.innerText,
        level: Number(elem.tagName.substring(1)),
        element: elem
      };
    });

    setHeadings(parsedHeadings);

    // Setup Intersection Observer to track active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px", threshold: 1.0 }
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, [contentRef]);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-32">
      <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">
        Table of Contents
      </h4>
      <nav className="flex flex-col gap-3 border-l border-white/5 pl-4 relative">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`text-sm transition-colors duration-300 block ${
              activeId === heading.id 
                ? 'text-[#00E5FF] font-medium' 
                : 'text-gray-500 hover:text-white'
            }`}
            style={{ 
              marginLeft: heading.level === 3 ? '1rem' : '0' 
            }}
            onClick={(e) => {
              e.preventDefault();
              heading.element.scrollIntoView({ behavior: 'smooth' });
              setActiveId(heading.id);
            }}
          >
            {heading.text}
          </a>
        ))}

        {/* Active Line Indicator */}
        <div 
          className="absolute left-[-1px] w-[2px] bg-[#00E5FF] transition-all duration-300 pointer-events-none"
          style={{
            height: '20px',
            top: headings.findIndex(h => h.id === activeId) > -1 
              ? `${headings.findIndex(h => h.id === activeId) * 32}px` 
              : '0px',
            opacity: activeId ? 1 : 0
          }}
        />
      </nav>
    </div>
  );
};

export default TableOfContents;
