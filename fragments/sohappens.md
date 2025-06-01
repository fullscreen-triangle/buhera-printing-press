# Causality

Confronted with an unknowable universe of events and the need to simultaneously register stimuli, formulate a representation of the world, and act on it, the human brain has evolved a complex system of causality. This system isn't merely a simple chain of cause and effect, but rather a sophisticated network of interrelated observations and predictions. Consider how a Mbende drummer commits crimes of passion with the drums, anticipating the tone that will send people calling their parents, or how a DJ can play a song your swear rang a phone you didn't know existed in your imagination- these are not simple if-then relationships, but complex webs of pattern recognition, prediction, and response.

Causality is indeed a ladder, with rungs representing the three dimensions of causality:

1. **Causal Discovery**: The ability to identify patterns in data that suggest cause-and-effect relationships. This is the foundation upon which we build our understanding of the world, from the simple observation that objects fall when dropped to the complex relationships between economic policies and their societal impacts. A child learns that touching a hot stove causes pain, but an economist must untangle the intricate web of factors that cause inflation - both are exercises in causal discovery, differing only in complexity.

2. **Causal Representation**: The mental representation of cause-and-effect relationships. This is how we model the world in our minds, creating sophisticated mental simulations that allow us to predict outcomes and plan actions. When a chess grandmaster visualizes positions ten moves ahead, or when a general plans a military campaign, they are exercising their capacity for causal representation. The mind constructs elaborate "if-then" trees, pruning impossible branches and focusing on likely outcomes.

3. **Causal Inference**: The ability to draw conclusions about cause-and-effect relationships from data. This is perhaps the most sophisticated rung, where we move beyond simple correlation to understand true causation. A medical researcher determining whether a new drug actually cures a disease, rather than just coinciding with recovery, is engaging in causal inference. This is where human intelligence truly shines - in its ability to distinguish between correlation and causation, between coincidence and consequence.

It should then follow that seeking truth is an exercise in optimizing the alignment of these three dimensions, which are all subjective. The truth should be unattainable by definition. If it was on sale at Lidl, it would not be as useful. Consider the simple act of catching a ball. Consider a Neurofunk DJ at his job, he will be playing four different songs at the same time, hearing them from the main speakers whilst simultaneously listening to the output from his headphones and still manages to turn the tactile knobs with enough patience to drip feed the audience with tunes that are leave one feeling bad, for feeling too good. 

The philosophical debate between determinism and free will has traditionally relied on abstract metaphysical arguments or interpretations of quantum mechanics [@Kane2002; @Dennett2003]. This book proposes a more empirically grounded approach by examining how human-created systems---physical infrastructure, social institutions, economic structures---channel causality and constrain the space of possible events. We argue that the very infrastructure of human civilization serves as a concrete manifestation of deterministic principles.

The case of Roy Sullivan (1912-1983), a U.S. park ranger struck by lightning seven times between 1942 and 1977, serves as our central case study. While traditionally viewed as an example of extraordinary bad luck, we reinterpret Sullivan's experiences as the inevitable outcome of causal chains operating within human-constructed probability channels. As @Jensenius2014 notes, Sullivan's occupation required him to be outdoors during thunderstorms in a region with high lightning activity, significantly increasing his exposure risk compared to the general population.

The truth exists outside the mind of the observer, and the observer can only ever approximate it. This approximation is constantly evolving, a dynamic representation of actual reality that shifts with each new observation and insight. Like a quantum particle whose position and momentum cannot be simultaneously known with perfect precision, truth exists in a state of perpetual uncertainty - not because it is inherently unknowable, but because the act of observation itself changes both the observer and the observed.

This paper makes three primary contributions:

1. It develops a mathematical framework for understanding how physical and social infrastructure channels human activity and experience

2. It demonstrates how apparent randomness at the individual level emerges from deterministic processes at the systemic level

3. It provides an empirically grounded argument for determinism based on observable patterns of human behavior and experience

By reconceptualizing determinism in terms of infrastructural channeling rather than abstract causality, we offer a perspective that bridges philosophical inquiry with empirical social science, providing testable hypotheses about the nature of human experience within constructed environments.

