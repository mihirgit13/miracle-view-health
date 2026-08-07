import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronRight } from 'lucide-react';

interface PolicyMarkdownViewerProps {
  rawMarkdown: string;
  pageTitle: string;
  subtitle: string;
  badgeText: string;
  badgeIcon: React.ReactNode;
  pageId: string;
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function preprocessPolicyMarkdown(content: string): string {
  return content
    .replace(/^#\s*(\d+)\\\./gm, '# $1.')
    .replace(/^##\s*(\d+\.\d+)\\\./gm, '## $1.')
    .replace(/^(\d+\.\s+[A-Z][^\n]+)$/gm, '# $1');
}

export default function PolicyMarkdownViewer({
  rawMarkdown,
  pageTitle,
  subtitle,
  badgeText,
  badgeIcon,
  pageId
}: PolicyMarkdownViewerProps) {
  const processedMarkdown = useMemo(() => preprocessPolicyMarkdown(rawMarkdown), [rawMarkdown]);

  // Extract table of contents headings
  const tocSections = useMemo(() => {
    const lines = processedMarkdown.split('\n');
    const sections: { id: string; title: string; level: number }[] = [];

    for (const line of lines) {
      const match = line.match(/^(#{1,2})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const rawTitle = match[2].trim();
        // Ignore main document title lines
        if (
          rawTitle.toUpperCase() === rawTitle && !rawTitle.match(/^\d/) ||
          rawTitle === 'Privacy Policy' ||
          rawTitle === 'Terms of Medical Service' ||
          rawTitle === 'Notice of Privacy Practices' ||
          rawTitle === 'Accessibility Statement & Disclaimer'
        ) {
          continue;
        }
        const id = slugifyHeading(rawTitle);
        sections.push({ id, title: rawTitle, level });
      }
    }
    return sections;
  }, [processedMarkdown]);

  return (
    <div id={pageId} className="bg-gray-50/70 min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#124237] to-[#1e463c] py-12 text-white rounded-b-[40px] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-teal-300">
            {badgeIcon}
            <span>{badgeText}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight">
            {pageTitle}
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Sidebar Navigation - Left */}
          {tocSections.length > 0 && (
            <aside className="lg:col-span-4 sticky top-24 hidden lg:block bg-white p-6 rounded-[32px] border border-gray-150 shadow-sm max-h-[calc(100vh-120px)] overflow-y-auto">
              <h4 className="text-sm font-extrabold font-display text-gray-900 mb-4 border-b border-gray-100 pb-2 uppercase tracking-wider">
                Table of Contents
              </h4>
              <nav className="space-y-1">
                {tocSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`flex items-center text-xs font-semibold text-gray-600 hover:text-[#1e463c] py-2 px-3 rounded-xl hover:bg-[#ecf3f0] transition-all group ${
                      section.level === 2 ? 'pl-6 text-gray-500 font-normal' : ''
                    }`}
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-gray-300 group-hover:text-[#c39b3d] transition-colors shrink-0" />
                    <span className="truncate">{section.title}</span>
                  </a>
                ))}
              </nav>
            </aside>
          )}

          {/* Policy Text Area - Right */}
          <article className={`${tocSections.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'} bg-white p-8 sm:p-12 rounded-[32px] border border-gray-150 shadow-sm text-gray-600 text-sm leading-relaxed font-sans`}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => {
                  const text = React.Children.toArray(children).join('');
                  if (
                    text === 'Privacy Policy' ||
                    text === 'Terms of Medical Service' ||
                    text === 'Notice of Privacy Practices' ||
                    text === 'Accessibility Statement & Disclaimer'
                  ) {
                    return null;
                  }
                  const id = slugifyHeading(text);
                  return (
                    <h2 id={id} className="text-2xl font-extrabold font-display text-[#1e463c] border-b border-gray-150 pb-3 pt-8 mt-4 scroll-mt-28 first:pt-0 first:mt-0">
                      {children}
                    </h2>
                  );
                },
                h2: ({ children }) => {
                  const text = React.Children.toArray(children).join('');
                  const id = slugifyHeading(text);
                  return (
                    <h3 id={id} className="text-lg font-bold font-display text-gray-900 pt-6 mt-2 scroll-mt-28">
                      {children}
                    </h3>
                  );
                },
                h3: ({ children }) => {
                  const text = React.Children.toArray(children).join('');
                  const id = slugifyHeading(text);
                  return (
                    <h4 id={id} className="text-base font-semibold text-gray-900 pt-4 scroll-mt-28">
                      {children}
                    </h4>
                  );
                },
                p: ({ children }) => <p className="my-3.5 leading-relaxed text-gray-650 font-sans">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700 marker:text-[#c39b3d] marker:font-bold">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-6 space-y-2 my-4 text-gray-700 marker:text-[#1e463c] marker:font-bold">{children}</ol>,
                li: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
                strong: ({ children }) => <strong className="font-bold text-gray-950">{children}</strong>,
                a: ({ href, children }) => (
                  <a href={href} className="text-[#1e463c] font-semibold underline hover:text-[#c39b3d] transition-colors" target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
                hr: () => <hr className="my-8 border-gray-150" />
              }}
            >
              {processedMarkdown}
            </ReactMarkdown>
          </article>

        </div>
      </section>
    </div>
  );
}
