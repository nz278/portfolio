import Link from "next/link";
import Sidebar from "../../components/Sidebar";

export default function DoorMonitorPage() {
  return (
    <main className="min-h-screen bg-[#111111] px-6 py-10 font-mono text-[#e8e8e8]">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,640px)_220px]">
        <article className="max-w-[640px]">
          <Link href="/" className="text-[#00ff99] hover:underline">
            ← Back home
          </Link>

          <p className="mt-8 text-[#00ff99]">
            nicole@portfolio:~/projects/door-monitor$ cat README.md
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            Automatic Door Monitoring System
          </h1>

          <p className="mt-4 text-gray-300">
            Created an automatic door monitoring system using a custom
            single-cycle RISC-V processor on a Cyclone V FPGA.
          </p>

          <p className="mt-6 text-sm text-[#ffb000]">
            FPGA · Verilog · RISC-V
          </p>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">Overview</h2>

            <p className="mt-3 text-gray-300">
              For my ECE 2300 Digital Logic and Computer Organization final
              course project, my partner and I developed an automatic door
              monitoring system using a custom single-cycle RISC-V processor
              implemented on an Intel Cyclone V FPGA. The processor communicated
              with a LiDAR sensor through a memory-mapped SPI controller. When
              an object entered the defined range, an audible piezo buzzer alert
              would be generated, and a count would be tallied on the
              FPGA&apos;s seven-segment displays.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">
              Design and Implementation
            </h2>

            <div className="mt-3 space-y-6 text-gray-300">
              <p>
                In addition to the processor datapath and control logic, my
                partner and I developed several memory-mapped peripherals in
                Verilog, including a seven-segment display driver, 32-bit ALU,
                SPI controller, and FSM-based multi-note player. In total, this
                comprised over fifty hardware modules and five thousand lines
                of both gate-level and register-transfer-level modeling,
                verified through hundreds of directed and randomized test
                cases.
              </p>

              <figure>
                <img
                  src="/door-monitor/block-diagram.png"
                  alt="Block diagram of the automatic door monitoring system"
                  className="w-full rounded-lg border border-[#333333]"
                />

                <figcaption className="mt-2 text-sm text-gray-400">
                  Fig. 1. Block diagram of the automatic door monitoring system
                </figcaption>
              </figure>

              <p>
                On the software side, we wrote eight RISC-V assembly programs
                totaling over a hundred instructions to interface with the
                memory-mapped peripherals and test processor functionality. The
                final application repeatedly requests distance measurements
                from the LiDAR sensor through the SPI controller and compares
                each reading against a threshold. When an object enters the
                monitored range, the FSM-based music player generates an
                audible alert through the piezo buzzer, while a running person
                count is updated on the seven-segment displays. Potential future
                extensions could include a configurable room occupancy limit,
                multiple operating modes such as day and night,
                access-restricted alarm controls, and bidirectional people
                counting using a second distance sensor.
              </p>

              <figure className="w-full md:w-3/4">
                <video
                  controls
                  preload="metadata"
                  className="w-full rounded-lg border border-[#333333]"
                >
                  <source
                    src="/door-monitor/door-monitor-demo.mp4"
                    type="video/mp4"
                  />

                  Your browser does not support the video tag.
                </video>

                <figcaption className="mt-2 text-sm text-gray-400">
                  Video 1. Object detection and piezo alert demo
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