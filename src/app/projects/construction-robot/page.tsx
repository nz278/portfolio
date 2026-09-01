import Link from "next/link";
import Sidebar from "../../components/Sidebar";

export default function ConstructionRobotPage() {
  return (
    <main className="min-h-screen bg-[#111111] px-6 py-10 font-mono text-[#e8e8e8]">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,640px)_220px]">
        <article className="max-w-[640px]">
          <Link href="/" className="text-[#00ff99] hover:underline">
            ← Back home
          </Link>

          <p className="mt-8 text-[#00ff99]">
            nicole@portfolio:~/projects/construction-robot$ cat README.md
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            Autonomous Construction Robot
          </h1>

          <p className="mt-4 text-gray-300">
            Built a mechanical chassis with 3D-printed mounts and created a
            Python library for controlling motor servos via RS485 serial
            communication.
          </p>

          <p className="mt-6 text-sm text-[#ffb000]">
            Python · Onshape · Raspberry Pi
          </p>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">Overview</h2>

            <p className="mt-3 text-gray-300">
              The purpose of this project was to build an autonomous mobile
              robot designed as a platform for future construction and
              material-handling tasks. All development was completed as part of
              my undergraduate research at the Napp Lab within Cornell
              University&apos;s Computer Systems Laboratory.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">Mechanical</h2>

            <div className="mt-3 space-y-6 text-gray-300">
              <p>
                The physical robot consists of a custom chassis built using a
                combination of 3D-printed components and existing hardware. For
                the main frame, I joined four aluminum double T-slot rails, cut
                to size using a miter saw, with corner brackets. Open-source
                STEP files for mounting DDSM115 motors were available from
                Waveshare and were modified slightly in Onshape to fit M3
                screws. These were printed on a Prusa MK4S using generic PLA
                filament.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">Electrical</h2>

            <div className="mt-3 space-y-6 text-gray-300">
              <p>
                For the initial prototype, I mounted a terminal strip to the
                main frame that distributes power in parallel from a five-cell
                LiPo battery to all electrical components, since the motors run
                on 18V DC. A solderless breadboard was also used as a temporary
                wiring harness for the RS485 communication bus. A USB-to-RS485
                adapter enables the main Raspberry Pi 5 controller to send
                commands to and receive feedback from all servo motors.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">Software</h2>

            <div className="mt-3 space-y-6 text-gray-300">
              <p>
                The software stack centers around a custom Python{" "}
                <a
                  href="https://github.com/nz278/ddsm115-driver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ff99] hover:underline"
                >
                  library
                </a>{" "}
                I developed to communicate with the DDSM115 servo motors over
                an RS485 serial bus. The library separates serial transport,
                packet formatting, and motor commands into modules. Following
                the available Waveshare communication protocol documentation,
                it allows the user to set motor IDs, switch between velocity,
                current, and position modes, send drive commands, brake, and
                query feedback from individual motors. I also added support for
                coordinating multiple motors through a shared controller
                interface, which simplifies testing and provides a reusable
                foundation for higher-level autonomous control.
              </p>

              <figure className="w-full md:w-3/4">
                <video
                  controls
                  preload="metadata"
                  className="w-full rounded-lg border border-[#333333]"
                >
                  <source
                    src="/construction-robot/motor-demo.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <figcaption className="mt-2 text-sm text-gray-400">
                  Video 1. Individual motor and shared controller demo
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