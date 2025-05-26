const focs3Data = [
  {
    "question": "Which type of variable is most appropriate for categorizing blood groups?",
    "options": [
      "A) Nominal categorical variable",
      "B) Ordinal categorical variable",
      "C) Quantitative interval variable",
      "D) Qualitative interval variable",
      "E) None of the above"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Blood groups are nominal categorical variables as they represent distinct categories without a specific order.",
      "Incorrect: Ordinal variables have a natural order, which is not applicable to blood groups.",
      "Incorrect: Quantitative variables are numerical and do not apply to blood groups.",
      "Incorrect: There is no such thing as a qualitative interval variable.",
      "Incorrect: The categorization of blood groups fits the nominal variable type."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "What does the interquartile range (IQR) measure?",
    "options": [
      "A) The average of all observations",
      "B) The distance between the minimum and maximum values",
      "C) The spread of the middle 50% of data",
      "D) The sum of all deviations from the mean",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The average is calculated using the mean, not the IQR.",
      "Incorrect: The range captures the difference between the maximum and minimum values, not the IQR.",
      "Correct: The IQR measures the spread of the middle 50% of data between the first and third quartiles.",
      "Incorrect: Deviations from the mean relate to variance and standard deviation calculations.",
      "Incorrect: The IQR specifically quantifies central data spread."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "Which graph type is most suitable for presenting the distribution of categorical variables?",
    "options": [
      "A) Histogram",
      "B) Scatterplot",
      "C) Boxplot",
      "D) Bar chart",
      "E) None of the above"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Histograms are used for interval-scale variables, not categorical ones.",
      "Incorrect: Scatterplots are suitable for showing relationships between numerical data.",
      "Incorrect: Boxplots are ideal for presenting spread in interval-scale data.",
      "Correct: Bar charts are appropriate for visualizing categorical variable distributions.",
      "Incorrect: Bar charts are the specific graph type required here."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "How does the standard deviation differ from the interquartile range (IQR)?",
    "options": [
      "A) Standard deviation measures variability using squared deviations from the mean.",
      "B) Standard deviation captures the spread of the middle 50% of the data.",
      "C) Standard deviation excludes extreme values in the data set.",
      "D) Standard deviation is the same as the IQR.",
      "E) None of the above"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Standard deviation measures variability based on squared deviations from the mean.",
      "Incorrect: The IQR measures the spread of the middle 50%, not the standard deviation.",
      "Incorrect: Extreme values affect the calculation of standard deviation.",
      "Incorrect: Standard deviation and IQR are distinct measures of spread.",
      "Incorrect: Standard deviation is specifically defined by its formula involving the mean."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "What feature of the Normal distribution is essential for hypothesis testing?",
    "options": [
      "A) Its symmetric bell-shaped curve",
      "B) Its ability to calculate probabilities for discrete variables",
      "C) Its central role in statistical techniques like confidence intervals and hypothesis tests",
      "D) Its application to categorical data analysis",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Symmetry is a property but not its role in hypothesis testing.",
      "Incorrect: The Normal distribution deals with continuous variables, not discrete ones.",
      "Correct: The Normal distribution is central to techniques like confidence intervals and hypothesis testing.",
      "Incorrect: Categorical data analysis typically uses other distributions.",
      "Incorrect: The primary focus is its application to continuous data techniques."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "What measure is most appropriate for assessing the central tendency of a positively skewed distribution?",
    "options": [
      "A) Mean",
      "B) Median",
      "C) Mode",
      "D) Interquartile Range",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The mean is affected by outliers in a skewed distribution.",
      "Correct: The median is the best measure of central tendency for a positively skewed distribution as it is less affected by outliers.",
      "Incorrect: The mode is not always a robust measure of central tendency, especially in skewed distributions.",
      "Incorrect: The interquartile range measures spread, not central tendency.",
      "Incorrect: The median is the most suitable measure in this case."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "Which variable is an example of an ordinal categorical variable?",
    "options": [
      "A) Eye color (blue, brown, green)",
      "B) Pain severity (mild, moderate, severe)",
      "C) Blood type (A, B, AB, O)",
      "D) Age in years",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Eye color is a nominal categorical variable as it has no inherent order.",
      "Correct: Pain severity is ordinal because it has a natural order (mild < moderate < severe).",
      "Incorrect: Blood type is nominal as it represents categories without a specific order.",
      "Incorrect: Age in years is a quantitative interval variable.",
      "Incorrect: Pain severity fits the definition of an ordinal categorical variable."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "In the context of the Normal distribution, approximately how much of the data falls within one standard deviation from the mean?",
    "options": [
      "A) 50%",
      "B) 68%",
      "C) 75%",
      "D) 95%",
      "E) 99.7%"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: 50% of the data falls on one side of the mean, not within one standard deviation.",
      "Correct: Approximately 68% of the data falls within one standard deviation from the mean in a Normal distribution.",
      "Incorrect: 75% is not the correct percentage for this range.",
      "Incorrect: 95% of the data falls within two standard deviations, not one.",
      "Incorrect: 99.7% of the data falls within three standard deviations, not one."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "Which statistical measure is most influenced by extreme values in a dataset?",
    "options": [
      "A) Mean",
      "B) Median",
      "C) Mode",
      "D) Interquartile Range",
      "E) None of the above"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: The mean is highly sensitive to extreme values as it involves summing all values and dividing by their count.",
      "Incorrect: The median is resistant to extreme values as it depends on the middle value(s).",
      "Incorrect: The mode is not influenced by extreme values since it only considers the most frequent value.",
      "Incorrect: The interquartile range is robust to extreme values as it focuses on the middle 50% of the data.",
      "Incorrect: The mean is specifically sensitive to extreme values."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "What is the primary reason the Normal distribution is essential in hypothesis testing?",
    "options": [
      "A) It applies to all categorical data analyses.",
      "B) It is used to calculate probabilities for any type of data.",
      "C) Many statistical tests assume data follows a Normal distribution.",
      "D) It has equal mean, median, and mode for all datasets.",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The Normal distribution is not applicable to all categorical data.",
      "Incorrect: While it calculates probabilities, this is not the reason it is essential for hypothesis testing.",
      "Correct: Many statistical techniques assume data follows a Normal distribution, making it vital for hypothesis testing.",
      "Incorrect: The equal mean, median, and mode property only holds for perfectly Normal distributions, not all datasets.",
      "Incorrect: The primary importance lies in its role in statistical assumptions for hypothesis testing."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "Which statistical test is most appropriate for comparing means between two independent groups?",
    "options": [
      "A) Chi-square test",
      "B) Independent t-test",
      "C) Mann-Whitney U test",
      "D) Paired t-test",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The Chi-square test is used for categorical data, not for comparing means.",
      "Correct: The independent t-test is used to compare the means of two independent groups when data is normally distributed.",
      "Incorrect: Mann-Whitney U test is used for non-parametric data, not normally distributed data.",
      "Incorrect: Paired t-test is used for comparing means within the same group at two different times.",
      "Incorrect: The independent t-test specifically applies to this scenario."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "What does a p-value of less than 0.05 indicate in hypothesis testing?",
    "options": [
      "A) The null hypothesis is confirmed.",
      "B) The alternative hypothesis should be rejected.",
      "C) There is strong evidence against the null hypothesis.",
      "D) The result is not statistically significant.",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: A p-value below 0.05 does not confirm the null hypothesis.",
      "Incorrect: The alternative hypothesis is supported, not rejected, when the p-value is below 0.05.",
      "Correct: A p-value below 0.05 indicates strong evidence against the null hypothesis, leading to its rejection.",
      "Incorrect: A p-value below 0.05 indicates statistical significance.",
      "Incorrect: This scenario specifically provides evidence against the null hypothesis."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "When should a histogram be used instead of a bar chart?",
    "options": [
      "A) To visualize categorical data",
      "B) To show the frequency distribution of interval scale data",
      "C) To compare two groups using relative frequencies",
      "D) To illustrate proportions in nominal variables",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Histograms are unsuitable for visualizing categorical data.",
      "Correct: Histograms are ideal for displaying the frequency distribution of interval scale data.",
      "Incorrect: Bar charts, not histograms, are used to compare relative frequencies between groups.",
      "Incorrect: Proportions in nominal variables are better shown using bar charts.",
      "Incorrect: Histograms specifically serve to visualize interval scale data distributions."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "What is the main advantage of using the interquartile range (IQR) over the range as a measure of spread?",
    "options": [
      "A) It accounts for the entire dataset.",
      "B) It is unaffected by extreme values.",
      "C) It provides a measure of central tendency.",
      "D) It requires a perfectly Normal distribution.",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The IQR does not account for the entire dataset, only the middle 50%.",
      "Correct: The IQR is robust to extreme values, making it a reliable measure of spread.",
      "Incorrect: The IQR measures spread, not central tendency.",
      "Incorrect: The IQR can be used for skewed distributions, not just Normal ones.",
      "Incorrect: The IQR specifically measures spread with minimal influence from outliers."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "Which key feature distinguishes nominal variables from ordinal variables?",
    "options": [
      "A) Nominal variables have a natural order.",
      "B) Ordinal variables cannot be categorized.",
      "C) Nominal variables lack a meaningful sequence or ranking.",
      "D) Ordinal variables include interval scale data.",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Nominal variables do not have a natural order; ordinal variables do.",
      "Incorrect: Ordinal variables can be categorized and have a ranking.",
      "Correct: Nominal variables are categorized without any meaningful sequence or ranking.",
      "Incorrect: Ordinal variables do not include interval scale data.",
      "Incorrect: The distinction lies in the lack of meaningful order for nominal variables."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "Which of the following is a key assumption of the Normal distribution?",
    "options": [
      "A) The mean, median, and mode are all different.",
      "B) Data values are distributed asymmetrically.",
      "C) The distribution is fully described by its mean and standard deviation.",
      "D) The interquartile range equals the standard deviation.",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The mean, median, and mode are the same in a Normal distribution.",
      "Incorrect: The Normal distribution is symmetric, not asymmetric.",
      "Correct: The Normal distribution is fully described by its mean and standard deviation, which dictate its shape.",
      "Incorrect: The interquartile range and standard deviation are not equal in a Normal distribution.",
      "Incorrect: The correct assumption is that the distribution is described by the mean and standard deviation."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "When presenting interval scale data, which graphical method is most effective for identifying outliers?",
    "options": [
      "A) Histogram",
      "B) Bar chart",
      "C) Boxplot",
      "D) Pie chart",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Histograms show frequency distributions but do not directly identify outliers.",
      "Incorrect: Bar charts are used for categorical data, not for detecting outliers.",
      "Correct: Boxplots are specifically designed to visualize the spread of data and identify outliers.",
      "Incorrect: Pie charts are not appropriate for interval scale data.",
      "Incorrect: Boxplots are the correct tool for identifying outliers."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "What does the 95% confidence interval represent in a statistical analysis?",
    "options": [
      "A) The range that contains 95% of the population data values.",
      "B) The probability that the true parameter lies within the range.",
      "C) The range within which the sample mean lies 95% of the time.",
      "D) The range within which the true population parameter lies with 95% confidence.",
      "E) None of the above"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: The confidence interval does not directly refer to the range of population data.",
      "Incorrect: Confidence intervals are not probabilities of containing the true parameter but rather confidence in repeated sampling.",
      "Incorrect: Confidence intervals are not about the sample mean but the population parameter.",
      "Correct: A 95% confidence interval indicates the range within which the true population parameter is expected to lie in 95% of repeated samples.",
      "Incorrect: The correct interpretation relates to the true population parameter."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "Which statistical measure provides a relative measure of dispersion in a dataset?",
    "options": [
      "A) Range",
      "B) Standard deviation",
      "C) Interquartile range (IQR)",
      "D) Coefficient of variation",
      "E) None of the above"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: The range is an absolute measure, not a relative one.",
      "Incorrect: Standard deviation is also an absolute measure of dispersion.",
      "Incorrect: The interquartile range measures spread but does not provide a relative comparison.",
      "Correct: The coefficient of variation is a relative measure of dispersion, as it relates the standard deviation to the mean.",
      "Incorrect: The coefficient of variation is the correct relative measure."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "How is probability represented in the context of the Normal distribution?",
    "options": [
      "A) By calculating the range of data values.",
      "B) As the proportion of observations within a specified area under the curve.",
      "C) Using the standard deviation only.",
      "D) By dividing the interquartile range by the mean.",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Probability in the Normal distribution is not calculated using raw data ranges.",
      "Correct: Probability corresponds to the proportion of data within a specific area under the Normal curve, defined by limits.",
      "Incorrect: While standard deviation plays a role, probability depends on the entire distribution shape.",
      "Incorrect: The interquartile range is unrelated to the calculation of probability in this context.",
      "Incorrect: The concept of probability is tied to areas under the curve, not the other methods listed."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "Which variable is an example of a continuous interval scale variable?",
    "options": [
      "A) Gender (male/female)",
      "B) Pain severity (mild/moderate/severe)",
      "C) Age in years",
      "D) Blood group (O/A/B/AB)",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Gender is a nominal categorical variable, not interval scale.",
      "Incorrect: Pain severity is an ordinal categorical variable, not continuous.",
      "Correct: Age in years is a continuous interval scale variable measured numerically.",
      "Incorrect: Blood group is a nominal categorical variable.",
      "Incorrect: Age is the only variable that fits the definition of a continuous interval scale variable here."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "What is the primary difference between the mean and the median?",
    "options": [
      "A) The mean always equals the median in a dataset.",
      "B) The median is more affected by outliers than the mean.",
      "C) The mean accounts for all data values, while the median does not.",
      "D) The mean is always greater than the median.",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The mean equals the median only in symmetrical distributions.",
      "Incorrect: The median is resistant to outliers, unlike the mean.",
      "Correct: The mean accounts for all data values, whereas the median is based only on the middle value(s).",
      "Incorrect: The relationship between the mean and median depends on the distribution's skewness.",
      "Incorrect: The mean and median differ based on their statistical properties, with the mean using all values."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "Which property of the Normal distribution is essential for determining probabilities?",
    "options": [
      "A) Symmetry about the mode",
      "B) Bell-shaped curve",
      "C) Areas under the curve",
      "D) Equal mean, median, and mode",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Symmetry about the mode is a property but not the primary one for calculating probabilities.",
      "Incorrect: The bell shape describes the distribution but doesn't determine probabilities.",
      "Correct: Areas under the Normal curve represent probabilities, which are central to its application.",
      "Incorrect: Equal mean, median, and mode are a characteristic but unrelated to calculating probabilities.",
      "Incorrect: The defining feature for probabilities in the Normal distribution lies in the areas under the curve."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "Which statistical measure is most appropriate for summarizing skewed interval-scale data?",
    "options": [
      "A) Mean and standard deviation",
      "B) Median and interquartile range (IQR)",
      "C) Mode and standard deviation",
      "D) Range and variance",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The mean and standard deviation are appropriate for symmetrical data, not skewed data.",
      "Correct: The median and IQR are robust measures that effectively summarize skewed data.",
      "Incorrect: The mode and standard deviation are insufficient for summarizing skewed distributions.",
      "Incorrect: The range and variance are absolute measures but lack robustness in skewed datasets.",
      "Incorrect: The median and IQR are specifically better suited for summarizing skewed data."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "Which type of variable is best represented using bar charts?",
    "options": [
      "A) Interval scale variables",
      "B) Ordinal categorical variables",
      "C) Nominal categorical variables",
      "D) Continuous numerical variables",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Bar charts are not ideal for interval scale variables; histograms are better.",
      "Incorrect: Ordinal variables can be represented but are not the primary focus of bar charts.",
      "Correct: Bar charts are ideal for visualizing nominal categorical variables as they display frequency distributions.",
      "Incorrect: Continuous numerical variables are better represented using histograms or scatterplots.",
      "Incorrect: Bar charts specifically serve nominal categorical data representation."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "Which measure of spread is most appropriate for summarizing highly skewed interval-scale data?",
    "options": [
      "A) Standard deviation",
      "B) Variance",
      "C) Interquartile range (IQR)",
      "D) Range",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Standard deviation is influenced by outliers and skewness.",
      "Incorrect: Variance is also sensitive to extreme values and skewness.",
      "Correct: The interquartile range (IQR) is robust to outliers and effectively summarizes skewed data.",
      "Incorrect: The range does not provide a reliable measure for skewed data due to its sensitivity to extremes.",
      "Incorrect: The IQR is specifically suited for this purpose."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "Which statistical property distinguishes the Normal distribution from other distributions?",
    "options": [
      "A) Asymmetry around the mean",
      "B) Equal mean, median, and mode",
      "C) Uniform spread across all values",
      "D) Heavily skewed tail areas",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The Normal distribution is symmetric, not asymmetric.",
      "Correct: The Normal distribution is characterized by equal mean, median, and mode.",
      "Incorrect: Uniform spread is not a property of the Normal distribution.",
      "Incorrect: Tail areas in the Normal distribution decrease symmetrically, not skewed.",
      "Incorrect: Equal mean, median, and mode are specific to the Normal distribution."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "What is the primary limitation of using range as a measure of spread?",
    "options": [
      "A) It does not account for central tendency.",
      "B) It is unaffected by extreme values.",
      "C) It depends only on two observations.",
      "D) It requires data to be normally distributed.",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Central tendency is not directly related to measures of spread like the range.",
      "Incorrect: The range is highly sensitive to extreme values.",
      "Correct: The range depends solely on the minimum and maximum observations, which can distort its representation of spread.",
      "Incorrect: The range can be calculated for any type of distribution.",
      "Incorrect: Its limitation lies in its dependency on only two observations."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "Which concept is fundamental to calculating probabilities in the Normal distribution?",
    "options": [
      "A) Symmetry of the distribution",
      "B) Area under the curve",
      "C) Variability of the mean",
      "D) Equal tail probabilities",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: While symmetry is a key property, probabilities are specifically calculated using the area under the curve.",
      "Correct: Probabilities in the Normal distribution correspond to specific areas under the curve.",
      "Incorrect: The mean itself does not directly influence probability calculations.",
      "Incorrect: Equal tail probabilities refer to symmetry, not the method of probability calculation.",
      "Incorrect: The area under the curve is crucial for determining probabilities."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "Which measure is least affected by outliers in interval-scale data?",
    "options": [
      "A) Mean",
      "B) Standard deviation",
      "C) Interquartile range (IQR)",
      "D) Variance",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The mean is influenced by outliers as it incorporates all data values.",
      "Incorrect: Standard deviation is also sensitive to outliers due to squared deviations from the mean.",
      "Correct: The interquartile range (IQR) excludes extreme values, making it robust to outliers.",
      "Incorrect: Variance magnifies the effect of outliers through squared deviations.",
      "Incorrect: The IQR is the least affected measure in this context."
    ],
    "slideLink": "Lecture15_FOCS.pdf"
  },
  {
    "question": "What is the primary function of activated carrier molecules in metabolic pathways?",
    "options": [
      "A) To store genetic information",
      "B) To link catabolic and anabolic reactions",
      "C) To act as enzymes in chemical reactions",
      "D) To promote oxidative damage in cells",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Genetic information storage is not a function of carrier molecules.",
      "Correct: Activated carrier molecules connect catabolic and anabolic processes by transferring energy.",
      "Incorrect: Carrier molecules do not act as enzymes.",
      "Incorrect: Oxidative damage is unrelated to carrier molecule function.",
      "Incorrect: Carrier molecules specifically link energy-releasing and energy-consuming reactions."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "Which enzyme complex in oxidative phosphorylation is responsible for the final synthesis of ATP?",
    "options": [
      "A) Complex I",
      "B) Complex II",
      "C) Complex III",
      "D) Complex V",
      "E) None of the above"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Complex I transfers electrons from NADH to CoQ.",
      "Incorrect: Complex II transfers electrons from FADH2 to CoQ.",
      "Incorrect: Complex III transfers electrons from CoQ to cytochrome c.",
      "Correct: Complex V, or ATP synthase, catalyzes the final ATP synthesis step.",
      "Incorrect: ATP synthesis is specifically associated with Complex V."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "How does oxidative phosphorylation generate the proton gradient necessary for ATP synthesis?",
    "options": [
      "A) By breaking down ATP molecules",
      "B) By transferring protons across the inner mitochondrial membrane",
      "C) By reducing oxygen directly in the cytoplasm",
      "D) By synthesizing glucose molecules",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: ATP breakdown is unrelated to the proton gradient generation.",
      "Correct: Oxidative phosphorylation transfers protons across the inner mitochondrial membrane to create the gradient.",
      "Incorrect: Reduction of oxygen occurs within the electron transport chain, not the cytoplasm.",
      "Incorrect: Glucose synthesis is not involved in proton gradient formation.",
      "Incorrect: Proton transfer across the mitochondrial membrane drives ATP synthesis."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "What is the consequence of uncoupling agents disrupting the proton gradient in oxidative phosphorylation?",
    "options": [
      "A) Increased ATP synthesis",
      "B) Halting the electron transport chain",
      "C) Reduced generation of reactive oxygen species",
      "D) Loss of ATP production despite continued electron transport",
      "E) None of the above"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: ATP synthesis decreases when the proton gradient is disrupted.",
      "Incorrect: The electron transport chain continues even if uncoupled.",
      "Incorrect: Reactive oxygen species generation is not directly reduced by uncoupling.",
      "Correct: Uncouplers lead to loss of ATP production because proton gradient energy is not utilized.",
      "Incorrect: The main effect is specifically the loss of ATP production."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "What is the role of reactive oxygen species in cellular metabolism?",
    "options": [
      "A) They are harmless byproducts of oxidative phosphorylation.",
      "B) They help maintain the structure of DNA molecules.",
      "C) They function exclusively as signaling molecules.",
      "D) They can damage cellular components and contribute to ageing.",
      "E) None of the above"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Reactive oxygen species can cause significant cellular damage.",
      "Incorrect: ROS damage DNA rather than maintaining its structure.",
      "Incorrect: ROS can act as signaling molecules but are not exclusively limited to this role.",
      "Correct: ROS can damage DNA, proteins, lipids, and contribute to ageing.",
      "Incorrect: ROS effects include cellular damage, making them harmful under certain conditions."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "Which molecule is considered the primary link between catabolism and anabolism in cellular metabolism?",
    "options": [
      "A) Glucose",
      "B) Acetyl-CoA",
      "C) NADH",
      "D) ATP",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Glucose is a substrate but does not directly link catabolic and anabolic processes.",
      "Correct: Acetyl-CoA links the breakdown of nutrients (catabolism) to biosynthetic processes (anabolism).",
      "Incorrect: NADH is an electron carrier but not the primary link.",
      "Incorrect: ATP is an energy carrier but does not integrate catabolic and anabolic reactions.",
      "Incorrect: Acetyl-CoA specifically acts as the central intermediary."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "What is the primary effect of oxygen deficiency on oxidative phosphorylation?",
    "options": [
      "A) Decreased ATP production",
      "B) Increased production of reactive oxygen species",
      "C) Enhanced activity of Complex III",
      "D) Reduced electron transport chain efficiency",
      "E) None of the above"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Oxygen deficiency halts ATP production as the final electron acceptor is missing.",
      "Incorrect: ROS production increases during incomplete reduction, not directly due to oxygen deficiency.",
      "Incorrect: Complex III activity declines when oxygen is unavailable.",
      "Incorrect: Oxygen deficiency reduces the electron transport chain efficiency overall, rather than enhancing specific complexes.",
      "Incorrect: ATP production is the main process affected."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "Which structural feature of mitochondria is essential for the generation of the proton gradient during oxidative phosphorylation?",
    "options": [
      "A) Outer membrane",
      "B) Cristae",
      "C) Intermembrane space",
      "D) Matrix",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The outer membrane does not directly contribute to proton gradient generation.",
      "Correct: Cristae increase the surface area for embedded protein complexes, enabling efficient proton gradient formation.",
      "Incorrect: Intermembrane space holds the gradient but does not generate it.",
      "Incorrect: The matrix is involved in TCA cycle activities but not directly responsible for gradient generation.",
      "Incorrect: Cristae specifically play a vital role in oxidative phosphorylation."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "What is the primary role of uncoupling agents in oxidative phosphorylation?",
    "options": [
      "A) Block the electron transport chain",
      "B) Disrupt the proton gradient",
      "C) Enhance ATP synthesis",
      "D) Prevent oxygen utilization",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Uncoupling agents do not block electron transport; the chain continues.",
      "Correct: Uncouplers disrupt the proton gradient, leading to loss of ATP synthesis efficiency.",
      "Incorrect: Uncoupling decreases ATP synthesis rather than enhancing it.",
      "Incorrect: Oxygen is still utilized even when the gradient is disrupted.",
      "Incorrect: The primary action is disrupting the proton gradient."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "How do reactive oxygen species (ROS) contribute to oxidative stress in cells?",
    "options": [
      "A) By damaging cellular lipids and proteins",
      "B) By preventing oxidative phosphorylation",
      "C) By enhancing antioxidant activity",
      "D) By stabilizing DNA structures",
      "E) None of the above"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: ROS attack cellular lipids, proteins, and DNA, leading to oxidative damage and stress.",
      "Incorrect: Oxidative phosphorylation may produce ROS but is not prevented by them.",
      "Incorrect: Antioxidants combat ROS, but ROS do not enhance their activity.",
      "Incorrect: ROS destabilize DNA structures rather than stabilizing them.",
      "Incorrect: ROS contribute specifically by damaging cellular components."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "What is the primary role of oxygen in oxidative phosphorylation?",
    "options": [
      "A) Donating electrons to the electron transport chain",
      "B) Acting as the final electron acceptor",
      "C) Generating the proton gradient",
      "D) Directly producing ATP molecules",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Oxygen does not donate electrons to the chain.",
      "Correct: Oxygen serves as the final electron acceptor in the electron transport chain, forming water.",
      "Incorrect: Oxygen does not create the proton gradient but supports the process.",
      "Incorrect: Oxygen is not involved in direct ATP production; that is ATP synthase's role.",
      "Incorrect: Oxygen’s role is crucial as the terminal electron acceptor."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "Which part of the mitochondria contains the enzyme complexes of the electron transport chain?",
    "options": [
      "A) Outer membrane",
      "B) Inner membrane",
      "C) Intermembrane space",
      "D) Matrix",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The outer membrane does not house enzyme complexes.",
      "Correct: The inner membrane contains the enzyme complexes essential for the electron transport chain.",
      "Incorrect: The intermembrane space accumulates protons but does not contain these complexes.",
      "Incorrect: The matrix is the site of the TCA cycle, not the electron transport chain.",
      "Incorrect: The inner membrane is the specific location of these complexes."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "What is the main consequence of inhibiting Complex IV in the electron transport chain?",
    "options": [
      "A) Build-up of NADH and FADH2",
      "B) Decreased production of reactive oxygen species",
      "C) Increased generation of the proton gradient",
      "D) Direct ATP synthesis without electron transfer",
      "E) None of the above"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Inhibition of Complex IV prevents the transfer of electrons to oxygen, causing a build-up of NADH and FADH2.",
      "Incorrect: Reactive oxygen species production is not directly decreased by Complex IV inhibition.",
      "Incorrect: The proton gradient cannot form if electron transport is halted.",
      "Incorrect: ATP synthesis relies on electron transfer; it does not occur independently.",
      "Incorrect: The primary effect is accumulation of NADH and FADH2."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "Which process is disrupted by the action of uncoupling agents like dinitrophenol?",
    "options": [
      "A) Electron transfer between complexes",
      "B) Proton gradient formation across the inner mitochondrial membrane",
      "C) ATP synthesis by ATP synthase",
      "D) Oxygen reduction to water",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Uncouplers do not disrupt electron transfer but affect proton gradient utilization.",
      "Correct: Uncoupling agents disrupt the formation of the proton gradient, leading to inefficient energy conversion.",
      "Incorrect: ATP synthesis is reduced as a consequence of proton gradient disruption, not a direct effect.",
      "Incorrect: Oxygen reduction still occurs despite the action of uncouplers.",
      "Incorrect: Proton gradient formation is the specific process disrupted."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "What type of molecule is FADH2, and what is its role in cellular respiration?",
    "options": [
      "A) A protein that acts as a structural component",
      "B) A nucleotide involved in ATP hydrolysis",
      "C) An electron carrier that donates electrons to Complex II",
      "D) A sugar molecule oxidized in glycolysis",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: FADH2 is not a structural protein.",
      "Incorrect: It is not involved in ATP hydrolysis.",
      "Correct: FADH2 is an electron carrier that transfers electrons to Complex II of the electron transport chain.",
      "Incorrect: FADH2 is not a sugar molecule and is not directly involved in glycolysis.",
      "Incorrect: Its role as an electron carrier is critical in respiration."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "Which statement best describes the role of enzymes in biochemical reactions?",
    "options": [
      "A) Enzymes increase the activation energy required for a reaction.",
      "B) Enzymes are consumed during the reaction they catalyze.",
      "C) Enzymes lower the activation energy and remain unaltered after the reaction.",
      "D) Enzymes can catalyze multiple unrelated reactions simultaneously.",
      "E) Enzymes act as substrates in anabolic reactions."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Enzymes lower, not increase, the activation energy required for a reaction.",
      "Incorrect: Enzymes are not consumed during the reactions they catalyze.",
      "Correct: Enzymes lower the activation energy for reactions and remain unchanged after the reaction.",
      "Incorrect: Enzymes are highly selective and typically catalyze one type of reaction.",
      "Incorrect: Enzymes are catalysts, not substrates."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "What is the key purpose of the TCA cycle in cellular metabolism?",
    "options": [
      "A) To directly produce large amounts of ATP",
      "B) To oxidize acetyl-CoA and generate high-energy electron carriers",
      "C) To break down glucose into pyruvate",
      "D) To convert NAD+ directly into ATP",
      "E) To synthesize oxygen molecules"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: ATP is produced indirectly, not in large amounts, during the TCA cycle.",
      "Correct: The TCA cycle oxidizes acetyl-CoA and generates NADH and FADH2, which carry high-energy electrons to the electron transport chain.",
      "Incorrect: Breaking down glucose into pyruvate occurs during glycolysis, not the TCA cycle.",
      "Incorrect: NAD+ is not converted directly into ATP; it is reduced to NADH.",
      "Incorrect: Oxygen is not synthesized in the TCA cycle."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "Why are reactive oxygen species (ROS) considered harmful to cellular structures?",
    "options": [
      "A) They directly synthesize ATP in oxidative phosphorylation.",
      "B) They stabilize DNA and prevent mutations.",
      "C) They can damage DNA, proteins, and lipids.",
      "D) They facilitate the breakdown of glucose during glycolysis.",
      "E) They catalyze the production of complex carbohydrates."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: ROS do not play a role in ATP synthesis.",
      "Incorrect: ROS destabilize DNA and contribute to mutations rather than stabilizing it.",
      "Correct: ROS are highly reactive and can damage essential biomolecules like DNA, proteins, and lipids.",
      "Incorrect: ROS are not involved in glycolysis.",
      "Incorrect: ROS do not catalyze the production of carbohydrates."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "Which of the following best explains the function of NADH in oxidative phosphorylation?",
    "options": [
      "A) It directly synthesizes ATP from ADP and Pi.",
      "B) It acts as an electron donor to the electron transport chain.",
      "C) It forms the proton gradient in the intermembrane space.",
      "D) It captures oxygen molecules for ATP synthesis.",
      "E) It acts as a coenzyme for Complex IV."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: NADH does not directly synthesize ATP.",
      "Correct: NADH donates electrons to the electron transport chain, initiating the process of oxidative phosphorylation.",
      "Incorrect: NADH does not form the proton gradient but provides electrons that drive proton pumping.",
      "Incorrect: NADH does not directly interact with oxygen molecules.",
      "Incorrect: NADH is not a coenzyme for Complex IV but donates electrons earlier in the chain."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "What is the most likely consequence of disrupting the chemiosmotic gradient in mitochondria?",
    "options": [
      "A) Increase in the ATP production rate",
      "B) Cessation of electron flow through the transport chain",
      "C) Reduced ability to synthesize ATP via ATP synthase",
      "D) Enhanced movement of protons into the mitochondrial matrix",
      "E) Complete inhibition of oxygen reduction to water"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: ATP production decreases, not increases, when the chemiosmotic gradient is disrupted.",
      "Incorrect: The electron transport chain may continue functioning even without ATP synthesis.",
      "Correct: The disruption of the gradient prevents protons from driving ATP synthesis via ATP synthase.",
      "Incorrect: Protons move in the opposite direction when the gradient is disrupted.",
      "Incorrect: Oxygen reduction continues independently of the gradient."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "What is the main purpose of redox reactions in cellular metabolism?",
    "options": [
      "A) To generate ATP directly",
      "B) To transfer energy through the movement of electrons",
      "C) To produce oxygen for cellular respiration",
      "D) To synthesize macromolecules",
      "E) To transport protons across the mitochondrial membrane"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: ATP is generated indirectly through redox reactions, not directly.",
      "Correct: Redox reactions transfer energy by moving electrons, which is critical for metabolic processes.",
      "Incorrect: Oxygen is utilized, not produced, in cellular respiration.",
      "Incorrect: Redox reactions are not primarily involved in macromolecule synthesis.",
      "Incorrect: Proton transport occurs as a consequence of the electron transport chain, driven by redox reactions."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "Which component of the electron transport chain is responsible for transferring electrons to oxygen?",
    "options": [
      "A) Complex I",
      "B) Complex II",
      "C) Complex III",
      "D) Complex IV",
      "E) None of the above"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Complex I transfers electrons from NADH to CoQ.",
      "Incorrect: Complex II transfers electrons from FADH2 to CoQ.",
      "Incorrect: Complex III transfers electrons from reduced CoQ to cytochrome c.",
      "Correct: Complex IV transfers electrons from cytochrome c to oxygen, reducing it to water.",
      "Incorrect: Complex IV specifically completes this role."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "What is the function of coupled reactions in cellular metabolism?",
    "options": [
      "A) To prevent energy loss in exergonic reactions",
      "B) To link endergonic and exergonic reactions for overall energy efficiency",
      "C) To produce ATP directly from glucose breakdown",
      "D) To neutralize reactive oxygen species",
      "E) To transport ions across the plasma membrane"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Coupled reactions do not aim to prevent energy loss but to use it efficiently.",
      "Correct: Coupled reactions link energy-releasing (exergonic) and energy-requiring (endergonic) processes for cellular efficiency.",
      "Incorrect: ATP production from glucose is an outcome of several pathways, not just coupling.",
      "Incorrect: Reactive oxygen species are managed by antioxidants, not coupled reactions.",
      "Incorrect: Ion transport is mediated by specific pumps and channels, not coupled reactions."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "Why is acetyl-CoA considered a central molecule in cellular metabolism?",
    "options": [
      "A) It is the end product of glycolysis",
      "B) It is the primary carrier of electrons to the electron transport chain",
      "C) It links catabolism of carbohydrates, fats, and proteins to the TCA cycle",
      "D) It directly generates ATP in oxidative phosphorylation",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Glycolysis produces pyruvate, not acetyl-CoA.",
      "Incorrect: NADH and FADH2 are the main electron carriers to the electron transport chain.",
      "Correct: Acetyl-CoA links the breakdown of carbohydrates, fats, and proteins to the TCA cycle, centralizing metabolism.",
      "Incorrect: Acetyl-CoA does not directly produce ATP.",
      "Incorrect: Acetyl-CoA has a specific and critical metabolic role."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "What happens if an uncoupling agent disrupts the proton gradient in mitochondria?",
    "options": [
      "A) ATP synthesis is halted, but electron transport continues",
      "B) Both ATP synthesis and electron transport stop",
      "C) Oxygen consumption decreases",
      "D) Reactive oxygen species (ROS) production stops",
      "E) The mitochondrial membrane becomes impermeable to protons"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Uncoupling agents disrupt the proton gradient, halting ATP synthesis but allowing electron transport to continue.",
      "Incorrect: Electron transport is unaffected by uncoupling agents.",
      "Incorrect: Oxygen consumption is not significantly impacted by uncoupling.",
      "Incorrect: ROS production may increase, not stop, due to disrupted electron transport.",
      "Incorrect: Uncouplers increase, rather than block, proton permeability."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "Which process within cellular metabolism directly utilizes acetyl-CoA?",
    "options": [
      "A) Glycolysis",
      "B) TCA cycle",
      "C) Oxidative phosphorylation",
      "D) Beta-oxidation",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Glycolysis breaks down glucose into pyruvate, not acetyl-CoA.",
      "Correct: Acetyl-CoA enters the TCA cycle, where it is fully oxidized to CO2.",
      "Incorrect: Oxidative phosphorylation relies on electron carriers, not directly on acetyl-CoA.",
      "Incorrect: Beta-oxidation produces acetyl-CoA but does not utilize it.",
      "Incorrect: Acetyl-CoA's primary role is in the TCA cycle."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "What is the primary driving force behind ATP synthesis during oxidative phosphorylation?",
    "options": [
      "A) Proton movement through ATP synthase",
      "B) Direct oxidation of glucose",
      "C) Electron transfer from NADH to oxygen",
      "D) Creation of high-energy bonds in the electron transport chain",
      "E) Reduction of FAD to FADH2"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Protons flow down their concentration gradient through ATP synthase, driving ATP formation.",
      "Incorrect: Glucose oxidation is part of earlier metabolic stages, not ATP synthesis itself.",
      "Incorrect: Electron transfer contributes to proton gradient formation, but not directly to ATP synthesis.",
      "Incorrect: High-energy bonds are not the driving force for ATP synthesis.",
      "Incorrect: Reduction of FAD occurs upstream and is not directly related to ATP synthase activity."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "Which inhibitor specifically blocks electron transfer at Complex I in the electron transport chain?",
    "options": [
      "A) Rotenone",
      "B) Oligomycin",
      "C) Cyanide",
      "D) Dinitrophenol",
      "E) Valinomycin"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Rotenone inhibits electron transfer from NADH to CoQ at Complex I.",
      "Incorrect: Oligomycin inhibits ATP synthase, not Complex I.",
      "Incorrect: Cyanide inhibits Complex IV by blocking oxygen reduction.",
      "Incorrect: Dinitrophenol acts as an uncoupler, disrupting the proton gradient.",
      "Incorrect: Valinomycin disrupts ion gradients, not specifically Complex I activity."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "What is the primary consequence of a deficiency in oxygen during oxidative phosphorylation?",
    "options": [
      "A) Accumulation of pyruvate in the mitochondria",
      "B) Cessation of electron flow in the electron transport chain",
      "C) Increased ATP production through anaerobic respiration",
      "D) Generation of reactive oxygen species",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Pyruvate accumulation occurs in the cytosol under anaerobic conditions.",
      "Correct: Without oxygen, the terminal electron acceptor, electron flow halts, stopping ATP synthesis.",
      "Incorrect: Anaerobic respiration does not increase ATP production compared to oxidative phosphorylation.",
      "Incorrect: ROS are typically produced during partial oxygen reduction, not its complete absence.",
      "Incorrect: The key effect is the cessation of electron transport."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "What is the primary difference between NADH and FADH2 in oxidative phosphorylation?",
    "options": [
      "A) NADH donates electrons at a higher energy level than FADH2",
      "B) FADH2 directly synthesizes ATP, unlike NADH",
      "C) NADH is produced exclusively in the TCA cycle",
      "D) FADH2 contributes to more ATP molecules than NADH",
      "E) NADH and FADH2 are functionally identical"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: NADH donates electrons to Complex I, at a higher energy level compared to FADH2, which donates to Complex II.",
      "Incorrect: Neither NADH nor FADH2 directly synthesize ATP.",
      "Incorrect: NADH is produced in both glycolysis and the TCA cycle.",
      "Incorrect: NADH contributes to more ATP molecules than FADH2.",
      "Incorrect: NADH and FADH2 differ in their roles and points of electron entry."
    ],
    "slideLink": "Lecture16_FOCS.pdf"
  },
  {
    "question": "Which morphological change best represents reversible cell injury?",
    "options": [
      "A) Nuclear condensation",
      "B) Swelling of endoplasmic reticulum and mitochondria",
      "C) Membrane blebbing with leakage of contents",
      "D) Fragmentation of cell nucleus",
      "E) Myelin figures in necrotic cells"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Nuclear condensation is characteristic of irreversible injury.",
      "Correct: Swelling of organelles like the endoplasmic reticulum and mitochondria is a hallmark of reversible cell injury.",
      "Incorrect: Membrane blebbing with leakage signifies necrosis, which is irreversible.",
      "Incorrect: Fragmentation of the nucleus is seen in apoptosis or necrosis, both irreversible processes.",
      "Incorrect: Myelin figures are typically found in irreversibly injured cells."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "What is a distinguishing feature of apoptosis compared to necrosis?",
    "options": [
      "A) Inflammation is frequent",
      "B) Membrane integrity is disrupted",
      "C) Energy-dependent intracellular mechanisms",
      "D) Cellular enlargement occurs",
      "E) Necrotic material has a cheese-like appearance"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Apoptosis does not incite inflammation, unlike necrosis.",
      "Incorrect: Membrane integrity is preserved in apoptosis but disrupted in necrosis.",
      "Correct: Apoptosis relies on energy-dependent processes involving caspase activation.",
      "Incorrect: Cellular shrinkage occurs in apoptosis, not enlargement.",
      "Incorrect: Cheese-like appearance is characteristic of caseous necrosis, not apoptosis."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which type of necrosis is most commonly associated with tuberculosis?",
    "options": [
      "A) Coagulative necrosis",
      "B) Liquefactive necrosis",
      "C) Caseous necrosis",
      "D) Fat necrosis",
      "E) Fibrinoid necrosis"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Coagulative necrosis occurs in ischemic conditions, not tuberculosis.",
      "Incorrect: Liquefactive necrosis is typically observed in brain tissue, unrelated to tuberculosis.",
      "Correct: Caseous necrosis, characterized by a soft cheese-like consistency, is strongly linked to tuberculosis.",
      "Incorrect: Fat necrosis is associated with acute pancreatitis, not tuberculosis.",
      "Incorrect: Fibrinoid necrosis occurs in vasculitis and immune reactions, not tuberculosis."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which organelle is primarily affected by ATP depletion during cell injury?",
    "options": [
      "A) Lysosome",
      "B) Golgi apparatus",
      "C) Plasma membrane",
      "D) Mitochondrion",
      "E) Ribosome"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Lysosomes release enzymes but are not primarily affected by ATP depletion.",
      "Incorrect: The Golgi apparatus aids in protein trafficking but is not the primary site of ATP-related damage.",
      "Incorrect: While the plasma membrane loses ionic balance, the mitochondrion is the main target due to its role in ATP production.",
      "Correct: ATP depletion critically impairs mitochondrial function, leading to energy loss and cell death.",
      "Incorrect: Ribosomes are indirectly affected but not the primary site of damage."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "What is the primary mechanism driving oxidative stress in cell injury?",
    "options": [
      "A) Excess production of antioxidants",
      "B) Accumulation of reactive oxygen species",
      "C) Activation of apoptotic pathways",
      "D) Increased mitochondrial calcium levels",
      "E) Activation of lysosomal enzymes"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Antioxidants counteract oxidative stress rather than contribute to it.",
      "Correct: Reactive oxygen species accumulate when their production exceeds the cell's antioxidant defenses, leading to oxidative damage.",
      "Incorrect: Apoptotic pathways are related to programmed cell death, not oxidative stress.",
      "Incorrect: Mitochondrial calcium levels impact cell injury but are separate from oxidative stress.",
      "Incorrect: Lysosomal enzymes contribute to cellular digestion, not oxidative stress."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which cellular adaptation is most likely to precede dysplasia in epithelial tissue?",
    "options": [
      "A) Hypertrophy",
      "B) Atrophy",
      "C) Hyperplasia",
      "D) Metaplasia",
      "E) Autophagy"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Hypertrophy refers to an increase in cell size and does not typically precede dysplasia.",
      "Incorrect: Atrophy indicates a reduction in cell size or number, which is unrelated to dysplasia.",
      "Incorrect: Hyperplasia involves an increase in cell number but does not directly precede dysplasia in epithelial tissue.",
      "Correct: Metaplasia, a reversible change where one cell type is replaced by another, can progress to dysplasia if the injurious stimulus persists.",
      "Incorrect: Autophagy is a cellular process for recycling components and does not lead to dysplasia."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "What is the key mediator responsible for the release of cytochrome C in the intrinsic pathway of apoptosis?",
    "options": [
      "A) Caspase-8",
      "B) Bax and Bak proteins",
      "C) p53 protein",
      "D) Tumor necrosis factor (TNF)",
      "E) Fas ligand (FasL)"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Caspase-8 is associated with the extrinsic apoptotic pathway.",
      "Correct: Bax and Bak proteins permeabilize the mitochondrial membrane, leading to the release of cytochrome C.",
      "Incorrect: p53 is a tumor suppressor that can trigger apoptosis but is not directly responsible for cytochrome C release.",
      "Incorrect: Tumor necrosis factor (TNF) primarily activates the extrinsic pathway.",
      "Incorrect: Fas ligand (FasL) is involved in the extrinsic apoptotic pathway, not the intrinsic pathway."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which hallmark distinguishes necrosis from apoptosis in cell death pathways?",
    "options": [
      "A) Chromatin condensation",
      "B) DNA ladder formation",
      "C) Inflammatory response",
      "D) Caspase activation",
      "E) Cellular shrinkage"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Chromatin condensation is a feature of apoptosis, not specific to necrosis.",
      "Incorrect: DNA ladder formation occurs in apoptosis due to endonuclease activity.",
      "Correct: Inflammatory response is a hallmark of necrosis, as it involves the release of intracellular contents that trigger inflammation.",
      "Incorrect: Caspase activation is a key feature of apoptosis, not necrosis.",
      "Incorrect: Cellular shrinkage is observed in apoptosis but not necrosis."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "What is the primary biochemical consequence of ATP depletion in reversible cell injury?",
    "options": [
      "A) Increased cytosolic calcium levels",
      "B) Generation of free radicals",
      "C) Impaired ion pump function",
      "D) Protein denaturation",
      "E) Lysosomal membrane rupture"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Increased cytosolic calcium is a secondary effect rather than a direct consequence of ATP depletion.",
      "Incorrect: Free radicals may accumulate but are not primarily driven by ATP depletion.",
      "Correct: Impaired ion pump function due to ATP depletion leads to ionic imbalance and cellular swelling.",
      "Incorrect: Protein denaturation is not a primary biochemical consequence of ATP depletion.",
      "Incorrect: Lysosomal membrane rupture occurs in irreversible injury, not reversible cell injury."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which cellular event distinguishes caseous necrosis from coagulative necrosis?",
    "options": [
      "A) Retention of cellular architecture",
      "B) Inflammatory cell infiltration",
      "C) Presence of granulomatous inflammation",
      "D) Protein denaturation",
      "E) Cellular swelling"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Retention of cellular architecture is a feature of coagulative necrosis, not caseous necrosis.",
      "Incorrect: Inflammatory cell infiltration is common to many necrotic processes but does not distinguish caseous necrosis.",
      "Correct: Caseous necrosis is uniquely associated with granulomatous inflammation, typically seen in tuberculosis.",
      "Incorrect: Protein denaturation is a hallmark of coagulative necrosis, not specific to caseous necrosis.",
      "Incorrect: Cellular swelling occurs in reversible injury and is unrelated to caseous necrosis."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which biochemical change initiates the sequence leading to irreversible cell injury?",
    "options": [
      "A) Activation of lysosomal enzymes",
      "B) Depletion of intracellular ATP",
      "C) Increase in cytosolic calcium levels",
      "D) Generation of reactive oxygen species",
      "E) Irreversible mitochondrial dysfunction"
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorrect: While activation of lysosomal enzymes contributes to cellular breakdown, it is not the initiating event.",
      "Incorrect: ATP depletion is significant but precedes irreversible damage.",
      "Incorrect: Elevated cytosolic calcium is a critical intermediary but not the initiating factor.",
      "Incorrect: Reactive oxygen species exacerbate injury but are not the starting point of irreversible cell damage.",
      "Correct: Irreversible mitochondrial dysfunction signals the transition to irreversible cell injury."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "What is the primary morphological hallmark of liquefactive necrosis?",
    "options": [
      "A) Preserved cellular architecture",
      "B) Formation of a cystic cavity",
      "C) Coagulation of cellular proteins",
      "D) Chalky deposits in tissues",
      "E) Fibrin deposition in vessel walls"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Cellular architecture is lost in liquefactive necrosis.",
      "Correct: Liquefactive necrosis leads to the formation of a cystic cavity due to enzymatic digestion of brain tissue.",
      "Incorrect: Coagulated proteins are characteristic of coagulative necrosis, not liquefactive necrosis.",
      "Incorrect: Chalky deposits are typical of fat necrosis.",
      "Incorrect: Fibrin deposition is seen in fibrinoid necrosis, not liquefactive necrosis."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which cellular response distinguishes adaptive changes from reversible cell injury?",
    "options": [
      "A) Cellular swelling",
      "B) Increased intracellular glycogen",
      "C) Membrane blebbing",
      "D) Hypertrophy",
      "E) Nuclear fragmentation"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Cellular swelling is a feature of reversible injury, not adaptation.",
      "Incorrect: Glycogen accumulation is not a defining feature of adaptive changes.",
      "Incorrect: Membrane blebbing occurs in reversible cell injury, not adaptive responses.",
      "Correct: Hypertrophy is an adaptive response where cells enlarge to cope with increased workload.",
      "Incorrect: Nuclear fragmentation is seen in irreversible injury processes like necrosis."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "What feature uniquely identifies fat necrosis among the patterns of tissue necrosis?",
    "options": [
      "A) Formation of amorphous pink material",
      "B) Fragmentation of cellular membranes",
      "C) Chalky white deposits due to lipid breakdown",
      "D) Inflammatory cell infiltration",
      "E) Liquefaction of necrotic tissue"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Amorphous pink material is characteristic of caseous necrosis, not fat necrosis.",
      "Incorrect: Cellular membrane fragmentation is common to various necrotic processes but does not uniquely define fat necrosis.",
      "Correct: Chalky white deposits, resulting from saponification of lipids, uniquely identify fat necrosis.",
      "Incorrect: Inflammatory infiltration is present in many types of necrosis and not specific to fat necrosis.",
      "Incorrect: Liquefaction is a hallmark of liquefactive necrosis, not fat necrosis."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which molecular event is a critical step in the extrinsic pathway of apoptosis?",
    "options": [
      "A) Bax-mediated mitochondrial permeabilization",
      "B) Activation of caspase-9",
      "C) Formation of the apoptosome",
      "D) Binding of Fas ligand to Fas receptor",
      "E) Release of cytochrome C from mitochondria"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Bax-mediated mitochondrial permeabilization occurs in the intrinsic pathway.",
      "Incorrect: Caspase-9 activation is associated with the intrinsic pathway.",
      "Incorrect: The apoptosome forms during the intrinsic pathway.",
      "Correct: The extrinsic pathway begins when Fas ligand binds to the Fas receptor, activating downstream caspase signaling.",
      "Incorrect: Cytochrome C release is a hallmark of the intrinsic pathway, not the extrinsic pathway."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which cellular organelle is the initial site of damage caused by reactive oxygen species during oxidative stress?",
    "options": [
      "A) Golgi apparatus",
      "B) Mitochondria",
      "C) Endoplasmic reticulum",
      "D) Lysosome",
      "E) Plasma membrane"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The Golgi apparatus is not directly targeted by reactive oxygen species during oxidative stress.",
      "Correct: Mitochondria are the primary site of damage due to the accumulation of reactive oxygen species, impairing ATP production.",
      "Incorrect: While the endoplasmic reticulum may sustain indirect damage, it is not the initial target.",
      "Incorrect: Lysosomal damage is secondary to other cellular events during oxidative stress.",
      "Incorrect: The plasma membrane experiences effects later, such as loss of ionic balance."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "What is the most distinguishing feature of fibrinoid necrosis among the types of tissue necrosis?",
    "options": [
      "A) Loss of cellular outlines",
      "B) Accumulation of amorphous pink material in tissue",
      "C) Liquefaction of tissue",
      "D) Formation of granulomas",
      "E) Saponification of lipids"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Loss of cellular outlines is common to various types of necrosis but does not define fibrinoid necrosis.",
      "Correct: Fibrinoid necrosis is characterized by accumulation of amorphous pink material, often seen in vessel walls during immune-mediated processes.",
      "Incorrect: Liquefaction occurs in liquefactive necrosis, not fibrinoid necrosis.",
      "Incorrect: Granulomas are associated with caseous necrosis, not fibrinoid necrosis.",
      "Incorrect: Saponification is indicative of fat necrosis, not fibrinoid necrosis."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which molecular event distinguishes necroptosis from apoptosis?",
    "options": [
      "A) Activation of caspase-3",
      "B) Release of cytochrome C",
      "C) Interaction between RIPK1 and RIPK3 proteins",
      "D) Formation of apoptotic bodies",
      "E) DNA fragmentation"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Activation of caspase-3 is a hallmark of apoptosis, not necroptosis.",
      "Incorrect: Cytochrome C release is characteristic of the intrinsic apoptotic pathway, not necroptosis.",
      "Correct: Necroptosis involves the interaction between RIPK1 and RIPK3 proteins, leading to regulated necrotic cell death.",
      "Incorrect: Formation of apoptotic bodies occurs during apoptosis, not necroptosis.",
      "Incorrect: DNA fragmentation is typical in apoptosis but not necroptosis."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "What mechanism underpins the selective vulnerability of neurons during ATP depletion?",
    "options": [
      "A) High glycolytic activity",
      "B) Dependence on oxidative phosphorylation",
      "C) Elevated free cytosolic calcium levels",
      "D) Accumulation of reactive oxygen species",
      "E) Lack of lysosomal enzymes"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Neurons have low glycolytic activity, making them dependent on alternative energy pathways.",
      "Correct: Neurons rely primarily on oxidative phosphorylation for ATP synthesis, which is impaired during energy depletion.",
      "Incorrect: Elevated calcium levels contribute to injury but are not the main factor in selective vulnerability.",
      "Incorrect: Reactive oxygen species exacerbate injury but are not the root cause of neuronal susceptibility.",
      "Incorrect: Lysosomal enzyme activity is unrelated to neuronal vulnerability."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which factor directly triggers lysosomal rupture during irreversible cell injury?",
    "options": [
      "A) Decreased intracellular pH",
      "B) ATP depletion",
      "C) Increased cytosolic calcium",
      "D) Protein misfolding",
      "E) Reactive oxygen species"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Decreased pH can contribute indirectly but does not directly trigger lysosomal rupture.",
      "Incorrect: ATP depletion causes other cellular dysfunctions but does not directly result in lysosomal rupture.",
      "Correct: Elevated cytosolic calcium levels during irreversible injury activate enzymes that damage lysosomal membranes.",
      "Incorrect: Protein misfolding impacts cellular function but does not cause lysosomal rupture.",
      "Incorrect: Reactive oxygen species exacerbate damage but are not the primary trigger."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which feature distinguishes reversible cell injury from irreversible cell injury in mitochondria?",
    "options": [
      "A) Loss of cristae structure",
      "B) Swelling with amorphous densities",
      "C) Depletion of ATP stores",
      "D) Membrane rupture",
      "E) Reactive oxygen species accumulation"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Loss of cristae structure is characteristic of irreversible injury, not reversible injury.",
      "Correct: Swelling with amorphous densities is indicative of reversible mitochondrial injury, which can recover.",
      "Incorrect: ATP depletion occurs in reversible injury but does not distinguish it from irreversible injury.",
      "Incorrect: Membrane rupture is a hallmark of irreversible cell injury.",
      "Incorrect: Reactive oxygen species accumulation affects both reversible and irreversible injury but does not define the distinction."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "What is the primary biochemical event leading to lipid peroxidation in oxidative stress?",
    "options": [
      "A) Excess antioxidant production",
      "B) Accumulation of calcium ions",
      "C) Reaction of reactive oxygen species with lipids",
      "D) ATP depletion",
      "E) Activation of lysosomal enzymes"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Excess antioxidant production counteracts oxidative stress rather than causing lipid peroxidation.",
      "Incorrect: Calcium ion accumulation contributes to cellular injury but does not directly cause lipid peroxidation.",
      "Correct: Reactive oxygen species initiate lipid peroxidation by reacting with unsaturated fatty acids in membranes.",
      "Incorrect: ATP depletion is a consequence of injury but not directly linked to lipid peroxidation.",
      "Incorrect: Lysosomal enzyme activation is unrelated to lipid peroxidation."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which morphological characteristic is exclusive to fat necrosis in tissue injury?",
    "options": [
      "A) Pink amorphous material",
      "B) Liquefaction of tissue",
      "C) Chalky white deposits from saponification",
      "D) Retained cellular outlines",
      "E) Granulomatous inflammation"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Pink amorphous material is characteristic of caseous necrosis.",
      "Incorrect: Liquefaction of tissue is associated with liquefactive necrosis.",
      "Correct: Chalky white deposits, resulting from saponification of lipids, uniquely identify fat necrosis.",
      "Incorrect: Retained cellular outlines are seen in coagulative necrosis.",
      "Incorrect: Granulomatous inflammation is characteristic of caseous necrosis."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "What distinguishes necroptosis from apoptosis at the molecular level?",
    "options": [
      "A) Involvement of cytochrome C release",
      "B) Dependence on caspase activation",
      "C) RIPK1-RIPK3 complex formation",
      "D) DNA laddering",
      "E) Formation of apoptotic bodies"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Cytochrome C release is a feature of the intrinsic apoptotic pathway.",
      "Incorrect: Necroptosis does not rely on caspase activation, unlike apoptosis.",
      "Correct: Necroptosis is characterized by RIPK1-RIPK3 complex formation, which drives regulated necrotic cell death.",
      "Incorrect: DNA laddering is typical of apoptosis, not necroptosis.",
      "Incorrect: Apoptotic bodies form during apoptosis, not necroptosis."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which specific cellular process is triggered by severe nutrient deprivation?",
    "options": [
      "A) Necrosis",
      "B) Apoptosis",
      "C) Autophagy",
      "D) Lipid peroxidation",
      "E) Lysosomal rupture"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Necrosis is caused by external stimuli and catastrophic injury, not nutrient deprivation.",
      "Incorrect: Apoptosis occurs in response to physiological or pathological triggers but is not directly tied to nutrient deprivation.",
      "Correct: Autophagy is activated during nutrient deprivation as a survival mechanism to degrade and recycle intracellular components.",
      "Incorrect: Lipid peroxidation relates to oxidative stress, not nutrient deprivation.",
      "Incorrect: Lysosomal rupture signifies irreversible injury, not a response to nutrient deprivation."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which cellular change is most indicative of irreversible cell injury?",
    "options": [
      "A) Chromatin condensation",
      "B) Membrane blebbing",
      "C) Loss of mitochondrial cristae",
      "D) Lysosomal rupture",
      "E) Cellular swelling"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Chromatin condensation is typical of reversible cell injury or apoptosis.",
      "Incorrect: Membrane blebbing occurs during reversible injury.",
      "Correct: Loss of mitochondrial cristae signals irreversible mitochondrial dysfunction, indicative of cell death.",
      "Incorrect: Lysosomal rupture occurs later and is a result of irreversible injury, not the initial indicator.",
      "Incorrect: Cellular swelling is reversible and does not signify irreversible injury."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which mechanism underlies the selective vulnerability of cardiac muscle to hypoxic injury?",
    "options": [
      "A) High reliance on glycolysis",
      "B) Dependence on oxidative phosphorylation",
      "C) Abundance of antioxidants",
      "D) Low calcium buffering capacity",
      "E) Activation of apoptotic pathways"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Cardiac muscle has limited glycolytic activity and relies on aerobic metabolism.",
      "Correct: Cardiac muscle depends heavily on oxidative phosphorylation, making it highly susceptible to ATP depletion during hypoxia.",
      "Incorrect: Antioxidants help mitigate damage but are not the primary factor in vulnerability.",
      "Incorrect: Calcium buffering plays a role but is not the key mechanism of hypoxic injury.",
      "Incorrect: Apoptosis occurs secondary to prolonged injury, not as the primary mechanism of hypoxic vulnerability."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "What morphological feature is characteristic of coagulative necrosis in tissue?",
    "options": [
      "A) Liquefied tissue with cyst formation",
      "B) Preserved cellular outlines with loss of nuclei",
      "C) Chalky white areas due to lipid breakdown",
      "D) Granulomatous inflammation",
      "E) Pink amorphous material in vessel walls"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Liquefied tissue is a hallmark of liquefactive necrosis.",
      "Correct: Coagulative necrosis preserves the cellular outlines while nuclei are lost due to protein denaturation.",
      "Incorrect: Chalky white areas are indicative of fat necrosis.",
      "Incorrect: Granulomatous inflammation is associated with caseous necrosis.",
      "Incorrect: Pink amorphous material is characteristic of fibrinoid necrosis."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which process differentiates apoptosis from necrosis at a molecular level?",
    "options": [
      "A) Release of lysosomal enzymes",
      "B) Caspase activation",
      "C) DNA fragmentation without inflammatory response",
      "D) Loss of plasma membrane integrity",
      "E) Mitochondrial swelling with amorphous densities"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Release of lysosomal enzymes is common in necrosis.",
      "Correct: Caspase activation is a defining molecular feature of apoptosis, enabling controlled cell dismantling.",
      "Incorrect: DNA fragmentation occurs in both apoptosis and necrosis but differs in context.",
      "Incorrect: Loss of plasma membrane integrity is a feature of necrosis.",
      "Incorrect: Mitochondrial swelling occurs in irreversible injury, unrelated to apoptosis."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which cellular adaptation is most likely to result from chronic irritation in epithelial tissue?",
    "options": [
      "A) Hyperplasia",
      "B) Hypertrophy",
      "C) Dysplasia",
      "D) Metaplasia",
      "E) Atrophy"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Hyperplasia represents increased cell numbers but is not directly caused by chronic irritation.",
      "Incorrect: Hypertrophy refers to increased cell size and is unrelated to epithelial irritation.",
      "Correct: Metaplasia involves the replacement of one epithelial cell type with another due to chronic irritation.",
      "Incorrect: Dysplasia is a precancerous change but does not directly stem from irritation.",
      "Incorrect: Atrophy denotes a decrease in cell size or number, unrelated to irritation."
    ],
    "slideLink": "Lecture17_FOCS.pdf"
  },
  {
    "question": "Which microorganism is classified as an obligate intracellular parasite?",
    "options": [
      "A) Staphylococcus aureus",
      "B) Escherichia coli",
      "C) Human papillomavirus",
      "D) Bacillus cereus",
      "E) Lactobacillus acidophilus"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Staphylococcus aureus is a Gram-positive bacterium, not an obligate intracellular parasite.",
      "Incorrect: Escherichia coli is a prokaryotic microorganism, not an intracellular parasite.",
      "Correct: Human papillomavirus (HPV) is an obligate intracellular parasite requiring a host to replicate.",
      "Incorrect: Bacillus cereus is a Gram-positive rod bacterium, not an obligate intracellular parasite.",
      "Incorrect: Lactobacillus acidophilus is a Gram-positive bacterium important for gut health."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "What distinguishes colonisation from infection in clinical microbiology?",
    "options": [
      "A) Presence of a foreign microorganism",
      "B) Immune response and tissue damage",
      "C) Route of transmission",
      "D) The requirement for antibiotics",
      "E) Transmission through airborne means"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Colonisation and infection can both involve foreign microorganisms, but this does not differentiate them.",
      "Correct: Infection involves immune response and tissue damage, unlike colonisation.",
      "Incorrect: Route of transmission does not distinguish between colonisation and infection.",
      "Incorrect: Antibiotics may not be required in colonisation, but this is not the defining feature.",
      "Incorrect: Transmission route alone does not differentiate colonisation from infection."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which of the following is an example of a bacterial virulence factor that assists in host tissue attachment?",
    "options": [
      "A) Fimbriae of E. coli",
      "B) Lipopolysaccharides in Gram-negative bacteria",
      "C) Cytopathic effects by poliovirus",
      "D) Exotoxins by Clostridium tetani",
      "E) None of the above"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Fimbriae of E. coli assist in adhesion to urinary epithelium, a key virulence factor.",
      "Incorrect: Lipopolysaccharides are associated with immune response, not tissue attachment.",
      "Incorrect: Cytopathic effects are caused by viruses, not bacterial virulence factors.",
      "Incorrect: Exotoxins cause direct tissue damage rather than aiding attachment.",
      "Incorrect: This question focuses on bacterial virulence factors that assist attachment."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "What is a common feature of Gram-positive bacteria that differentiates them from Gram-negative bacteria?",
    "options": [
      "A) Presence of an outer cell membrane",
      "B) High levels of lipopolysaccharides",
      "C) Thicker peptidoglycan layer",
      "D) Resistance to antibiotics",
      "E) Smaller ribosomes"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Gram-positive bacteria lack an outer cell membrane.",
      "Incorrect: Lipopolysaccharides are characteristic of Gram-negative bacteria.",
      "Correct: Gram-positive bacteria have a thicker peptidoglycan layer in their cell walls.",
      "Incorrect: Antibiotic resistance is not exclusive to Gram-positive bacteria.",
      "Incorrect: Ribosome size does not differentiate Gram-positive from Gram-negative bacteria."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which component is essential for the transmission of infection?",
    "options": [
      "A) Pathogen presence",
      "B) Route of transmission",
      "C) Susceptible host",
      "D) All of the above",
      "E) None of the above"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: A pathogen alone cannot cause transmission without a route or susceptible host.",
      "Incorrect: The route of transmission is important but insufficient by itself.",
      "Incorrect: A susceptible host is necessary but not the only component.",
      "Correct: All of the listed components are required for infection transmission.",
      "Incorrect: Essential components are provided in the question."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "What distinguishes prions from other pathogenic microorganisms?",
    "options": [
      "A) Lack of nucleic acids",
      "B) Presence of a cell wall",
      "C) Ability to form spores",
      "D) Obligate intracellular nature",
      "E) None of the above"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Prions are unique in that they are infectious proteins without nucleic acids.",
      "Incorrect: Prions do not have a cell wall, unlike bacteria.",
      "Incorrect: Prions cannot form spores; they propagate through protein misfolding.",
      "Incorrect: Prions are not obligate intracellular organisms like viruses.",
      "Incorrect: Prions are distinguished specifically by their lack of nucleic acids."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which statement best describes the nature of endotoxins in Gram-negative bacteria?",
    "options": [
      "A) Pre-formed toxins released actively by bacteria",
      "B) Lipopolysaccharides in the outer membrane",
      "C) Secreted toxins that cause tissue necrosis",
      "D) Protein-based toxins targeting the immune system",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Endotoxins are part of the bacterial cell structure and not actively released.",
      "Correct: Endotoxins consist of lipopolysaccharides in the outer membrane of Gram-negative bacteria.",
      "Incorrect: Endotoxins are structural toxins, not secreted toxins causing necrosis.",
      "Incorrect: Endotoxins are not protein-based toxins like exotoxins.",
      "Incorrect: Endotoxins are specifically lipopolysaccharides in Gram-negative bacteria."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which characteristic makes viruses obligate intracellular parasites?",
    "options": [
      "A) Lack of cell membrane",
      "B) Dependence on host cell machinery for replication",
      "C) Presence of nucleic acids",
      "D) Ability to evade immune responses",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Viruses lack a cell membrane, but this does not make them obligate intracellular parasites.",
      "Correct: Viruses require host cell machinery for replication, making them obligate intracellular parasites.",
      "Incorrect: Presence of nucleic acids is a general feature of viruses but not the defining trait of intracellular parasitism.",
      "Incorrect: Immune evasion is a strategy, not the basis for intracellular parasitism.",
      "Incorrect: Obligate intracellular nature is tied specifically to their replication dependency."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "How do Gram-positive bacteria differ from Gram-negative bacteria in terms of their cell wall structure?",
    "options": [
      "A) Gram-positive bacteria lack peptidoglycan",
      "B) Gram-positive bacteria have a thicker peptidoglycan layer",
      "C) Gram-positive bacteria contain lipopolysaccharides",
      "D) Gram-positive bacteria have a double membrane",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Gram-positive bacteria have peptidoglycan as a key component.",
      "Correct: Gram-positive bacteria have a thicker peptidoglycan layer compared to Gram-negative bacteria.",
      "Incorrect: Lipopolysaccharides are exclusive to Gram-negative bacteria.",
      "Incorrect: Gram-positive bacteria lack a double membrane, which is found in Gram-negative bacteria.",
      "Incorrect: The defining difference is the thicker peptidoglycan layer in Gram-positive bacteria."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which of the following is a key factor in determining the susceptibility of a host to infection?",
    "options": [
      "A) Age and immunization status",
      "B) Presence of foreign bodies",
      "C) Damage to skin or epithelial barriers",
      "D) Congenital or acquired immunodeficiency",
      "E) All of the above"
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorrect: Age and immunization status are important but not the sole determinants.",
      "Incorrect: Foreign bodies increase susceptibility but are only part of the picture.",
      "Incorrect: Damage to physical barriers contributes but does not encompass all factors.",
      "Incorrect: Immunodeficiency is critical but does not cover other factors like age or barrier damage.",
      "Correct: All listed factors collectively determine the susceptibility of a host to infection."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which feature is unique to endotoxins compared to exotoxins?",
    "options": [
      "A) Protein composition",
      "B) Heat stability",
      "C) Direct enzymatic activity",
      "D) Association with Gram-positive bacteria",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Endotoxins are not composed of proteins; this is a characteristic of exotoxins.",
      "Correct: Endotoxins are heat-stable, unlike most exotoxins which are heat-labile.",
      "Incorrect: Endotoxins do not possess enzymatic activity; this is a feature of some exotoxins.",
      "Incorrect: Endotoxins are associated with Gram-negative bacteria, not Gram-positive.",
      "Incorrect: The unique characteristic of endotoxins is their heat stability."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which of the following organisms is most associated with peptic ulcer disease?",
    "options": [
      "A) Escherichia coli",
      "B) Helicobacter pylori",
      "C) Staphylococcus aureus",
      "D) Clostridium difficile",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Escherichia coli is primarily associated with gastrointestinal infections, not peptic ulcers.",
      "Correct: Helicobacter pylori is strongly associated with peptic ulcer disease.",
      "Incorrect: Staphylococcus aureus is linked to skin and soft tissue infections, not peptic ulcers.",
      "Incorrect: Clostridium difficile causes pseudomembranous colitis, not peptic ulcers.",
      "Incorrect: Helicobacter pylori is specifically linked to peptic ulcer disease."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "What is the primary function of fimbriae in bacterial virulence?",
    "options": [
      "A) Evading host immune responses",
      "B) Attachment to host cells",
      "C) Producing exotoxins",
      "D) Facilitating horizontal gene transfer",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Fimbriae do not play a role in immune evasion directly.",
      "Correct: Fimbriae facilitate the attachment of bacteria to host cells, a key virulence factor.",
      "Incorrect: Exotoxin production is unrelated to the function of fimbriae.",
      "Incorrect: Horizontal gene transfer is facilitated by pili, not fimbriae.",
      "Incorrect: The main role of fimbriae is adhesion, not any of the other listed options."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which of the following is an example of a latent infection?",
    "options": [
      "A) Influenza virus",
      "B) Herpes simplex virus",
      "C) Clostridium tetani",
      "D) Streptococcus pyogenes",
      "E) All of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Influenza virus causes acute infections, not latent infections.",
      "Correct: Herpes simplex virus is a classic example of a latent infection, capable of reactivation.",
      "Incorrect: Clostridium tetani produces exotoxins but is not associated with latent infections.",
      "Incorrect: Streptococcus pyogenes causes acute infections and is not latent.",
      "Incorrect: Only the Herpes simplex virus in this list is linked to latent infection."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "What is the best way to differentiate between colonisation and infection clinically?",
    "options": [
      "A) Laboratory culture results",
      "B) Host immune response and tissue damage",
      "C) Pathogen identification through staining",
      "D) PCR amplification of microbial DNA",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Laboratory culture alone cannot distinguish between colonisation and infection.",
      "Correct: Infection is indicated by host immune response and tissue damage, unlike colonisation.",
      "Incorrect: Staining can identify pathogens but does not differentiate colonisation from infection.",
      "Incorrect: PCR amplification confirms the presence of microbial DNA but cannot determine infection status.",
      "Incorrect: The distinction lies in clinical assessment of immune response and tissue damage."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which of the following best describes the role of lipopolysaccharides (LPS) in Gram-negative bacteria?",
    "options": [
      "A) They facilitate bacterial adhesion to host cells",
      "B) They act as toxins inducing immune responses",
      "C) They enable horizontal gene transfer",
      "D) They promote bacterial motility",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Adhesion is typically facilitated by fimbriae or pili, not LPS.",
      "Correct: LPS are endotoxins that induce strong immune responses and cytokine release.",
      "Incorrect: Horizontal gene transfer is mediated by specialized structures like pili.",
      "Incorrect: Bacterial motility is facilitated by flagella, not LPS.",
      "Incorrect: The primary role of LPS is to act as potent endotoxins."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "What is the primary method through which viruses achieve host specificity?",
    "options": [
      "A) Replication mechanism",
      "B) Tropism for specific tissues",
      "C) Immune evasion strategies",
      "D) Size of the viral particle",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Replication mechanism does not determine host specificity.",
      "Correct: Tropism describes the preference of viruses for specific tissues and is the basis of host specificity.",
      "Incorrect: Immune evasion is important but does not directly govern host specificity.",
      "Incorrect: Viral particle size is unrelated to host specificity.",
      "Incorrect: Tropism is the defining factor in viral host specificity."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which feature of prions differentiates them from viruses as infectious agents?",
    "options": [
      "A) Presence of nucleic acids",
      "B) Ability to replicate outside host cells",
      "C) Propagation through protein misfolding",
      "D) Association with immune suppression",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Prions lack nucleic acids, unlike viruses.",
      "Incorrect: Prions do not replicate outside host cells; they propagate through protein misfolding.",
      "Correct: Prions propagate by inducing misfolding of normal host proteins.",
      "Incorrect: Immune suppression is not directly associated with prions.",
      "Incorrect: Prion propagation is specifically linked to protein misfolding."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "What is the main characteristic of exotoxins that distinguishes them from endotoxins?",
    "options": [
      "A) Structural components of bacterial cell walls",
      "B) Protein-based toxins secreted by bacteria",
      "C) Association with Gram-positive bacteria exclusively",
      "D) Induction of septic shock",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Exotoxins are secreted toxins, not structural components.",
      "Correct: Exotoxins are protein-based and secreted by bacteria to damage host tissues.",
      "Incorrect: While exotoxins are common in Gram-positive bacteria, they are not exclusive to them.",
      "Incorrect: Septic shock is primarily induced by endotoxins, not exotoxins.",
      "Incorrect: Exotoxins are defined by their secretion and protein-based composition."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which of the following best explains the clinical significance of distinguishing colonisation from infection?",
    "options": [
      "A) It determines the choice of diagnostic tests",
      "B) It guides the decision to prescribe antibiotics",
      "C) It identifies the causative organism accurately",
      "D) It ensures proper identification of host susceptibility",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Diagnostic tests cannot reliably differentiate colonisation from infection.",
      "Correct: Differentiating colonisation from infection is crucial in deciding whether antibiotics are necessary.",
      "Incorrect: Identifying the causative organism does not depend on distinguishing colonisation from infection.",
      "Incorrect: Host susceptibility is relevant but not the primary reason for making this distinction.",
      "Incorrect: Antibiotic decisions hinge directly on this differentiation."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which characteristic is most associated with obligate intracellular pathogens?",
    "options": [
      "A) Ability to form spores under harsh conditions",
      "B) Dependence on host cell machinery for replication",
      "C) Presence of double-stranded DNA in their genome",
      "D) Production of pre-formed exotoxins",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Spore formation is associated with some bacteria but not obligate intracellular pathogens.",
      "Correct: Obligate intracellular pathogens require host cell machinery for replication, making this their defining trait.",
      "Incorrect: Genome composition does not universally define intracellular pathogens.",
      "Incorrect: Exotoxin production is unrelated to intracellular replication.",
      "Incorrect: The characteristic dependence on host cells is exclusive to obligate intracellular pathogens."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which component of the bacterial cell wall is most associated with the induction of septic shock?",
    "options": [
      "A) Peptidoglycan",
      "B) Lipopolysaccharides",
      "C) Exotoxins",
      "D) Flagella",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Peptidoglycan contributes to structural integrity but does not induce septic shock.",
      "Correct: Lipopolysaccharides in Gram-negative bacteria are highly antigenic and trigger septic shock.",
      "Incorrect: Exotoxins are secreted by bacteria and cause direct tissue damage, not septic shock.",
      "Incorrect: Flagella aid bacterial motility but are unrelated to immune responses.",
      "Incorrect: Lipopolysaccharides are specifically linked to septic shock in Gram-negative infections."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which mechanism allows E. coli to adhere specifically to urinary epithelium?",
    "options": [
      "A) Lipopolysaccharides",
      "B) Flagellar movement",
      "C) Fimbriae",
      "D) Exotoxin production",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Lipopolysaccharides do not function as adhesion molecules.",
      "Incorrect: Flagellar movement facilitates motility, not adhesion.",
      "Correct: Fimbriae are specialized structures that enable E. coli to attach to urinary epithelial cells.",
      "Incorrect: Exotoxin production causes tissue damage but does not assist in attachment.",
      "Incorrect: Fimbriae are the primary adhesion mechanism described."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which feature distinguishes commensalism from infection?",
    "options": [
      "A) Presence of tissue damage",
      "B) Colonisation of host epithelial surfaces",
      "C) The use of antibiotics",
      "D) Host immune response activation",
      "E) None of the above"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Commensal organisms do not cause tissue damage, which is a hallmark of infection.",
      "Incorrect: Colonisation occurs in both commensalism and infection.",
      "Incorrect: Antibiotics are not used for commensal organisms.",
      "Incorrect: Host immune response is typically absent in commensalism.",
      "Incorrect: Tissue damage is the key distinguishing feature."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "What is the primary determinant of tissue tropism in microorganisms?",
    "options": [
      "A) Host immune evasion strategies",
      "B) Specific adhesion molecules on host cells",
      "C) Size and shape of the microorganism",
      "D) Ability to produce exotoxins",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Immune evasion strategies help survival but do not define tissue tropism.",
      "Correct: Specific adhesion molecules on host cells determine the preference of microorganisms for certain tissues.",
      "Incorrect: Size and shape do not influence tissue tropism.",
      "Incorrect: Exotoxin production is related to pathogenicity, not tissue tropism.",
      "Incorrect: Adhesion molecules are the primary factor influencing tissue tropism."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which of the following microorganisms is classified as a non-cellular pathogen?",
    "options": [
      "A) Streptococcus pneumoniae",
      "B) Mycobacterium tuberculosis",
      "C) Human papillomavirus",
      "D) Candida albicans",
      "E) Plasmodium falciparum"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Streptococcus pneumoniae is a Gram-positive bacterium and cellular pathogen.",
      "Incorrect: Mycobacterium tuberculosis is a cellular, prokaryotic pathogen.",
      "Correct: Human papillomavirus is a non-cellular pathogen requiring a host to replicate.",
      "Incorrect: Candida albicans is a single-celled eukaryotic fungus and cellular pathogen.",
      "Incorrect: Plasmodium falciparum is a protozoan and cellular pathogen."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "What is the defining feature of Gram-negative bacteria in comparison to Gram-positive bacteria?",
    "options": [
      "A) Presence of a thicker peptidoglycan layer",
      "B) Absence of a cell wall",
      "C) Presence of an outer membrane containing lipopolysaccharides",
      "D) Ability to form spores under harsh conditions",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Gram-negative bacteria have a thinner, not thicker, peptidoglycan layer.",
      "Incorrect: Both Gram-positive and Gram-negative bacteria possess cell walls.",
      "Correct: Gram-negative bacteria have an outer membrane with lipopolysaccharides, distinguishing them from Gram-positive bacteria.",
      "Incorrect: Spore formation is not exclusive to Gram-negative bacteria.",
      "Incorrect: The defining feature is the outer membrane with lipopolysaccharides."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which of the following describes a mechanism by which bacteria evade the host immune system?",
    "options": [
      "A) Secretion of lipopolysaccharides",
      "B) Production of exotoxins",
      "C) Formation of a protective biofilm",
      "D) Direct cytopathic effects",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Lipopolysaccharides trigger immune responses rather than evading them.",
      "Incorrect: Exotoxins cause tissue damage but do not directly aid immune evasion.",
      "Correct: Biofilms protect bacteria from the host immune system and antibiotics.",
      "Incorrect: Cytopathic effects are associated with viruses, not bacterial immune evasion.",
      "Incorrect: Biofilm formation is the specific mechanism described."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which of the following best defines tissue tropism in the context of microorganisms?",
    "options": [
      "A) Ability of microorganisms to evade the immune system",
      "B) Preference of microorganisms for specific tissues or cell types",
      "C) Production of toxins targeting specific organs",
      "D) Adaptation to environmental conditions within the host",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Tissue tropism is not defined by immune evasion.",
      "Correct: Tissue tropism refers to the preference of microorganisms for particular tissues or cell types.",
      "Incorrect: Toxin production may affect specific organs but does not define tissue tropism.",
      "Incorrect: Tropism is not solely an adaptation to environmental conditions within the host.",
      "Incorrect: The term specifically refers to tissue or cell type preferences."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "What is the primary distinction between a latent infection and an active infection?",
    "options": [
      "A) Presence of immune response",
      "B) Replication of the microorganism",
      "C) Type of pathogen causing the infection",
      "D) Host susceptibility",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Immune response can occur in both latent and active infections.",
      "Correct: In latent infections, the microorganism is dormant and not actively replicating.",
      "Incorrect: Latent and active infections can involve the same type of pathogen.",
      "Incorrect: Host susceptibility does not differentiate between latent and active infections.",
      "Incorrect: Replication activity is the defining difference between these states."
    ],
    "slideLink": "Lecture18_FOCS.pdf"
  },
  {
    "question": "Which phase of the action potential is characterized by an increased potassium ion permeability leading to membrane repolarization?",
    "options": [
      "A) Depolarization phase",
      "B) Overshoot phase",
      "C) Repolarization phase",
      "D) Absolute refractory phase",
      "E) Relative refractory phase"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Depolarization is due to increased sodium ion permeability.",
      "Incorrect: The overshoot phase involves a positive membrane potential.",
      "Correct: Repolarization occurs as potassium ion permeability increases.",
      "Incorrect: The absolute refractory phase refers to the period when no new action potential can be initiated.",
      "Incorrect: The relative refractory phase occurs after repolarization and involves hyperpolarization."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "What property of action potentials ensures that they are conducted without a decrease in size along the axon?",
    "options": [
      "A) The all-or-none principle",
      "B) Voltage-gated potassium channels",
      "C) Refractory periods",
      "D) Saltatory conduction",
      "E) Local circuits"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: The all-or-none principle ensures that action potentials maintain their size.",
      "Incorrect: Voltage-gated potassium channels are involved in repolarization, not size maintenance.",
      "Incorrect: Refractory periods prevent back-propagation but do not influence size.",
      "Incorrect: Saltatory conduction enhances speed in myelinated axons but not size in all axons.",
      "Incorrect: Local circuits spread depolarization but do not ensure size consistency."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "Which statement best explains the cause of unidirectional propagation of action potentials?",
    "options": [
      "A) The presence of myelin sheath",
      "B) Local circuit depolarization",
      "C) Absolute refractory period",
      "D) Increased sodium ion conductance",
      "E) Rapid potassium ion efflux"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The myelin sheath increases speed but does not determine direction.",
      "Incorrect: Local circuit depolarization occurs in both directions.",
      "Correct: The absolute refractory period ensures that the action potential travels in one direction.",
      "Incorrect: Sodium ion conductance is crucial for depolarization but not direction.",
      "Incorrect: Potassium ion efflux is important for repolarization."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "What is the primary physiological role of the relative refractory period in action potential conduction?",
    "options": [
      "A) To prevent any action potentials from occurring",
      "B) To allow depolarization to surpass threshold",
      "C) To ensure separation between successive action potentials",
      "D) To decrease the duration of repolarization",
      "E) To activate sodium ion channels"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Action potentials can occur if the stimulus is strong enough during this period.",
      "Incorrect: Depolarization surpassing threshold is a feature of the absolute refractory period.",
      "Correct: The relative refractory period ensures spacing between action potentials.",
      "Incorrect: It does not decrease the duration of repolarization.",
      "Incorrect: Sodium ion channel activation happens during depolarization, not the refractory period."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "How does saltatory conduction enhance the speed of action potential propagation in myelinated axons?",
    "options": [
      "A) By decreasing the refractory period",
      "B) By increasing membrane resistance",
      "C) By concentrating ion channels at the Nodes of Ranvier",
      "D) By reducing the requirement for voltage-gated channels",
      "E) By enhancing local circuit currents across the myelin sheath"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The refractory period remains unaffected by myelination.",
      "Incorrect: Membrane resistance increases but is not the direct reason for faster propagation.",
      "Correct: Ion channel concentration at the Nodes of Ranvier facilitates saltatory conduction.",
      "Incorrect: Myelination does not reduce the need for voltage-gated channels.",
      "Incorrect: Local circuit currents are constrained by the insulating myelin sheath."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "What is the primary consequence of increased sodium ion conductance during the depolarization phase of an action potential?",
    "options": [
      "A) Hyperpolarization of the membrane",
      "B) Positive feedback loop leading to rapid depolarization",
      "C) Repolarization of the membrane",
      "D) Increased potassium ion permeability",
      "E) Restoration of resting membrane potential"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Hyperpolarization occurs during the relative refractory period.",
      "Correct: Increased sodium ion conductance creates a positive feedback loop causing rapid depolarization.",
      "Incorrect: Repolarization happens after the peak of the action potential.",
      "Incorrect: Potassium ion permeability increases during repolarization, not depolarization.",
      "Incorrect: Restoration of the resting membrane potential follows repolarization and hyperpolarization."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "Which factor primarily determines the speed of action potential propagation in an unmyelinated axon?",
    "options": [
      "A) Membrane permeability to sodium ions",
      "B) Axon diameter",
      "C) Absolute refractory period duration",
      "D) Concentration of voltage-gated channels",
      "E) Density of potassium ion channels"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Sodium permeability initiates depolarization but does not dictate propagation speed.",
      "Correct: Axon diameter is the key factor; larger diameters reduce resistance to current flow.",
      "Incorrect: Refractory period ensures unidirectionality, not propagation speed.",
      "Incorrect: Voltage-gated channel concentration is critical for depolarization but not speed.",
      "Incorrect: Potassium channel density affects repolarization but not the propagation velocity."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "What characteristic of the resting membrane potential is primarily influenced by potassium ion permeability?",
    "options": [
      "A) The negative value of the resting potential",
      "B) Rapid depolarization during action potential generation",
      "C) Absolute refractory period duration",
      "D) The threshold potential for action potential initiation",
      "E) The magnitude of the overshoot phase"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Potassium ion permeability contributes to the negative resting membrane potential.",
      "Incorrect: Rapid depolarization is driven by sodium ion permeability.",
      "Incorrect: Absolute refractory period is influenced by sodium channel inactivation.",
      "Incorrect: Threshold potential depends on both sodium and potassium ion dynamics.",
      "Incorrect: The overshoot phase is due to sodium ions, not potassium ions."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "Which event is most directly responsible for the relative refractory period during an action potential?",
    "options": [
      "A) The inactivation of voltage-dependent sodium channels",
      "B) The increased permeability to potassium ions",
      "C) The recovery of sodium channels from inactivation",
      "D) The decreased permeability to sodium ions",
      "E) The peak of the action potential"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Sodium channel inactivation causes the absolute refractory period.",
      "Correct: Increased potassium ion permeability causes hyperpolarization, creating the relative refractory period.",
      "Incorrect: Recovery of sodium channels marks the end of the absolute refractory period.",
      "Incorrect: Decreased sodium permeability is associated with repolarization but not the relative refractory period.",
      "Incorrect: The peak of the action potential occurs before refractory periods."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "How does the myelin sheath improve action potential conduction in myelinated axons?",
    "options": [
      "A) By decreasing axonal resistance to ion flow",
      "B) By increasing sodium ion channel density across the axon",
      "C) By allowing action potentials to propagate continuously along the membrane",
      "D) By insulating axonal regions and concentrating depolarization at nodes of Ranvier",
      "E) By reducing potassium ion permeability during conduction"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Axonal resistance is decreased primarily by increasing diameter, not by myelin.",
      "Incorrect: Sodium ion channel density is increased at nodes of Ranvier but not across the axon.",
      "Incorrect: Continuous propagation occurs in unmyelinated axons.",
      "Correct: Myelin insulates the axon and enables saltatory conduction with depolarization concentrated at nodes.",
      "Incorrect: Potassium ion permeability does not directly relate to the insulating effect of myelin."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "What is the primary function of voltage-gated potassium channels during the repolarization phase of an action potential?",
    "options": [
      "A) Initiate depolarization by allowing sodium influx",
      "B) Terminate depolarization by inactivating sodium channels",
      "C) Facilitate potassium efflux to restore resting membrane potential",
      "D) Prevent back-propagation of the action potential",
      "E) Enhance sodium channel recovery during the relative refractory period"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Depolarization is initiated by sodium influx through voltage-gated sodium channels.",
      "Incorrect: Sodium channel inactivation terminates depolarization but is unrelated to potassium channels.",
      "Correct: Voltage-gated potassium channels allow potassium efflux, aiding repolarization.",
      "Incorrect: Preventing back-propagation involves refractory period properties, not potassium channels.",
      "Incorrect: Potassium channel activity does not enhance sodium channel recovery."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "Which property of the action potential is explained by the all-or-none law?",
    "options": [
      "A) Action potential size varies with stimulus strength",
      "B) Sub-threshold stimuli evoke smaller action potentials",
      "C) Supra-threshold stimuli evoke action potentials of uniform size",
      "D) Action potentials propagate faster in larger axons",
      "E) Refractory periods determine action potential unidirectionality"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Action potential size is consistent, regardless of supra-threshold stimulus strength.",
      "Incorrect: Sub-threshold stimuli fail to evoke action potentials entirely.",
      "Correct: Supra-threshold stimuli trigger uniform action potentials, adhering to the all-or-none law.",
      "Incorrect: Conduction velocity depends on axon diameter, not the all-or-none law.",
      "Incorrect: Unidirectionality is governed by refractory period dynamics."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "Which ionic gradient primarily drives sodium influx during the depolarization phase of an action potential?",
    "options": [
      "A) Chemical gradient alone",
      "B) Electrical gradient alone",
      "C) Combined electrochemical gradient",
      "D) Concentration gradient of potassium",
      "E) Equilibrium potential of sodium"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Chemical gradient contributes but is not the sole factor.",
      "Incorrect: Electrical gradient aids sodium influx but cannot act independently.",
      "Correct: The combined electrochemical gradient drives sodium influx during depolarization.",
      "Incorrect: Potassium concentration gradient governs potassium efflux, not sodium influx.",
      "Incorrect: Sodium equilibrium potential determines the peak of depolarization, not its initiation."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "What is the primary effect of the relative refractory period on action potential generation?",
    "options": [
      "A) Completely prevents action potential generation",
      "B) Requires a smaller stimulus to generate an action potential",
      "C) Requires a larger stimulus to overcome hyperpolarization",
      "D) Reduces the size of generated action potentials",
      "E) Enhances sodium channel activation"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Action potentials can still be generated with a strong enough stimulus.",
      "Incorrect: The relative refractory period requires a larger, not smaller, stimulus.",
      "Correct: The relative refractory period involves hyperpolarization, requiring a larger stimulus to initiate an action potential.",
      "Incorrect: Action potential size remains consistent once generated.",
      "Incorrect: Sodium channel activation occurs during depolarization, not the relative refractory period."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "How does unidirectional propagation of action potentials occur in an excitable membrane?",
    "options": [
      "A) By activation of sodium channels in both directions",
      "B) By inactivation of sodium channels in the refractory region",
      "C) By increased potassium conductance in adjacent regions",
      "D) By localized depolarizing currents exceeding the threshold",
      "E) By continuous activation of voltage-gated ion channels"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Sodium channels are activated only in the excitable region ahead of the action potential.",
      "Correct: Sodium channel inactivation in the refractory region prevents backward propagation.",
      "Incorrect: Potassium conductance aids repolarization but does not establish unidirectionality.",
      "Incorrect: Local currents initiate propagation but do not ensure directional flow.",
      "Incorrect: Continuous activation applies to propagation overall but not unidirectionality."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "Which factor primarily explains the rapid depolarization during the action potential peak?",
    "options": [
      "A) Increased potassium ion permeability",
      "B) Decreased membrane resistance",
      "C) High sodium ion conductance due to voltage-gated channels",
      "D) Activation of leak channels",
      "E) Inactivation of potassium channels"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Potassium ion permeability increases during repolarization, not depolarization.",
      "Incorrect: Membrane resistance decreases as ion channels open, but rapid depolarization is mainly due to sodium ion influx.",
      "Correct: Voltage-gated sodium channels opening causes a sharp increase in sodium conductance, leading to rapid depolarization.",
      "Incorrect: Leak channels contribute to resting potential, not action potential dynamics.",
      "Incorrect: Potassium channels do not inactivate during depolarization."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "What primarily causes the hyperpolarization observed after an action potential?",
    "options": [
      "A) Sodium channel inactivation",
      "B) Elevated potassium permeability beyond resting levels",
      "C) Reduced sodium ion permeability",
      "D) Activation of voltage-gated calcium channels",
      "E) Refractory properties of the membrane"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Sodium channel inactivation prevents further depolarization but does not cause hyperpolarization.",
      "Correct: Increased potassium permeability leads to an efflux of potassium ions, making the membrane potential more negative than the resting level.",
      "Incorrect: Reduced sodium permeability stops depolarization but is not responsible for hyperpolarization.",
      "Incorrect: Calcium channels are not directly involved in hyperpolarization after an action potential.",
      "Incorrect: Refractory properties ensure unidirectionality but do not explain hyperpolarization."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "What determines the absolute refractory period during action potential propagation?",
    "options": [
      "A) Inactivation of potassium channels",
      "B) Sodium channel inactivation",
      "C) Hyperpolarization caused by potassium efflux",
      "D) Reduced responsiveness of leak channels",
      "E) Increased threshold for action potential generation"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Potassium channel inactivation does not occur; potassium channels remain active during repolarization.",
      "Correct: Sodium channel inactivation prevents any further action potential generation during the absolute refractory period.",
      "Incorrect: Hyperpolarization occurs during the relative refractory period, not the absolute refractory period.",
      "Incorrect: Leak channels contribute to resting potential and are not relevant to the refractory period.",
      "Incorrect: Increased threshold is a feature of the relative refractory period, not the absolute refractory period."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "Why does the conduction velocity increase in larger diameter axons?",
    "options": [
      "A) Higher density of ion channels",
      "B) Greater surface area for ion exchange",
      "C) Reduced electrical resistance along the axoplasm",
      "D) Enhanced activity of voltage-gated channels",
      "E) Increased number of nodes of Ranvier"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Ion channel density is not dependent on axon diameter.",
      "Incorrect: Surface area contributes but does not directly impact conduction velocity.",
      "Correct: Larger axons have reduced electrical resistance, allowing faster current spread along the axoplasm.",
      "Incorrect: Voltage-gated channel activity is consistent regardless of axon size.",
      "Incorrect: Nodes of Ranvier are spaced regularly but their number is unrelated to axon diameter."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "What mechanism enables unidirectional propagation of action potentials along myelinated axons?",
    "options": [
      "A) Continuous depolarization along the axon",
      "B) Activation of voltage-gated channels exclusively at the nodes of Ranvier",
      "C) Suppression of ionic conductance in myelinated regions",
      "D) Enhanced potassium ion permeability in refractory regions",
      "E) Increased membrane capacitance in myelinated segments"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Continuous depolarization occurs in unmyelinated axons.",
      "Correct: Voltage-gated channels are concentrated at the nodes of Ranvier, enabling saltatory conduction and ensuring unidirectional propagation.",
      "Incorrect: Myelinated regions are insulated but do not suppress conductance entirely.",
      "Incorrect: Potassium permeability is unrelated to unidirectional propagation in myelinated axons.",
      "Incorrect: Membrane capacitance decreases in myelinated regions due to insulation."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "Which feature of voltage-gated sodium channels prevents the generation of a second action potential during the absolute refractory period?",
    "options": [
      "A) Slow opening kinetics of sodium channels",
      "B) Complete inactivation of sodium channels",
      "C) Increased permeability to potassium ions",
      "D) Depolarization-driven activation of leak channels",
      "E) Hyperpolarization beyond the resting potential"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Sodium channels open rapidly during depolarization.",
      "Correct: Complete inactivation of sodium channels prevents further action potentials.",
      "Incorrect: Increased potassium permeability occurs during repolarization.",
      "Incorrect: Leak channels regulate resting potential, not refractory dynamics.",
      "Incorrect: Hyperpolarization is a feature of the relative refractory period, not the absolute."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "How does the electrochemical gradient for potassium ions change during the peak of the action potential?",
    "options": [
      "A) Both electrical and chemical gradients oppose potassium efflux",
      "B) Chemical gradient drives potassium efflux while electrical gradient opposes it",
      "C) Electrical gradient drives potassium influx while chemical gradient opposes it",
      "D) Both gradients promote potassium influx",
      "E) Gradients are balanced, leading to no net movement of potassium"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The electrical gradient opposes, not aligns with, potassium efflux.",
      "Correct: At the action potential peak, the chemical gradient drives potassium efflux, but the electrical gradient opposes it.",
      "Incorrect: Potassium efflux is not driven by the electrical gradient.",
      "Incorrect: Gradients do not align to promote influx.",
      "Incorrect: Gradients are not balanced; movement is determined by their interaction."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "What factor most directly contributes to the 'overshoot' phase of an action potential?",
    "options": [
      "A) Prolonged opening of voltage-gated sodium channels",
      "B) Delayed closure of voltage-gated potassium channels",
      "C) Rapid inactivation of sodium channels",
      "D) Equilibrium potential of sodium approaching the membrane potential",
      "E) Leakage of ions through non-gated channels"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Prolonged sodium channel opening occurs during depolarization, not overshoot.",
      "Incorrect: Delayed potassium channel closure is related to repolarization.",
      "Incorrect: Sodium channel inactivation terminates depolarization but does not cause overshoot.",
      "Correct: The overshoot occurs as the membrane potential approaches sodium's equilibrium potential.",
      "Incorrect: Non-gated channels contribute to resting potential, not overshoot."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "Which characteristic of local circuit currents ensures efficient propagation of action potentials in unmyelinated axons?",
    "options": [
      "A) Bidirectional spread of depolarizing currents",
      "B) Concentration of sodium channels at nodes of Ranvier",
      "C) High density of voltage-gated potassium channels along the axon",
      "D) Unidirectional propagation due to refractory properties",
      "E) Activation of leak channels maintaining ion balance"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Depolarizing currents spread bidirectionally but refractory properties prevent reverse propagation.",
      "Incorrect: Nodes of Ranvier are present only in myelinated axons.",
      "Incorrect: Voltage-gated potassium channels contribute to repolarization but not propagation directionality.",
      "Correct: Unidirectional propagation is ensured by refractory properties of the membrane.",
      "Incorrect: Leak channels regulate resting potential, not propagation dynamics."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "What is the primary advantage of saltatory conduction in myelinated axons?",
    "options": [
      "A) Reduction in refractory period duration",
      "B) Increased density of ion channels along the axon",
      "C) Enhanced speed of conduction due to insulation and local current amplification",
      "D) Prevention of ion leakage across the membrane",
      "E) Simultaneous activation of all nodes of Ranvier"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Refractory period duration remains unaffected by saltatory conduction.",
      "Incorrect: Ion channel density is concentrated at nodes but not increased overall.",
      "Correct: Saltatory conduction speeds up propagation by insulating axons and amplifying local currents at nodes of Ranvier.",
      "Incorrect: Prevention of ion leakage is a secondary effect of insulation, not the primary advantage.",
      "Incorrect: Nodes of Ranvier activate sequentially during conduction."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "What is the primary role of leak channels in maintaining the resting membrane potential?",
    "options": [
      "A) Allowing unidirectional propagation of action potentials",
      "B) Ensuring equal distribution of sodium and potassium ions",
      "C) Generating the negative resting membrane potential by selective ion permeability",
      "D) Facilitating rapid depolarization during action potentials",
      "E) Preventing hyperpolarization of the membrane"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Leak channels are unrelated to action potential propagation.",
      "Incorrect: Ion distribution is not equal; potassium leak channels dominate.",
      "Correct: Leak channels selectively permit ion flow, generating a negative resting potential.",
      "Incorrect: Depolarization is driven by voltage-gated sodium channels.",
      "Incorrect: Leak channels do not directly prevent hyperpolarization."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "Why does potassium ion conductance peak later than sodium ion conductance during an action potential?",
    "options": [
      "A) Potassium channels open more slowly than sodium channels",
      "B) Potassium channels are blocked during depolarization",
      "C) Sodium channels inactivate faster than potassium channels open",
      "D) Potassium channels require hyperpolarization to activate",
      "E) Potassium conductance does not peak during action potentials"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Potassium channels have slower opening kinetics compared to sodium channels.",
      "Incorrect: Potassium channels are not blocked during depolarization.",
      "Incorrect: Sodium channel inactivation is unrelated to potassium channel activation timing.",
      "Incorrect: Potassium channels activate due to depolarization, not hyperpolarization.",
      "Incorrect: Potassium conductance peaks during repolarization of the action potential."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "What feature of sodium channels is responsible for the 'overshoot' phase of an action potential?",
    "options": [
      "A) Delayed inactivation of sodium channels",
      "B) High permeability of potassium ions",
      "C) Increased sodium conductance approaching its equilibrium potential",
      "D) Activation of leak channels",
      "E) Reduced permeability of sodium ions during depolarization"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Sodium channel inactivation occurs after the overshoot phase.",
      "Incorrect: Potassium ions dominate during repolarization, not the overshoot.",
      "Correct: Increased sodium conductance brings the membrane potential close to sodium's equilibrium potential.",
      "Incorrect: Leak channels maintain resting potential but do not contribute to overshoot.",
      "Incorrect: Sodium conductance increases during depolarization, not decreases."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "What is the most significant factor limiting the frequency of action potentials in a neuron?",
    "options": [
      "A) Sodium equilibrium potential",
      "B) Resting membrane potential",
      "C) Duration of the absolute refractory period",
      "D) Ionic concentration gradients across the membrane",
      "E) Relative permeability of chloride ions"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Sodium equilibrium potential determines peak depolarization but not frequency.",
      "Incorrect: Resting membrane potential is the starting state, not a limiting factor.",
      "Correct: The absolute refractory period ensures that no additional action potentials occur during this time.",
      "Incorrect: Ionic gradients are necessary for action potentials but do not set frequency limits.",
      "Incorrect: Chloride permeability affects inhibition, not action potential frequency."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "Which factor most influences the ability of myelinated axons to conduct action potentials rapidly?",
    "options": [
      "A) Increased density of ion channels along the axon",
      "B) Decreased membrane capacitance in myelinated regions",
      "C) Faster recovery from the absolute refractory period",
      "D) Higher axon diameter in myelinated fibers",
      "E) Continuous conduction along myelin-covered segments"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Ion channels are concentrated at the nodes of Ranvier, not along the entire axon.",
      "Correct: Myelination decreases membrane capacitance, enabling faster current flow and conduction.",
      "Incorrect: Refractory period recovery remains unchanged by myelination.",
      "Incorrect: Larger diameter enhances velocity but is not specific to myelination.",
      "Incorrect: Conduction in myelinated regions is saltatory, not continuous."
    ],
    "slideLink": "Lecture19_FOCS.pdf"
  },
  {
    "question": "What feature of DNA replication ensures that each new DNA molecule is accurate?",
    "options": [
      "A) Semi-conservative replication",
      "B) Proofreading ability of DNA polymerase",
      "C) DNA ligase activity",
      "D) Use of RNA primers",
      "E) High fidelity of transcription processes"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Semi-conservative replication explains the copying mechanism but does not directly ensure accuracy.",
      "Correct: DNA polymerase's proofreading ability plays a crucial role in reducing errors during replication.",
      "Incorrect: DNA ligase joins fragments but does not influence replication accuracy.",
      "Incorrect: RNA primers are essential for initiating replication but do not directly ensure accuracy.",
      "Incorrect: Transcription fidelity is unrelated to DNA replication."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "Which property of RNA differentiates it from DNA in terms of chemical structure?",
    "options": [
      "A) RNA contains thymine instead of uracil",
      "B) RNA is double-stranded",
      "C) RNA contains ribose sugar",
      "D) RNA lacks phosphate groups",
      "E) RNA has a more stable structure compared to DNA"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: RNA contains uracil, not thymine.",
      "Incorrect: RNA is single-stranded, unlike DNA.",
      "Correct: RNA has ribose sugar, which distinguishes it from DNA’s deoxyribose.",
      "Incorrect: RNA does have phosphate groups.",
      "Incorrect: RNA is less stable than DNA due to the presence of hydroxyl groups."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "In the context of transcription, what is the role of the TATA box?",
    "options": [
      "A) Signals the termination of transcription",
      "B) Enhances mRNA stability post-transcription",
      "C) Serves as the binding site for transcription factors",
      "D) Facilitates RNA splicing",
      "E) Provides a template for translation"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The TATA box signals the start, not termination, of transcription.",
      "Incorrect: mRNA stability is unrelated to the TATA box.",
      "Correct: The TATA box acts as a promoter region where transcription factors bind.",
      "Incorrect: RNA splicing happens later in the transcription process.",
      "Incorrect: The TATA box is not involved in translation."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "What is the significance of Okazaki fragments in DNA replication?",
    "options": [
      "A) They are synthesized on the leading strand continuously.",
      "B) They are short DNA fragments formed during lagging strand synthesis.",
      "C) They are responsible for the proofreading function of DNA polymerase.",
      "D) They initiate the process of transcription.",
      "E) They act as a promoter for replication."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Okazaki fragments are formed on the lagging strand, not the leading strand.",
      "Correct: Okazaki fragments are short pieces of DNA synthesized discontinuously on the lagging strand.",
      "Incorrect: Proofreading is a separate function carried out by DNA polymerase.",
      "Incorrect: Transcription is unrelated to Okazaki fragments.",
      "Incorrect: Okazaki fragments do not act as promoters."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "Which mechanism ensures the correct sequence of amino acids during translation?",
    "options": [
      "A) The proofreading ability of DNA polymerase",
      "B) The anticodon-codon pairing in tRNA and mRNA",
      "C) The presence of transcription factors",
      "D) RNA splicing to remove introns",
      "E) Formation of Okazaki fragments"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: DNA polymerase is involved in replication, not translation.",
      "Correct: The anticodon-codon pairing in tRNA and mRNA ensures the accuracy of amino acid incorporation during translation.",
      "Incorrect: Transcription factors regulate transcription, not translation.",
      "Incorrect: RNA splicing removes introns but does not influence translation.",
      "Incorrect: Okazaki fragments are part of replication, not translation."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "Which structural component of DNA facilitates its ability to serve as a template during replication?",
    "options": [
      "A) Double-stranded helix with anti-parallel strands",
      "B) Presence of ribose sugar in DNA backbone",
      "C) High stability of hydrogen bonds between identical bases",
      "D) Enzymatic activity of RNA polymerase",
      "E) Alternative splicing mechanisms in DNA"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: The double-stranded helix with anti-parallel strands allows each strand to serve as a template during replication.",
      "Incorrect: DNA uses deoxyribose, not ribose, which does not play a role in template function.",
      "Incorrect: Hydrogen bonds form between complementary bases, not identical bases.",
      "Incorrect: RNA polymerase is involved in transcription, not replication.",
      "Incorrect: Alternative splicing applies to RNA, not DNA."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "What key characteristic of promoter regions makes them essential for transcription initiation?",
    "options": [
      "A) They signal the termination of transcription.",
      "B) They encode the RNA polymerase enzyme.",
      "C) They provide binding sites for transcription factors.",
      "D) They enhance RNA stability post-transcription.",
      "E) They form Okazaki fragments during replication."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Promoters signal the start, not termination, of transcription.",
      "Incorrect: Promoters do not encode enzymes.",
      "Correct: Promoters contain binding sites for transcription factors, allowing RNA polymerase to initiate transcription.",
      "Incorrect: RNA stability is regulated post-transcription, not by promoters.",
      "Incorrect: Okazaki fragments are formed during replication, not transcription."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "Which enzyme ensures the high fidelity of DNA replication through mismatch repair?",
    "options": [
      "A) RNA polymerase",
      "B) DNA helicase",
      "C) DNA ligase",
      "D) DNA polymerase",
      "E) Ribosome"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: RNA polymerase is involved in transcription, not replication.",
      "Incorrect: DNA helicase unwinds the DNA helix but does not perform mismatch repair.",
      "Incorrect: DNA ligase joins Okazaki fragments but is not involved in proofreading.",
      "Correct: DNA polymerase performs mismatch repair to ensure replication fidelity.",
      "Incorrect: Ribosomes are part of translation, not replication."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "During mRNA processing, what modification occurs at the 5' end of the molecule?",
    "options": [
      "A) Addition of a poly-A tail",
      "B) Removal of exons via splicing",
      "C) Addition of a 5' cap",
      "D) Replacement of thymine with uracil",
      "E) Elongation of the RNA sequence"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The poly-A tail is added to the 3' end, not the 5' end.",
      "Incorrect: Exons are joined, not removed, during splicing.",
      "Correct: The addition of a 5' cap stabilizes the mRNA and aids in translation.",
      "Incorrect: Thymine is replaced with uracil during transcription, not in mRNA processing.",
      "Incorrect: Elongation occurs during transcription, not processing."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "Which key feature of tRNA allows it to ensure the correct incorporation of amino acids during translation?",
    "options": [
      "A) Presence of complementary promoter sequences",
      "B) Anticodon-codon pairing with mRNA",
      "C) Ability to form Okazaki fragments",
      "D) Proofreading function of ribosome",
      "E) Alternative splicing of exons"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Promoter sequences are part of transcription initiation, not tRNA.",
      "Correct: The anticodon on tRNA pairs with the codon on mRNA, ensuring correct amino acid incorporation.",
      "Incorrect: Okazaki fragments are related to DNA replication, not tRNA.",
      "Incorrect: Ribosomes do not proofread; they facilitate translation.",
      "Incorrect: Alternative splicing occurs in mRNA, not tRNA."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "What characteristic of the leading strand allows continuous DNA synthesis during replication?",
    "options": [
      "A) Presence of RNA primers throughout synthesis",
      "B) Synthesis occurs toward the replication fork in the 3' direction",
      "C) Inclusion of Okazaki fragments",
      "D) Transcription factors facilitate strand synthesis",
      "E) Template strand contains repetitive sequences"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: RNA primers are required for initiation but not throughout synthesis.",
      "Correct: DNA polymerase synthesizes continuously in the 5' to 3' direction toward the replication fork.",
      "Incorrect: Okazaki fragments are specific to the lagging strand.",
      "Incorrect: Transcription factors are involved in transcription, not DNA replication.",
      "Incorrect: The template strand sequence does not determine synthesis directionality."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "Which aspect of RNA processing stabilizes mRNA and facilitates translation?",
    "options": [
      "A) Addition of a poly-A tail",
      "B) Removal of exons during splicing",
      "C) Inclusion of Okazaki fragments",
      "D) Binding of ribosomes to promoter regions",
      "E) Incorporation of anticodons into RNA"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: The poly-A tail stabilizes mRNA and enhances translation efficiency.",
      "Incorrect: Exons are joined during splicing, not removed.",
      "Incorrect: Okazaki fragments are unrelated to RNA processing.",
      "Incorrect: Ribosomes bind to mRNA during translation, not to promoters.",
      "Incorrect: Anticodons are part of tRNA, not mRNA."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "What property of ribosomes enables translation of mRNA into proteins?",
    "options": [
      "A) Ability to unwind the DNA helix",
      "B) Presence of E, P, and A sites for tRNA binding",
      "C) Proofreading mRNA sequences during replication",
      "D) Insertion of introns into mRNA",
      "E) Promotion of spliceosome assembly"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Ribosomes do not unwind DNA; they interact with mRNA.",
      "Correct: Ribosomes have E, P, and A sites to facilitate tRNA binding and protein synthesis.",
      "Incorrect: Proofreading is performed by DNA polymerase during replication.",
      "Incorrect: Introns are removed during splicing, not inserted.",
      "Incorrect: Spliceosome assembly relates to RNA processing, not translation."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "Which mechanism ensures that transcription begins correctly at the start codon?",
    "options": [
      "A) Binding of RNA polymerase to the terminator",
      "B) Functionality of the spliceosome during transcription",
      "C) Presence of a promoter region and TATA box",
      "D) Addition of anticodons to RNA",
      "E) Formation of Okazaki fragments"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Terminator regions signal the end of transcription.",
      "Incorrect: Spliceosomes function after transcription, not during initiation.",
      "Correct: Promoter regions and TATA box ensure accurate initiation by RNA polymerase.",
      "Incorrect: Anticodons are specific to tRNA and translation.",
      "Incorrect: Okazaki fragments occur during DNA replication."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "What fundamental property of the genetic code prevents errors during translation?",
    "options": [
      "A) Redundancy of codons for amino acids",
      "B) Complementary pairing of RNA primers",
      "C) Proofreading by RNA polymerase",
      "D) Removal of exons during splicing",
      "E) Presence of methyl groups on mRNA"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Redundancy in codons ensures that errors in base pairing do not always alter the amino acid.",
      "Incorrect: RNA primers are used in replication, not translation.",
      "Incorrect: RNA polymerase proofreads during transcription, not translation.",
      "Incorrect: Exons are joined during splicing, not removed.",
      "Incorrect: Methyl groups stabilize mRNA but do not prevent translation errors."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "Which property of DNA is most crucial for its ability to store genetic information?",
    "options": [
      "A) Its double-helix structure",
      "B) Complementary base pairing",
      "C) Stability provided by the sugar-phosphate backbone",
      "D) Presence of uracil instead of thymine",
      "E) Its ability to form Okazaki fragments"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The double-helix structure supports replication but does not directly contribute to information storage.",
      "Correct: Complementary base pairing enables accurate storage and transfer of genetic information.",
      "Incorrect: The sugar-phosphate backbone provides stability but is not the primary factor for information storage.",
      "Incorrect: DNA uses thymine, not uracil, for its base pairing.",
      "Incorrect: Okazaki fragments are specific to DNA replication."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "What distinguishes the process of mRNA splicing in eukaryotes?",
    "options": [
      "A) Removal of exons to form the mature mRNA",
      "B) Addition of a 5' cap and poly-A tail",
      "C) Removal of introns and joining of exons",
      "D) Incorporation of tRNA into the transcript",
      "E) Insertion of promoter sequences into the mRNA"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Exons are retained, not removed, in the mature mRNA.",
      "Incorrect: The addition of a 5' cap and poly-A tail occurs but is separate from splicing.",
      "Correct: Introns are removed and exons are joined during mRNA splicing.",
      "Incorrect: tRNA is not part of the mRNA splicing process.",
      "Incorrect: Promoter sequences are not inserted into the mRNA."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "Which feature of the genetic code minimizes the impact of point mutations?",
    "options": [
      "A) Degeneracy of codons",
      "B) The presence of start and stop codons",
      "C) Introns separating coding regions",
      "D) Proofreading by ribosomes",
      "E) Directionality of mRNA translation"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Degeneracy allows multiple codons to encode the same amino acid, reducing the effects of mutations.",
      "Incorrect: Start and stop codons regulate translation but do not mitigate point mutations.",
      "Incorrect: Introns are removed before translation and do not contribute to mutation resistance.",
      "Incorrect: Ribosomes do not proofread mRNA during translation.",
      "Incorrect: Directionality ensures reading frame accuracy but does not mitigate mutations."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "What is the primary role of the ribosome's A site during translation?",
    "options": [
      "A) Facilitates peptide bond formation",
      "B) Accepts incoming aminoacyl-tRNAs",
      "C) Removes incorrectly paired codons",
      "D) Stabilizes the growing polypeptide chain",
      "E) Regulates the start of transcription"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Peptide bond formation occurs at the P site.",
      "Correct: The A site binds incoming aminoacyl-tRNAs during translation.",
      "Incorrect: Incorrect codons are not removed by the ribosome.",
      "Incorrect: Stabilization of the polypeptide chain occurs at the P site.",
      "Incorrect: Transcription is a separate process from translation."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "Which mechanism ensures accurate DNA synthesis during replication?",
    "options": [
      "A) Use of RNA primers",
      "B) Proofreading by DNA polymerase",
      "C) Activity of helicase at the replication fork",
      "D) Joining of Okazaki fragments by ligase",
      "E) Formation of nucleosomes"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: RNA primers initiate synthesis but do not ensure accuracy.",
      "Correct: DNA polymerase proofreads and corrects mismatched nucleotides during replication.",
      "Incorrect: Helicase unwinds DNA but does not ensure accuracy.",
      "Incorrect: Ligase joins Okazaki fragments but does not directly influence accuracy.",
      "Incorrect: Nucleosome formation relates to DNA packaging, not replication accuracy."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "Which structural feature of eukaryotic chromosomes aids in packaging large amounts of DNA within the nucleus?",
    "options": [
      "A) Presence of telomeres at chromosome ends",
      "B) Organization into nucleosomes",
      "C) Attachment to the nuclear envelope",
      "D) Formation of transcription factors",
      "E) Continuous replication of DNA strands"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Telomeres protect chromosome ends but do not directly aid packaging.",
      "Correct: Nucleosomes formed by histone proteins enable efficient DNA packaging.",
      "Incorrect: Chromosomes are not attached to the nuclear envelope during packaging.",
      "Incorrect: Transcription factors regulate gene expression, unrelated to packaging.",
      "Incorrect: DNA replication is unrelated to physical chromosome packaging."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "What ensures the accuracy of base pairing during DNA replication?",
    "options": [
      "A) Action of topoisomerase enzymes",
      "B) Proofreading by DNA polymerase",
      "C) DNA ligase activity",
      "D) Removal of introns during transcription",
      "E) Complementary binding of histone proteins"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Topoisomerase prevents supercoiling but does not impact base pairing.",
      "Correct: DNA polymerase proofreads and corrects mismatched nucleotides during replication.",
      "Incorrect: DNA ligase joins fragments but does not affect base pairing.",
      "Incorrect: Removal of introns occurs in transcription, unrelated to replication.",
      "Incorrect: Histones are involved in packaging, not replication."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "What is the primary function of exons in eukaryotic genes?",
    "options": [
      "A) They encode proteins.",
      "B) They serve as binding sites for transcription factors.",
      "C) They are removed during mRNA processing.",
      "D) They signal the start of translation.",
      "E) They regulate the attachment of ribosomes."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Exons are coding regions of genes responsible for encoding proteins.",
      "Incorrect: Binding sites for transcription factors are located in promoter regions.",
      "Incorrect: Exons are retained, not removed, during mRNA processing.",
      "Incorrect: Translation starts with the initiation codon, not exons specifically.",
      "Incorrect: Exons do not directly regulate ribosome attachment."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "Which process occurs during transcription in eukaryotic cells?",
    "options": [
      "A) Synthesis of Okazaki fragments",
      "B) Creation of poly-A tails on mRNA",
      "C) Complementary RNA synthesis from a DNA template",
      "D) Removal of introns and joining of exons",
      "E) Formation of ribosomes"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Okazaki fragments are formed during DNA replication.",
      "Incorrect: Poly-A tails are added after transcription during mRNA processing.",
      "Correct: RNA polymerase synthesizes complementary RNA from the DNA template during transcription.",
      "Incorrect: Removal of introns occurs during mRNA splicing, post-transcription.",
      "Incorrect: Ribosome formation is unrelated to transcription."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "What feature of mRNA enhances its stability and protects it from degradation?",
    "options": [
      "A) Addition of introns during splicing",
      "B) Formation of Okazaki fragments",
      "C) Attachment of a 5' cap and poly-A tail",
      "D) Incorporation of codons into the sequence",
      "E) Conversion into a double-stranded structure"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Introns are removed during splicing and do not enhance stability.",
      "Incorrect: Okazaki fragments are DNA features, unrelated to mRNA.",
      "Correct: The 5' cap and poly-A tail protect mRNA from degradation and improve stability.",
      "Incorrect: Codons encode amino acids but do not directly protect mRNA.",
      "Incorrect: mRNA remains single-stranded for translation."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "Which specific characteristic of DNA enables semi-conservative replication?",
    "options": [
      "A) The antiparallel orientation of DNA strands",
      "B) The ability of DNA to form hydrogen bonds with RNA",
      "C) Complementary base pairing between purines and pyrimidines",
      "D) The presence of ribose sugars in the DNA backbone",
      "E) The methylation of cytosine residues"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Antiparallel orientation supports the overall structure but does not directly enable replication.",
      "Incorrect: DNA does not form hydrogen bonds with RNA during replication.",
      "Correct: Complementary base pairing ensures that each strand can act as a template for the formation of a new complementary strand.",
      "Incorrect: DNA contains deoxyribose, not ribose, which does not play a role in semi-conservative replication.",
      "Incorrect: Methylation relates to gene expression, not replication."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "What aspect of the ribosome facilitates peptide bond formation during translation?",
    "options": [
      "A) The catalytic role of rRNA within the large subunit",
      "B) Binding of transcription factors to the ribosome",
      "C) The movement of tRNA through the E site",
      "D) Proofreading activity of RNA polymerase",
      "E) Formation of Okazaki fragments at the ribosome"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: The ribosomal RNA (rRNA) in the large subunit acts as a ribozyme to catalyze peptide bond formation.",
      "Incorrect: Transcription factors regulate gene expression and do not interact with ribosomes during translation.",
      "Incorrect: The E site facilitates tRNA exit but does not catalyze peptide bond formation.",
      "Incorrect: RNA polymerase is involved in transcription, not translation.",
      "Incorrect: Okazaki fragments are part of DNA replication, not translation."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "How does alternative splicing contribute to protein diversity?",
    "options": [
      "A) By introducing random mutations into exons",
      "B) By removing introns and retaining exons in varying combinations",
      "C) By synthesizing complementary RNA strands during transcription",
      "D) By incorporating ribosomal RNA into the final protein product",
      "E) By creating repetitive sequences in the genome"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Mutations do not occur during splicing but may arise from DNA replication errors.",
      "Correct: Alternative splicing allows different exons to be included in the mature mRNA, producing diverse proteins.",
      "Incorrect: Complementary RNA synthesis occurs during transcription, not splicing.",
      "Incorrect: Ribosomal RNA is not part of the protein product; it facilitates translation.",
      "Incorrect: Repetitive sequences are a feature of the genome, unrelated to alternative splicing."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "Which component of transcription ensures that RNA polymerase begins at the correct location?",
    "options": [
      "A) The promoter region",
      "B) The 5' cap of the mRNA",
      "C) The spliceosome complex",
      "D) Okazaki fragments",
      "E) Telomeric sequences"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: The promoter region contains specific sequences like the TATA box that signal RNA polymerase where to start transcription.",
      "Incorrect: The 5' cap is added after transcription and is unrelated to its initiation.",
      "Incorrect: The spliceosome modifies RNA post-transcription, not during its initiation.",
      "Incorrect: Okazaki fragments are related to lagging strand DNA replication.",
      "Incorrect: Telomeric sequences maintain chromosome ends, unrelated to transcription."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "What feature of the genetic code prevents errors from completely altering protein function?",
    "options": [
      "A) Its non-overlapping nature",
      "B) The use of introns in coding regions",
      "C) The redundancy in codon assignments for amino acids",
      "D) The presence of uracil in RNA",
      "E) Proofreading by ribosomal subunits during translation"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The non-overlapping nature ensures codons are read independently but does not mitigate errors.",
      "Incorrect: Introns are non-coding sequences removed before translation.",
      "Correct: Redundancy (degeneracy) allows multiple codons to encode the same amino acid, minimizing the effect of some mutations.",
      "Incorrect: Uracil is present in RNA but does not relate to the genetic code's error prevention.",
      "Incorrect: Ribosomes do not perform proofreading during translation."
    ],
    "slideLink": "Lecture20_FOCS.pdf"
  },
  {
    "question": "What structural component of a chromosome ensures the stability of its ends?",
    "options": [
      "A) Centromere",
      "B) Telomere",
      "C) p arm",
      "D) q arm",
      "E) Euchromatin"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The centromere is crucial for chromatid attachment but does not stabilize chromosome ends.",
      "Correct: Telomeres act as protective caps that prevent chromosomal degradation.",
      "Incorrect: The p arm is the shorter arm of the chromosome but doesn't stabilize its ends.",
      "Incorrect: The q arm is the longer arm of the chromosome, unrelated to end stability.",
      "Incorrect: Euchromatin is an accessible region for gene activity, not end protection."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "What chromosomal arrangement is typical of a human diploid cell?",
    "options": [
      "A) 23 chromosomes",
      "B) 46 chromosomes",
      "C) 22 autosomes",
      "D) 44 autosomes",
      "E) 22 pairs of sex chromosomes"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: 23 chromosomes are found in haploid cells like gametes.",
      "Correct: A diploid cell contains 46 chromosomes, including autosomes and sex chromosomes.",
      "Incorrect: 22 autosomes make up a single set; diploid cells have 44 autosomes in pairs.",
      "Incorrect: 44 autosomes are included but exclude sex chromosomes.",
      "Incorrect: Humans have one pair of sex chromosomes, not 22 pairs."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "During meiosis, how is genetic diversity increased in gametes?",
    "options": [
      "A) Chromosomal duplication",
      "B) Crossing over",
      "C) Telomere replication",
      "D) Nuclear division",
      "E) Cytokinesis"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Chromosomal duplication precedes meiosis but doesn't contribute directly to diversity.",
      "Correct: Crossing over allows exchange of DNA segments between homologous chromosomes, promoting diversity.",
      "Incorrect: Telomere replication ensures chromosome integrity but doesn't affect diversity.",
      "Incorrect: Nuclear division separates chromosomes but doesn't enhance diversity.",
      "Incorrect: Cytokinesis divides the cytoplasm without influencing genetic diversity."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "Which chromosomal abnormality is commonly associated with infertility and recurrent miscarriages?",
    "options": [
      "A) Autosomal translocation",
      "B) Aneuploidy",
      "C) Structural deletion",
      "D) Ring chromosomes",
      "E) Heteroplasmy"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Autosomal translocations can affect reproduction but are not the most common cause.",
      "Correct: Aneuploidy, an abnormal number of chromosomes, frequently causes infertility and miscarriages.",
      "Incorrect: Structural deletions may contribute but are less common.",
      "Incorrect: Ring chromosomes are rare and not the primary abnormality associated.",
      "Incorrect: Heteroplasmy refers to mitochondrial DNA variation, unrelated to chromosomal abnormalities."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "What distinguishes mitochondrial DNA (mtDNA) from nuclear DNA?",
    "options": [
      "A) Circular structure",
      "B) Presence of introns",
      "C) Linear arrangement",
      "D) Number of chromosomes",
      "E) Telomere protection"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Mitochondrial DNA has a circular structure, unlike linear nuclear DNA.",
      "Incorrect: mtDNA lacks introns, unlike nuclear DNA.",
      "Incorrect: Nuclear DNA is linear; mtDNA is circular.",
      "Incorrect: mtDNA is present as a single chromosome, not multiple.",
      "Incorrect: Telomere protection applies to nuclear chromosomes, not mtDNA."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "Which chromosomal feature is key in distinguishing metacentric chromosomes from acrocentric chromosomes?",
    "options": [
      "A) Presence of telomeres",
      "B) Position of the centromere",
      "C) Banding pattern",
      "D) Length of the q arm",
      "E) Number of chromatids"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Telomeres are present in all chromosomes and do not distinguish types.",
      "Correct: Metacentric chromosomes have a centromere centrally located, while acrocentric chromosomes have it closer to one end.",
      "Incorrect: Banding patterns provide information but do not determine chromosome type.",
      "Incorrect: The q arm length varies but is not a defining feature.",
      "Incorrect: Chromatids are identical across chromosome types."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "What is the primary role of heterochromatin in chromosomes?",
    "options": [
      "A) Encoding protein-coding genes",
      "B) Protecting chromosome ends",
      "C) Facilitating DNA repair",
      "D) Maintaining chromosomal structure and stability",
      "E) Promoting gene accessibility"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Protein-coding genes are found primarily in euchromatin, not heterochromatin.",
      "Incorrect: Chromosome end protection is the role of telomeres.",
      "Incorrect: DNA repair is not the primary function of heterochromatin.",
      "Correct: Heterochromatin maintains structural integrity and stability of chromosomes.",
      "Incorrect: Gene accessibility is facilitated by euchromatin, not heterochromatin."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "Which abnormality is most likely associated with mosaic somatic loss of the Y chromosome?",
    "options": [
      "A) Increased risk of Turner syndrome",
      "B) Elevated cancer mortality",
      "C) Infertility due to aneuploidy",
      "D) Developmental delay",
      "E) Alzheimer's disease and cardiovascular issues"
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorrect: Turner syndrome is unrelated to loss of the Y chromosome.",
      "Incorrect: Mosaic loss alone is not directly linked to cancer mortality.",
      "Incorrect: Aneuploidy does not explain mosaic loss.",
      "Incorrect: Developmental delay arises from other chromosomal abnormalities.",
      "Correct: Mosaic somatic loss of the Y chromosome has been associated with Alzheimer's disease and cardiovascular complications."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "What defines the exchange of genetic material between non-homologous chromosomes?",
    "options": [
      "A) Homologous recombination",
      "B) Aneuploidy",
      "C) Reciprocal translocation",
      "D) Structural deletion",
      "E) Insertion"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Homologous recombination occurs between homologous chromosomes.",
      "Incorrect: Aneuploidy refers to abnormal chromosome numbers, not material exchange.",
      "Correct: Reciprocal translocation involves swapping genetic material between non-homologous chromosomes.",
      "Incorrect: Deletions involve loss of genetic material rather than exchange.",
      "Incorrect: Insertion refers to addition of genetic material, not swapping."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "Which process is primarily responsible for generating haploid daughter cells during gametogenesis?",
    "options": [
      "A) Chromosome duplication",
      "B) Mitotic division",
      "C) Meiosis",
      "D) Cytoplasmic division",
      "E) DNA transcription"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Chromosome duplication occurs before gametogenesis but does not generate haploid cells.",
      "Incorrect: Mitotic division results in diploid daughter cells, not haploid.",
      "Correct: Meiosis reduces chromosome numbers by half to produce haploid cells.",
      "Incorrect: Cytoplasmic division separates the cell but does not directly influence chromosome number.",
      "Incorrect: DNA transcription synthesizes RNA, unrelated to haploid cell generation."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "What differentiates euchromatin from heterochromatin in chromosome structure?",
    "options": [
      "A) Euchromatin contains no genes",
      "B) Heterochromatin stains lighter than euchromatin",
      "C) Euchromatin has an accessible structure for gene activity",
      "D) Heterochromatin is primarily involved in recombination",
      "E) Both are equally dense in packing"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Euchromatin contains active protein-coding genes.",
      "Incorrect: Heterochromatin stains darker, not lighter.",
      "Correct: Euchromatin is loosely packed, enabling gene transcription.",
      "Incorrect: Heterochromatin is highly condensed and largely inactive.",
      "Incorrect: Density differs between euchromatin and heterochromatin."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "Which phase of mitosis is characterized by the chromosomes aligning along the equatorial plate?",
    "options": [
      "A) Prophase",
      "B) Metaphase",
      "C) Anaphase",
      "D) Telophase",
      "E) Cytokinesis"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Prophase involves chromatin condensation, not alignment.",
      "Correct: Metaphase is defined by chromosome alignment along the equatorial plate.",
      "Incorrect: Anaphase is when sister chromatids separate.",
      "Incorrect: Telophase is the final stage before cytokinesis.",
      "Incorrect: Cytokinesis involves cytoplasmic division, not chromosome alignment."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "What is the primary consequence of nondisjunction during meiosis?",
    "options": [
      "A) Formation of haploid daughter cells",
      "B) Production of genetically identical offspring",
      "C) Creation of gametes with abnormal chromosome numbers",
      "D) Increase in genetic diversity",
      "E) Enhanced recombination of homologous chromosomes"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Haploid cells are typically formed through normal meiosis.",
      "Incorrect: Genetic identity is not associated with nondisjunction.",
      "Correct: Nondisjunction leads to aneuploidy in gametes.",
      "Incorrect: Genetic diversity results from recombination, not nondisjunction.",
      "Incorrect: Nondisjunction does not enhance recombination."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "Which characteristic of mitochondrial DNA makes it distinct from nuclear DNA?",
    "options": [
      "A) Contains introns",
      "B) Inherited from both parents",
      "C) Organized as a circular molecule",
      "D) Encodes for thousands of genes",
      "E) Protected by telomeres"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Mitochondrial DNA lacks introns.",
      "Incorrect: mtDNA is maternally inherited, not biparental.",
      "Correct: Mitochondrial DNA is circular, unlike the linear nuclear DNA.",
      "Incorrect: mtDNA encodes only 37 genes.",
      "Incorrect: Telomeres are specific to nuclear chromosomes, not mtDNA."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "How does chromosomal banding assist in identifying abnormalities?",
    "options": [
      "A) It highlights telomeric regions",
      "B) It differentiates autosomes from sex chromosomes",
      "C) It provides reproducible patterns to detect structural changes",
      "D) It reveals sequence-level mutations",
      "E) It facilitates recombination analysis"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Banding focuses on overall patterns, not just telomeric regions.",
      "Incorrect: Autosomes and sex chromosomes are identified by size and centromere position.",
      "Correct: Chromosomal banding generates reproducible patterns to identify structural abnormalities.",
      "Incorrect: Banding does not provide insight into DNA sequence mutations.",
      "Incorrect: Banding is unrelated to recombination analysis."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "Which chromosome is most commonly implicated in trisomy disorders such as Down syndrome?",
    "options": [
      "A) Chromosome 21",
      "B) Chromosome 1",
      "C) Chromosome 13",
      "D) Chromosome 18",
      "E) Chromosome X"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Trisomy 21 is the chromosomal abnormality responsible for Down syndrome.",
      "Incorrect: Chromosome 1 is not typically involved in common trisomy disorders.",
      "Incorrect: Trisomy 13 is associated with Patau syndrome, not Down syndrome.",
      "Incorrect: Trisomy 18 leads to Edwards syndrome, unrelated to Down syndrome.",
      "Incorrect: Chromosome X abnormalities are not classified as trisomy disorders."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "What term describes the exchange of genetic material between chromatids within homologous chromosome pairs?",
    "options": [
      "A) Translocation",
      "B) Crossing over",
      "C) Aneuploidy",
      "D) Mutation",
      "E) Duplication"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Translocation refers to material exchange between non-homologous chromosomes.",
      "Correct: Crossing over occurs during meiosis and increases genetic diversity.",
      "Incorrect: Aneuploidy involves abnormal chromosome numbers, not recombination.",
      "Incorrect: Mutation refers to changes in the genetic code, not material exchange.",
      "Incorrect: Duplication describes extra copies of genetic material, not recombination."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "Which structural abnormality results in a chromosome with two terminal ends joined together?",
    "options": [
      "A) Inversion",
      "B) Duplication",
      "C) Ring chromosome",
      "D) Translocation",
      "E) Deletion"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Inversion involves a flipped segment within the chromosome.",
      "Incorrect: Duplication creates extra copies of genetic material, not circular chromosomes.",
      "Correct: A ring chromosome forms when the ends of a chromosome fuse together.",
      "Incorrect: Translocation exchanges genetic material between chromosomes.",
      "Incorrect: Deletion results in loss of genetic material, not circular formation."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "What feature distinguishes metacentric chromosomes from telocentric chromosomes?",
    "options": [
      "A) The absence of telomeres",
      "B) The centromere being centrally located",
      "C) The presence of heterochromatin",
      "D) A larger p arm compared to the q arm",
      "E) Telocentric chromosomes are smaller in size"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Telomeres are present in all chromosomes.",
      "Correct: Metacentric chromosomes have a centromere at the center, unlike telocentric chromosomes.",
      "Incorrect: Heterochromatin is present in both metacentric and telocentric chromosomes.",
      "Incorrect: The p arm and q arm ratios are irrelevant for differentiating types.",
      "Incorrect: Size does not determine classification."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "Which process during meiosis is responsible for halving the chromosome number in gametes?",
    "options": [
      "A) DNA replication",
      "B) Crossing over",
      "C) Meiosis I",
      "D) Meiosis II",
      "E) Cytokinesis"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: DNA replication occurs before meiosis but does not reduce chromosome numbers.",
      "Incorrect: Crossing over increases genetic diversity without altering chromosome number.",
      "Correct: Meiosis I separates homologous chromosomes, reducing chromosome numbers by half.",
      "Incorrect: Meiosis II separates sister chromatids without further reducing chromosome count.",
      "Incorrect: Cytokinesis divides the cytoplasm and does not impact chromosome numbers."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "What is the primary role of the centromere during cell division?",
    "options": [
      "A) Protects chromosome ends from degradation",
      "B) Serves as the region where sister chromatids are joined",
      "C) Ensures proper alignment of chromosomes at the equator",
      "D) Facilitates DNA replication in the S phase",
      "E) Promotes recombination between homologous chromosomes"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Protecting chromosome ends is the function of telomeres.",
      "Correct: The centromere is the structural region where sister chromatids are joined, essential for segregation.",
      "Incorrect: Chromosome alignment at the equator is a consequence of spindle attachment to centromeres but not its primary role.",
      "Incorrect: DNA replication occurs before mitosis, not at the centromere.",
      "Incorrect: Recombination takes place during meiosis, not involving centromeres."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "How do acrocentric chromosomes differ from metacentric chromosomes?",
    "options": [
      "A) Acrocentric chromosomes lack telomeres",
      "B) Acrocentric chromosomes have their centromeres near the ends",
      "C) Acrocentric chromosomes are larger than metacentric chromosomes",
      "D) Acrocentric chromosomes contain only euchromatin",
      "E) Acrocentric chromosomes are only found in germline cells"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Both acrocentric and metacentric chromosomes have telomeres.",
      "Correct: Acrocentric chromosomes have centromeres closer to one end, creating a very short p arm.",
      "Incorrect: Chromosome size does not distinguish acrocentric from metacentric types.",
      "Incorrect: Both types contain euchromatin and heterochromatin.",
      "Incorrect: Acrocentric chromosomes are found in both somatic and germline cells."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "Which phase of meiosis is responsible for separating homologous chromosomes?",
    "options": [
      "A) Prophase I",
      "B) Metaphase I",
      "C) Anaphase I",
      "D) Anaphase II",
      "E) Telophase II"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Prophase I involves synapsis and crossing over, not separation.",
      "Incorrect: Metaphase I aligns homologous chromosomes but does not separate them.",
      "Correct: Anaphase I separates homologous chromosomes to opposite poles.",
      "Incorrect: Anaphase II separates sister chromatids, not homologous chromosomes.",
      "Incorrect: Telophase II marks the final stage of meiosis, not chromosome separation."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "Which chromosomal abnormality involves the loss of a chromosome segment?",
    "options": [
      "A) Duplication",
      "B) Translocation",
      "C) Deletion",
      "D) Inversion",
      "E) Ring chromosome formation"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Duplication involves the addition of a chromosome segment.",
      "Incorrect: Translocation is the exchange of segments between chromosomes.",
      "Correct: Deletion refers to the loss of a chromosome segment.",
      "Incorrect: Inversion involves flipping a segment within the same chromosome.",
      "Incorrect: Ring chromosome formation occurs when chromosome ends fuse, not due to segment loss."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "What property of mitochondrial DNA makes it vulnerable to mutations?",
    "options": [
      "A) Linear structure of its DNA",
      "B) High exposure to oxidative stress",
      "C) Presence of introns in mitochondrial genes",
      "D) Replication exclusively during cell division",
      "E) Biparental inheritance"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Mitochondrial DNA is circular, not linear.",
      "Correct: Mitochondrial DNA is constantly exposed to reactive oxygen species (ROS) due to its role in oxidative phosphorylation, making it prone to mutations.",
      "Incorrect: Mitochondrial DNA lacks introns.",
      "Incorrect: Mitochondrial DNA replicates independently of cell division.",
      "Incorrect: Mitochondrial DNA is inherited maternally, not biparentally."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "Which structural chromosomal abnormality involves the reversal of a chromosome segment?",
    "options": [
      "A) Duplication",
      "B) Inversion",
      "C) Translocation",
      "D) Deletion",
      "E) Aneuploidy"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Duplication involves the addition of extra genetic material.",
      "Correct: Inversion refers to the reversal of a chromosome segment, which may disrupt gene function.",
      "Incorrect: Translocation involves the exchange of genetic material between chromosomes.",
      "Incorrect: Deletion results in loss of genetic material, not reversal.",
      "Incorrect: Aneuploidy refers to a numerical change in chromosomes, unrelated to structural changes."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "What is the role of cohesin proteins during cell division?",
    "options": [
      "A) Condense chromosomes during prophase",
      "B) Attach spindle fibers to kinetochores",
      "C) Ensure sister chromatids stay connected until anaphase",
      "D) Facilitate chromosome alignment at the equatorial plate",
      "E) Promote crossing over during meiosis"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Chromosome condensation is managed by condensin proteins, not cohesin.",
      "Incorrect: Spindle fiber attachment to kinetochores is a different mechanism.",
      "Correct: Cohesin proteins hold sister chromatids together until they are separated during anaphase.",
      "Incorrect: Alignment at the equatorial plate is facilitated by spindle microtubules.",
      "Incorrect: Crossing over involves recombination proteins, not cohesin."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "Which meiotic phase is characterized by homologous chromosomes pairing and crossing over?",
    "options": [
      "A) Prophase I",
      "B) Metaphase I",
      "C) Anaphase I",
      "D) Telophase I",
      "E) Interphase"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Prophase I involves synapsis and crossing over between homologous chromosomes.",
      "Incorrect: Metaphase I is when paired homologous chromosomes align at the equatorial plate.",
      "Incorrect: Anaphase I separates homologous chromosomes to opposite poles.",
      "Incorrect: Telophase I is the stage where the cell begins cytokinesis.",
      "Incorrect: Interphase occurs prior to meiosis and does not involve chromosome pairing or crossing over."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "What characteristic is unique to mitochondrial DNA compared to nuclear DNA?",
    "options": [
      "A) It contains introns for gene regulation",
      "B) It is inherited maternally",
      "C) It undergoes recombination during meiosis",
      "D) It has linear chromosomes",
      "E) It encodes more genes than nuclear DNA"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Mitochondrial DNA lacks introns.",
      "Correct: Mitochondrial DNA is inherited solely from the maternal lineage.",
      "Incorrect: Mitochondrial DNA does not undergo recombination.",
      "Incorrect: Mitochondrial DNA is circular, not linear.",
      "Incorrect: Nuclear DNA encodes far more genes than mitochondrial DNA."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "Which process ensures genetic diversity in gametes produced during meiosis?",
    "options": [
      "A) DNA replication",
      "B) Independent assortment of chromosomes",
      "C) Chromosome condensation",
      "D) Cytokinesis",
      "E) Mitotic division"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: DNA replication duplicates genetic material but does not promote diversity.",
      "Correct: Independent assortment randomly distributes maternal and paternal chromosomes, enhancing genetic variation.",
      "Incorrect: Chromosome condensation prepares chromosomes for division but does not influence diversity.",
      "Incorrect: Cytokinesis divides the cytoplasm, unrelated to genetic diversity.",
      "Incorrect: Mitotic division produces identical daughter cells and does not contribute to genetic diversity."
    ],
    "slideLink": "Lecture21_FOCS.pdf"
  },
  {
    "question": "What is the defining feature of epithelial tissues that differentiates them from connective tissues?",
    "options": [
      "A) Presence of abundant intercellular substances",
      "B) Close cell-cell contact with minimal extracellular space",
      "C) Direct exposure to mechanical stresses",
      "D) Rich vascularization",
      "E) Absence of a basement membrane"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Abundant intercellular substances are characteristic of connective tissues.",
      "Correct: Epithelial tissues are defined by close cell-cell contact with minimal extracellular space.",
      "Incorrect: Mechanical stresses are directly borne by connective tissues, not epithelia.",
      "Incorrect: Epithelial tissues are avascular and rely on diffusion.",
      "Incorrect: Epithelia lie on a basement membrane, which is essential to their structure."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which type of epithelial tissue is best suited for absorption and secretion functions?",
    "options": [
      "A) Stratified squamous epithelium",
      "B) Simple cuboidal epithelium",
      "C) Simple squamous epithelium",
      "D) Simple columnar epithelium",
      "E) Transitional epithelium"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Stratified squamous epithelium is protective, not involved in absorption/secretion.",
      "Incorrect: Simple cuboidal epithelium is involved in smaller-scale excretory or absorptive functions.",
      "Incorrect: Simple squamous epithelium facilitates passive diffusion of gases or fluids.",
      "Correct: Simple columnar epithelium is most frequently associated with absorption and secretion.",
      "Incorrect: Transitional epithelium is specialized for stretch and toxicity resistance."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "What structural feature of pseudostratified columnar epithelium aids its function in respiratory pathways?",
    "options": [
      "A) Keratinized surface to prevent desiccation",
      "B) Cilia for mucus clearance",
      "C) Microvilli for enhanced absorption",
      "D) Flattened nuclei at the basal region",
      "E) Stratification to withstand abrasion"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Keratinization is not relevant to respiratory pathways.",
      "Correct: Cilia on pseudostratified columnar epithelium facilitate mucus clearance in the respiratory tract.",
      "Incorrect: Microvilli are associated with absorption in the gastrointestinal tract.",
      "Incorrect: Flattened nuclei are characteristic of mucous cells in glands.",
      "Incorrect: Stratification is not found in pseudostratified columnar epithelium."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which type of exocrine gland structure is characterized by a combination of tubular and acinar secretory units?",
    "options": [
      "A) Simple coiled tubular gland",
      "B) Simple branched acinar gland",
      "C) Compound tubular gland",
      "D) Compound tubuloacinar gland",
      "E) None of the above"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Simple coiled tubular glands are exclusively tubular.",
      "Incorrect: Simple branched acinar glands have acinar units only.",
      "Incorrect: Compound tubular glands are composed of tubular secretory units.",
      "Correct: Compound tubuloacinar glands have both tubular and acinar secretory units.",
      "Incorrect: The description matches compound tubuloacinar glands."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "What is the primary role of tight junctions in epithelial tissues?",
    "options": [
      "A) Anchor cells to the basement membrane",
      "B) Facilitate substance transport between cells",
      "C) Prevent substance transport between adjacent cells",
      "D) Connect epithelial cells to connective tissue",
      "E) Enhance cellular proliferation"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Tight junctions do not anchor cells to the basement membrane.",
      "Incorrect: Tight junctions specifically prevent transport, not facilitate it.",
      "Correct: Tight junctions seal adjacent cells to maintain apical/basal polarity and prevent transport between cells.",
      "Incorrect: Tight junctions are not involved in anchoring to connective tissue.",
      "Incorrect: Tight junctions do not directly enhance cellular proliferation."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "What is the primary function of microvilli found on the apical surface of epithelial cells?",
    "options": [
      "A) To propel mucus across the epithelial surface",
      "B) To increase surface area for absorption",
      "C) To anchor epithelial cells to the basement membrane",
      "D) To act as a barrier preventing the passage of large molecules",
      "E) To facilitate cell-to-cell adhesion"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Cilia, not microvilli, are responsible for propelling mucus.",
      "Correct: Microvilli significantly increase the surface area for absorption, especially in the gastrointestinal tract.",
      "Incorrect: Anchoring epithelial cells to the basement membrane is done by hemidesmosomes.",
      "Incorrect: Microvilli do not serve as a barrier; they are specialized for absorption.",
      "Incorrect: Microvilli do not play a role in cell-to-cell adhesion."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which type of epithelial tissue is uniquely adapted to stretch and accommodate changes in organ volume?",
    "options": [
      "A) Simple columnar epithelium",
      "B) Transitional epithelium",
      "C) Stratified squamous epithelium",
      "D) Pseudostratified columnar epithelium",
      "E) Simple squamous epithelium"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Simple columnar epithelium is specialized for absorption and secretion, not for stretch.",
      "Correct: Transitional epithelium is found in the urinary bladder and ureters and is uniquely adapted to stretch.",
      "Incorrect: Stratified squamous epithelium is adapted for protection against abrasion, not stretch.",
      "Incorrect: Pseudostratified columnar epithelium is primarily found in respiratory pathways.",
      "Incorrect: Simple squamous epithelium facilitates diffusion, not stretching."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "What component of the basement membrane is primarily responsible for its structural support?",
    "options": [
      "A) Type IV collagen",
      "B) Reticular fibers",
      "C) Proteoglycans",
      "D) Laminin",
      "E) Type III collagen"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Type IV collagen forms the structural framework of the basal lamina within the basement membrane.",
      "Incorrect: Reticular fibers, composed of Type III collagen, provide additional support but are not the main framework.",
      "Incorrect: Proteoglycans contribute to the matrix but are not the primary structural component.",
      "Incorrect: Laminin is involved in cell adhesion but does not primarily provide structural support.",
      "Incorrect: Type III collagen is found in reticular fibers, which are not the main component of the basal lamina."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which of the following describes the secretory mechanism used by sebaceous glands?",
    "options": [
      "A) Merocrine secretion",
      "B) Apocrine secretion",
      "C) Holocrine secretion",
      "D) Exocytosis",
      "E) Endocytosis"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Merocrine secretion involves exocytosis and is used by most glands.",
      "Incorrect: Apocrine secretion involves release of vesicles and is seen in mammary glands.",
      "Correct: Sebaceous glands utilize holocrine secretion, where entire cells are released along with their contents.",
      "Incorrect: Exocytosis is a mechanism of merocrine secretion, not holocrine.",
      "Incorrect: Endocytosis does not play a role in glandular secretion."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "What is the primary function of gap junctions in epithelial cells?",
    "options": [
      "A) To prevent the passage of substances between cells",
      "B) To allow direct communication between adjacent cells",
      "C) To anchor epithelial cells to the basement membrane",
      "D) To facilitate the absorption of nutrients",
      "E) To enhance epithelial polarity"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Tight junctions, not gap junctions, prevent substance passage between cells.",
      "Correct: Gap junctions permit direct intercellular communication by allowing the passage of ions and small molecules.",
      "Incorrect: Anchoring epithelial cells to the basement membrane is the role of hemidesmosomes.",
      "Incorrect: Gap junctions do not facilitate nutrient absorption; they enable cell communication.",
      "Incorrect: Epithelial polarity is maintained primarily by tight junctions and the basement membrane."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which morphological feature is essential for epithelial cells to maintain apical-basal polarity?",
    "options": [
      "A) Presence of microvilli",
      "B) Tight junctions sealing adjacent cell membranes",
      "C) Desmosomes anchoring intermediate filaments",
      "D) Hemidesmosomes connecting to the basement membrane",
      "E) Actin filaments in the cytoskeleton"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Microvilli increase surface area for absorption but do not maintain polarity.",
      "Correct: Tight junctions are crucial for maintaining apical-basal polarity by sealing cell membranes.",
      "Incorrect: Desmosomes anchor cells but are not related to polarity.",
      "Incorrect: Hemidesmosomes provide attachment to the basement membrane but do not affect cell polarity.",
      "Incorrect: Actin filaments provide structural support but are not specific to polarity."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "What is the key characteristic of serous glands that distinguishes them from mucous glands?",
    "options": [
      "A) Dark staining due to enzyme-rich secretions",
      "B) Pale staining and viscous fluid secretion",
      "C) Presence of cuboidal cells with flattened nuclei",
      "D) Secretion of a lipid-based substance",
      "E) Absence of a basement membrane"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Serous glands are dark-staining due to enzyme-rich watery secretions.",
      "Incorrect: Pale staining and viscous fluid secretion are features of mucous glands.",
      "Incorrect: Cuboidal cells with flattened nuclei are typical of mucous glands, not serous glands.",
      "Incorrect: Lipid-based secretions are associated with sebaceous glands.",
      "Incorrect: All glands lie on a basement membrane."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which specific epithelial type lines the alveoli of the lungs to facilitate gas exchange?",
    "options": [
      "A) Simple cuboidal epithelium",
      "B) Simple squamous epithelium",
      "C) Pseudostratified columnar epithelium",
      "D) Stratified squamous epithelium",
      "E) Transitional epithelium"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Simple cuboidal epithelium is found in ducts and tubules, not alveoli.",
      "Correct: Simple squamous epithelium, with its thin structure, facilitates diffusion in alveoli.",
      "Incorrect: Pseudostratified columnar epithelium is found in the respiratory tract but not in alveoli.",
      "Incorrect: Stratified squamous epithelium is protective and unsuitable for gas exchange.",
      "Incorrect: Transitional epithelium is specialized for stretching and is found in the urinary system."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "What is the function of basal lamina within the basement membrane of epithelial tissues?",
    "options": [
      "A) To store energy reserves",
      "B) To provide structural support and filtration",
      "C) To transport nutrients to epithelial cells",
      "D) To form intercellular junctions",
      "E) To enhance cell motility"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The basal lamina does not store energy reserves.",
      "Correct: The basal lamina provides structural support and acts as a selective filtration barrier.",
      "Incorrect: Nutrient transport occurs via diffusion through the basement membrane.",
      "Incorrect: Intercellular junctions are formed between cell membranes, not by the basal lamina.",
      "Incorrect: The basal lamina does not directly enhance cell motility."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which classification of epithelial lining is best suited for protection against constant abrasion and desiccation?",
    "options": [
      "A) Simple squamous epithelium",
      "B) Stratified squamous keratinising epithelium",
      "C) Simple columnar epithelium",
      "D) Transitional epithelium",
      "E) Pseudostratified columnar epithelium"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Simple squamous epithelium is too thin for protective functions.",
      "Correct: Stratified squamous keratinising epithelium is adapted to withstand abrasion and prevent water loss.",
      "Incorrect: Simple columnar epithelium is specialized for absorption and secretion.",
      "Incorrect: Transitional epithelium is suited for stretch but not abrasion.",
      "Incorrect: Pseudostratified columnar epithelium is associated with the respiratory tract, not protection against abrasion."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which specific epithelial type is most suited for resisting desiccation and mechanical abrasion?",
    "options": [
      "A) Simple columnar epithelium",
      "B) Stratified squamous keratinising epithelium",
      "C) Transitional epithelium",
      "D) Pseudostratified columnar ciliated epithelium",
      "E) Simple squamous epithelium"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Simple columnar epithelium is specialized for absorption and secretion.",
      "Correct: Stratified squamous keratinising epithelium protects against desiccation and mechanical abrasion, such as on the skin.",
      "Incorrect: Transitional epithelium is adapted for stretch, not resistance to desiccation.",
      "Incorrect: Pseudostratified columnar ciliated epithelium is involved in respiratory pathways, not mechanical protection.",
      "Incorrect: Simple squamous epithelium facilitates gas exchange and diffusion, not protection."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "What structural feature is responsible for the barrier function of tight junctions in epithelial cells?",
    "options": [
      "A) Fusion of actin filaments across adjacent cells",
      "B) Sealing of adjacent membranes by claudin and occludin proteins",
      "C) Anchorage of intermediate filaments through desmosomes",
      "D) Adhesion of epithelial cells to the basement membrane via hemidesmosomes",
      "E) Formation of microvilli on the apical surface"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Actin filaments contribute to cell structure but do not form a barrier.",
      "Correct: Tight junctions seal adjacent membranes using claudin and occludin proteins to prevent paracellular transport.",
      "Incorrect: Desmosomes anchor intermediate filaments but are not involved in forming a barrier.",
      "Incorrect: Hemidesmosomes anchor epithelial cells to the basement membrane but do not provide barrier function.",
      "Incorrect: Microvilli increase surface area for absorption, not barrier function."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which specific secretion mechanism involves the release of entire cells as part of the glandular product?",
    "options": [
      "A) Merocrine",
      "B) Apocrine",
      "C) Holocrine",
      "D) Endocrine",
      "E) Serous"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Merocrine involves exocytosis of vesicles, not entire cells.",
      "Incorrect: Apocrine involves discharge of membrane-bound vesicles, not whole cells.",
      "Correct: Holocrine secretion releases entire cells, as seen in sebaceous glands.",
      "Incorrect: Endocrine secretion involves release into the bloodstream, not whole cells.",
      "Incorrect: Serous refers to the type of secretion but not the mechanism."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which morphological criterion is used to classify compound tubuloacinar glands?",
    "options": [
      "A) Unbranched ducts with tubular secretory units",
      "B) Branched ducts with acinar secretory units",
      "C) Branched ducts with both tubular and acinar secretory units",
      "D) Secretory units containing only serous cells",
      "E) Secretory units containing only mucous cells"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Compound glands always involve branched ducts, not unbranched.",
      "Incorrect: Compound tubuloacinar glands include both tubular and acinar units, not just acinar.",
      "Correct: Compound tubuloacinar glands are classified by their branched ducts and combination of tubular and acinar units.",
      "Incorrect: Compound tubuloacinar glands can contain mixed serous and mucous secretory units, not just serous.",
      "Incorrect: Secretory units in compound tubuloacinar glands are mixed, not exclusively mucous."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "What is the primary function of the basement membrane in epithelial tissues?",
    "options": [
      "A) To generate energy for epithelial cells",
      "B) To provide a scaffold for cell migration during tissue repair",
      "C) To prevent mechanical stresses from reaching connective tissues",
      "D) To enable intercellular communication through gap junctions",
      "E) To regulate nutrient absorption in epithelial tissues"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: The basement membrane does not generate energy.",
      "Correct: The basement membrane provides structural support and acts as a scaffold for cell migration during tissue repair.",
      "Incorrect: Mechanical stresses are borne directly by connective tissues.",
      "Incorrect: Gap junctions are responsible for intercellular communication, not the basement membrane.",
      "Incorrect: Nutrient absorption occurs via epithelial cell membranes, not the basement membrane."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which epithelial specialisation is primarily responsible for increasing the efficiency of nutrient absorption?",
    "options": [
      "A) Cilia",
      "B) Microvilli",
      "C) Keratin",
      "D) Goblet cells",
      "E) Tight junctions"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Cilia are involved in movement of substances like mucus, not nutrient absorption.",
      "Correct: Microvilli increase surface area, enhancing nutrient absorption in organs like the intestine.",
      "Incorrect: Keratin is a protective protein, unrelated to absorption.",
      "Incorrect: Goblet cells secrete mucus but do not aid absorption directly.",
      "Incorrect: Tight junctions maintain cell polarity but are not involved in absorption."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which type of epithelial tissue is specialised for passive diffusion and filtration processes?",
    "options": [
      "A) Simple cuboidal epithelium",
      "B) Stratified squamous epithelium",
      "C) Simple squamous epithelium",
      "D) Transitional epithelium",
      "E) Pseudostratified columnar epithelium"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Simple cuboidal epithelium is better suited for secretion and absorption in ducts and tubules.",
      "Incorrect: Stratified squamous epithelium provides protection against abrasion, not diffusion.",
      "Correct: Simple squamous epithelium facilitates passive diffusion, such as in alveoli of lungs.",
      "Incorrect: Transitional epithelium is adapted for stretch and toxicity resistance, not filtration.",
      "Incorrect: Pseudostratified columnar epithelium has a role in mucus clearance, not diffusion."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which component of the basal lamina directly contributes to cell adhesion?",
    "options": [
      "A) Type III collagen",
      "B) Laminin",
      "C) Elastin",
      "D) Proteoglycans",
      "E) Anchoring fibrils"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Type III collagen is found in reticular fibers, not directly involved in adhesion.",
      "Correct: Laminin is a key protein in the basal lamina that mediates adhesion between epithelial cells and the basement membrane.",
      "Incorrect: Elastin provides elasticity, but it is not relevant to epithelial cell adhesion.",
      "Incorrect: Proteoglycans contribute to filtration but not adhesion.",
      "Incorrect: Anchoring fibrils aid in attachment but laminin plays a more direct role in adhesion."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "What structural feature allows transitional epithelium to accommodate stretching in the urinary bladder?",
    "options": [
      "A) Thin basal lamina",
      "B) Desmosomes anchoring cells",
      "C) Overlapping cell layers with flexible plasma membranes",
      "D) Microvilli increasing surface area",
      "E) Keratinisation of surface layers"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Thin basal lamina provides support but does not contribute to stretchability.",
      "Incorrect: Desmosomes provide strength to cell junctions but do not enable stretching.",
      "Correct: Overlapping cell layers with flexible plasma membranes allow transitional epithelium to stretch without compromising integrity.",
      "Incorrect: Microvilli aid absorption, not stretchability.",
      "Incorrect: Keratinisation is a protective feature, unrelated to stretch."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which epithelial feature is crucial for maintaining selective permeability between adjacent cells?",
    "options": [
      "A) Gap junctions",
      "B) Tight junctions",
      "C) Desmosomes",
      "D) Hemidesmosomes",
      "E) Microvilli"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Gap junctions enable intercellular communication, not selective permeability.",
      "Correct: Tight junctions seal adjacent cells to regulate selective permeability and maintain compartmentalisation.",
      "Incorrect: Desmosomes provide mechanical strength but do not regulate permeability.",
      "Incorrect: Hemidesmosomes anchor cells to the basement membrane, unrelated to permeability.",
      "Incorrect: Microvilli increase surface area for absorption but do not contribute to permeability."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "What is the defining characteristic of stratified squamous non-keratinising epithelium compared to its keratinising counterpart?",
    "options": [
      "A) Ability to withstand desiccation",
      "B) Presence of continuous cell turnover without compromising underlying tissue",
      "C) Specialisation for absorption and secretion",
      "D) Adaptation to stretch and toxicity resistance",
      "E) Lack of a basement membrane"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Desiccation is resisted by keratinised epithelium, not non-keratinising.",
      "Correct: Stratified squamous non-keratinising epithelium withstands abrasion while maintaining underlying tissue integrity.",
      "Incorrect: Absorption and secretion are functions of columnar epithelium.",
      "Incorrect: Stretch and toxicity resistance are features of transitional epithelium.",
      "Incorrect: All epithelia lie on a basement membrane."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which specialisation is associated with the terminal web found in the apical region of epithelial cells?",
    "options": [
      "A) Actin filaments anchoring microvilli",
      "B) Intermediate filaments anchoring desmosomes",
      "C) Formation of tight junctions to maintain polarity",
      "D) Fusion of basal lamina to epithelial cell membranes",
      "E) Support of basal region organelles"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: The terminal web anchors microvilli using actin filaments to support apical surface specialisations.",
      "Incorrect: Intermediate filaments anchor desmosomes but are not part of the terminal web.",
      "Incorrect: Tight junctions maintain polarity but are not related to the terminal web.",
      "Incorrect: The basal lamina connects to the basal region, not the terminal web.",
      "Incorrect: The terminal web is not involved in basal region organelle support."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which type of secretion mechanism involves the release of membrane-bound vesicles from epithelial cells?",
    "options": [
      "A) Merocrine secretion",
      "B) Apocrine secretion",
      "C) Holocrine secretion",
      "D) Serous secretion",
      "E) Mucous secretion"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Merocrine secretion involves exocytosis, not membrane-bound vesicles.",
      "Correct: Apocrine secretion releases membrane-bound vesicles, as seen in mammary glands.",
      "Incorrect: Holocrine secretion releases entire cells, not vesicles.",
      "Incorrect: Serous secretion refers to the type of product, not the mechanism.",
      "Incorrect: Mucous secretion also refers to the type of product, not the mechanism."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "What is the primary function of desmosomes in epithelial tissues?",
    "options": [
      "A) Sealing adjacent cell membranes",
      "B) Anchoring intermediate filaments to provide mechanical stability",
      "C) Enabling intercellular communication",
      "D) Facilitating the absorption of nutrients",
      "E) Maintaining apical-basal polarity"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Sealing adjacent membranes is the function of tight junctions.",
      "Correct: Desmosomes anchor intermediate filaments, providing mechanical stability in epithelial tissues.",
      "Incorrect: Intercellular communication is the role of gap junctions.",
      "Incorrect: Nutrient absorption is performed by microvilli.",
      "Incorrect: Apical-basal polarity is maintained by tight junctions and the basement membrane."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "Which classification best describes compound acinar glands based on their structure?",
    "options": [
      "A) Unbranched ducts with tubular secretory units",
      "B) Branched ducts with spherical secretory units",
      "C) Unbranched ducts with acinar secretory units",
      "D) Branched ducts with a combination of tubular and acinar units",
      "E) Branched ducts with flattened secretory units"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Compound glands have branched ducts, not unbranched.",
      "Correct: Compound acinar glands have branched ducts and spherical secretory units typical of glands like the pancreas.",
      "Incorrect: Acinar secretory units are present, but ducts are branched, not unbranched.",
      "Incorrect: The combination of tubular and acinar units is specific to compound tubuloacinar glands.",
      "Incorrect: Flattened secretory units do not describe acinar morphology."
    ],
    "slideLink": "Lecture22_FOCS.pdf"
  },
  {
    "question": "What is the primary characteristic of mitochondrial inheritance in genetic diseases?",
    "options": [
      "A) It follows Mendelian patterns of inheritance",
      "B) It can only be passed on by fathers",
      "C) It involves mutations in the nuclear genome",
      "D) It is exclusively maternally inherited",
      "E) It does not affect the energy-producing organelles"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Mitochondrial inheritance does not follow traditional Mendelian patterns.",
      "Incorrect: Mitochondria are inherited solely from the mother, not fathers.",
      "Incorrect: Mitochondrial inheritance involves mutations in the mitochondrial genome, not the nuclear genome.",
      "Correct: Mitochondrial inheritance is exclusively maternally inherited, as only ova contribute mitochondria.",
      "Incorrect: Mitochondrial diseases directly affect energy-producing organelles."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "Which of the following best describes a heterozygous individual in an autosomal dominant condition?",
    "options": [
      "A) They do not display any symptoms of the disease.",
      "B) They carry two copies of the mutant allele.",
      "C) They carry one copy of the mutant allele and exhibit the disease phenotype.",
      "D) They are asymptomatic carriers like in autosomal recessive conditions.",
      "E) Their offspring have no chance of inheriting the disease."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Heterozygous individuals in autosomal dominant conditions typically exhibit symptoms.",
      "Incorrect: Carrying two copies of the mutant allele can result in a more severe phenotype or lethality.",
      "Correct: One mutant allele is enough to express the disease phenotype in autosomal dominant conditions.",
      "Incorrect: Asymptomatic carriers are more typical of autosomal recessive inheritance.",
      "Incorrect: Offspring of affected individuals have a 50% chance of inheriting the condition."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "In a pedigree analysis, which feature is most indicative of an autosomal recessive mode of inheritance?",
    "options": [
      "A) The condition appears in every generation.",
      "B) Male-to-male transmission is observed.",
      "C) The condition appears primarily in males.",
      "D) Consanguinity is common among affected individuals.",
      "E) Only daughters are carriers of the trait."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Autosomal recessive conditions often skip generations.",
      "Incorrect: Male-to-male transmission does not indicate autosomal recessive inheritance.",
      "Incorrect: Autosomal recessive conditions affect both sexes equally.",
      "Correct: Consanguinity increases the likelihood of autosomal recessive conditions as it raises the chance of inheriting the same recessive allele.",
      "Incorrect: Both sons and daughters can be carriers in autosomal recessive conditions."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "What is a key consequence of a toxic gain-of-function mutation in autosomal dominant diseases?",
    "options": [
      "A) Reduced penetrance of the normal allele.",
      "B) The mutant protein acquires new harmful properties.",
      "C) Complete loss of function of the protein product.",
      "D) Increased expression of the wild-type allele.",
      "E) Exclusive impact on autosomal recessive disorders."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Toxic gain-of-function mutations are not associated with reduced penetrance but with new harmful effects.",
      "Correct: These mutations result in the mutant protein acquiring new deleterious functions, leading to the disease.",
      "Incorrect: A toxic gain-of-function mutation does not necessarily cause a complete loss of protein function.",
      "Incorrect: Such mutations do not increase the expression of the wild-type allele.",
      "Incorrect: Toxic gain-of-function mutations primarily affect autosomal dominant, not recessive, disorders."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "Which of the following is a hallmark of X-linked recessive disorders?",
    "options": [
      "A) Male-to-male transmission of the disorder.",
      "B) Equal occurrence in both males and females.",
      "C) Affected males pass the mutation to all their daughters.",
      "D) Female carriers are not involved in transmission.",
      "E) Fathers pass the disorder to their sons."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Male-to-male transmission is not observed in X-linked recessive disorders.",
      "Incorrect: These disorders predominantly affect males because they inherit only one X chromosome.",
      "Correct: Affected males pass the mutant X chromosome to all their daughters, making them carriers.",
      "Incorrect: Female carriers play a crucial role in transmitting the disorder to their offspring.",
      "Incorrect: Fathers cannot pass X-linked disorders to their sons as sons inherit the Y chromosome."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "What type of mutation is primarily responsible for a toxic gain-of-function in Huntington's Disease?",
    "options": [
      "A) Single base substitution",
      "B) Trinucleotide repeat expansion",
      "C) Deletion of a single allele",
      "D) Loss-of-function mutation",
      "E) Chromosomal translocation"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Single base substitutions are not the cause of Huntington's Disease.",
      "Correct: Trinucleotide repeat expansion in the HTT gene is the key mutation in Huntington's Disease, leading to a toxic gain-of-function.",
      "Incorrect: Deletion of a single allele would not lead to the symptoms observed in Huntington's Disease.",
      "Incorrect: Loss-of-function mutations typically result in reduced protein activity, not toxic effects.",
      "Incorrect: Chromosomal translocations are not involved in the pathology of Huntington's Disease."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "Which feature best distinguishes X-linked dominant inheritance from autosomal dominant inheritance?",
    "options": [
      "A) It only affects males.",
      "B) Fathers cannot pass the trait to their sons.",
      "C) It skips generations more frequently.",
      "D) Both sexes are equally affected.",
      "E) There is a higher penetrance in males than females."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: X-linked dominant conditions affect both males and females.",
      "Correct: In X-linked dominant inheritance, fathers cannot transmit the trait to their sons because males pass their Y chromosome to sons.",
      "Incorrect: X-linked dominant inheritance does not skip generations.",
      "Incorrect: While both sexes can be affected, this does not distinguish it from autosomal dominant inheritance.",
      "Incorrect: Penetrance differences are not a defining feature of X-linked dominant inheritance."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "In mitochondrial inheritance, which of the following statements is true regarding disease transmission?",
    "options": [
      "A) Both parents contribute equally to mitochondrial DNA.",
      "B) Fathers can transmit mitochondrial disorders to their sons.",
      "C) Only the maternal lineage passes on mitochondrial DNA.",
      "D) Mutations in mitochondrial DNA affect only skeletal muscles.",
      "E) Mitochondrial inheritance follows a pattern similar to autosomal recessive disorders."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Mitochondrial DNA is inherited exclusively from the mother.",
      "Incorrect: Fathers cannot transmit mitochondrial disorders since sperm does not contribute mitochondrial DNA.",
      "Correct: Mitochondrial DNA is inherited solely through the maternal lineage.",
      "Incorrect: While skeletal muscles can be affected, mitochondrial mutations impact multiple organ systems.",
      "Incorrect: Mitochondrial inheritance is distinct and does not follow the patterns of autosomal inheritance."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "What is the probability of an unaffected sibling of a child with an autosomal recessive disorder being a carrier if both parents are carriers?",
    "options": [
      "A) 0%",
      "B) 25%",
      "C) 50%",
      "D) 66%",
      "E) 100%"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: There is a significant chance that unaffected siblings will be carriers.",
      "Incorrect: 25% represents the chance of being affected, not being a carrier.",
      "Incorrect: 50% is the probability for any child of carrier parents to be a carrier, not specifically unaffected siblings.",
      "Correct: Given that unaffected siblings cannot inherit two recessive alleles, their carrier risk is 2 out of 3, or 66%.",
      "Incorrect: Not all unaffected siblings are carriers; some inherit two normal alleles."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "Which characteristic is most commonly seen in pedigrees of autosomal recessive disorders?",
    "options": [
      "A) Affected individuals have at least one affected parent.",
      "B) The condition shows a vertical pattern of inheritance.",
      "C) The disorder often appears in the offspring of consanguineous unions.",
      "D) Both sexes are affected unequally.",
      "E) Affected individuals always have affected children."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Autosomal recessive disorders typically arise in individuals with two carrier parents, not from affected parents.",
      "Incorrect: Autosomal recessive conditions display a horizontal, not vertical, pattern of inheritance.",
      "Correct: Consanguineous unions increase the likelihood of inheriting two copies of the same recessive allele.",
      "Incorrect: Autosomal recessive conditions affect both sexes equally.",
      "Incorrect: Affected individuals may have unaffected children if their partner is not a carrier."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "What term describes the phenomenon where a single gene mutation causes multiple, distinct phenotypic effects?",
    "options": [
      "A) Penetrance",
      "B) Expressivity",
      "C) Pleiotropy",
      "D) Dominance",
      "E) Epistasis"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Penetrance refers to the proportion of individuals with a mutation that express the associated phenotype.",
      "Incorrect: Expressivity describes the degree to which a phenotype is expressed.",
      "Correct: Pleiotropy occurs when a single gene mutation leads to multiple distinct phenotypic effects.",
      "Incorrect: Dominance refers to the relationship between alleles of a gene.",
      "Incorrect: Epistasis describes the interaction of genes affecting a single phenotype."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "Which type of genetic mutation is most commonly associated with autosomal recessive metabolic disorders?",
    "options": [
      "A) Gain-of-function mutation",
      "B) Loss-of-function mutation",
      "C) Silent mutation",
      "D) Frameshift mutation",
      "E) Trinucleotide repeat expansion"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Gain-of-function mutations are typically seen in autosomal dominant conditions.",
      "Correct: Loss-of-function mutations often result in enzyme deficiencies, which are common in autosomal recessive metabolic disorders.",
      "Incorrect: Silent mutations usually have no phenotypic effect.",
      "Incorrect: Frameshift mutations can cause severe effects but are not specifically characteristic of metabolic disorders.",
      "Incorrect: Trinucleotide repeat expansions are associated with diseases like Huntington's, not autosomal recessive metabolic disorders."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "What is the most likely reason mitochondrial disorders frequently affect muscle and neurological systems?",
    "options": [
      "A) High replication rate of mitochondrial DNA in these tissues",
      "B) High energy demand of these tissues",
      "C) Unique mitochondrial DNA repair mechanisms in these tissues",
      "D) Increased exposure to environmental toxins in these tissues",
      "E) Exclusive maternal inheritance in these tissues"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: While mitochondrial DNA replicates frequently, the primary reason is energy demand.",
      "Correct: Muscle and neurological tissues have high energy demands, making them more susceptible to mitochondrial dysfunction.",
      "Incorrect: Mitochondrial DNA has limited repair mechanisms, but this is not tissue-specific.",
      "Incorrect: Environmental toxin exposure does not explain the tissue-specific impact of mitochondrial disorders.",
      "Incorrect: Maternal inheritance affects all tissues equally."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "How can autosomal dominant conditions skip generations despite being a dominant trait?",
    "options": [
      "A) Incomplete penetrance",
      "B) De novo mutations",
      "C) Reduced expressivity",
      "D) High environmental influence",
      "E) Non-paternity events"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Incomplete penetrance means that some individuals with the mutation do not express the phenotype, causing it to appear as though the condition has skipped a generation.",
      "Incorrect: De novo mutations occur in unaffected individuals but do not explain skipped generations.",
      "Incorrect: Reduced expressivity influences the severity of the phenotype, not its presence or absence.",
      "Incorrect: Environmental influences may affect expressivity but do not cause skipped generations in genetic inheritance.",
      "Incorrect: While non-paternity events can affect inheritance patterns, they do not explain this phenomenon."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "Which pattern in a pedigree most strongly suggests X-linked dominant inheritance?",
    "options": [
      "A) Male-to-male transmission",
      "B) Affected males always have affected daughters",
      "C) Skipping of generations",
      "D) Only males are affected",
      "E) Affected females always have unaffected sons"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Male-to-male transmission is not observed in X-linked inheritance.",
      "Correct: Affected males always pass the X-linked dominant trait to all of their daughters.",
      "Incorrect: X-linked dominant conditions do not typically skip generations.",
      "Incorrect: Both males and females can be affected in X-linked dominant inheritance.",
      "Incorrect: Affected females can have both affected and unaffected offspring."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "Which pattern in a pedigree strongly suggests mitochondrial inheritance?",
    "options": [
      "A) Only males are affected",
      "B) No male-to-male transmission occurs",
      "C) The condition is transmitted exclusively by fathers",
      "D) The condition skips generations",
      "E) Both sexes are equally affected but transmitted through maternal lineage"
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorrect: Mitochondrial inheritance affects both sexes equally.",
      "Incorrect: Male-to-male transmission does not occur, but this alone does not indicate mitochondrial inheritance.",
      "Incorrect: Mitochondrial DNA is inherited exclusively from mothers.",
      "Incorrect: Mitochondrial inheritance generally does not skip generations.",
      "Correct: Mitochondrial inheritance impacts both sexes but is passed through maternal lineage."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "What is the term for the proportion of individuals carrying a specific mutation who actually express the phenotype?",
    "options": [
      "A) Expressivity",
      "B) Penetrance",
      "C) Pleiotropy",
      "D) Variable dominance",
      "E) Genetic drift"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Expressivity refers to variation in phenotype severity, not proportion of expression.",
      "Correct: Penetrance measures the percentage of individuals with a mutation who express the associated phenotype.",
      "Incorrect: Pleiotropy involves a single mutation causing multiple phenotypic effects.",
      "Incorrect: Variable dominance is not a relevant term in this context.",
      "Incorrect: Genetic drift is unrelated to individual phenotype expression."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "What mechanism is responsible for the appearance of autosomal dominant traits in individuals with no affected parent?",
    "options": [
      "A) Incomplete penetrance",
      "B) De novo mutations",
      "C) Germline mosaicism",
      "D) Skewed X-inactivation",
      "E) Environmental factors"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Incomplete penetrance involves variability in expression among mutation carriers but does not explain new cases.",
      "Correct: De novo mutations arise spontaneously in germ cells or early embryonic development, causing the trait to appear in individuals with unaffected parents.",
      "Incorrect: Germline mosaicism involves mutations in germ cells but is less common than de novo mutations.",
      "Incorrect: Skewed X-inactivation is related to X-linked inheritance, not autosomal dominant traits.",
      "Incorrect: Environmental factors do not explain genetic inheritance patterns."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "Which factor most distinguishes X-linked recessive inheritance from autosomal recessive inheritance in pedigrees?",
    "options": [
      "A) Equal occurrence in males and females",
      "B) Skipping generations",
      "C) Male-to-male transmission",
      "D) Predominance of affected males",
      "E) Increased likelihood with consanguinity"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: X-linked recessive conditions predominantly affect males, unlike autosomal recessive conditions.",
      "Incorrect: Both inheritance patterns can skip generations but do so for different reasons.",
      "Incorrect: Male-to-male transmission does not occur in X-linked inheritance.",
      "Correct: X-linked recessive inheritance features a predominance of affected males due to hemizygosity of the X chromosome.",
      "Incorrect: While consanguinity can increase autosomal recessive occurrences, it is not a distinguishing feature for X-linked recessive conditions."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "What is the typical consequence of homozygosity for a mutation in autosomal dominant disorders?",
    "options": [
      "A) Reduced severity of symptoms",
      "B) Increased resistance to environmental factors",
      "C) Severely increased phenotype severity or lethality",
      "D) No observable phenotype",
      "E) Transformation into a recessive inheritance pattern"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Homozygosity in autosomal dominant conditions does not reduce symptom severity.",
      "Incorrect: Increased resistance to environmental factors is not a consequence of homozygosity.",
      "Correct: Homozygous individuals often experience more severe symptoms or lethality, as seen in diseases like Achondroplasia.",
      "Incorrect: Homozygosity typically amplifies the phenotype rather than resulting in no phenotype.",
      "Incorrect: Autosomal dominant inheritance patterns remain consistent regardless of homozygosity."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "Which feature is most indicative of X-linked dominant inheritance in a pedigree?",
    "options": [
      "A) Equal transmission rates from both parents to offspring",
      "B) Male-to-male transmission of the condition",
      "C) All daughters of affected males are affected",
      "D) The condition only affects males",
      "E) Predominantly affecting males in the population"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Transmission rates differ depending on whether the mother or father is affected.",
      "Incorrect: Male-to-male transmission does not occur in X-linked inheritance.",
      "Correct: In X-linked dominant inheritance, all daughters of affected males inherit the condition.",
      "Incorrect: X-linked dominant conditions can affect both sexes.",
      "Incorrect: X-linked dominant conditions often affect females more frequently due to their two X chromosomes."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "Which factor most contributes to the variability in severity of symptoms in autosomal dominant disorders?",
    "options": [
      "A) Consanguinity",
      "B) Variable expressivity",
      "C) Incomplete penetrance",
      "D) Polygenic inheritance",
      "E) De novo mutations"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Consanguinity primarily impacts autosomal recessive conditions.",
      "Correct: Variable expressivity refers to the differing degrees of phenotype severity observed among affected individuals.",
      "Incorrect: Incomplete penetrance relates to whether the phenotype is expressed at all, not its severity.",
      "Incorrect: Polygenic inheritance does not apply to autosomal dominant disorders.",
      "Incorrect: While de novo mutations introduce new cases, they do not influence symptom variability."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "What is the key distinguishing feature of mitochondrial inheritance in genetic diseases?",
    "options": [
      "A) Diseases are caused by nuclear DNA mutations",
      "B) Only sons inherit the mutation",
      "C) Only daughters inherit the mutation",
      "D) Transmission is exclusively maternal",
      "E) Transmission occurs through both maternal and paternal lines equally"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Mitochondrial DNA, not nuclear DNA, is primarily involved.",
      "Incorrect: Sons can inherit mitochondrial mutations but do not transmit them.",
      "Incorrect: Both sons and daughters inherit mitochondrial mutations equally.",
      "Correct: Mitochondrial inheritance is exclusively through maternal transmission as mitochondria come only from the egg.",
      "Incorrect: Mitochondrial inheritance does not involve paternal DNA."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "Which observation strongly suggests autosomal recessive inheritance in a family pedigree?",
    "options": [
      "A) Condition present in every generation",
      "B) Equal numbers of affected males and females",
      "C) Male-to-male transmission occurs",
      "D) Higher occurrence in female carriers",
      "E) 50% offspring affected from one affected parent"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Autosomal recessive traits often skip generations.",
      "Correct: Equal occurrence among males and females is characteristic of autosomal recessive inheritance.",
      "Incorrect: Male-to-male transmission does not differentiate autosomal recessive inheritance.",
      "Incorrect: Autosomal recessive traits do not exhibit differences in male versus female carrier rates.",
      "Incorrect: 50% affected offspring would indicate dominant inheritance."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "What term describes the phenomenon of a genetic disorder caused by mutations in multiple different genes?",
    "options": [
      "A) Penetrance",
      "B) Locus heterogeneity",
      "C) Expressivity",
      "D) Pleiotropy",
      "E) Epistasis"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Penetrance describes the proportion of individuals expressing the phenotype.",
      "Correct: Locus heterogeneity refers to a single disorder being caused by mutations in multiple genes.",
      "Incorrect: Expressivity describes the variation in phenotype severity, not genetic cause.",
      "Incorrect: Pleiotropy refers to a single gene causing multiple effects, not multiple genes causing one effect.",
      "Incorrect: Epistasis involves interactions between genes affecting the same phenotype."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "What term describes the inheritance pattern where both alleles at a gene locus contribute to the phenotype in heterozygous individuals?",
    "options": [
      "A) Incomplete dominance",
      "B) Co-dominance",
      "C) Locus heterogeneity",
      "D) Pleiotropy",
      "E) Variable expressivity"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Incomplete dominance involves blending of traits, not equal contribution.",
      "Correct: Co-dominance occurs when both alleles contribute equally to the phenotype, such as ABO blood groups.",
      "Incorrect: Locus heterogeneity refers to mutations at different loci causing the same disorder.",
      "Incorrect: Pleiotropy describes a single gene affecting multiple phenotypic traits.",
      "Incorrect: Variable expressivity explains differences in severity of symptoms, not allele contribution."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "Which inheritance pattern is characterized by horizontal patterns of affected individuals in a pedigree?",
    "options": [
      "A) Autosomal dominant",
      "B) Autosomal recessive",
      "C) X-linked dominant",
      "D) X-linked recessive",
      "E) Mitochondrial inheritance"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Autosomal dominant traits show vertical patterns across generations.",
      "Correct: Autosomal recessive traits typically appear in a single generation, creating a horizontal pattern in pedigrees.",
      "Incorrect: X-linked dominant inheritance shows vertical transmission.",
      "Incorrect: X-linked recessive inheritance does not display consistent horizontal patterns.",
      "Incorrect: Mitochondrial inheritance does not typically follow a horizontal pattern."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "What phenomenon can result in unaffected siblings of a child with an autosomal recessive disorder having a higher chance of being carriers?",
    "options": [
      "A) Locus heterogeneity",
      "B) Consanguinity",
      "C) Reduced penetrance",
      "D) The carrier risk of 2 in 3",
      "E) X-inactivation"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Locus heterogeneity does not influence carrier risk probabilities.",
      "Incorrect: Consanguinity increases the prevalence of autosomal recessive disorders but does not impact specific carrier risk.",
      "Incorrect: Reduced penetrance affects phenotype expression, not carrier probabilities.",
      "Correct: Unaffected siblings of affected individuals inherit carrier status with a probability of 2 in 3.",
      "Incorrect: X-inactivation is not relevant to autosomal recessive inheritance."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "Which mechanism explains the appearance of an autosomal dominant disorder despite no family history of the condition?",
    "options": [
      "A) Germline mosaicism",
      "B) Variable expressivity",
      "C) Incomplete penetrance",
      "D) De novo mutations",
      "E) Epistasis"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Germline mosaicism can lead to the inheritance of mutations but does not account for sporadic cases without prior family history.",
      "Incorrect: Variable expressivity impacts phenotype severity, not appearance of new cases.",
      "Incorrect: Incomplete penetrance involves phenotype variability, not sporadic occurrences.",
      "Correct: De novo mutations arise spontaneously, explaining cases without a family history.",
      "Incorrect: Epistasis refers to gene interaction and does not explain spontaneous mutations."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "Which condition is most likely to show male-to-male transmission in a pedigree?",
    "options": [
      "A) Autosomal dominant",
      "B) Autosomal recessive",
      "C) X-linked recessive",
      "D) X-linked dominant",
      "E) Mitochondrial inheritance"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Autosomal dominant inheritance can involve male-to-male transmission as males and females inherit autosomal traits equally.",
      "Incorrect: Autosomal recessive traits do not show a specific pattern of male-to-male transmission.",
      "Incorrect: X-linked recessive inheritance excludes male-to-male transmission.",
      "Incorrect: X-linked dominant inheritance does not involve male-to-male transmission.",
      "Incorrect: Mitochondrial inheritance exclusively follows maternal transmission."
    ],
    "slideLink": "Lecture23_FOCS.pdf"
  },
  {
    "question": "What is the primary role of histone acetylation in gene expression regulation?",
    "options": [
      "A) Preventing DNA replication",
      "B) Increasing transcription by opening chromatin",
      "C) Decreasing transcription through chromatin compaction",
      "D) Inhibiting RNA polymerase activity",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: DNA replication is unrelated to histone acetylation.",
      "Correct: Histone acetylation increases transcription by making chromatin more accessible.",
      "Incorrect: Chromatin compaction decreases transcription, which is opposite to the effect of acetylation.",
      "Incorrect: RNA polymerase activity is not directly inhibited by histone acetylation.",
      "Incorrect: Histone acetylation has a significant impact on chromatin and transcription regulation."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "Which type of mutation is most likely to cause a frameshift in the genetic code?",
    "options": [
      "A) Point mutation in the promoter region",
      "B) Deletion of a single nucleotide in the coding sequence",
      "C) Missense mutation in the non-coding region",
      "D) Silent mutation within the exon",
      "E) Duplication of a gene segment"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Mutations in the promoter region do not alter the reading frame.",
      "Correct: Deleting a single nucleotide in the coding sequence shifts the entire reading frame.",
      "Incorrect: Missense mutations impact amino acid sequence but do not cause a frameshift.",
      "Incorrect: Silent mutations have no effect on the reading frame or protein.",
      "Incorrect: Duplication does not typically cause a frameshift in the genetic code."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "How does Next Generation Sequencing (NGS) differ from conventional DNA sequencing?",
    "options": [
      "A) NGS uses radioactive markers for sequencing",
      "B) NGS processes millions of sequences in parallel",
      "C) Conventional sequencing provides higher throughput than NGS",
      "D) NGS requires gel electrophoresis for sequence analysis",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: NGS does not rely on radioactive markers but uses fluorescent dyes.",
      "Correct: NGS analyzes millions of sequences simultaneously, making it much faster.",
      "Incorrect: NGS provides higher throughput compared to conventional sequencing.",
      "Incorrect: Gel electrophoresis is a feature of conventional sequencing, not NGS.",
      "Incorrect: NGS introduces a paradigm shift in sequencing technologies."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "What is the effect of a nonsense mutation within the coding sequence of a gene?",
    "options": [
      "A) Formation of a truncated protein",
      "B) Increase in transcriptional activity",
      "C) Frameshift mutation leading to a faulty protein",
      "D) Silent mutation with no phenotypic effect",
      "E) Enhanced protein functionality"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: A nonsense mutation introduces a premature stop codon, truncating the protein.",
      "Incorrect: Transcriptional activity is not directly increased by nonsense mutations.",
      "Incorrect: Nonsense mutations do not typically cause frameshifts but premature stop codons.",
      "Incorrect: Silent mutations do not affect protein functionality.",
      "Incorrect: Nonsense mutations usually impair rather than enhance protein functionality."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "Which stage of Polymerase Chain Reaction (PCR) involves the binding of primers to the target DNA?",
    "options": [
      "A) Denaturation at high temperature",
      "B) Annealing at a lower temperature",
      "C) Extension by DNA polymerase",
      "D) Synthesis of new DNA strands",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Denaturation separates the DNA strands rather than binding primers.",
      "Correct: Annealing allows primers to bind to their complementary sequences on the DNA.",
      "Incorrect: Extension involves DNA polymerase synthesizing new DNA strands.",
      "Incorrect: Synthesis occurs during the extension stage, not primer binding.",
      "Incorrect: Primer binding specifically happens during annealing."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "What is the primary function of histone deacetylases (HDACs) in transcriptional regulation?",
    "options": [
      "A) Increase transcription by enhancing chromatin accessibility",
      "B) Decrease transcription by causing chromatin compaction",
      "C) Facilitate RNA polymerase binding to DNA",
      "D) Enhance mRNA stability in the cytoplasm",
      "E) Promote translation by modifying ribosomes"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: HDACs do not increase chromatin accessibility; they cause chromatin compaction.",
      "Correct: Histone deacetylases (HDACs) remove acetyl groups from histones, leading to chromatin compaction and reduced transcription.",
      "Incorrect: RNA polymerase binding is influenced by transcription factors, not HDACs.",
      "Incorrect: HDACs are involved in chromatin structure, not mRNA stability.",
      "Incorrect: Ribosomal function is unrelated to HDAC activity."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "Which type of mutation is least likely to affect the encoded protein’s structure?",
    "options": [
      "A) Missense mutation",
      "B) Nonsense mutation",
      "C) Silent mutation",
      "D) Frameshift mutation",
      "E) Insertion mutation in the coding region"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Missense mutations alter one amino acid, potentially changing protein structure.",
      "Incorrect: Nonsense mutations introduce a stop codon, truncating the protein.",
      "Correct: Silent mutations do not change the amino acid sequence and generally do not affect protein structure.",
      "Incorrect: Frameshift mutations significantly alter the downstream sequence of amino acids.",
      "Incorrect: Insertions in coding regions often disrupt protein structure."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "What is the primary challenge of designing primers for Polymerase Chain Reaction (PCR)?",
    "options": [
      "A) Ensuring primers bind to multiple genomic regions",
      "B) Maximizing the melting temperature of primers",
      "C) Avoiding primer-dimer formation",
      "D) Including repetitive sequences in primer design",
      "E) Lengthening the annealing stage to improve binding"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Primers should bind to specific regions, not multiple genomic regions.",
      "Incorrect: Melting temperature is important but must be optimal, not maximized.",
      "Correct: Avoiding primer-dimer formation ensures PCR efficiency by preventing unintended reactions.",
      "Incorrect: Repetitive sequences increase the likelihood of non-specific binding and should be avoided.",
      "Incorrect: Adjusting the annealing stage length is not a primary design consideration."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "Which sequencing approach is most suitable for identifying DNA methylation patterns?",
    "options": [
      "A) Whole genome sequencing",
      "B) ChIP-Seq",
      "C) RNA-Seq",
      "D) Bisulfite sequencing",
      "E) Exome sequencing"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Whole genome sequencing provides a comprehensive DNA sequence but does not focus on methylation.",
      "Incorrect: ChIP-Seq identifies protein-DNA interactions, not methylation patterns.",
      "Incorrect: RNA-Seq analyzes gene expression by measuring mRNA, not methylation.",
      "Correct: Bisulfite sequencing detects methylated cytosines in DNA, making it suitable for studying methylation patterns.",
      "Incorrect: Exome sequencing focuses on protein-coding regions and does not analyze methylation."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "Which specific application of Next Generation Sequencing (NGS) is most relevant for determining a patient's response to medication?",
    "options": [
      "A) Whole genome sequencing",
      "B) RNA-Seq",
      "C) Targeted sequencing",
      "D) Pharmacogenomics",
      "E) DNA methylation analysis"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Whole genome sequencing provides comprehensive data but is not focused on drug responses.",
      "Incorrect: RNA-Seq examines gene expression, not medication responses.",
      "Incorrect: Targeted sequencing analyzes specific genomic regions but does not address drug response.",
      "Correct: Pharmacogenomics uses NGS to study how genetic variations affect a patient’s response to medications.",
      "Incorrect: DNA methylation analysis is not typically used to determine drug responses."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "Which stage of transcription involves RNA polymerase binding to the promoter region?",
    "options": [
      "A) Initiation",
      "B) Elongation",
      "C) Termination",
      "D) RNA processing",
      "E) Histone modification"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Initiation is the first stage where RNA polymerase binds to the promoter region to begin transcription.",
      "Incorrect: Elongation involves the synthesis of RNA but occurs after promoter binding.",
      "Incorrect: Termination marks the end of transcription and does not involve promoter binding.",
      "Incorrect: RNA processing occurs after transcription is complete.",
      "Incorrect: Histone modification regulates DNA accessibility but is unrelated to RNA polymerase binding."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "What is the primary role of enhancer sequences in gene regulation?",
    "options": [
      "A) Direct binding of RNA polymerase",
      "B) Recruitment of transcription factors",
      "C) Compacting chromatin to reduce transcription",
      "D) Blocking promoter accessibility",
      "E) Degradation of mRNA transcripts"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Enhancer sequences do not directly bind RNA polymerase.",
      "Correct: Enhancer sequences recruit transcription factors to boost gene expression.",
      "Incorrect: Enhancers promote transcription, not reduce it.",
      "Incorrect: Blocking promoter accessibility is not the function of enhancers.",
      "Incorrect: mRNA degradation is unrelated to enhancer sequences."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "How does a missense mutation impact the genetic code?",
    "options": [
      "A) Introduces a premature stop codon",
      "B) Alters a single amino acid in the protein sequence",
      "C) Causes a frameshift in the reading frame",
      "D) Has no effect on the protein sequence",
      "E) Leads to chromosomal translocations"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Premature stop codons are caused by nonsense mutations, not missense mutations.",
      "Correct: Missense mutations result in the substitution of a single amino acid in the protein sequence.",
      "Incorrect: Frameshift mutations involve insertion or deletion, not single nucleotide changes.",
      "Incorrect: Missense mutations typically alter the protein sequence and are not silent.",
      "Incorrect: Chromosomal translocations occur at the chromosomal level and are unrelated to missense mutations."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "Which sequencing method is best suited to study protein-DNA interactions in gene regulation?",
    "options": [
      "A) Exome sequencing",
      "B) ChIP-Seq",
      "C) Bisulfite sequencing",
      "D) RNA-Seq",
      "E) Whole genome sequencing"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Exome sequencing focuses on protein-coding regions and does not analyze DNA interactions.",
      "Correct: ChIP-Seq identifies protein-DNA interactions and is ideal for studying gene regulation.",
      "Incorrect: Bisulfite sequencing is used for methylation analysis, not protein-DNA interactions.",
      "Incorrect: RNA-Seq studies gene expression, not interactions between DNA and proteins.",
      "Incorrect: Whole genome sequencing provides broad genetic information but lacks specificity for protein-DNA interactions."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "What is a characteristic feature of frameshift mutations?",
    "options": [
      "A) Substitution of one nucleotide for another",
      "B) Complete loss of the affected chromosome",
      "C) Alteration of all downstream codons",
      "D) Duplication of the affected gene region",
      "E) Introduction of a premature stop codon without affecting reading frame"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Substitution does not shift the reading frame.",
      "Incorrect: Frameshift mutations do not involve loss of entire chromosomes.",
      "Correct: Frameshift mutations result from insertions or deletions that shift the reading frame, altering all downstream codons.",
      "Incorrect: Duplication does not change the reading frame.",
      "Incorrect: Frameshift mutations often cause premature stop codons, but these occur due to the altered reading frame."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "Which specific feature of chromatin allows transcription to proceed?",
    "options": [
      "A) Presence of DNA methylation",
      "B) Histone acetylation increasing chromatin accessibility",
      "C) Compact chromatin structure preventing RNA polymerase access",
      "D) RNA splicing during transcription",
      "E) Activation of ribosomes within the nucleus"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: DNA methylation reduces transcription rather than promoting it.",
      "Correct: Histone acetylation opens up chromatin, facilitating transcription.",
      "Incorrect: Compact chromatin inhibits transcription rather than allowing it.",
      "Incorrect: RNA splicing occurs after transcription, not during chromatin accessibility.",
      "Incorrect: Ribosomes are involved in translation, not transcription."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "Which mutation type is most likely to result from the insertion of three consecutive nucleotides within a coding sequence?",
    "options": [
      "A) Frameshift mutation",
      "B) Nonsense mutation",
      "C) Silent mutation",
      "D) In-frame insertion",
      "E) Splice-site mutation"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Frameshift mutations occur with insertions that are not multiples of three.",
      "Incorrect: Nonsense mutations introduce a premature stop codon, not necessarily due to an insertion.",
      "Incorrect: Silent mutations do not alter the encoded amino acids and typically result from single-nucleotide changes.",
      "Correct: In-frame insertion adds amino acids without disrupting the reading frame.",
      "Incorrect: Splice-site mutations affect RNA processing, not coding sequence insertion."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "What is the primary advantage of massively parallel sequencing in Next Generation Sequencing (NGS)?",
    "options": [
      "A) Sequencing DNA using gel electrophoresis",
      "B) Processing millions of DNA fragments simultaneously",
      "C) Targeting a single gene for analysis",
      "D) Increasing transcription efficiency",
      "E) Enhancing mRNA stability"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Gel electrophoresis is not used in NGS; it is part of traditional sequencing methods.",
      "Correct: Massively parallel sequencing enables high-throughput sequencing of millions of DNA fragments.",
      "Incorrect: NGS is designed for broad analysis, not limited to a single gene.",
      "Incorrect: Transcription efficiency is unrelated to sequencing methods.",
      "Incorrect: mRNA stability is not influenced by NGS technology."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "During PCR, what ensures specificity in amplifying the target DNA sequence?",
    "options": [
      "A) High fidelity of Taq polymerase",
      "B) Design of complementary primers",
      "C) Use of RNA polymerase for amplification",
      "D) Adding magnesium chloride to the reaction buffer",
      "E) Prolonging the denaturation stage"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Taq polymerase is efficient but does not directly ensure target specificity.",
      "Correct: Complementary primers selectively bind to the target DNA sequence, ensuring specificity.",
      "Incorrect: RNA polymerase is used in transcription, not PCR amplification.",
      "Incorrect: Magnesium chloride stabilizes the reaction but does not ensure specificity.",
      "Incorrect: Prolonging denaturation may degrade DNA, not improve specificity."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "What is the primary consequence of a translocation mutation involving two non-homologous chromosomes?",
    "options": [
      "A) Loss of genetic material",
      "B) Formation of a fusion protein",
      "C) Generation of a frameshift mutation",
      "D) Duplication of the affected gene",
      "E) Increased rate of chromatin acetylation"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Loss of genetic material is associated with deletions, not translocations.",
      "Correct: Translocation mutations can result in fusion proteins that disrupt normal cellular functions.",
      "Incorrect: Frameshift mutations occur in coding sequences due to insertion or deletion.",
      "Incorrect: Duplication involves copying genetic material, not rearranging it.",
      "Incorrect: Chromatin acetylation is unrelated to translocation mutations."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "Which type of mutation is most likely to disrupt gene expression by altering the transcription factor binding site?",
    "options": [
      "A) Point mutation in the coding sequence",
      "B) Deletion in the 5'UTR region",
      "C) Mutation in the promoter region",
      "D) Silent mutation in the exon",
      "E) Frameshift mutation in the coding sequence"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Point mutations in the coding sequence do not typically affect transcription factor binding.",
      "Incorrect: Deletions in the 5'UTR may alter expression levels but are less likely to directly disrupt transcription factor binding.",
      "Correct: Mutations in the promoter region can disrupt transcription factor binding, leading to altered gene expression.",
      "Incorrect: Silent mutations do not alter protein function or transcription.",
      "Incorrect: Frameshift mutations affect the reading frame but not transcription factor binding."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "What is the role of magnesium chloride (MgCl2) in a PCR reaction?",
    "options": [
      "A) Stabilizing the DNA duplex during denaturation",
      "B) Enhancing primer specificity during annealing",
      "C) Acting as a cofactor for Taq polymerase",
      "D) Preventing DNA degradation during amplification",
      "E) Facilitating RNA-to-DNA conversion"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: MgCl2 does not stabilize DNA during denaturation.",
      "Incorrect: Primer specificity is influenced by annealing temperature, not directly by MgCl2.",
      "Correct: MgCl2 serves as a cofactor for Taq polymerase, enabling its enzymatic activity.",
      "Incorrect: MgCl2 does not prevent DNA degradation.",
      "Incorrect: RNA-to-DNA conversion is related to reverse transcription, not MgCl2."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "Which type of chromosomal mutation involves a segment being reinserted in reverse orientation?",
    "options": [
      "A) Deletion",
      "B) Inversion",
      "C) Duplication",
      "D) Translocation",
      "E) Frameshift mutation"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Deletions result in the loss of a genetic segment, not reorientation.",
      "Correct: Inversions occur when a segment of DNA is reversed and reinserted into the chromosome.",
      "Incorrect: Duplications involve an extra copy of a genetic segment, not reversal.",
      "Incorrect: Translocations involve exchange of segments between non-homologous chromosomes.",
      "Incorrect: Frameshift mutations occur in coding sequences and do not involve chromosome reorientation."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "How does DNA methylation typically impact gene expression?",
    "options": [
      "A) Increases gene expression by promoting chromatin opening",
      "B) Decreases gene expression by inhibiting transcription factor binding",
      "C) Stabilizes mRNA transcripts to enhance protein synthesis",
      "D) Promotes histone acetylation to activate transcription",
      "E) Facilitates exon splicing during transcription"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: DNA methylation compacts chromatin, reducing transcription rather than increasing it.",
      "Correct: DNA methylation often decreases gene expression by inhibiting transcription factor binding.",
      "Incorrect: DNA methylation does not directly stabilize mRNA transcripts.",
      "Incorrect: DNA methylation is associated with chromatin compaction, not histone acetylation.",
      "Incorrect: DNA methylation does not play a role in exon splicing."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "Which stage of Next Generation Sequencing (NGS) involves the solid-phase amplification of DNA fragments?",
    "options": [
      "A) Library preparation",
      "B) Cluster generation",
      "C) Sequencing by synthesis",
      "D) Data analysis",
      "E) Target enrichment"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Library preparation involves fragmenting and preparing DNA for sequencing.",
      "Correct: Cluster generation amplifies DNA fragments on a solid surface to create clusters for sequencing.",
      "Incorrect: Sequencing by synthesis reads the amplified DNA sequences but does not amplify them.",
      "Incorrect: Data analysis occurs after sequencing and does not involve DNA amplification.",
      "Incorrect: Target enrichment focuses on isolating specific DNA regions, not amplification."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "Which mechanism is primarily responsible for transcriptional repression in chromatin?",
    "options": [
      "A) Histone acetylation",
      "B) DNA methylation",
      "C) RNA splicing",
      "D) Activation of enhancers",
      "E) Formation of transcription factor dimers"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Histone acetylation increases chromatin accessibility and promotes transcription.",
      "Correct: DNA methylation compacts chromatin and represses transcription by limiting access to transcription factors.",
      "Incorrect: RNA splicing modifies mRNA after transcription, not chromatin structure.",
      "Incorrect: Enhancers boost transcription instead of repressing it.",
      "Incorrect: Transcription factor dimers facilitate transcription, not repression."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "What type of mutation is most likely to result in a gain-of-function phenotype?",
    "options": [
      "A) Silent mutation",
      "B) Missense mutation",
      "C) Frameshift mutation",
      "D) Duplication mutation",
      "E) Nonsense mutation"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Silent mutations do not alter protein function.",
      "Incorrect: Missense mutations often lead to loss-of-function or altered functionality, but rarely gain-of-function.",
      "Incorrect: Frameshift mutations usually result in loss-of-function due to disruption of the reading frame.",
      "Correct: Duplication mutations can result in overexpression or functional enhancement, leading to gain-of-function.",
      "Incorrect: Nonsense mutations introduce premature stop codons, leading to loss-of-function effects."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "Which stage of Next Generation Sequencing (NGS) involves fluorescently tagged nucleotides being incorporated into DNA strands?",
    "options": [
      "A) Library preparation",
      "B) Cluster generation",
      "C) Sequencing by synthesis",
      "D) Target enrichment",
      "E) Data analysis"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Library preparation focuses on preparing DNA fragments for sequencing, not the incorporation of nucleotides.",
      "Incorrect: Cluster generation amplifies DNA but does not incorporate fluorescent nucleotides.",
      "Correct: Sequencing by synthesis uses fluorescently tagged nucleotides to read DNA sequences during NGS.",
      "Incorrect: Target enrichment isolates specific DNA regions but does not involve nucleotide incorporation.",
      "Incorrect: Data analysis interprets sequencing data but does not interact with DNA synthesis."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "What determines the specificity of primer binding in PCR?",
    "options": [
      "A) Melting temperature of primers",
      "B) Concentration of magnesium ions",
      "C) Complementarity to the target DNA sequence",
      "D) Length of the PCR cycles",
      "E) Presence of RNA polymerase"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Melting temperature is important but does not directly determine specificity.",
      "Incorrect: Magnesium ions stabilize the reaction but do not define primer specificity.",
      "Correct: Primer binding specificity is determined by complementary base pairing with the target DNA sequence.",
      "Incorrect: PCR cycle length affects efficiency but not primer specificity.",
      "Incorrect: PCR uses DNA polymerase, not RNA polymerase."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "Which type of genetic mutation is most commonly associated with fusion proteins observed in cancer?",
    "options": [
      "A) Point mutations",
      "B) Frameshift mutations",
      "C) Translocations",
      "D) Insertions",
      "E) Deletions"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Point mutations alter single nucleotides but do not typically result in fusion proteins.",
      "Incorrect: Frameshift mutations disrupt coding sequences but are not linked to fusion protein formation.",
      "Correct: Translocations often rearrange genetic material, leading to the creation of fusion proteins in cancer.",
      "Incorrect: Insertions add genetic material but do not usually cause fusion proteins.",
      "Incorrect: Deletions remove genetic material and are unrelated to fusion protein formation."
    ],
    "slideLink": "Lecture24_FOCS.pdf"
  },
  {
    "question": "What is the primary function of standard infection control precautions in healthcare environments?",
    "options": [
      "A) To reduce workload for healthcare professionals",
      "B) To enhance the design of hospital facilities",
      "C) To prevent transmission of organisms between patients and staff",
      "D) To control antibiotic-resistant bacteria",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Standard infection control precautions are not aimed at reducing workload.",
      "Incorrect: Enhancing facility design is important but not the function of these precautions.",
      "Correct: Standard precautions are designed to prevent transmission of organisms and healthcare-associated infections.",
      "Incorrect: Controlling antibiotic-resistant bacteria is part of broader infection control efforts.",
      "Incorrect: Transmission prevention is the primary focus, not 'none of the above.'"
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which route of transmission is characterized by particles less than 5 microns that travel long distances in the air?",
    "options": [
      "A) Contact transmission",
      "B) Droplet transmission",
      "C) Airborne transmission",
      "D) Vector transmission",
      "E) Vertical transmission"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Contact transmission occurs through direct or indirect physical touch.",
      "Incorrect: Droplet transmission involves particles larger than 5 microns traveling short distances.",
      "Correct: Airborne transmission involves smaller particles carried large distances in aerosols.",
      "Incorrect: Vector transmission involves organisms spread by another living carrier.",
      "Incorrect: Vertical transmission refers to transmission between mother and offspring."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which factor is part of the 'Chain of Infection' and is related to the susceptibility of hosts to infectious agents?",
    "options": [
      "A) Portal of exit",
      "B) Reservoir",
      "C) Portal of entry",
      "D) Susceptible host",
      "E) None of the above"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Portal of exit refers to how infectious agents leave the reservoir.",
      "Incorrect: Reservoir refers to where infectious agents live, grow, and reproduce.",
      "Incorrect: Portal of entry involves how infectious agents enter the host.",
      "Correct: Susceptible host refers to the traits that affect susceptibility and severity of infection.",
      "Incorrect: 'None of the above' is incorrect as a susceptible host is part of the chain."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which infectious agent requires airborne precautions due to its ability to be aerosolized?",
    "options": [
      "A) MRSA (Meticillin-Resistant Staphylococcus aureus)",
      "B) Clostridioides difficile",
      "C) Varicella zoster virus (chicken pox)",
      "D) Influenza",
      "E) Mumps"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: MRSA requires contact precautions and is not aerosolized.",
      "Incorrect: Clostridioides difficile requires contact precautions, not airborne precautions.",
      "Correct: Varicella zoster virus is airborne and requires filtering facepiece masks.",
      "Incorrect: Influenza is droplet-transmitted, not airborne.",
      "Incorrect: Mumps is droplet-transmitted and does not require airborne precautions."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "What is the least effective control method in the hierarchy of controls for infection prevention?",
    "options": [
      "A) Elimination",
      "B) Substitution",
      "C) Engineering controls",
      "D) Administrative controls",
      "E) Personal Protective Equipment (PPE)"
    ],
    "correctIndex": 4,
    "explanations": [
      "Incorrect: Elimination is the most effective method.",
      "Incorrect: Substitution is effective but ranks below elimination.",
      "Incorrect: Engineering controls isolate people from hazards and are more effective than PPE.",
      "Incorrect: Administrative controls alter work processes and are more effective than PPE.",
      "Correct: PPE is the least effective control method as it relies on individual compliance."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which type of organism is most commonly associated with zoonotic transmission of infection?",
    "options": [
      "A) Fungi",
      "B) Prions",
      "C) Parasites",
      "D) Bacteria",
      "E) None of the above"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Fungi are not typically associated with zoonotic transmission.",
      "Incorrect: Prions are rare and do not commonly involve zoonotic transmission.",
      "Correct: Parasites such as Toxoplasma gondii are commonly associated with zoonotic transmission.",
      "Incorrect: While bacteria can be zoonotic, parasites are most commonly cited in this context.",
      "Incorrect: The correct answer is parasites, not 'None of the above.'"
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which anatomical portal of entry is most associated with self-contamination by healthcare workers?",
    "options": [
      "A) Gastrointestinal tract",
      "B) Respiratory tract",
      "C) Broken skin",
      "D) Genito-urinary tract",
      "E) Conjunctivae"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Gastrointestinal tract contamination typically occurs through ingestion, not direct self-contamination.",
      "Incorrect: Respiratory tract contamination involves inhalation, not contact-based self-contamination.",
      "Correct: Self-contamination by healthcare workers commonly occurs through contact with broken skin.",
      "Incorrect: Genito-urinary tract entry is less relevant to healthcare workers' self-contamination.",
      "Incorrect: Conjunctivae can be a portal of entry but are not the primary focus in this context."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which feature of contact precautions is specifically designed to minimize cross-contamination in healthcare settings?",
    "options": [
      "A) Use of filtering facepiece masks",
      "B) Placement in a negative pressure isolation room",
      "C) Use of gloves and aprons",
      "D) Frequent hand hygiene with alcohol-based sanitizers",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Filtering facepiece masks are part of airborne precautions.",
      "Incorrect: Negative pressure isolation rooms are designed for airborne precautions.",
      "Correct: Gloves and aprons are essential in contact precautions to prevent cross-contamination.",
      "Incorrect: Hand hygiene is standard but not specifically unique to contact precautions.",
      "Incorrect: Contact precautions require gloves and aprons, not 'None of the above.'"
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which route of transmission involves particles larger than 5 microns that travel less than 2 meters?",
    "options": [
      "A) Airborne",
      "B) Contact",
      "C) Droplet",
      "D) Vector",
      "E) Faecal-oral"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Airborne transmission involves particles smaller than 5 microns carried long distances.",
      "Incorrect: Contact transmission involves direct or indirect physical touch, not particle travel.",
      "Correct: Droplet transmission involves particles larger than 5 microns traveling short distances.",
      "Incorrect: Vector transmission involves living carriers, not droplet particles.",
      "Incorrect: Faecal-oral transmission involves ingestion, not particle travel."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which standard precaution is most critical for preventing healthcare-associated infections during an aseptic procedure?",
    "options": [
      "A) Use of aprons",
      "B) Hand hygiene",
      "C) Disposal of waste",
      "D) Decontamination of the environment",
      "E) Use of gloves"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Aprons provide protection but are not the most critical for aseptic procedures.",
      "Correct: Hand hygiene is the most critical standard precaution to prevent healthcare-associated infections.",
      "Incorrect: Proper waste disposal prevents contamination but is not the primary focus for aseptic procedures.",
      "Incorrect: Decontamination of the environment is essential but secondary in this context.",
      "Incorrect: Gloves are important but hand hygiene is paramount for aseptic tasks."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which precaution is critical for preventing healthcare-associated infections caused by resistant pathogens like MRSA?",
    "options": [
      "A) Frequent use of alcohol-based hand sanitizers",
      "B) Ensuring negative pressure isolation",
      "C) Strict adherence to contact precautions",
      "D) Administering broad-spectrum antibiotics",
      "E) All of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Alcohol-based sanitizers are important, but not specific to resistant pathogens.",
      "Incorrect: Negative pressure isolation is part of airborne precautions, not relevant to MRSA.",
      "Correct: Contact precautions, including gloves and aprons, are essential to prevent MRSA transmission.",
      "Incorrect: Broad-spectrum antibiotics increase resistance rather than prevent infection.",
      "Incorrect: Only contact precautions directly address MRSA transmission."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which environmental reservoir is most associated with Legionella outbreaks in healthcare settings?",
    "options": [
      "A) Hospital linens",
      "B) Food storage areas",
      "C) Shower water systems",
      "D) Air conditioning units",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Hospital linens are not a typical reservoir for Legionella.",
      "Incorrect: Food storage areas are unrelated to Legionella outbreaks.",
      "Correct: Shower water systems often harbor Legionella, especially when poorly maintained.",
      "Incorrect: Air conditioning units are not commonly linked to Legionella transmission.",
      "Incorrect: Legionella is linked to shower water systems, not 'None of the above.'"
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which characteristic of droplets distinguishes them from airborne particles in infection transmission?",
    "options": [
      "A) Droplets travel longer distances",
      "B) Droplets require higher humidity to persist",
      "C) Droplets are greater than 5 microns in size",
      "D) Droplets originate from solid surfaces",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Droplets travel shorter distances compared to airborne particles.",
      "Incorrect: Humidity impacts airborne particles more significantly than droplets.",
      "Correct: Droplets are characterized by sizes greater than 5 microns, limiting their travel distance.",
      "Incorrect: Droplets are expelled during coughing, sneezing, or talking—not from surfaces.",
      "Incorrect: Droplets' defining feature is their size, making 'None of the above' incorrect."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which pathogen requires both airborne precautions and a negative pressure room in healthcare settings?",
    "options": [
      "A) Influenza",
      "B) MRSA",
      "C) Tuberculosis",
      "D) Clostridioides difficile",
      "E) Mumps"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Influenza requires droplet precautions, not airborne precautions.",
      "Incorrect: MRSA requires contact precautions, not airborne precautions.",
      "Correct: Tuberculosis is airborne and necessitates a negative pressure isolation room.",
      "Incorrect: Clostridioides difficile requires contact precautions, not airborne precautions.",
      "Incorrect: Mumps is transmitted via droplets and does not require airborne precautions."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which principle in the hierarchy of controls is most effective for minimizing exposure to infectious agents?",
    "options": [
      "A) Substitution",
      "B) Administrative controls",
      "C) Elimination",
      "D) Use of PPE",
      "E) Engineering controls"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Substitution involves replacing the hazard but is less effective than elimination.",
      "Incorrect: Administrative controls focus on workflows but are not the most effective measure.",
      "Correct: Elimination, removing the hazard entirely, is the most effective method.",
      "Incorrect: PPE is crucial but ranks lower in the hierarchy due to reliance on compliance.",
      "Incorrect: Engineering controls isolate hazards but are less effective than elimination."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which step in the 'Chain of Infection' refers to the point at which an infectious agent leaves its reservoir?",
    "options": [
      "A) Portal of entry",
      "B) Portal of exit",
      "C) Reservoir",
      "D) Means of transmission",
      "E) Susceptible host"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Portal of entry refers to how an agent enters a susceptible host.",
      "Correct: Portal of exit is the point at which an infectious agent leaves its reservoir.",
      "Incorrect: Reservoir is where the agent lives, grows, and reproduces.",
      "Incorrect: Means of transmission describes how the agent travels to the host.",
      "Incorrect: Susceptible host refers to traits making individuals prone to infection."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which environment presents the highest risk for transmission of zoonotic infections according to the lecture material?",
    "options": [
      "A) Shared transport vehicles",
      "B) Hospitals",
      "C) Recreational water facilities",
      "D) Animal farms",
      "E) Schools"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Shared transport vehicles do not typically involve zoonotic infections.",
      "Incorrect: Hospitals face different challenges primarily with antibiotic-resistant pathogens.",
      "Incorrect: Recreational water facilities are linked to waterborne infections, not zoonotic ones.",
      "Correct: Animal farms frequently host zoonoses due to close human-animal interaction.",
      "Incorrect: Schools are not major sources of zoonotic infections."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which characteristic of Standard Infection Control Precautions focuses on environmental safety?",
    "options": [
      "A) Hand hygiene",
      "B) Safe disposal of sharps",
      "C) Decontamination of equipment and surroundings",
      "D) Use of PPE",
      "E) Disposal of patient waste"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Hand hygiene targets transmission prevention but not environmental safety.",
      "Incorrect: Safe disposal of sharps prevents injury but does not focus on surroundings.",
      "Correct: Decontamination ensures safety by removing infectious agents from environments and equipment.",
      "Incorrect: PPE protects individuals but does not impact surroundings.",
      "Incorrect: Waste disposal primarily addresses biohazard management, not broader environmental safety."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which element of the hierarchy of controls involves isolating people from hazards?",
    "options": [
      "A) PPE",
      "B) Substitution",
      "C) Elimination",
      "D) Engineering controls",
      "E) Administrative controls"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: PPE relies on worker compliance and is less effective.",
      "Incorrect: Substitution replaces hazards but does not isolate people from them.",
      "Incorrect: Elimination physically removes the hazard instead of isolating people.",
      "Correct: Engineering controls create barriers or isolation to protect individuals.",
      "Incorrect: Administrative controls involve workflow modifications, not physical isolation."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which type of precautions should be implemented for a patient suspected of having chickenpox (Varicella zoster virus)?",
    "options": [
      "A) Contact precautions",
      "B) Droplet precautions",
      "C) Airborne precautions",
      "D) Standard precautions only",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Contact precautions alone are insufficient for airborne pathogens like chickenpox.",
      "Incorrect: Droplet precautions do not address the aerosolized nature of chickenpox transmission.",
      "Correct: Airborne precautions are required, including FFP3 masks and negative pressure isolation.",
      "Incorrect: Standard precautions must be complemented by airborne precautions.",
      "Incorrect: Airborne precautions are specifically necessary for chickenpox cases."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which category of pathogens is least likely to be associated with droplet transmission in healthcare settings?",
    "options": [
      "A) Influenza virus",
      "B) Mycobacterium tuberculosis",
      "C) Mumps virus",
      "D) Respiratory syncytial virus (RSV)",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Influenza virus is typically transmitted through droplets.",
      "Correct: Mycobacterium tuberculosis is transmitted via airborne particles, not droplets.",
      "Incorrect: Mumps virus is transmitted through droplets.",
      "Incorrect: RSV is associated with droplet transmission.",
      "Incorrect: There is a specific answer, so 'None of the above' is not correct."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which of the following microorganisms is most likely to require contact precautions for infection control?",
    "options": [
      "A) Mycobacterium tuberculosis",
      "B) Influenza virus",
      "C) Clostridioides difficile",
      "D) Measles virus",
      "E) Varicella zoster virus (chickenpox)"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Mycobacterium tuberculosis requires airborne precautions.",
      "Incorrect: Influenza virus typically requires droplet precautions.",
      "Correct: Clostridioides difficile, due to its spore-forming nature, requires contact precautions.",
      "Incorrect: Measles virus requires airborne precautions.",
      "Incorrect: Varicella zoster virus requires airborne precautions with additional considerations."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which feature of airborne precautions is critical to ensure containment of infectious aerosols?",
    "options": [
      "A) Use of filtering facepiece respirators (e.g., FFP3 masks)",
      "B) Placement in single rooms with en-suite toilets",
      "C) Regular decontamination of medical equipment",
      "D) Enhanced hand hygiene protocols",
      "E) Use of gloves and aprons"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: FFP3 masks are essential for filtering infectious aerosols in airborne precautions.",
      "Incorrect: Single rooms are important but primarily used for droplet or contact precautions.",
      "Incorrect: While decontamination is always vital, it is not specific to airborne containment.",
      "Incorrect: Hand hygiene is a standard precaution but does not specifically address airborne particles.",
      "Incorrect: Gloves and aprons are more relevant for contact precautions."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which portal of entry is most commonly associated with self-contamination by healthcare workers during patient care?",
    "options": [
      "A) Gastrointestinal tract",
      "B) Respiratory tract",
      "C) Broken skin",
      "D) Genito-urinary tract",
      "E) Conjunctivae"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The gastrointestinal tract is less directly linked to self-contamination during patient care.",
      "Incorrect: The respiratory tract is relevant but less commonly linked to direct self-contamination.",
      "Correct: Broken skin is the most common portal of entry for self-contamination.",
      "Incorrect: The genito-urinary tract is not typically involved in this context.",
      "Incorrect: Conjunctivae are a portal of entry but not the most common in this scenario."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which factor is unique to transmission-based precautions compared to standard precautions?",
    "options": [
      "A) Hand hygiene before and after patient contact",
      "B) Decontamination of equipment used for patient care",
      "C) Use of personal protective equipment (PPE) tailored to the mode of transmission",
      "D) Safe disposal of clinical waste and sharps",
      "E) Frequent cleaning of patient surroundings"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Hand hygiene is a component of standard precautions, not unique to transmission-based precautions.",
      "Incorrect: Decontamination of equipment is a feature of standard precautions.",
      "Correct: PPE tailored to the mode of transmission (e.g., droplet, airborne, contact) is specific to transmission-based precautions.",
      "Incorrect: Safe disposal of waste and sharps is part of standard precautions.",
      "Incorrect: Cleaning of patient surroundings is part of standard precautions."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which microorganism is most commonly associated with waterborne transmission in healthcare settings?",
    "options": [
      "A) Clostridioides difficile",
      "B) Legionella pneumophila",
      "C) Methicillin-resistant Staphylococcus aureus (MRSA)",
      "D) Mycobacterium tuberculosis",
      "E) Candida albicans"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Clostridioides difficile is associated with contact transmission, not waterborne transmission.",
      "Correct: Legionella pneumophila is commonly linked to waterborne transmission, especially via hospital water systems.",
      "Incorrect: MRSA is spread through direct contact or environmental contamination.",
      "Incorrect: Mycobacterium tuberculosis is transmitted via airborne particles, not waterborne.",
      "Incorrect: Candida albicans is typically linked to endogenous infections, not waterborne transmission."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which precaution is critical for preventing droplet transmission during close patient interaction?",
    "options": [
      "A) Use of gloves",
      "B) Placement in negative pressure isolation",
      "C) Use of fluid-resistant surgical masks",
      "D) Frequent equipment decontamination",
      "E) Use of aprons"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Gloves prevent contact-based transmission, not droplet transmission.",
      "Incorrect: Negative pressure isolation is specific to airborne precautions.",
      "Correct: Fluid-resistant surgical masks are essential for protecting against large droplets.",
      "Incorrect: Equipment decontamination is vital but not unique to droplet precautions.",
      "Incorrect: Aprons are primarily for contact precautions, not droplet transmission."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "What is the defining feature of standard precautions compared to transmission-based precautions?",
    "options": [
      "A) Applicable only to patients with known infections",
      "B) Tailored to specific pathogens",
      "C) Implemented universally for all patient care",
      "D) Focused exclusively on contact transmission",
      "E) Limited to emergency procedures"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Standard precautions are applied universally, not limited to known infections.",
      "Incorrect: Tailoring to specific pathogens is a feature of transmission-based precautions.",
      "Correct: Standard precautions are universally implemented for all patient care activities.",
      "Incorrect: Standard precautions address all transmission routes, not exclusively contact transmission.",
      "Incorrect: Standard precautions are integral to routine care, not limited to emergencies."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which portal of entry is most commonly involved in respiratory infections transmitted via airborne particles?",
    "options": [
      "A) Gastrointestinal tract",
      "B) Genito-urinary tract",
      "C) Broken skin",
      "D) Respiratory tract",
      "E) Conjunctivae"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Gastrointestinal tract does not pertain to airborne respiratory infections.",
      "Incorrect: Genito-urinary tract is unrelated to airborne transmission.",
      "Incorrect: Broken skin is associated with direct contact transmission, not airborne.",
      "Correct: Respiratory tract is the primary portal of entry for airborne respiratory infections.",
      "Incorrect: Conjunctivae are less relevant in airborne respiratory infections."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which factor makes healthcare workers potential vectors for infection transmission within hospitals?",
    "options": [
      "A) Their immune system is more vulnerable",
      "B) Prolonged direct contact with patients and equipment",
      "C) Lack of training in infection control",
      "D) Wearing inappropriate PPE",
      "E) The semi-closed hospital environment"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Healthcare workers generally have robust immune systems but can still spread infections.",
      "Correct: Prolonged direct contact with patients and equipment makes healthcare workers potential vectors for infection transmission.",
      "Incorrect: Training is essential but healthcare workers can transmit infection despite training.",
      "Incorrect: Wearing inappropriate PPE is an issue but does not solely define the vector role.",
      "Incorrect: While the hospital environment contributes, healthcare workers' direct interactions are critical."
    ],
    "slideLink": "Lecture25_FOCS.pdf"
  },
  {
    "question": "Which component of the connective tissue matrix is primarily responsible for its ability to resist compressive forces?",
    "options": [
      "A) Collagen fibers",
      "B) Elastic fibers",
      "C) Glycosaminoglycans (GAGs)",
      "D) Proteoglycan core proteins",
      "E) Reticular fibers"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Collagen fibers provide tensile strength but do not resist compression.",
      "Incorrect: Elastic fibers allow for stretch and recoil, not compression resistance.",
      "Correct: GAGs are hydrophilic and attract water, forming gels that resist compressive forces.",
      "Incorrect: Proteoglycans contribute to structure but are not the primary component for resisting compression.",
      "Incorrect: Reticular fibers provide support but do not resist compression."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "What differentiates dense regular connective tissue from dense irregular connective tissue?",
    "options": [
      "A) Composition of ground substance",
      "B) Type of collagen present",
      "C) Orientation of collagen fibers",
      "D) Presence of reticular fibers",
      "E) None of the above"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: The ground substance is not a key differentiator.",
      "Incorrect: Both types contain primarily Type I collagen.",
      "Correct: Dense regular connective tissue has collagen fibers aligned in parallel, while dense irregular connective tissue has randomly arranged fibers.",
      "Incorrect: Reticular fibers are not prominent in either type.",
      "Incorrect: There is a distinct difference in fiber orientation, making 'None of the above' incorrect."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which type of connective tissue is characterized by its ability to act as an energy reservoir and provide insulation?",
    "options": [
      "A) Loose connective tissue",
      "B) Dense irregular connective tissue",
      "C) Dense regular connective tissue",
      "D) Adipose tissue",
      "E) Reticular tissue"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Loose connective tissue provides support and packing but not energy storage.",
      "Incorrect: Dense irregular connective tissue offers resistance to stress but does not store energy.",
      "Incorrect: Dense regular connective tissue is associated with tendons and ligaments, not energy storage.",
      "Correct: Adipose tissue stores fat, providing insulation and serving as an energy reservoir.",
      "Incorrect: Reticular tissue supports lymphoid structures but does not store energy."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which glycosaminoglycan is most abundant in cartilage and contributes significantly to its gel-like properties?",
    "options": [
      "A) Hyaluronic acid",
      "B) Chondroitin sulfate",
      "C) Heparan sulfate",
      "D) Keratan sulfate",
      "E) Dermatan sulfate"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Hyaluronic acid is present but not the most abundant in cartilage.",
      "Correct: Chondroitin sulfate is highly abundant in cartilage and contributes to its gel-like properties.",
      "Incorrect: Heparan sulfate is primarily found in basement membranes.",
      "Incorrect: Keratan sulfate is present in cartilage but less abundant than chondroitin sulfate.",
      "Incorrect: Dermatan sulfate is found in other connective tissues, not predominantly in cartilage."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which type of collagen is primarily involved in the structure of reticular fibers?",
    "options": [
      "A) Type I",
      "B) Type II",
      "C) Type III",
      "D) Type IV",
      "E) Type VII"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Type I is found in tendons and bone, not reticular fibers.",
      "Incorrect: Type II is found in hyaline and elastic cartilage.",
      "Correct: Type III collagen forms reticular fibers, providing a delicate support framework.",
      "Incorrect: Type IV is associated with basal lamina.",
      "Incorrect: Type VII anchors basal lamina to underlying structures, unrelated to reticular fibers."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "What is the primary role of glycosaminoglycans (GAGs) in the ground substance of connective tissue?",
    "options": [
      "A) Providing tensile strength",
      "B) Acting as a medium for nutrient diffusion",
      "C) Supporting collagen fiber assembly",
      "D) Facilitating secretion of extracellular matrix proteins",
      "E) None of the above"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Tensile strength is primarily provided by collagen fibers.",
      "Correct: GAGs create a hydrophilic gel that allows diffusion of nutrients within the connective tissue.",
      "Incorrect: Collagen fiber assembly is unrelated to the function of GAGs.",
      "Incorrect: Extracellular matrix protein secretion is a cellular process not dependent on GAGs.",
      "Incorrect: GAGs play a key role in nutrient diffusion, making this option incorrect."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which connective tissue fiber type is most likely responsible for providing resistance to stretch while maintaining flexibility?",
    "options": [
      "A) Collagen fibers",
      "B) Elastic fibers",
      "C) Reticular fibers",
      "D) Proteoglycans",
      "E) Glycosaminoglycans (GAGs)"
    ],
    "correctIndex": 1,
    "explanations": [
      "Correct: Elastic fibers allow tissues to stretch and recoil, maintaining flexibility.",
      "Incorrect: Collagen provides tensile strength but is not highly flexible.",
      "Incorrect: Reticular fibers offer structural support but are not associated with flexibility.",
      "Incorrect: Proteoglycans are components of ground substance, not fibers.",
      "Incorrect: GAGs contribute to hydration but not directly to stretch and flexibility."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "In dense regular connective tissue, what structural arrangement allows resistance to stress along a single plane?",
    "options": [
      "A) Random collagen fiber orientation",
      "B) Parallel alignment of collagen fibers",
      "C) Abundance of ground substance",
      "D) Reticular fiber branching",
      "E) Lack of elastic fibers"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Random orientation is characteristic of dense irregular connective tissue.",
      "Correct: The parallel alignment of collagen fibers is specific to dense regular connective tissue, allowing resistance to unidirectional stress.",
      "Incorrect: Ground substance contributes to nutrient diffusion but does not determine directional resistance.",
      "Incorrect: Reticular fibers provide support but do not influence stress resistance.",
      "Incorrect: The presence or absence of elastic fibers is unrelated to the directional strength provided by collagen alignment."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which connective tissue type is characterized by a high proportion of reticular fibers and supports the framework of lymphoid organs?",
    "options": [
      "A) Adipose tissue",
      "B) Reticular connective tissue",
      "C) Dense irregular connective tissue",
      "D) Elastic connective tissue",
      "E) Loose connective tissue"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Adipose tissue primarily stores fat and does not form frameworks for lymphoid organs.",
      "Correct: Reticular connective tissue is rich in reticular fibers and provides a supportive framework for organs such as lymph nodes and the spleen.",
      "Incorrect: Dense irregular connective tissue offers resistance to stress, not a framework.",
      "Incorrect: Elastic connective tissue provides stretch and recoil, not structural support for lymphoid organs.",
      "Incorrect: Loose connective tissue provides packing and support but lacks the specific reticular fiber framework."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "What distinguishes fibrocytes from fibroblasts in connective tissue?",
    "options": [
      "A) Fibrocytes are actively involved in extracellular matrix production.",
      "B) Fibroblasts are quiescent forms of fibrocytes.",
      "C) Fibrocytes are more active in tissue repair processes.",
      "D) Fibroblasts have abundant rough endoplasmic reticulum and Golgi apparatus.",
      "E) Both are identical in function and activity."
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Fibroblasts, not fibrocytes, are actively involved in extracellular matrix production.",
      "Incorrect: Fibrocytes are quiescent forms of fibroblasts, not the reverse.",
      "Incorrect: Tissue repair processes primarily involve fibroblasts, not fibrocytes.",
      "Correct: Fibroblasts are metabolically active and have abundant RER and Golgi apparatus to support extracellular matrix production.",
      "Incorrect: Fibrocytes and fibroblasts differ significantly in function and activity."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "What differentiates loose connective tissue from dense connective tissue in terms of composition?",
    "options": [
      "A) Loose connective tissue has fewer cells and more ground substance.",
      "B) Dense connective tissue has more fibers and fewer cells.",
      "C) Loose connective tissue is composed primarily of reticular fibers.",
      "D) Dense connective tissue contains more ground substance than loose connective tissue.",
      "E) None of the above."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Loose connective tissue actually has more cells and ground substance relative to fibers.",
      "Correct: Dense connective tissue has a higher proportion of fibers compared to cells and ground substance.",
      "Incorrect: Reticular fibers are not the predominant component of loose connective tissue.",
      "Incorrect: Ground substance is more abundant in loose connective tissue than in dense connective tissue.",
      "Incorrect: The provided statements make 'None of the above' incorrect."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which type of specialized connective tissue is primarily responsible for hematopoiesis?",
    "options": [
      "A) Compact bone",
      "B) Hyaline cartilage",
      "C) Adipose tissue",
      "D) Spongy bone",
      "E) Dense regular connective tissue"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Compact bone provides structural support but is not responsible for hematopoiesis.",
      "Incorrect: Hyaline cartilage provides structural support in joints, not hematopoiesis.",
      "Incorrect: Adipose tissue stores energy but does not function in blood cell production.",
      "Correct: Spongy bone, found in the epiphyses of long bones, contains red marrow, where hematopoiesis occurs.",
      "Incorrect: Dense regular connective tissue forms tendons and ligaments, not hematopoietic structures."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "What feature of Type III collagen distinguishes it from Type I collagen?",
    "options": [
      "A) Its role in providing tensile strength.",
      "B) Its characteristic affinity for silver staining.",
      "C) Its presence in the basal lamina.",
      "D) Its structural role in elastic fibers.",
      "E) None of the above."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Tensile strength is primarily associated with Type I collagen.",
      "Correct: Type III collagen, also known as reticular fibers, has an affinity for silver staining and supports lymphoid organs.",
      "Incorrect: Basal lamina is associated with Type IV collagen.",
      "Incorrect: Elastic fibers are not formed by Type III collagen.",
      "Incorrect: The distinctive features of Type III collagen are correctly addressed, making 'None of the above' incorrect."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which glycosaminoglycan is unique in that it does not attach to a protein core to form a proteoglycan?",
    "options": [
      "A) Hyaluronic acid",
      "B) Chondroitin sulfate",
      "C) Dermatan sulfate",
      "D) Keratan sulfate",
      "E) Heparan sulfate"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Hyaluronic acid is a unique GAG because it does not bind to a protein core and forms massive complexes with proteoglycans.",
      "Incorrect: Chondroitin sulfate is a typical GAG bound to a protein core.",
      "Incorrect: Dermatan sulfate is also bound to a protein core.",
      "Incorrect: Keratan sulfate is attached to a protein core in proteoglycan structures.",
      "Incorrect: Heparan sulfate binds to core proteins in the extracellular matrix."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "In the context of connective tissue, what is the main function of the basal lamina?",
    "options": [
      "A) To store lipids for energy production.",
      "B) To provide tensile strength through collagen Type I.",
      "C) To anchor epithelial cells to underlying connective tissue.",
      "D) To allow for diffusion of nutrients within dense connective tissue.",
      "E) To facilitate hematopoiesis."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Lipid storage is a function of adipose tissue, not the basal lamina.",
      "Incorrect: Tensile strength is not a role of the basal lamina, but of dense connective tissues.",
      "Correct: The basal lamina serves as a specialized extracellular matrix, anchoring epithelial cells to connective tissue.",
      "Incorrect: Nutrient diffusion occurs within the ground substance, not the basal lamina.",
      "Incorrect: Hematopoiesis occurs in bone marrow, not the basal lamina."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "What distinguishes elastic fibers from collagen fibers in connective tissue?",
    "options": [
      "A) Elastic fibers have greater tensile strength than collagen fibers.",
      "B) Elastic fibers are composed of fibrillin and elastin, while collagen fibers are composed of tropocollagen.",
      "C) Elastic fibers form bundles, whereas collagen fibers remain as single units.",
      "D) Elastic fibers are visible with H&E staining, but collagen fibers require silver staining.",
      "E) None of the above."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Collagen fibers have greater tensile strength, not elastic fibers.",
      "Correct: Elastic fibers are made of fibrillin and elastin, while collagen fibers are composed of tropocollagen.",
      "Incorrect: Collagen fibers can form bundles, unlike elastic fibers.",
      "Incorrect: Elastic fibers often require special stains, whereas collagen fibers are visible with H&E staining.",
      "Incorrect: The distinguishing features of elastic fibers are correctly addressed, making 'None of the above' incorrect."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which characteristic of reticular fibers makes them unique among connective tissue fibers?",
    "options": [
      "A) Their high tensile strength.",
      "B) Their ability to stretch and recoil.",
      "C) Their affinity for silver staining and delicate structural support.",
      "D) Their role in anchoring the basal lamina to underlying tissues.",
      "E) Their formation into thick bundles."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Reticular fibers do not provide high tensile strength; that is a characteristic of collagen fibers.",
      "Incorrect: Reticular fibers do not stretch and recoil; this is a feature of elastic fibers.",
      "Correct: Reticular fibers, composed of Type III collagen, stain with silver salts and provide delicate structural support.",
      "Incorrect: Anchoring the basal lamina is a function of Type VII collagen.",
      "Incorrect: Reticular fibers do not form thick bundles."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which connective tissue structure is primarily responsible for regulating cell migration and movement through the extracellular matrix?",
    "options": [
      "A) Proteoglycans",
      "B) Collagen fibers",
      "C) Glycosaminoglycans (GAGs)",
      "D) Reticular fibers",
      "E) Ground substance."
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Proteoglycans contribute to the matrix structure but do not directly regulate cell migration.",
      "Incorrect: Collagen fibers provide tensile strength but are not involved in regulating migration.",
      "Correct: GAGs play a key role in regulating cell movement by interacting with growth factors and creating space within the ECM.",
      "Incorrect: Reticular fibers provide structural support but do not regulate cell migration.",
      "Incorrect: While the ground substance contains GAGs, the regulation function is specific to the GAGs themselves."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "What is the primary function of fibroblasts in connective tissue?",
    "options": [
      "A) Producing collagen fibers, ground substance, and elastic fibers.",
      "B) Initiating phagocytosis to defend the tissue.",
      "C) Storing fat to regulate temperature and energy.",
      "D) Producing chemical mediators during immune responses.",
      "E) Supporting lymphoid organs by creating reticular fibers."
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Fibroblasts are responsible for synthesizing the components of the extracellular matrix, including collagen fibers, elastic fibers, and ground substance.",
      "Incorrect: Phagocytosis is carried out by macrophages, not fibroblasts.",
      "Incorrect: Fat storage is the role of adipocytes, not fibroblasts.",
      "Incorrect: Chemical mediator production is performed by mast cells.",
      "Incorrect: Reticular fibers are produced by reticular cells."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "What role does hyaluronic acid play in the ground substance of connective tissue?",
    "options": [
      "A) Providing tensile strength to connective tissue.",
      "B) Facilitating water retention and forming highly hydrated gels.",
      "C) Linking collagen fibers to proteoglycans.",
      "D) Acting as a primary component of reticular fibers.",
      "E) Enhancing the visibility of connective tissue in histological stains."
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Tensile strength is provided by collagen fibers, not hyaluronic acid.",
      "Correct: Hyaluronic acid is a large glycosaminoglycan that attracts water to form hydrated gels, aiding in nutrient diffusion and tissue hydration.",
      "Incorrect: Hyaluronic acid does not directly link collagen fibers to proteoglycans.",
      "Incorrect: Reticular fibers are composed of Type III collagen, not hyaluronic acid.",
      "Incorrect: Hyaluronic acid is not responsible for tissue visibility in histological stains."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which type of connective tissue is most efficient at resisting multidirectional forces?",
    "options": [
      "A) Loose connective tissue",
      "B) Dense regular connective tissue",
      "C) Dense irregular connective tissue",
      "D) Reticular connective tissue",
      "E) Adipose tissue"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Loose connective tissue is not adapted to resist significant forces.",
      "Incorrect: Dense regular connective tissue resists forces in a single direction or plane.",
      "Correct: Dense irregular connective tissue has collagen fibers arranged haphazardly, allowing resistance to forces from multiple directions.",
      "Incorrect: Reticular connective tissue provides structural support but does not resist multidirectional forces.",
      "Incorrect: Adipose tissue is for energy storage and insulation, not force resistance."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which component of the extracellular matrix is responsible for regulating hydration and compression resistance?",
    "options": [
      "A) Collagen fibers",
      "B) Reticular fibers",
      "C) Glycosaminoglycans (GAGs)",
      "D) Proteoglycans",
      "E) Glycoproteins"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Collagen fibers provide tensile strength but are not involved in hydration regulation.",
      "Incorrect: Reticular fibers offer structural support but do not regulate hydration.",
      "Correct: GAGs are highly hydrophilic, attracting water to form gels and resisting compression.",
      "Incorrect: Proteoglycans contribute to matrix structure but do not directly regulate hydration.",
      "Incorrect: Glycoproteins mediate cell adhesion but do not control hydration."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which connective tissue structure is primarily involved in anchoring epithelial cells to underlying connective tissues?",
    "options": [
      "A) Ground substance",
      "B) Collagen fibers",
      "C) Reticular fibers",
      "D) Basal lamina",
      "E) Elastic fibers"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Ground substance acts as a molecular sieve but does not anchor epithelial cells.",
      "Incorrect: Collagen fibers provide tensile strength but are not specialized for anchoring epithelial cells.",
      "Incorrect: Reticular fibers provide structural support but do not perform anchoring functions.",
      "Correct: The basal lamina is a specialized layer that anchors epithelial cells to connective tissue.",
      "Incorrect: Elastic fibers facilitate stretch and recoil but do not anchor epithelial cells."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which connective tissue cell type produces chemical mediators for inflammatory responses?",
    "options": [
      "A) Fibroblasts",
      "B) Adipocytes",
      "C) Mast cells",
      "D) Macrophages",
      "E) Plasma cells"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Fibroblasts produce extracellular matrix components but do not release chemical mediators.",
      "Incorrect: Adipocytes store fat and provide insulation but are unrelated to inflammatory responses.",
      "Correct: Mast cells release histamine and other chemical mediators during inflammation.",
      "Incorrect: Macrophages perform phagocytosis and defense but do not release chemical mediators.",
      "Incorrect: Plasma cells produce antibodies, not chemical mediators."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "What unique characteristic of proteoglycans contributes to their ability to form macromolecular complexes in connective tissue?",
    "options": [
      "A) Covalent bonding with collagen fibers",
      "B) Attachment of glycosaminoglycans (GAGs) to core proteins",
      "C) Direct interaction with elastic fibers",
      "D) Hydrophobic nature enabling tight packing",
      "E) Ability to form rigid structures"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Proteoglycans do not covalently bond with collagen fibers; they associate indirectly.",
      "Correct: GAGs covalently attached to core proteins enable proteoglycans to form large macromolecular complexes.",
      "Incorrect: Elastic fibers do not directly interact with proteoglycans.",
      "Incorrect: Proteoglycans are hydrophilic, not hydrophobic.",
      "Incorrect: Proteoglycans contribute to gel-like properties, not rigid structures."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which specific glycosaminoglycan is most associated with cartilage, contributing to its structural integrity?",
    "options": [
      "A) Hyaluronic acid",
      "B) Chondroitin sulfate",
      "C) Dermatan sulfate",
      "D) Keratan sulfate",
      "E) Heparan sulfate"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Hyaluronic acid is present in many tissues but is not the primary GAG in cartilage.",
      "Correct: Chondroitin sulfate is abundant in cartilage and plays a key role in its structural integrity.",
      "Incorrect: Dermatan sulfate is not primarily associated with cartilage.",
      "Incorrect: Keratan sulfate is found in cartilage but is less prevalent than chondroitin sulfate.",
      "Incorrect: Heparan sulfate is primarily associated with basement membranes."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "What is the defining characteristic of elastic cartilage compared to hyaline cartilage?",
    "options": [
      "A) Presence of Type I collagen",
      "B) High concentration of glycosaminoglycans",
      "C) Abundance of elastic fibers",
      "D) Lack of lacunae housing chondrocytes",
      "E) Greater rigidity due to hydroxyapatite"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Type I collagen is not a feature of elastic cartilage; it contains Type II collagen.",
      "Incorrect: Glycosaminoglycans are present but are not the defining feature.",
      "Correct: Elastic cartilage contains abundant elastic fibers, providing flexibility.",
      "Incorrect: Both elastic and hyaline cartilage have lacunae containing chondrocytes.",
      "Incorrect: Hydroxyapatite is associated with bone, not elastic cartilage."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "What is the primary structural role of Type IV collagen in connective tissue?",
    "options": [
      "A) Providing tensile strength in tendons",
      "B) Acting as a scaffold in reticular fibers",
      "C) Forming the basal lamina in epithelial tissues",
      "D) Contributing to the elastic properties of cartilage",
      "E) Facilitating cross-linking in bone matrix"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Type IV collagen is not found in tendons; Type I collagen fulfills this role.",
      "Incorrect: Reticular fibers are composed of Type III collagen.",
      "Correct: Type IV collagen forms a mesh-like network in the basal lamina, supporting epithelial cells.",
      "Incorrect: Elastic properties are provided by elastic fibers, not Type IV collagen.",
      "Incorrect: Cross-linking in bone matrix involves other components, not Type IV collagen."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which type of connective tissue fiber provides structural support without forming bundles?",
    "options": [
      "A) Collagen fibers",
      "B) Elastic fibers",
      "C) Reticular fibers",
      "D) Type I collagen",
      "E) Type II collagen"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Collagen fibers typically form bundles to provide tensile strength.",
      "Incorrect: Elastic fibers contribute to elasticity, not structural support alone.",
      "Correct: Reticular fibers, composed of Type III collagen, provide delicate support and do not form bundles.",
      "Incorrect: Type I collagen forms large bundles, unlike reticular fibers.",
      "Incorrect: Type II collagen is found in cartilage and does not form reticular fibers."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "What property of proteoglycans allows them to resist compressive forces in connective tissues?",
    "options": [
      "A) Their rigid core protein structure",
      "B) Their hydrophobic interactions with fibers",
      "C) Their ability to bind water through glycosaminoglycans",
      "D) Their integration into collagen bundles",
      "E) Their association with elastic fibers"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Proteoglycans are not rigid; their flexibility allows gel formation.",
      "Incorrect: Proteoglycans are hydrophilic, not hydrophobic.",
      "Correct: Proteoglycans resist compression by binding water through their attached glycosaminoglycans, forming hydrated gels.",
      "Incorrect: Proteoglycans do not directly integrate into collagen bundles.",
      "Incorrect: Elastic fibers do not directly interact with proteoglycans to provide this property."
    ],
    "slideLink": "Lecture26_FOCS.pdf"
  },
  {
    "question": "Which lipid particle is primarily responsible for reverse cholesterol transport?",
    "options": [
      "A) LDL",
      "B) HDL",
      "C) VLDL",
      "D) Chylomicrons",
      "E) IDL"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: LDL is mainly involved in cholesterol delivery to tissues.",
      "Correct: HDL facilitates reverse cholesterol transport by removing cholesterol from cells and delivering it to the liver.",
      "Incorrect: VLDL primarily transports triglycerides from the liver to tissues.",
      "Incorrect: Chylomicrons are involved in transporting dietary fats.",
      "Incorrect: IDL is an intermediate particle in lipid metabolism, not involved in reverse cholesterol transport."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "What is the enzyme responsible for esterifying free cholesterol on the surface of nascent HDL?",
    "options": [
      "A) Hormone-sensitive lipase",
      "B) Lipoprotein lipase",
      "C) Lecithin-cholesterol acyltransferase (LCAT)",
      "D) Acetyl-CoA carboxylase",
      "E) Fatty acid synthase"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Hormone-sensitive lipase is involved in triglyceride breakdown.",
      "Incorrect: Lipoprotein lipase hydrolyzes triglycerides in lipoproteins.",
      "Correct: LCAT esterifies free cholesterol on nascent HDL to form mature HDL.",
      "Incorrect: Acetyl-CoA carboxylase is involved in fatty acid biosynthesis.",
      "Incorrect: Fatty acid synthase catalyzes reactions in fatty acid formation."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "What is the main regulatory mechanism for LDL cholesterol uptake into cells?",
    "options": [
      "A) Interaction with scavenger receptor-B1",
      "B) Hydrolysis by lipoprotein lipase",
      "C) Binding to LDL receptor",
      "D) Activation by PCSK9",
      "E) Inhibition by Apo-A1"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Scavenger receptor-B1 is associated with HDL cholesterol uptake.",
      "Incorrect: Lipoprotein lipase acts on triglycerides, not LDL cholesterol.",
      "Correct: LDL cholesterol is taken up into cells via binding to LDL receptors.",
      "Incorrect: PCSK9 signals the destruction of LDL receptors but does not facilitate uptake.",
      "Incorrect: Apo-A1 is involved in reverse cholesterol transport, not LDL uptake."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "Which molecule acts as a carrier to transport fatty acids into mitochondria for β-oxidation?",
    "options": [
      "A) Acetyl-CoA",
      "B) Citrate",
      "C) Carnitine",
      "D) Malonyl-CoA",
      "E) ATP"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Acetyl-CoA is a product of fatty acid β-oxidation, not a carrier.",
      "Incorrect: Citrate is involved in fatty acid biosynthesis, not transport.",
      "Correct: Carnitine transports fatty acids into mitochondria for β-oxidation.",
      "Incorrect: Malonyl-CoA is involved in fatty acid biosynthesis.",
      "Incorrect: ATP provides energy but does not directly transport fatty acids."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "What is the primary function of bile acids in lipid digestion?",
    "options": [
      "A) Hydrolysis of triglycerides",
      "B) Solubilization of dietary fats into micelles",
      "C) Esterification of cholesterol",
      "D) Transport of fatty acids in blood",
      "E) Activation of lipoprotein lipase"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Hydrolysis of triglycerides is performed by lipase enzymes.",
      "Correct: Bile acids solubilize dietary fats into micelles for absorption.",
      "Incorrect: Esterification of cholesterol is performed by LCAT.",
      "Incorrect: Fatty acids are transported in blood bound to albumin, not bile acids.",
      "Incorrect: Lipoprotein lipase activation is associated with apolipoproteins, not bile acids."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "Which molecule inhibits the transport of fatty acids into mitochondria for β-oxidation?",
    "options": [
      "A) Carnitine",
      "B) Malonyl-CoA",
      "C) Acetyl-CoA",
      "D) Citrate",
      "E) Hormone-sensitive lipase"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Carnitine facilitates fatty acid transport into mitochondria.",
      "Correct: Malonyl-CoA inhibits carnitine acyltransferase I, preventing fatty acid entry into mitochondria for β-oxidation.",
      "Incorrect: Acetyl-CoA is involved in energy metabolism, not inhibition of transport.",
      "Incorrect: Citrate is linked to fatty acid biosynthesis but does not inhibit transport.",
      "Incorrect: Hormone-sensitive lipase is involved in triglyceride breakdown."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "What is the primary apolipoprotein found in HDL particles responsible for reverse cholesterol transport?",
    "options": [
      "A) Apo-B100",
      "B) Apo-CII",
      "C) Apo-E",
      "D) Apo-A1",
      "E) Apo-D"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Apo-B100 is found in LDL and VLDL, not HDL.",
      "Incorrect: Apo-CII activates lipoprotein lipase but is not critical for reverse cholesterol transport.",
      "Incorrect: Apo-E facilitates liver clearance of remnant particles.",
      "Correct: Apo-A1 plays a central role in reverse cholesterol transport by facilitating lipid transfer to HDL.",
      "Incorrect: Apo-D has other functions but is not involved in reverse cholesterol transport."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "Which step of ketone body synthesis is directly initiated when Acetyl-CoA accumulates in the liver during fasting or starvation?",
    "options": [
      "A) Formation of HMG-CoA",
      "B) Conversion of Acetyl-CoA to Malonyl-CoA",
      "C) Synthesis of triglycerides",
      "D) Hydrolysis of HMG-CoA to acetoacetate",
      "E) Reduction of acetoacetate to 3-hydroxybutyrate"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: The accumulation of Acetyl-CoA leads to the synthesis of HMG-CoA as the initial step in ketone body formation.",
      "Incorrect: Malonyl-CoA synthesis occurs in fatty acid biosynthesis, not ketogenesis.",
      "Incorrect: Triglycerides are synthesized under nutrient excess conditions, not during fasting.",
      "Incorrect: Hydrolysis of HMG-CoA to acetoacetate is a subsequent step, not the initiation.",
      "Incorrect: Reduction of acetoacetate to 3-hydroxybutyrate happens later in ketogenesis."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "Which lipoprotein has the highest ratio of protein to lipid content?",
    "options": [
      "A) Chylomicrons",
      "B) VLDL",
      "C) LDL",
      "D) HDL",
      "E) IDL"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Chylomicrons have the lowest protein-to-lipid ratio.",
      "Incorrect: VLDL has a higher lipid content relative to protein.",
      "Incorrect: LDL has a lower protein-to-lipid ratio compared to HDL.",
      "Correct: HDL has the highest protein-to-lipid ratio, making it the densest lipoprotein.",
      "Incorrect: IDL has an intermediate ratio, not the highest."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "What triggers the breakdown of triglycerides into glycerol and free fatty acids during fasting?",
    "options": [
      "A) Cortisol",
      "B) Insulin",
      "C) Adrenaline",
      "D) Apo-CIII",
      "E) Carnitine"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Cortisol contributes to gluconeogenesis but is not the primary trigger for triglyceride breakdown.",
      "Incorrect: Insulin inhibits triglyceride breakdown, promoting storage instead.",
      "Correct: Adrenaline activates hormone-sensitive lipase, triggering triglyceride breakdown.",
      "Incorrect: Apo-CIII regulates lipoprotein lipase but does not directly trigger breakdown.",
      "Incorrect: Carnitine facilitates fatty acid transport but is not involved in triglyceride breakdown."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "Which lipoprotein primarily mediates the transfer of triglycerides from the liver to peripheral tissues?",
    "options": [
      "A) Chylomicrons",
      "B) VLDL",
      "C) HDL",
      "D) LDL",
      "E) IDL"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Chylomicrons transport dietary lipids, not triglycerides from the liver.",
      "Correct: VLDL carries triglycerides synthesized in the liver to peripheral tissues.",
      "Incorrect: HDL is involved in reverse cholesterol transport, not triglyceride delivery.",
      "Incorrect: LDL mainly delivers cholesterol, not triglycerides.",
      "Incorrect: IDL is an intermediate particle formed during VLDL metabolism."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "What is the main driver of fatty acid synthesis in conditions of nutrient excess?",
    "options": [
      "A) High levels of glucose",
      "B) Low levels of malonyl-CoA",
      "C) Accumulation of citrate in the cytoplasm",
      "D) Activation of hormone-sensitive lipase",
      "E) Increased β-oxidation rates"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: While high glucose contributes to energy storage, citrate accumulation is the direct trigger for fatty acid synthesis.",
      "Incorrect: Malonyl-CoA is synthesized during fatty acid biosynthesis and is not the main driver.",
      "Correct: Cytoplasmic citrate accumulation signals excess nutrients, initiating fatty acid synthesis.",
      "Incorrect: Hormone-sensitive lipase is involved in triglyceride breakdown, not synthesis.",
      "Incorrect: β-oxidation pertains to fatty acid degradation, not synthesis."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "Which apolipoprotein is critical for activating lipoprotein lipase during lipid metabolism?",
    "options": [
      "A) Apo-A1",
      "B) Apo-B48",
      "C) Apo-B100",
      "D) Apo-CII",
      "E) Apo-E"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: Apo-A1 is involved in HDL function, not lipase activation.",
      "Incorrect: Apo-B48 is associated with chylomicrons but does not activate lipase.",
      "Incorrect: Apo-B100 is found in LDL and VLDL, unrelated to lipoprotein lipase activation.",
      "Correct: Apo-CII is essential for lipoprotein lipase activation, enabling triglyceride hydrolysis.",
      "Incorrect: Apo-E is involved in hepatic clearance of lipoproteins, not lipase activation."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "Which molecule acts as the precursor for ketone body synthesis during prolonged fasting?",
    "options": [
      "A) Acetoacetate",
      "B) Malonyl-CoA",
      "C) Acetyl-CoA",
      "D) Citrate",
      "E) Carnitine"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Acetoacetate is a ketone body, not its precursor.",
      "Incorrect: Malonyl-CoA is involved in fatty acid synthesis, not ketone body production.",
      "Correct: Acetyl-CoA accumulates during fasting, leading to ketone body synthesis.",
      "Incorrect: Citrate is linked to fatty acid biosynthesis, not ketogenesis.",
      "Incorrect: Carnitine facilitates fatty acid transport but is unrelated to ketone synthesis."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "Which component of HDL allows it to accept free cholesterol from peripheral cells?",
    "options": [
      "A) Apo-B100",
      "B) Phospholipids in the HDL shell",
      "C) Cholesteryl esters in the HDL core",
      "D) Apo-CII",
      "E) Lipoprotein lipase"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Apo-B100 is associated with LDL, not HDL.",
      "Correct: Phospholipids in the HDL shell enable the uptake of free cholesterol from cells.",
      "Incorrect: Cholesteryl esters are formed after cholesterol is taken up, not before.",
      "Incorrect: Apo-CII activates lipoprotein lipase, unrelated to HDL's cholesterol uptake.",
      "Incorrect: Lipoprotein lipase hydrolyzes triglycerides, not involved in cholesterol transfer."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "Which enzyme is responsible for esterifying free cholesterol in nascent HDL during reverse cholesterol transport?",
    "options": [
      "A) Hormone-sensitive lipase",
      "B) Lecithin-cholesterol acyltransferase (LCAT)",
      "C) Lipoprotein lipase",
      "D) Acetyl-CoA carboxylase",
      "E) Carnitine acyltransferase I"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Hormone-sensitive lipase is involved in triglyceride breakdown, not cholesterol esterification.",
      "Correct: LCAT esterifies free cholesterol in nascent HDL to form cholesterol esters.",
      "Incorrect: Lipoprotein lipase hydrolyzes triglycerides, not cholesterol.",
      "Incorrect: Acetyl-CoA carboxylase is linked to fatty acid biosynthesis, not cholesterol metabolism.",
      "Incorrect: Carnitine acyltransferase I facilitates fatty acid transport, unrelated to cholesterol esterification."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "What is the primary regulatory mechanism preventing excessive fatty acid oxidation during nutrient-rich states?",
    "options": [
      "A) Activation of hormone-sensitive lipase",
      "B) Inhibition of carnitine acyltransferase I by malonyl-CoA",
      "C) Increased β-oxidation rates in mitochondria",
      "D) Synthesis of ketone bodies",
      "E) Hydrolysis of triglycerides by lipoprotein lipase"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Hormone-sensitive lipase activation promotes fatty acid release, not inhibition of oxidation.",
      "Correct: Malonyl-CoA inhibits carnitine acyltransferase I, reducing fatty acid entry into mitochondria during nutrient-rich states.",
      "Incorrect: Increased β-oxidation occurs during fasting, not nutrient excess.",
      "Incorrect: Ketone body synthesis is a response to fasting, not nutrient-rich conditions.",
      "Incorrect: Lipoprotein lipase hydrolyzes triglycerides but does not regulate fatty acid oxidation."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "Which lipoprotein is primarily responsible for delivering cholesterol to peripheral tissues?",
    "options": [
      "A) HDL",
      "B) VLDL",
      "C) LDL",
      "D) IDL",
      "E) Chylomicrons"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: HDL is involved in reverse cholesterol transport, not delivery to tissues.",
      "Incorrect: VLDL primarily delivers triglycerides, not cholesterol.",
      "Correct: LDL delivers cholesterol to peripheral tissues through receptor-mediated uptake.",
      "Incorrect: IDL is an intermediate particle and does not primarily deliver cholesterol.",
      "Incorrect: Chylomicrons transport dietary fats, not cholesterol."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "What is the primary driving force behind the formation of micelles during lipid digestion?",
    "options": [
      "A) Hydrolysis of triglycerides by pancreatic lipase",
      "B) Solubilization by bile acids",
      "C) Activation of Apo-CII",
      "D) Release of free fatty acids and monoglycerides",
      "E) Absorption by enterocytes"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Pancreatic lipase breaks down triglycerides but does not directly drive micelle formation.",
      "Correct: Bile acids solubilize lipids, facilitating micelle formation during digestion.",
      "Incorrect: Apo-CII is involved in lipoprotein lipase activation, unrelated to micelle formation.",
      "Incorrect: Free fatty acids and monoglycerides are components of micelles but not the driving force.",
      "Incorrect: Enterocytes absorb micelles but do not drive their formation."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "Which factor determines whether acetyl-CoA enters the Krebs cycle or is converted into ketone bodies?",
    "options": [
      "A) Presence of malonyl-CoA",
      "B) Availability of oxaloacetate",
      "C) Activity of carnitine acyltransferase I",
      "D) Concentration of NADPH",
      "E) Levels of ATP in mitochondria"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Malonyl-CoA regulates fatty acid transport, not acetyl-CoA utilization.",
      "Correct: Availability of oxaloacetate determines whether acetyl-CoA enters the Krebs cycle or is used for ketone body synthesis.",
      "Incorrect: Carnitine acyltransferase I regulates fatty acid transport, not acetyl-CoA's fate.",
      "Incorrect: NADPH is involved in biosynthetic pathways, not acetyl-CoA utilization.",
      "Incorrect: ATP levels impact energy homeostasis but do not directly govern acetyl-CoA's pathway."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "What is the primary mechanism that drives the removal of excess cholesterol from peripheral tissues?",
    "options": [
      "A) Interaction with LDL receptors",
      "B) Esterification by LCAT",
      "C) Reverse cholesterol transport mediated by HDL",
      "D) Hydrolysis by lipoprotein lipase",
      "E) Uptake by scavenger receptor-B1"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: LDL receptor interaction facilitates cholesterol uptake, not removal.",
      "Incorrect: Esterification by LCAT is part of HDL's function but not the primary mechanism.",
      "Correct: HDL mediates reverse cholesterol transport, removing excess cholesterol from tissues.",
      "Incorrect: Lipoprotein lipase hydrolyzes triglycerides, unrelated to cholesterol removal.",
      "Incorrect: Scavenger receptor-B1 aids HDL uptake but is not the primary removal mechanism."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "What is the key regulatory step in fatty acid biosynthesis?",
    "options": [
      "A) Activation of hormone-sensitive lipase",
      "B) Conversion of citrate to acetyl-CoA",
      "C) Conversion of acetyl-CoA to malonyl-CoA by acetyl-CoA carboxylase",
      "D) Synthesis of triglycerides from fatty acids",
      "E) Hydrolysis of triglycerides by lipoprotein lipase"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Hormone-sensitive lipase is involved in fatty acid breakdown, not biosynthesis.",
      "Incorrect: Citrate to acetyl-CoA conversion occurs but is not the key regulatory step.",
      "Correct: Acetyl-CoA carboxylase catalyzes the formation of malonyl-CoA, the key regulatory step in fatty acid biosynthesis.",
      "Incorrect: Triglyceride synthesis occurs later in lipid metabolism, not at the regulatory step.",
      "Incorrect: Lipoprotein lipase hydrolyzes triglycerides, unrelated to fatty acid biosynthesis."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "Which molecule acts as the primary precursor for bile acid synthesis in the liver?",
    "options": [
      "A) Cholesterol",
      "B) Triglycerides",
      "C) Phospholipids",
      "D) Fatty acids",
      "E) Lipoproteins"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: Cholesterol is the precursor molecule for bile acid synthesis in the liver.",
      "Incorrect: Triglycerides are energy stores, not precursors for bile acids.",
      "Incorrect: Phospholipids are structural components of membranes, not involved in bile acid synthesis.",
      "Incorrect: Fatty acids are energy sources and not directly used for bile acid synthesis.",
      "Incorrect: Lipoproteins transport lipids but are not precursors for bile acids."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "Which lipoprotein particle is primarily responsible for transporting dietary lipids from the intestine?",
    "options": [
      "A) VLDL",
      "B) LDL",
      "C) HDL",
      "D) Chylomicrons",
      "E) IDL"
    ],
    "correctIndex": 3,
    "explanations": [
      "Incorrect: VLDL transports triglycerides synthesized in the liver, not dietary lipids.",
      "Incorrect: LDL delivers cholesterol to tissues, not dietary lipids.",
      "Incorrect: HDL is involved in reverse cholesterol transport, not dietary lipid transport.",
      "Correct: Chylomicrons transport dietary lipids from the intestine to peripheral tissues.",
      "Incorrect: IDL is an intermediate in VLDL metabolism, unrelated to dietary lipid transport."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "What is the main driving factor for ketone body production during prolonged fasting?",
    "options": [
      "A) High citrate levels in the cytoplasm",
      "B) Low oxaloacetate levels in the mitochondria",
      "C) Activation of hormone-sensitive lipase",
      "D) Increased malonyl-CoA concentration",
      "E) Decreased fatty acid synthesis rates"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Citrate accumulation triggers fatty acid biosynthesis, not ketone body production.",
      "Correct: Low oxaloacetate levels in the mitochondria during fasting direct acetyl-CoA toward ketone body synthesis.",
      "Incorrect: Hormone-sensitive lipase activation promotes fatty acid breakdown but does not directly drive ketone production.",
      "Incorrect: Increased malonyl-CoA concentration inhibits fatty acid oxidation, not related to ketone body production.",
      "Incorrect: Decreased fatty acid synthesis rates occur during fasting but are not the primary driver of ketone production."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "What is the primary function of Apo-B100 in lipid metabolism?",
    "options": [
      "A) Activation of lipoprotein lipase",
      "B) Facilitation of reverse cholesterol transport",
      "C) Recognition of LDL particles by LDL receptors",
      "D) Regulation of HDL synthesis",
      "E) Hydrolysis of triglycerides"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: Apo-B100 does not activate lipoprotein lipase.",
      "Incorrect: Apo-B100 is not involved in reverse cholesterol transport.",
      "Correct: Apo-B100 is crucial for LDL receptor recognition, allowing cellular uptake of LDL particles.",
      "Incorrect: Apo-B100 has no direct role in HDL synthesis.",
      "Incorrect: Hydrolysis of triglycerides is mediated by enzymes, not Apo-B100."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "Which enzyme is inhibited by malonyl-CoA to prevent simultaneous fatty acid oxidation and synthesis?",
    "options": [
      "A) Hormone-sensitive lipase",
      "B) Carnitine acyltransferase I",
      "C) Acetyl-CoA carboxylase",
      "D) Lipoprotein lipase",
      "E) HMG-CoA reductase"
    ],
    "correctIndex": 1,
    "explanations": [
      "Incorrect: Hormone-sensitive lipase is involved in triglyceride breakdown, not fatty acid transport.",
      "Correct: Malonyl-CoA inhibits carnitine acyltransferase I, preventing fatty acids from entering mitochondria for oxidation.",
      "Incorrect: Acetyl-CoA carboxylase catalyzes malonyl-CoA formation but is not inhibited by it.",
      "Incorrect: Lipoprotein lipase hydrolyzes triglycerides, unrelated to fatty acid oxidation.",
      "Incorrect: HMG-CoA reductase regulates cholesterol synthesis, not fatty acid oxidation."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "What is the primary structural feature of phospholipids that allows them to form cell membranes?",
    "options": [
      "A) Presence of a hydrophilic head and hydrophobic tails",
      "B) High protein content",
      "C) Spherical shape in aqueous solutions",
      "D) Esterification of cholesterol",
      "E) Covalent bonding with carbohydrates"
    ],
    "correctIndex": 0,
    "explanations": [
      "Correct: The amphipathic nature of phospholipids, with a hydrophilic head and hydrophobic tails, enables the formation of bilayers in cell membranes.",
      "Incorrect: Phospholipids are primarily lipid molecules, not protein-rich.",
      "Incorrect: Phospholipids do not adopt a spherical shape but form bilayers.",
      "Incorrect: Cholesterol esterification is not relevant to phospholipid structure.",
      "Incorrect: Phospholipids do not covalently bond with carbohydrates to form membranes."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "Which factor enables HDL to effectively remove cholesterol from peripheral tissues?",
    "options": [
      "A) High triglyceride content",
      "B) Interaction with Apo-B100",
      "C) Esterification of cholesterol by LCAT",
      "D) Hydrolysis of lipoproteins by lipoprotein lipase",
      "E) Activation by malonyl-CoA"
    ],
    "correctIndex": 2,
    "explanations": [
      "Incorrect: HDL has low triglyceride content, and this is not related to cholesterol removal.",
      "Incorrect: Apo-B100 is associated with LDL, not HDL.",
      "Correct: HDL relies on LCAT to esterify free cholesterol, enabling its transport back to the liver.",
      "Incorrect: Lipoprotein lipase is unrelated to HDL's cholesterol-removal function.",
      "Incorrect: Malonyl-CoA is not involved in HDL function."
    ],
    "slideLink": "Lecture27_FOCS.pdf"
  },
  {
    "question": "What is the key metabolic signal that shifts acetyl-CoA from the Krebs cycle to ketone body production?",
      "options": [
        "A) High levels of NADH and FADH2",
        "B) Low mitochondrial oxaloacetate concentration",
        "C) Activation of hormone-sensitive lipase",
        "D) Elevated malonyl-CoA levels",
        "E) High ATP concentration in the cytoplasm"
      ],
      "correctIndex": 1,
      "explanations": [
        "Incorrect: NADH and FADH2 levels impact electron transport but do not directly signal ketogenesis.",
        "Correct: Low oxaloacetate levels in mitochondria redirect acetyl-CoA toward ketone body synthesis.",
        "Incorrect: Hormone-sensitive lipase promotes triglyceride breakdown but is not a direct signal for ketogenesis.",
        "Incorrect: Malonyl-CoA inhibits fatty acid oxidation and is not linked to ketone body production.",
        "Incorrect: ATP concentration regulates other pathways but does not initiate ketogenesis."
      ],
      "slideLink": "Lecture27_FOCS.pdf"
},
];