Consider Jupiter: If humans did not exist, would Jupiter still exist? The planet would certainly continue its celestial dance around the sun, but it would exist in a fundamentally different way. It would be a massive ball of gas following the laws of physics, but it would lack the rich tapestry of meaning we've woven around it. The name "Jupiter," the Roman god of sky and thunder, the fifth planet from the sun, the giant of our solar system - these are all human constructs, representations of an underlying reality we can never fully grasp. 

# Theoretical Framework

## Infrastructure as Probability Channel

Human infrastructure---roads, buildings, communication networks---does not merely facilitate human activity but fundamentally constrains it. We define a "probability channel" as a physical or social structure that concentrates human presence in specific spatial-temporal locations, thereby increasing the probability density of human experiences within those channels.

Let us define the probability space of possible human experiences as $\Omega$, with $\sigma$-algebra $\mathcal{F}$ and probability measure $P$. The total probability of all possible human experiences is:

$$\int_{\Omega} dP = 1$$

However, human infrastructure constrains this space to a much smaller subspace $\Omega_I \subset \Omega$. For any event $E \in \mathcal{F}$:

$$P(E | \text{human presence}) = \frac{P(E \cap \Omega_I)}{P(\Omega_I)} \gg P(E)$$

Let's explore a more tangible example: Is the total number of cats in the world even or odd? This seemingly simple question illuminates the gap between reality and our ability to measure it. At any given instant, there exists a definitive answer - the total is either even or odd. Yet this truth is perpetually beyond our grasp. Even if we devoted massive resources to counting every cat on Earth, by the time we finished our count, births and deaths would have already rendered our number obsolete. The true figure exists independently of our ability to measure it, highlighting the gap between reality and our perception of it.

## Nested Determinism

We propose a model of "nested determinism" where each apparent choice or random event is embedded within multiple layers of prior determination:

1. **Physical layer**: Natural laws and physical infrastructure

2. **Social layer**: Institutions, economic systems, cultural norms

3. **Individual layer**: Personal history, education, genetic predispositions

Each layer constrains the possibilities available at the next level, creating a cascade of determination that can be formalized as:

$$\Omega_{\text{actual}} = \Omega_{\text{physical}} \cap \Omega_{\text{social}} \cap \Omega_{\text{individual}}$$

Consider the question of the most attractive woman in the world. Theoretically, we could conduct a massive tournament, with every person comparing two candidates at a time, advancing through elimination rounds. Yet even this herculean effort would only capture a snapshot of subjective opinions at a specific moment. The "most attractive woman in the world" exists as a theoretical construct, an ever-shifting peak in the landscape of human perception.

Where $\Omega_{\text{actual}}$ represents the actual space of possible experiences, which is dramatically smaller than the theoretical space of all possible experiences.

This nested structure aligns with Bronfenbrenner's ecological systems theory [@Bronfenbrenner1979], which describes how individual development is constrained by concentric circles of environmental influence. However, we extend this framework to emphasize how these systems not only influence development but fundamentally determine the probability space of possible experiences.

# Case Study: Roy Sullivan's Lightning Strikes

## Empirical Analysis

Sullivan's seven lightning strikes occurred within specific contexts determined by:

1. His occupation as a park ranger in Shenandoah National Park

2. His work responsibilities requiring outdoor presence during thunderstorms

3. His specific patrol routes and schedule

4. The geographic features of his workplace

Let's calculate the probability of actually observing Usain Bolt at his absolute peak speed during his historic 9.58-second run:

P(observation) = P(correct_moment) × P(focused_attention) × P(clear_line_of_sight)

Where:
P(correct_moment) = 0.1s/9.58s ≈ 0.0104 (assuming 0.1s window of peak speed)
P(focused_attention) = 0.8 (estimated attention span during crucial moments)
P(clear_line_of_sight) = 0.7 (accounting for stadium geometry and other spectators)

Therefore:
P(observation) = 0.0104 × 0.8 × 0.7 ≈ 0.00582 or 0.582%

