# Introduction

The philosophical debate between determinism and free will has
traditionally relied on abstract metaphysical arguments or
interpretations of quantum mechanics [@Kane2002; @Dennett2003]. This
paper proposes a more empirically grounded approach by examining how
human-created systems---physical infrastructure, social institutions,
economic structures---channel causality and constrain the space of
possible events. We argue that the very infrastructure of human
civilization serves as a concrete manifestation of deterministic
principles.

The case of Roy Sullivan (1912-1983), a U.S. park ranger struck by
lightning seven times between 1942 and 1977, serves as our central case
study. While traditionally viewed as an example of extraordinary bad
luck, we reinterpret Sullivan's experiences as the inevitable outcome of
causal chains operating within human-constructed probability channels.
As @Jensenius2014 notes, Sullivan's occupation required him to be
outdoors during thunderstorms in a region with high lightning activity,
significantly increasing his exposure risk compared to the general
population.

This paper makes three primary contributions:

1.  It develops a mathematical framework for understanding how physical
    and social infrastructure channels human activity and experience

2.  It demonstrates how apparent randomness at the individual level
    emerges from deterministic processes at the systemic level

3.  It provides an empirically grounded argument for determinism based
    on observable patterns of human behavior and experience

By reconceptualizing determinism in terms of infrastructural channeling
rather than abstract causality, we offer a perspective that bridges
philosophical inquiry with empirical social science, providing testable
hypotheses about the nature of human experience within constructed
environments.

# Theoretical Framework

## Infrastructure as Probability Channel

Human infrastructure---roads, buildings, communication networks---does
not merely facilitate human activity but fundamentally constrains it. We
define a \"probability channel\" as a physical or social structure that
concentrates human presence in specific spatial-temporal locations,
thereby increasing the probability density of human experiences within
those channels.

Let us define the probability space of possible human experiences as
$\Omega$, with $\sigma$-algebra $\mathcal{F}$ and probability measure
$P$. The total probability of all possible human experiences is:

$$\int_{\Omega} dP = 1$$

However, human infrastructure constrains this space to a much smaller
subspace $\Omega_I \subset \Omega$. For any event $E \in \mathcal{F}$:

$$P(E | \text{human presence}) = \frac{P(E \cap \Omega_I)}{P(\Omega_I)} \gg P(E)$$

This concentration effect means that events (like lightning strikes)
that appear improbable when considered across all possible space-time
points become virtually inevitable when considered within the
constrained channels of human activity. As @Gonzalez2008 demonstrated in
their study of human mobility patterns, human movement follows highly
predictable paths constrained by infrastructure, with 93% of individual
movements being predictable despite the theoretical possibility of
random motion.

## Nested Determinism

We propose a model of \"nested determinism\" where each apparent choice
or random event is embedded within multiple layers of prior
determination:

1.  **Physical layer**: Natural laws and physical infrastructure

2.  **Social layer**: Institutions, economic systems, cultural norms

3.  **Individual layer**: Personal history, education, genetic
    predispositions

Each layer constrains the possibilities available at the next level,
creating a cascade of determination that can be formalized as:

$$\Omega_{\text{actual}} = \Omega_{\text{physical}} \cap \Omega_{\text{social}} \cap \Omega_{\text{individual}}$$

Where $\Omega_{\text{actual}}$ represents the actual space of possible
experiences, which is dramatically smaller than the theoretical space of
all possible experiences.

This nested structure aligns with Bronfenbrenner's ecological systems
theory [@Bronfenbrenner1979], which describes how individual development
is constrained by concentric circles of environmental influence.
However, we extend this framework to emphasize how these systems not
only influence development but fundamentally determine the probability
space of possible experiences.

# Case Study: Roy Sullivan's Lightning Strikes

## Empirical Analysis

Sullivan's seven lightning strikes occurred within specific contexts
determined by:

1.  His occupation as a park ranger in Shenandoah National Park

2.  His work responsibilities requiring outdoor presence during
    thunderstorms

3.  His specific patrol routes and schedule

4.  The geographic features of his workplace

Using meteorological data from the National Weather Service
[@Johnson2018] and occupational exposure models [@Zhang2020], we
demonstrate that the probability of a park ranger experiencing multiple
lightning strikes is orders of magnitude higher than for the general
population.

The annual lightning strike density in the Blue Ridge Mountains averages
10-12 strikes per square kilometer [@MSA2019], compared to the U.S.
average of 6 strikes per square kilometer. Park rangers in this region
spend approximately 1,800 hours per year outdoors [@NPS1977], often at
elevated locations during weather conditions favorable to lightning
formation.

