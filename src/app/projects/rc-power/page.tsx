import Link from "next/link";
import Sidebar from "../../components/Sidebar";

export default function RCPowerPage() {
  return (
    <main className="min-h-screen bg-[#111111] px-6 py-10 font-mono text-[#e8e8e8]">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,640px)_220px]">
        <article className="max-w-[640px]">
          <Link href="/" className="text-[#00ff99] hover:underline">
            ← Back home
          </Link>

          <p className="mt-8 text-[#00ff99]">
            nicole@portfolio:~/projects/rc-power$ cat README.md
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            Embedded RC Power System
          </h1>

          <p className="mt-4 text-gray-300">
            Designed a custom PCB and physical housing for selective power
            cycling of onboard electronics for the Cornell Autonomous Sailboat
            project team.
          </p>

          <p className="mt-6 text-sm text-[#ffb000]">
            KiCad · PCB Design · Arduino
          </p>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">Overview</h2>

            <p className="mt-3 text-gray-300">
              During field testing, a remote-control power distribution system
              aims to improve recovery efficiency from subsystem faults while
              also eliminating delays caused by manually resetting onboard
              electronics.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">Implementation</h2>

            <div className="mt-3 space-y-6 text-gray-300">
              <p>
                The control panel continuously monitors system status while
                transmitting commands to the boat that toggle power to specific
                subsystems. It is microcontroller-based, using an Arduino Nano,
                and communicates through serial commands sent via XBee radio
                modules. The user interface primarily consists of switches and
                LEDs that indicate system power, communication status, and
                subsystem states, as modeled in the breadboarded circuit below.
              </p>

              <figure className="w-full md:w-3/4">
                <video
                  controls
                  preload="metadata"
                  className="w-full rounded-lg border border-[#333333]"
                >
                  <source
                    src="/rc-power/breadboard-demo-alt.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <figcaption className="mt-2 text-sm text-gray-400">
                  Video 1. Demonstration of breadboarded circuit
                </figcaption>
              </figure>

              <figure>
                <img
                  src="/rc-power/boat-electronics-schematic.png"
                  alt="Schematic of boat electronics"
                  className="w-full rounded-lg border border-[#333333]"
                />

                <figcaption className="mt-2 text-sm text-gray-400">
                  Fig. 1. Schematic of boat electronics
                </figcaption>
              </figure>

              <p>
                Four digital input pins on the central Nano controller,
                corresponding to switches, are compared against their previous
                states to detect changes. If a change is detected, a serial
                command is sent to the XBee instructing the boat to shut down a
                specific system. Sequential communication transmissions and
                short delays between them reduce the risk of communication
                overlap. The Nano also checks for periodic status signals from
                the boat. If the shutdown button is pressed, all systems are set
                to a latched-off state that persists until the system is reset.
              </p>

              <figure>
                <img
                  src="/rc-power/control-flowchart.png"
                  alt="Diagram showing inputs and outputs from the RC and boat XBee modules"
                  className="w-full rounded-lg border border-[#333333]"
                />

                <figcaption className="mt-2 text-sm text-gray-400">
                  Fig. 2. Diagram showing inputs and outputs from the RC and boat
                  XBee modules
                </figcaption>
              </figure>

              <p>
                A custom circuit board ordered through JLCPCB was also designed
                to integrate all components. The traces and footprints are
                shown below. We also included a buck converter between the USB
                header and the Nano to satisfy the system&apos;s power
                constraints.
              </p>

              <figure className="w-full md:w-3/4">
                <img
                  src="/rc-power/pcb-3d-model.png"
                  alt="Labeled PCB model"
                  className="w-full rounded-lg border border-[#333333]"
                />

                <figcaption className="mt-2 text-sm text-gray-400">
                  Fig. 3. Labeled PCB model
                </figcaption>
              </figure>
            </div>
          </section>
        </article>

        <Sidebar />
      </div>
    </main>
  );
}