Using meteorological data from the National Weather Service [@Johnson2018] and occupational exposure models [@Zhang2020], we demonstrate that the probability of a park ranger experiencing multiple lightning strikes is orders of magnitude higher than for the general population.

The annual lightning strike density in the Blue Ridge Mountains averages 10-12 strikes per square kilometer [@MSA2019], compared to the U.S. average of 6 strikes per square kilometer. Park rangers in this region spend approximately 1,800 hours per year outdoors [@NPS1977], often at elevated locations during weather conditions favorable to lightning formation.

In a stadium of 60,000 people, only about 349 individuals likely witnessed that precise moment of peak human performance. Yet even this calculation reveals an even deeper paradox: even those 349 people who theoretically "saw" the peak moment couldn't have known they were witnessing it at the time. Most remarkably, Bolt himself - the very embodiment of this achievement - could not have been aware of his peak speed in the moment it occurred.

Using a Poisson distribution model for lightning strike probability:

$$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}$$

Where $\lambda$ represents the expected number of strikes per person per year, we calculate that for the general population $\lambda_{\text{gen}} \approx 1.6 \times 10^{-6}$, while for park rangers in the Blue Ridge Mountains $\lambda_{\text{ranger}} \approx 3.2 \times 10^{-4}$, a 200-fold increase in risk.

## Causal Regression Analysis

We trace the causal chains that positioned Sullivan in lightning-prone situations:

- Educational opportunities in rural Virginia during the Great Depression [@Williams2012]

- Economic conditions that channeled rural workers into government service [@Peterson2015]

- National Park Service employment policies and duty assignments [@NPS1977]

- Weather patterns in the Blue Ridge Mountains [@MSA2019]

Consider this: Bolt's awareness of his historic achievement came only after others had measured, verified, and displayed it. When he saw his time on the stadium screen, he was experiencing the same delayed recognition as everyone else in the stadium. His own perception of his speed during the race was, by necessity, incomplete and imprecise. The very act of consciously monitoring his speed would have detracted from the performance itself - a manifestation of the observer effect at the scale of human achievement.

Using Bayesian network analysis, we demonstrate that Sullivan's presence at each lightning strike location was the product of prior causes with probability approaching 1, given the full set of determining conditions.

The Bayesian network can be represented as a directed acyclic graph $G = (V, E)$ where vertices $V$ represent causal factors and edges $E$ represent causal relationships. For each lightning strike event $L_i$, we can compute:

$$P(L_i | \text{parents}(L_i)) \approx 1$$

Where $\text{parents}(L_i)$ represents the full set of causal factors determining Sullivan's presence at the location and time of strike $i$.

This temporal paradox becomes even more profound when we consider that Bolt himself likely never "chose" to run 9.58 seconds. If presented with other possibilities - the power to resurrect a loved one, to end global suffering, or to run the fastest time in history - the human Usain Bolt would likely have chosen differently. The 9.58 seconds didn't happen because Bolt wanted it to; it happened because it was the optimal solution to that particular configuration of reality at that moment.

# Mathematical Model of Infrastructural Determinism

## The Channeling Function

We introduce a "channeling function" $C: \mathbb{R}^4 \rightarrow [0,1]$ that maps space-time coordinates $(x,y,z,t)$ to the probability of human presence at that location:

$$C(x,y,z,t) = P(\text{human presence at } (x,y,z,t))$$

Our deepest desires, our most heartfelt wishes, are irrelevant to the unfolding of events. Reality operates not through our preferences but through its own inexorable logic of efficiency.

For modern human societies, this function is highly concentrated along infrastructure networks, creating a topology of human experience that can be modeled as:

$$C(x,y,z,t) = \sum_{i=1}^{n} w_i \cdot f_i(d((x,y,z,t), I_i))$$

Where:

- $I_i$ represents the $i$-th infrastructure element (road, building, etc.)
- $d$ is a distance function in space-time
- $f_i$ is a decay function representing decreased probability with distance
- $w_i$ is the weight (importance) of infrastructure element $i$