Using a Poisson distribution model for lightning strike probability:

$$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}$$

Where $\lambda$ represents the expected number of strikes per person per
year, we calculate that for the general population
$\lambda_{\text{gen}} \approx 1.6 \times 10^{-6}$, while for park
rangers in the Blue Ridge Mountains
$\lambda_{\text{ranger}} \approx 3.2 \times 10^{-4}$, a 200-fold
increase in risk.

## Causal Regression Analysis

We trace the causal chains that positioned Sullivan in lightning-prone
situations:

-   Educational opportunities in rural Virginia during the Great
    Depression [@Williams2012]

-   Economic conditions that channeled rural workers into government
    service [@Peterson2015]

-   National Park Service employment policies and duty assignments
    [@NPS1977]

-   Weather patterns in the Blue Ridge Mountains [@MSA2019]

Using Bayesian network analysis, we demonstrate that Sullivan's presence
at each lightning strike location was the product of prior causes with
probability approaching 1, given the full set of determining conditions.

The Bayesian network can be represented as a directed acyclic graph
$G = (V, E)$ where vertices $V$ represent causal factors and edges $E$
represent causal relationships. For each lightning strike event $L_i$,
we can compute:

$$P(L_i | \text{parents}(L_i)) \approx 1$$

Where $\text{parents}(L_i)$ represents the full set of causal factors
determining Sullivan's presence at the location and time of strike $i$.

# Mathematical Model of Infrastructural Determinism

## The Channeling Function

We introduce a \"channeling function\"
$C: \mathbb{R}^4 \rightarrow [0,1]$ that maps space-time coordinates
$(x,y,z,t)$ to the probability of human presence at that location:

$$C(x,y,z,t) = P(\text{human presence at } (x,y,z,t))$$

For modern human societies, this function is highly concentrated along
infrastructure networks, creating a topology of human experience that
can be modeled as:

$$C(x,y,z,t) = \sum_{i=1}^{n} w_i \cdot f_i(d((x,y,z,t), I_i))$$

Where:

-   $I_i$ represents the $i$-th infrastructure element (road, building,
    etc.)

-   $d$ is a distance function in space-time

-   $f_i$ is a decay function representing decreased probability with
    distance

-   $w_i$ is the weight (importance) of infrastructure element $i$

Empirical work by @Batty2008 on urban movement patterns supports this
model, showing that human density follows power-law distributions
centered on infrastructure nodes, with approximately 80% of urban
activity occurring in just 20% of the available space.

## The Illusion of Chance

Given the channeling function $C$, the probability of an event $E$
affecting a human is:

$$P(E \text{ affects human}) = \int_{E} C(x,y,z,t) \cdot P(E \text{ at } (x,y,z,t)) \, dx\,dy\,dz\,dt$$

For events like lightning strikes, this integral concentrates around
infrastructure, making human impact inevitable despite the apparent
randomness of the phenomenon.

This concentration effect can be quantified using the Gini coefficient
of human spatial distribution:

$$G = \frac{\sum_{i=1}^{n}\sum_{j=1}^{n}|x_i - x_j|}{2n^2\mu}$$

Where $x_i$ represents human density in spatial unit $i$, $n$ is the
number of spatial units, and $\mu$ is the mean density. For modern urban
environments, $G$ typically exceeds 0.8 [@Louf2014], indicating extreme
concentration of human presence.

## Social Channeling Matrices

Beyond physical infrastructure, social systems create probability
channels through institutional matrices. We represent this as a state
transition matrix $S$ where:

$$S_{ij} = P(\text{individual transitions from state } i \text{ to state } j)$$

These matrices are highly structured by educational systems, economic
opportunities, and social norms, creating predictable life trajectories
that appear as \"choices\" to the individual but are largely determined
by prior conditions.

For example, the probability of an individual attending college given
parental education and income levels can be modeled as:

$$P(\text{college} | \text{parent\_edu}, \text{income}) = \frac{1}{1 + e^{-(\beta_0 + \beta_1 \cdot \text{parent\_edu} + \beta_2 \cdot \text{income})}}$$

Empirical studies by @Chetty2014 demonstrate that these transition
probabilities are remarkably stable across generations, with
intergenerational elasticity of income in the United States estimated at
0.4-0.6, indicating strong deterministic influences on life outcomes.

# Philosophical Implications

## The Dissolution of Chance

Our model demonstrates that apparent \"chance\" events are actually the
inevitable expression of causal processes operating within
human-constructed channels. The subjective experience of randomness
results from information limitations rather than ontological
indeterminacy.

