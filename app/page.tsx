"use client"
import { ShootingStars } from "@/components/shooting-stars"
import { StarsBackground } from "@/components/stars-background"
import Link from "next/link"
import { useRef } from "react"

// const projects = [
//     {
//         name: "QuickStack",
//         description:
//             "The NextJS template with everything you'll need to launch a product or service.",
//         url: "https://template.codewitch.io/",
//         badges: ["Work in progress"],
//     },
//     {
//         name: "HEMA Broadcast",
//         description: "An easier way of creating overlays for HEMA events",
//         url: "https://hema.codewitch.io/",
//         badges: ["Open source", "Work in progress"],
//     },
// ]

export default function Home() {
    const servicesRef = useRef<HTMLDivElement>(null)

    return (
        // Container
        // TODO: Add something fun, like particles or framer motion interactive animations
        // To implement::
        // - https://ui.aceternity.com/components/text-hover-effect (this is sick)
        // Examples/ideas:
        // - https://vercel.com/templates/next.js/nextjs-portfolio-pageview-counter (I like how these move with the cursor)
        // - https://ui.aceternity.com/components/hero-highlight (could do something similar with the stars, super subtle?)
        <>
            <ShootingStars />
            <StarsBackground />
            <div className="relative flex h-screen w-dvw flex-col items-center gap-8 overflow-hidden px-8 text-center font-light leading-relaxed">
                {/* Title */}
                <h1 className="mt-[35vh] animate-title text-6xl font-light tracking-normal md:text-8xl lg:text-9xl">
                    codewitch
                </h1>
                {/* Description */}
                <div className="text-subtle animate-fade-in">
                    <p className="max-w-prose">
                        I help growing brands and startups gain an unfair
                        advantage through elegant, engaging, and efficient
                        websites.
                    </p>
                </div>
                {/* Links and socials */}
                <div className="*:text-discreet flex animate-fade-in gap-6 text-3xl *:transition-all hover:*:text-base-content md:text-4xl">
                    <Link target="_blank" href="https://github.com/codewitchio">
                        <i className="fa-brands fa-github" />
                    </Link>
                    <Link target="_blank" href="https://x.com/_codewitch">
                        <i className="fa-brands fa-twitter" />
                    </Link>
                    <Link href="mailto:hanna@codewitch.io">
                        <i className="fa-solid fa-envelope" />
                    </Link>
                </div>
            </div>
            {/* Container for placing the projects title/scroll indicator */}
            {/* We can't use dvh for the main container without causing the canvas to redraw when you scroll on mobile, so this has to be a separate element */}
            <div className="pointer-events-none absolute top-0 flex h-dvh w-dvw animate-fade-in flex-col items-center justify-end *:pointer-events-auto">
                <div
                    className="text-subtle flex-center mb-4 cursor-pointer flex-col font-light hover:text-base-content"
                    onClick={() =>
                        servicesRef.current?.scrollIntoView({
                            block: "start",
                            inline: "nearest",
                            behavior: "smooth",
                        })
                    }
                >
                    <p>Services</p>
                    <i className="fa-solid fa-chevron-down text-xl" />
                </div>
            </div>
            {/* Projects list */}
            {/* <div
                className="text-subtle my-24 flex animate-fade-in flex-col gap-12 px-8 font-light"
                ref={projectsRef}
            >
                {projects.map(({ name, description, url, badges }) => (
                    <Link
                        href={url}
                        className="flex flex-col gap-2 transition-all hover:text-base-content"
                        key={name}
                    >
                        <span className="flex items-center justify-between">
                            <h3>{name}</h3>
                            <span className="flex flex-grow basis-0 flex-wrap justify-end gap-2">
                                {badges.map((badge) => (
                                    <div key={badge} className="badge">
                                        {badge}
                                    </div>
                                ))}
                            </span>
                        </span>
                        <p>{description}</p>
                    </Link>
                ))}
            </div> */}
            {/* Services */}
            <div
                className="text-subtle my-24 flex max-w-prose animate-fade-in flex-col gap-12 px-8 font-light"
                ref={servicesRef}
            >
                <div className="flex flex-col gap-2 transition-all hover:text-base-content">
                    <span className="flex items-center justify-between">
                        <h3>Software Development</h3>
                    </span>
                    <p className="text-subtle">
                        Got an idea for a web app or need a software solution
                        that actually makes your life easier? I help businesses
                        and entrepreneurs turn concepts into polished,
                        user-friendly products. Whether it’s building from the
                        ground up or improving what you already have, I make
                        sure your tech works <i>for</i> you, not against you.
                    </p>
                    <p className="text-subtle">
                        Great software isn’t just about writing code—it’s about
                        creating something people love to use. With 8 years of
                        engineering and design experience, I focus on building
                        intuitive, user-friendly solutions that actually solve
                        problems. I think outside the box, bringing creative
                        ideas and fresh perspectives to every project.
                    </p>
                    <Link
                        href="mailto:hanna@codewitch.io"
                        className="mt-8 self-center"
                    >
                        <button className="btn btn-outline">Let’s talk!</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