Consider how this mirrors the way our immune system operates through VDJ recombination. An antibody doesn't "choose" which pathogen to fight; it emerges as the optimal solution to a molecular puzzle. The system generates billions of possibilities, but only the most efficient solution - the antibody that perfectly matches the pathogen - becomes realized. Just as Bolt didn't choose his precise speed, antibodies don't choose their targets. Both emerge as reality solves its equations with perfect efficiency.

This principle of predetermined possibility extends deep into our biological machinery. Our immune system comes pre-loaded with a vast array of possible combinations, like a lock-maker who creates keys before knowing which doors they might open. This process operates through enzymes, nature's own Maxwell's demons, which possess the remarkable ability to orchestrate molecular reactions not through brute force, but through the precise arrangement of molecules in space.

Empirical work by @Batty2008 on urban movement patterns supports this model, showing that human density follows power-law distributions centered on infrastructure nodes, with approximately 80% of urban activity occurring in just 20% of the available space.

## The Illusion of Chance

Given the channeling function $C$, the probability of an event $E$ affecting a human is:

$$P(E \text{ affects human}) = \int_{E} C(x,y,z,t) \cdot P(E \text{ at } (x,y,z,t)) \, dx\,dy\,dz\,dt$$

For events like lightning strikes, this integral concentrates around infrastructure, making human impact inevitable despite the apparent randomness of the phenomenon.

The human brain operates on the same principle - it is our own Maxwell's demon. Like enzymes positioning molecules for reaction, our consciousness arranges mental elements in specific configurations that catalyze thoughts. These thoughts are not pure representations of reality, but rather a mixture of what could have happened and what actually happened. Our mental space is not a passive receiver but an active predictor, constantly arranging and rearranging possibilities based on predetermined patterns.

This concentration effect can be quantified using the Gini coefficient of human spatial distribution:

$$G = \frac{\sum_{i=1}^{n}\sum_{j=1}^{n}|x_i - x_j|}{2n^2\mu}$$

Where $x_i$ represents human density in spatial unit $i$, $n$ is the number of spatial units, and $\mu$ is the mean density. For modern urban environments, $G$ typically exceeds 0.8 [@Louf2014], indicating extreme concentration of human presence.

This understanding extends to the cosmic scale. Consider a hypothetical civilization that has mastered every law of physics except the speed of light barrier. With the computational power required for near-light-speed travel, they would find it far more efficient to simulate potential destinations than to visit them. Yet this reveals a profound truth about reality itself: it cannot be a simulation. To simulate reality would require creating a system that progresses at exactly the same rate, with exactly the same laws, and with exactly the same level of detail as reality itself - a task that would be both wasteful and redundant. Any such simulation would require more computational resources than simply being reality, violating reality's fundamental principle of efficiency.

## Social Channeling Matrices

Beyond physical infrastructure, social systems create probability channels through institutional matrices. We represent this as a state transition matrix $S$ where:

$$S_{ij} = P(\text{individual transitions from state } i \text{ to state } j)$$

These matrices are highly structured by educational systems, economic opportunities, and social norms, creating predictable life trajectories that appear as "choices" to the individual but are largely determined by prior conditions.

This realization transforms our understanding of consciousness and computation. Our brains don't simulate reality - they create efficient approximations that allow us to interact with it. Like enzymes that catalyze reactions by reducing complexity rather than modeling every possible molecular interaction, consciousness works by simplifying reality into manageable patterns. Advanced civilizations would likely follow the same principle: not simulating entire universes, but creating efficient models of the aspects they wish to explore.

For example, the probability of an individual attending college given parental education and income levels can be modeled as:

$$P(\text{college} | \text{parent\_edu}, \text{income}) = \frac{1}{1 + e^{-(\beta_0 + \beta_1 \cdot \text{parent\_edu} + \beta_2 \cdot \text{income})}}$$

The local nature of complexity in the universe suddenly makes more sense in this light. Each pocket of organized matter - whether it's a living cell, a conscious brain, or an advanced civilization - represents reality solving problems through the most efficient means possible. The vastness between these pockets isn't empty space but rather the necessary separation that allows local complexity to emerge without the redundancy of trying to maintain complexity everywhere.

