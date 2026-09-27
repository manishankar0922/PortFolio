"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    const [expanded, setExpanded] = useState(false);
    const featuredProjects = DATA.projects.slice(0, 4);
    const additionalProjects = DATA.projects.slice(4);

    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"
                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">My Projects</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"
                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Check out my latest work</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            I&apos;ve worked on a variety of projects, from simple
                            websites to complex web applications. Here are a few of my
                            favorites.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
                    {featuredProjects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                    <AnimatePresence>
                        {expanded &&
                            additionalProjects.map((project, id) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}
                                    transition={{ duration: 0.3, delay: id * 0.04 }}
                                    className="h-full"
                                >
                                    <ProjectCard
                                        href={project.href}
                                        key={project.title}
                                        title={project.title}
                                        description={project.description}
                                        dates={project.dates}
                                        tags={project.technologies}
                                        image={project.image}
                                        video={project.video}
                                        links={project.links}
                                    />
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </div>
                {additionalProjects.length > 0 && (
                    <div className="flex justify-center mt-2">
                        <button
                            type="button"
                            onClick={() => setExpanded((prev) => !prev)}
                            className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all duration-200 border border-border bg-background hover:bg-muted text-foreground px-5 py-2.5 shadow-xs cursor-pointer hover:border-foreground/20 active:scale-98"
                        >
                            <span>{expanded ? "Show Less" : "View More"}</span>
                            <ChevronDown
                                className={cn(
                                    "size-4 transition-transform duration-300",
                                    expanded && "rotate-180"
                                )}
                            />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
