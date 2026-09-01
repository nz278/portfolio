import Link from "next/link";
import Sidebar from "../../components/Sidebar";

export default function TuringSimulationsPage() {
  return (
    <main className="min-h-screen bg-[#111111] px-6 py-10 font-mono text-[#e8e8e8]">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,640px)_220px]">
        <article className="max-w-[640px]">
          <Link href="/" className="text-[#00ff99] hover:underline">
            ← Back home
          </Link>

          <p className="mt-8 text-[#00ff99]">
            nicole@portfolio:~/projects/turing-simulations$ cat README.md
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            Turing Pattern Simulations
          </h1>

          <p className="mt-4 text-gray-300">
            Extended Fourier and spectral analysis tools for simulating morphogenesis 
            patterns and integrated real-time interactive hardware visualization.
          </p>

          <p className="mt-6 text-sm text-[#ffb000]">
            Git · UART · C++
          </p>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">Overview</h2>

            <div className="mt-3 space-y-6 text-gray-300">
              <p>
              In 1952, Alan Turing published in <em>Philosophical Transactions</em> "The 
              Chemical Basis of Morphogenesis", proposing a reaction-diffusion model for the 
              spotaneous organization of a field of homogenous cells. Amplification of small, 
              random fluctuations caused by local activation and long-range inhibition could 
              cause complex spatial patterns to emerge, later termed Turing patterns.
              </p>

              <p>
              At the Morsut lab, I focused on applying these principles of reaction-diffusion
              to engineer multicellular circuits by programming how individual stem cells communicate.
              The architecture we used deviated from conventional architectures in that activation
              was facilitated via juxtacrine rather than paracrine. In other words, instead of 
              a short-range diffusible activator, activation propagation depended on neighboring 
              cell-to-cell interactions, making the system more discrete and reducing the number
              of continuous parameters that must be tuned in order to achieve stable patterns.
              </p>

              <figure>
                <img
                  src="/turing-patterns/regimes.png"
                  alt="Periodic Turing pattern example (Swedland, 2026) "
                  className="w-full rounded-lg border border-[#333333]"
                />

                <figcaption className="mt-2 text-sm text-gray-400">
                  Fig. 1. Periodic Turing pattern example (Swedlund, 2026) 
                </figcaption>
              </figure>

            </div>
          </section>



          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">Implementation</h2>

            <div className="mt-3 space-y-6 text-gray-300">
              <p>
                Building off the existing codebase, I expanded the simulation and analysis
                framework to better characterize the dynamics of the JAPI circuit. The existing
                model simulates a two-dimensional field of cells whose states evolve according
                to local activation and inhibition. Initially, the termination condition was a
                fixed number of steps, but this could result in early termination before 
                convergence, or otherwise a delayed termination that becomes very inefficient 
                when running large batches of simulations. I tracked both mean and maximum 
                change in cell states between successive timestamps, and found that while max
                per-cell change could remain elevated due to slow drift from continuous stochastic
                nucleation, mean per-cell change provided a good indication of global convergence, 
                which justified a new termination condition. 
              </p>

              <figure>
                <img
                  src="/turing-patterns/termination-metrics.png"
                  alt="Maximum and mean per-cell change over time with log scaling"
                  className="w-full rounded-lg border border-[#333333]"
                />

                <figcaption className="mt-2 text-sm text-gray-400">
                  Fig. 2. Maximum and mean per-cell change over time with log scaling
                </figcaption>
              </figure>

              <p>
                From there, I combined spatial FFT and autocorrelation analysis tools
                to form a cohesive quantitative pipeline. A major focus of my work was 
                developing a way to quantitively characterize patterns that had previously 
                been distinguished largely by their appearance. Regimes  were manipulated via 
                the inhibitor production rate variable. Spatial FFT and autocorrelation 
                analysis provided information on wavelength, periodicity, and characteristic 
                length, but still could not completely describe the geometry of the patterns.  
                Thus, I applied a binary mask to the cell field and developed a second set of 
                metrics.
              </p>

              <figure className="w-full md:w-3/4">
                <img
                  src="/turing-patterns/turing-fft-autocorrelation.png"
                  alt="Turing spatial FFT and autocorrelation analysis"
                  className="w-full rounded-lg border border-[#333333]"
                />

                <figcaption className="mt-2 text-sm text-gray-400">
                  Fig. 3. Turing spatial FFT and autocorrelation analysis
                </figcaption>
              </figure>

              <p>
                To convert the continuous activation field into a discrete, digital one,
                I explored both fixed and dynamic thresholds selected using Otsu's method, 
                then filtered smaller components to account for nucleation noise. From 
                the resulting binary field, I measured the fraction of activated cells, 
                number of connected domains, average domain size, as well as mean and 
                standard deviation of nearest-neighbor distance between domains. Dynamic
                Otsu thresholding tends to better account for the variation in strength of 
                activation across changes in inhibitor production rate, and was thus used
                to produce the binary masks seen in Fig. 4. Provided below is also an example 
                of how FFT and autocorrelation changes as the regime moves from Turing to 
                irregular.
              </p>

              <figure className="w-full">
                <img
                  src="/turing-patterns/turing-irregular-fields.png"
                  alt="Metric variation from Turing to irregular regime"
                  className="w-full rounded-lg border border-[#333333]"
                />

                <figcaption className="mt-2 text-sm text-gray-400">
                  Fig. 4. Activation fields and binary masks from Turing to irregular regime
                </figcaption>
              </figure>

              <figure className="w-full md:w-3/4">
                <img
                  src="/turing-patterns/turing-irregular-fft-autocorrelation.png"
                  alt="Metric variation from Turing to irregular regime"
                  className="w-full rounded-lg border border-[#333333]"
                />

                <figcaption className="mt-2 text-sm text-gray-400">
                  Fig. 5. Metric variation from Turing to irregular regime
                </figcaption>
              </figure>

              <p>
                The boundary between Turing and irregular patterns is significant
                because it identifies the reliable operating range of a gene circuit. In stem
                cell engineering, controlling cell organization requires predictability and 
                room for error. Using metrics from my analysis can predict the regularity of 
                a pattern. For example, from the first to last simulation of the sweep, 
                mean nearest-neighbor distance increased from approximately 9.94 to 39.79 
                cell units, while standard deviation increased from 0.72 to 22.25. 
              </p>

            </div>
          </section>
        </article>

        <Sidebar />
      </div>
    </main>
  );
}