Empirical studies by @Chetty2014 demonstrate that these transition probabilities are remarkably stable across generations, with intergenerational elasticity of income in the United States estimated at 0.4-0.6, indicating strong deterministic influences on life outcomes.

This explains why advanced civilizations would turn inward rather than outward - not to create complete simulations of reality, but to explore the infinite possibilities of pattern and complexity within their local region of space-time. Like our consciousness creating simplified models rather than perfect simulations, like our immune system generating targeted responses rather than every possible antibody, advanced civilizations would focus on efficient exploration of possibility space rather than redundant replication of reality.

# Philosophical Implications

## The Dissolution of Chance

Our model demonstrates that apparent "chance" events are actually the inevitable expression of causal processes operating within human-constructed channels. The subjective experience of randomness results from information limitations rather than ontological indeterminacy.

In the end, after trillions of years, it will be as if nothing ever happened - not because nothing mattered, but because reality's efficiency principle requires the dissolution of complexity once its local purpose is served. This reveals something profound about the nature of truth and possibility: the truth can be anything we want it to be, and it would still be real, still occur, and still ultimately dissolve into cosmic anonymity. The universe's structure provides the ultimate freedom precisely because it ensures the ultimate impermanence.

This perspective aligns with Laplace's demon thought experiment [@Laplace1814], but grounds it in observable infrastructural constraints rather than perfect knowledge of particle positions. As @Eagle2005 argues, randomness is best understood as an epistemic rather than ontological concept---events appear random when we lack information about their determining causes.

Think of it as nature's perfect safety mechanism: no matter how advanced we become, no matter what we achieve or destroy, we cannot "ruin" the universe the way we might ruin our climate. Each pocket of complexity - whether it's a civilization mastering fusion power or a species achieving immortality - remains fundamentally local, self-contained, destined to eventually return to equilibrium. The universe replicates these self-contained sets of possibility across its vast expanse, each one free to explore its full potential without risking the whole.

## The Constraint of Choice

What appears as "free choice" can be reinterpreted as selection among options determined by prior causes. Using decision theory, we formalize this as:

$$\text{Perceived Choice Space} = \{c_1, c_2, ..., c_n\}$$

Where each $c_i$ was made available by prior determining factors, and the selection among them is itself determined by psychological factors that were not freely chosen.

This locality of achievement is, paradoxically, what makes it universal. When Bolt ran 9.58 seconds, it was a local event in space-time, but it was also the only way such an achievement could ever be realized. The same applies to every scientific discovery, every artistic creation, every moment of consciousness - they must be local to be real. Like quantum fluctuations that momentarily break symmetry to create particles, achievements must be localized to exist at all.

Consider the mathematics of local versus universal achievement:

P(universal_achievement) = P(local_achievement) × P(communication_across_light_years) × P(survival_of_information)
                        ≈ 0

While:
P(local_achievement) = P(complexity_emergence) × P(optimal_conditions) × P(observation)
                     > 0

This aligns with research by @Libet1985 and more recent work by @Soon2008 demonstrating that neural activity predicting "decisions" occurs before conscious awareness of making a choice, suggesting that the experience of choosing may be a post-hoc construction rather than a causal force.

## Responsibility Without Freedom

Drawing on compatibilist theories [@Frankfurt1971; @Dennett2003], we propose a model of moral responsibility compatible with infrastructural determinism, based on counterfactual intervention points rather than metaphysical freedom.



## The Inherent Banality of Truth

Perhaps the most profound yet overlooked quality of truth is its inherent banality. Truth must be boring, for it is simply reality stripped of illusion. When we remove our desires, fears, and imaginings from our perception of the world, what remains is necessarily unexciting precisely because it lacks the emotional coloring that makes experiences vivid.

The universe, in its vast indifference, continues its inexorable march toward equilibrium, neither exciting nor boring in any objective sense. It simply is. Our perception of it as boring is itself a human construct, a reflection of our need for pattern and novelty. The truth isn't boring; it's merely consistent. And in a universe of constant change and ultimate impermanence, perhaps consistency is the most precious quality of all.
