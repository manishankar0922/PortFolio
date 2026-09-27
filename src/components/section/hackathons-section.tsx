export default function BeyondProjectsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6 w-full">
      <div className="flex items-center w-full">
        <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
          <span className="text-background text-sm font-medium">Beyond the Projects</span>
        </div>
        <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
      </div>
      <div className="flex flex-col gap-y-3 items-center justify-center max-w-[650px] mx-auto text-center">
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-balance text-center">
          I enjoy building practical solutions at the intersection of data analytics, AI automation, and technology. From interactive dashboards and intelligent workflows to AI-assisted products, I like turning ideas and real-world problems into useful digital solutions.
        </p>
      </div>
    </div>
  );
}