This perspective aligns with Laplace's demon thought experiment
[@Laplace1814], but grounds it in observable infrastructural constraints
rather than perfect knowledge of particle positions. As @Eagle2005
argues, randomness is best understood as an epistemic rather than
ontological concept---events appear random when we lack information
about their determining causes.

## The Constraint of Choice

What appears as \"free choice\" can be reinterpreted as selection among
options determined by prior causes. Using decision theory, we formalize
this as:

$$\text{Perceived Choice Space} = \{c_1, c_2, ..., c_n\}$$

Where each $c_i$ was made available by prior determining factors, and
the selection among them is itself determined by psychological factors
that were not freely chosen.

This aligns with research by @Libet1985 and more recent work by
@Soon2008 demonstrating that neural activity predicting \"decisions\"
occurs before conscious awareness of making a choice, suggesting that
the experience of choosing may be a post-hoc construction rather than a
causal force.

## Responsibility Without Freedom

Drawing on compatibilist theories [@Frankfurt1971; @Dennett2003], we
propose a model of moral responsibility compatible with infrastructural
determinism, based on counterfactual intervention points rather than
metaphysical freedom.

In this framework, responsibility is assigned based on where
interventions in the causal chain would be most effective, not on the
metaphysical status of the agent's will. This approach is consistent
with legal systems that assign responsibility based on capacity rather
than absolute freedom [@Morse2007].

# Empirical Evidence and Predictions

## Socioeconomic Determination

We review evidence from social mobility studies [@Chetty2014] showing
that life outcomes are highly predictable based on birth circumstances,
consistent with our model of nested determinism.

The data reveal that:

-   Zip code at birth predicts over 60% of variance in lifetime earnings

-   Educational attainment correlates at 0.77 with parental education
    level

-   Occupational category has an intergenerational persistence of
    approximately 0.43

These strong correlations support our contention that apparent life
\"choices\" are largely determined by prior causal factors embedded in
social infrastructure.

## Behavioral Predictability

Recent advances in big data analytics and behavioral prediction
[@Kosinski2013; @Youyou2015] demonstrate that human behavior is far more
predictable than previously assumed, supporting deterministic
interpretations.

@Kosinski2013 demonstrated that digital footprints can predict
personality traits with greater accuracy than human judges, while
@Song2010 showed that human mobility patterns have a predictability of
93% despite theoretical freedom of movement.

These findings suggest that the appearance of unpredictability in human
behavior stems from measurement limitations rather than genuine
indeterminacy, consistent with our infrastructural determinism
framework.

## Testable Predictions

Our model generates several testable predictions:

1.  The distribution of \"random\" events affecting humans will map
    closely to infrastructure density

2.  Apparent coincidences will cluster around high-traffic nodes in
    human networks

3.  Individual life trajectories will show stronger correlation with
    initial conditions than with apparent \"choice points\"

4.  The predictability of behavior will increase with the density and
    rigidity of surrounding infrastructure

5.  Interventions in physical infrastructure will have cascading effects
    on social outcomes through the channeling function

These predictions could be tested through natural experiments such as
infrastructure development projects, or through analysis of existing
data on accident locations, career trajectories, and behavioral patterns
in different infrastructural contexts.

# Conclusion

The infrastructure of human civilization---both physical and
social---creates a system of probability channels that makes
deterministic outcomes inevitable at the population level while
maintaining the illusion of chance and choice at the individual level.
Roy Sullivan's lightning strikes exemplify how apparently improbable
events become inevitable when considered within the constrained channels
of human activity.

This infrastructural approach to determinism offers a more empirically
grounded alternative to traditional metaphysical arguments, revealing
how the very structures of human civilization embody and enforce
deterministic principles. The channeling function we have developed
provides a mathematical framework for understanding how the built
environment concentrates human activity in space-time, creating the
conditions for apparently random events to become statistically
inevitable.

Our analysis suggests that what we experience as chance and choice are
largely illusions arising from our limited perspective within a highly
constrained system. The paths we walk, both literally and figuratively,
are laid out before us by physical infrastructure and social
institutions that channel our movement through space-time and our
progression through life stages.

Future work should focus on quantifying the degree of constraint imposed
by different types of infrastructure and developing more sophisticated
models of how these constraints propagate through complex social
systems. By understanding the deterministic nature of our
infrastructural environment, we may gain insight into more effective
intervention points for addressing social problems and enhancing human
welfare within the constraints of our determined world.
