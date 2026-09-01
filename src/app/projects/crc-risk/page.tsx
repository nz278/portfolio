import Link from "next/link";
import Sidebar from "../../components/Sidebar";

export default function CRCRiskPage() {
  return (
    <main className="min-h-screen bg-[#111111] px-6 py-10 font-mono text-[#e8e8e8]">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,640px)_220px]">
        <article className="max-w-[640px]">
          <Link href="/" className="text-[#00ff99] hover:underline">
            ← Back home
          </Link>

          <p className="mt-8 text-[#00ff99]">
            nicole@portfolio:~/projects/crc-risk$ cat README.md
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            Colorectal Cancer Risk Prediction
          </h1>

          <p className="mt-4 text-gray-300">
            Developed supervised machine learning models with feature selection
            techniques to predict colorectal cancer risk using multiomic data.
          </p>

          <p className="mt-6 text-sm text-[#ffb000]">
            Python · Neural Networks · Data Analysis
          </p>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">Overview</h2>

            <p className="mt-3 text-gray-300">
              Throughout my internship at the Dey Lab at the Fred Hutchinson
              Cancer Center, I was primarily involved in analyzing multiomic
              data acquired from a sample of Alaska Native people with the goal
              of predicting colorectal cancer (CRC) risk. This population has
              one of the highest rates of CRC in the world due to later-stage
              diagnoses and limited opportunities for preventative treatment
              caused by reduced access to frequent screening. As a result,
              data-driven predictive models were seen as a valuable alternative
              diagnostic approach.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">
              Data Preprocessing
            </h2>

            <div className="mt-3 space-y-6 text-gray-300">
              <p>
                Batch normalization and imputation were used during
                preprocessing to account for variability and missing values. In
                metabolomics, data is usually collected in batches through
                liquid chromatography-mass spectrometry (LC-MS). Since each
                batch may introduce variability, dividing each batch by the
                median for a particular metabolite makes the batches more
                comparable. Null data entries were replaced with the minimum
                observed metabolite value across all batches.
              </p>

              <p>
                A major obstacle was that the dataset contained information on
                the concentrations of 1,224 different metabolites from only 84
                patient samples, meaning dimensionality was very high relative
                to sample size. In addition to the concentrations of different
                metabolites in each participant&apos;s stool sample, clinical
                data such as age, sex, FIT, and Cologuard results were also
                provided. FIT detects hidden blood in stool, while Cologuard
                combines this with DNA analysis for mutations or epigenetic
                markers from precancerous polyps.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">
              Support Vector Machine
            </h2>

            <div className="mt-3 space-y-6 text-gray-300">
              <p>
                One of the first control models we developed aimed to predict
                CRC risk using only metabolite data and achieved a test accuracy
                of around 58%. Since SVMs use a kernel to implicitly project
                data into a higher-dimensional feature space, a dataset of 1,224
                metabolites was highly prone to overfitting. I applied
                dimensionality reduction techniques such as principal component
                analysis (PCA) and five-fold cross-validation in an attempt to
                improve performance. However, the model consistently reported a
                much higher validation accuracy, which indicated that other
                metrics should be introduced to corroborate the existing
                metabolomic data.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">
              Multilayer Perceptron Neural Network
            </h2>

            <div className="mt-3 space-y-6 text-gray-300">
              <p>
                The layered architecture of a neural network was well suited to
                our goal of creating a single predictive framework for diverse
                data types. In our model, we used an Adam optimizer to adjust
                gradients and learning rates for each parameter and a ReLU
                activation function to capture more complex, nonlinear
                relationships between variables. I also applied regularization
                techniques such as dropout and L2 regularization to prevent
                overreliance on specific neurons and overfitting to noise. After
                running ten independent cycles with five-fold
                cross-validation, we achieved an average accuracy of around
                59.3%, while integrating clinical data increased this result to
                63%.
              </p>

              <p>
                To incorporate the four new features into the neural network,
                several adjustments were made to the preprocessing pipeline and
                model structure. The categorical features were first converted
                into binary vectors using one-hot encoding, after which both age
                and metabolomic data were standardized. Interestingly, age and
                FIT alone yielded the highest accuracy of 72%, which made it
                clear that noise from using all 1,224 metabolites was
                overpowering the cleaner signal from the clinical data. As a
                result, it became necessary to select a smaller number of
                informative metabolites and evaluate them separately.
              </p>

              <figure>
                <img
                  src="/crc-risk/nn-performance-metrics.png"
                  alt="Performance metrics of neural network over epochs"
                  className="w-full rounded-lg border border-[#333333]"
                />

                <figcaption className="mt-2 text-sm text-gray-400">
                  Fig. 1. Performance metrics of neural network over epochs
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">
              Feature Selection and Model Testing
            </h2>

            <div className="mt-3 space-y-6 text-gray-300">
              <p>
                The first method we attempted involved univariate feature
                selection through an ANOVA F-test, which evaluated each
                metabolite independently against CRC risk. The top twenty
                metabolites were then used in our MLP neural network and yielded
                an accuracy roughly equivalent to the previous result. We then
                determined that recursive feature elimination (RFE) might be
                more effective, as bootstrapping and subsampling would give a
                fuller picture of the interactions between metabolites when
                predicting CRC risk.
              </p>

              <p>
                For our final model, since twenty was a relatively arbitrary
                starting number, I ran RFE with different numbers of
                metabolites and determined that performance peaked at around ten
                features, with an accuracy of 80.4%. Using more than ten
                increased the risk of overfitting and feature redundancy,
                especially because many metabolites are biologically
                correlated.
              </p>

              <p>
                It was also noted early in the project that there was a
                meaningful class imbalance in the dataset, with low-risk samples
                (N = 48) outnumbering high-risk samples (N = 33). Three
                additional confirmed CRC samples were excluded because they
                would provide limited value for risk-classification training. I
                then applied SMOTE in an attempt to balance the training-data
                distribution. However, because this technique generates
                synthetic samples for a minority group by interpolating between
                existing samples, it was prone to amplifying the existing noise
                in our high-dimensional dataset.
              </p>

              <p>
                These uncertainties made it necessary to use permutation testing
                to confirm that the observed accuracy reflected real
                relationships. By randomly assigning risk labels to data points,
                we found that the distribution of accuracies from permuted
                labels was consistently lower than that of the real labels, with
                minimal overlap across varying numbers of top metabolites.
                Additionally, at ten features, the difference in performance was
                statistically significant. The box-and-whisker plots below are
                slightly staggered.
              </p>

              <figure className="w-3/4">
                <img
                  src="/crc-risk/permutation-testing.png"
                  alt="Real-label versus permuted-label accuracy"
                  className="w-full rounded-lg border border-[#333333]"
                />

                <figcaption className="mt-2 text-sm text-gray-400">
                  Fig. 2. Real-label versus permuted-label accuracy
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl text-[#ffb000]">
              Bacterial and Sequencing Analysis
            </h2>

            <div className="mt-3 space-y-6 text-gray-300">
              <p>
                The same process was carried out using data on the
                concentrations of bacterial species in the samples. Summaries of
                my literature reviews can be found for both the{" "}
                <a
                  href="/crc-risk/top-bacterial-species-lit-review.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ff99] hover:underline"
                >
                  top bacterial species
                </a>{" "}
                and the{" "}
                <a
                  href="/crc-risk/top-metabolites-lit-review.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ff99] hover:underline"
                >
                  top metabolites
                </a>
                . Notable biomarkers include <em>Bacteroides</em> species,
                indolelactate (ILA), and secondary bile acids.
              </p>

              <figure>
                <img
                  src="/crc-risk/bacteria-heatmap.png"
                  alt="Heatmap of Pearson coefficients between top metabolites and bacterial species"
                  className="w-full rounded-lg border border-[#333333]"
                />

                <figcaption className="mt-2 text-sm text-gray-400">
                  Fig. 3. Heatmap of Pearson coefficients between top
                  metabolites and bacterial species
                </figcaption>
              </figure>

              <p>
                The last task I was involved with at the Dey Lab was analyzing
                sequencing data using the existing model framework. FASTQ files
                stored both the raw DNA sequences obtained from stool samples
                and their corresponding quality scores. I then used k-mer
                frequency analysis to process the files and found that k = 6
                yielded optimal results. In a biological context, this value may
                better capture codon information. To normalize the data, the
                relative frequency of each k-mer was used. Applying RFE again to
                select the most informative subsequences resulted in an accuracy
                of 75% using sequencing data alone.
              </p>

              <p>
                Finally, I computed the area under the curve (AUC) for the ROC
                curve of each metabolite and grouped the results by biological
                subpathway, such as fatty acid metabolism and the TCA cycle, and
                by superpathway, such as amino acids, lipids, and peptides. Work
                is still being done to visualize patterns in k-mer frequency
                distributions across samples and integrate sequencing data and
                pathway analysis into the final model. However, the initial
                findings demonstrate the potential of this approach.
                Pathway-level predictive performance could benefit
                significantly from regularization so that bias from larger
                pathways does not dominate the results.
              </p>

              <figure className="w-3/4">
                <img
                  src="/crc-risk/pathway-analysis.png"
                  alt="Superpathway AUC distribution"
                  className="w-full rounded-lg border border-[#333333]"
                />

                <figcaption className="mt-2 text-sm text-gray-400">
                  Fig. 4. Superpathway AUC distribution
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