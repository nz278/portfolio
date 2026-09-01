import Link from "next/link";
import Sidebar from "../../components/Sidebar";

export default function PulseOximeterPage() {
  return (
    <main className="min-h-screen bg-[#111111] px-6 py-10 font-mono text-[#e8e8e8]">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,640px)_220px]">
        <article className="max-w-[640px]">
          <Link href="/" className="text-[#00ff99] hover:underline">
            ← Back home
          </Link>

          <p className="mt-8 text-[#00ff99]">
            nicole@portfolio:~/projects/pulse-oximeter$ cat README.md
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            Wearable Sleeve Pulse Oximeter
          </h1>

          <p className="mt-4 text-gray-300">
            Prototyped a wearable sleeve pulse oximeter by integrating
            electronics into a custom textile for continuous health monitoring.
          </p>

          <p className="mt-6 text-sm text-[#ffb000]">
            Arduino · E-textiles · UART
          </p>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">Overview</h2>

            <p className="mt-3 text-gray-300">
              As my final project for the MIT BWSI E-Textiles and Wearable
              Technology program, my partner and I created a prototype of a
              sleeve pulse oximeter from scratch. Many respiratory and heart
              diseases can cause low blood oxygen levels, and acute events such
              as stroke, heart attack, and syncope can also be detected through
              changes in oxygen saturation and pulse rate. Vulnerable
              populations, including the elderly and individuals with chronic
              disease, may benefit from accessible devices that can provide
              continuous monitoring of these health metrics.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">
              Design and Implementation
            </h2>

            <div className="mt-3 space-y-6 text-gray-300">
              <p>
                Pulse oximetry applies photoplethysmography (PPG) to estimate
                the ratio of oxygenated hemoglobin in the blood. For our
                project, we used the SparkFun MAX30101/32664 sensor. A haptic
                motor was included to alert users if their oxygen saturation
                dropped to a dangerous level, typically defined as below 90%,
                and an Adafruit Bluetooth module was used to transmit health
                information in real time via UART.
              </p>

              <figure className="w-full md:w-3/4">
                <img
                  src="/pulse-oximeter/sleeve-pattern.png"
                  alt="CAD sleeve pattern with seam allowances"
                  className="w-full rounded-lg border border-[#333333]"
                />

                <figcaption className="mt-2 text-sm text-gray-400">
                  Fig. 1. CAD sleeve pattern with seam allowances
                </figcaption>
              </figure>

              <p>
                For the physical sleeve, we decided on a three-layer single
                jersey design, with components sewn into the middle layer using
                conductive thread and further secured with interfacing to avoid
                shorting caused by fabric elasticity. Additional pockets were
                used to contain the sensor, haptic motor, and battery pack. To
                create our pattern, we used circumference measurements taken
                from my wrist and upper forearm, then added half an inch of seam
                allowance, since the flexibility of the material would still
                ensure a snug fit. The two outer layers helped preserve the
                structure, and raw fabric edges were sealed with bias tape.
              </p>

              <figure className="w-full md:w-3/4">
                <video
                  controls
                  preload="metadata"
                  className="w-full rounded-lg border border-[#333333]"
                >
                  <source
                    src="/pulse-oximeter/sleeve-pulse-oximeter-demo.mp4"
                    type="video/mp4"
                  />

                  Your browser does not support the video tag.
                </video>

                <figcaption className="mt-2 text-sm text-gray-400">
                  Video 1. Demonstration of final prototype
                </figcaption>
              </figure>

              <p>
                A GitHub repository containing the code for this project can be
                found{" "}
                <a
                  href="https://github.com/nz278/sleeve-pulse-oximeter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ff99] hover:underline"
                >
                  here
                </a>
                . A few preliminary Arduino sketches were included to test each
                subsystem, including the infrared sensor, Bluetooth module, and
                haptic motor. Future extensions could include creating an iOS
                application to receive and track health metrics over extended
                periods and enabling the device to contact emergency services
                if an emergency were detected.
              </p>
            </div>
          </section>
        </article>

        <Sidebar />
      </div>
    </main>
  );
}