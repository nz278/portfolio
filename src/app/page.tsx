"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Project = {
  id: string;
  title: string;
  href: string;
  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    id: "rc-power",
    title: "Embedded RC Power System",
    href: "/projects/rc-power",
    description: `Designed custom PCB and physical housing for selective power
    cycling of onboard electronics for Cornell Autonomous Sailboat project team.`,
    tech: ["KiCad", "PCB Design", "Arduino"],
  },
  {
    id: "construction-robot",
    title: "Autonomous Construction Robot",
    href: "/projects/construction-robot",
    description: `Built mechanical chassis with 3D-printed mounts and created a
    Python library for controlling motor servos via RS485 serial communication.`,
    tech: [ "Onshape", "Python", "Raspberry Pi"],
  },
  {
    id: "crc-risk",
    title: "Colorectal Cancer Risk Prediction",
    href: "/projects/crc-risk",
    description: `Developed supervised machine learning models with feature selection
    techniques to predict colorectal cancer risk using multiomic data.`,
    tech: ["Python", "Neural Networks", "Data Analysis"],
  },
  {
    id: "pulse-oximeter",
    title: "Wearable Sleeve Pulse Oximeter",
    href: "/projects/pulse-oximeter",
    description: `Prototyped a wearable sleeve pulse oximeter by integrating electronics
    into a custom textile for continuous health monitoring.`,
    tech: ["Arduino", "E-textiles", "UART"],
  },
  {
    id: "door-monitor",
    title: "Automatic Door Monitoring System",
    href: "/projects/door-monitor",
    description: `Created an automatic door monitoring system using a custom single-cycle
    RISC-V processor on a Cyclone V FPGA.`,
    tech: ["FPGA", "Verilog", "RISC-V"],
  },
  {
    id: "turing-simulations",
    title: "Turing Pattern Simulations",
    href: "/projects/turing-simulations",
    description: `Extended Fourier and spectral analysis tools for simulating morphogenesis 
    patterns and integrated real-time interactive hardware visualization.`,
    tech: ["Git", "UART", "C++"],
  },
];

const featuredProjectIds = [
  "rc-power",
  "construction-robot",
  "crc-risk",
  "pulse-oximeter",
  "door-monitor",
  "turing-simulations",
];

const featuredProjects = featuredProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is Project => project !== undefined)
  .slice(0, 6);

export default function Home() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        router.push("/about");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active, router]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        titleRef.current &&
        !titleRef.current.contains(e.target as Node)
      ) {
        setActive(false);
      }
    };

    window.addEventListener("mousedown", handleClick);
    return () =>
      window.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <main className="min-h-screen bg-[#111111] text-[#e8e8e8] font-mono px-6 py-10">
      <section className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-[220px_1fr] md:items-center">
          <div>
            <div className="border border-[#00ff99] bg-[#181818] p-3">
              <div className="mb-3 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <Image
                src="/profile.jpg"
                alt="Nicole Zhou"
                width={220}
                height={220}
                className="h-[220px] w-[220px] object-cover"
                priority
              />
            </div>

            <p className="mt-3 text-center text-sm text-gray-400">
              /WA/Seattle/WoodlandParkZoo
            </p>
          </div>

          <div>
            <p className="text-[#00ff99]">nicole@portfolio:~$ whoami</p>

            <h1
              ref={titleRef}
              className="mt-4 cursor-pointer text-4xl font-bold md:text-5xl"
              onClick={() => setActive(true)}
            >
              Nicole Zhou
              <span
                className={`text-[#00ff99] ${
                  active ? "animate-cursor-blink" : ""
                }`}
              >
                _
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-lg text-gray-300">
              ECE undergraduate at Cornell University interested in embedded
              systems, PCB design, autonomous robotics, and physical computing.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                className="border border-[#00ff99] px-4 py-2 text-[#00ff99] transition hover:bg-[#00ff99] hover:text-black"
                href="https://github.com/nz278"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                className="border border-gray-500 px-4 py-2 transition hover:border-white"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        <h2 className="mt-16 text-2xl text-[#ffb000]">
          Featured Projects
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="block rounded border border-gray-700 p-5 transition duration-200 hover:border-[#00ff99] hover:bg-[#181818]"
            >
              <h3 className="text-xl text-[#00ff99]">
                {project.title}
              </h3>

              <p className="mt-2 text-gray-300">
                {project.description}
              </p>

              <p className="mt-4 text-sm text-[#ffb000]">
                {project.tech.join(" · ")}
              </p>

              <p className="mt-6 text-sm text-[#00ff99]">
                View project →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}