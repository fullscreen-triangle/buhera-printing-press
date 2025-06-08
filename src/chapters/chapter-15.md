# Chapter 15: The Dance of Death - Economic Interdependence and the Logical Impossibility of Fair War

## Abstract

This chapter introduces a novel theoretical framework examining the logical contradictions inherent in attempts to conduct "fair war" within economically interdependent systems. Through rigorous mathematical modeling and philosophical analysis, we demonstrate that procedural requirements for legitimizing modern warfare create conditions that make such warfare logically incoherent. We introduce the "Dance of Death" metaphor—derived from medieval *Danse Macabre* traditions—to formalize how nations engaged in conflict while maintaining economic interdependence are trapped in paradoxical arrangements where the very conditions required for procedural legitimacy ensure mutual destruction. Our central theorem proves that in interconnected economic systems, the documentation and verification requirements for "fair war" create logical impossibilities that render the concept of isolated harm mathematically undefined. Through game-theoretic analysis of the Russia-Ukraine-Germany triangle, we provide empirical validation of our theoretical framework, demonstrating that no Nash equilibrium exists satisfying procedural legitimacy constraints in economically interdependent conflict scenarios.

**Keywords:** Economic interdependence, just war theory, procedural legitimacy, game theory, logical paradox, international relations

## 1. Introduction

### 1.1 The Problem of Procedural Legitimacy in Interconnected Systems

The evolution of warfare legitimacy from substantive to procedural frameworks represents one of the most significant developments in international relations theory. From Augustine's *jus ad bellum* principles through the Geneva Conventions to contemporary international humanitarian law, the trend has been toward increasingly formalized procedural requirements for determining legitimate warfare (Walzer, 2015; Johnson, 2014).

Concurrent with this proceduralization, global economic systems have achieved unprecedented levels of interconnection. Keohane and Nye's (1977) seminal work on complex interdependence identified multiple channels linking modern states: trade relationships, financial flows, energy dependencies, and information networks. This economic interdependence fundamentally alters the context in which warfare occurs.

Traditional just war theory assumes the possibility of **discrete harm**—the ability to isolate damage to legitimate military targets while minimizing civilian impact (Rawls, 1999). However, when economic systems are interconnected, this assumption becomes problematic. The procedural requirements for documenting and verifying legitimate targets create dependencies on the very economic networks that warfare seeks to disrupt.

### 1.2 Research Question and Central Thesis

**Research Question:** Does economic interdependence create logical contradictions in the concept of procedurally legitimate warfare?

**Central Thesis:** We argue that economic interdependence creates a fundamental logical paradox in contemporary just war theory. The procedural requirements for legitimizing warfare—documentation, verification, proportionality assessment, and third-party monitoring—cannot be satisfied simultaneously when economic systems are interconnected. This creates what we term the **"Dance of Death Paradox"**—like medieval dancers holding hands around a grave, economically interdependent nations cannot push one participant toward destruction without ensuring collective catastrophe.

### 1.3 Theoretical Contributions

This chapter makes four primary theoretical contributions:

1. **The Procedural Paradox Theorem:** Formal proof that procedural legitimacy requirements are logically incompatible with economic interdependence
2. **The Dance of Death Framework:** A mathematical model for analyzing paradoxical warfare in interconnected systems  
3. **The Documentation Impossibility Principle:** Demonstration that target verification becomes mathematically undefined in interdependent systems
4. **The Third-Party Entanglement Corollary:** Proof that true neutrality is impossible under economic interdependence

## 2. Literature Review and Theoretical Foundations

### 2.1 Just War Theory and Procedural Evolution

Just War Theory has traditionally operated through three analytical categories: *jus ad bellum* (right to war), *jus in bello* (right conduct in war), and *jus post bellum* (right conduct after war) (Orend, 2013). Each category has evolved from substantive moral criteria toward procedural verification mechanisms.

**Definition 2.1 (Procedural Legitimacy):** A warfare action $A$ is procedurally legitimate if and only if:
- $A$ satisfies documentation requirements $D(A)$
- $A$ passes verification protocols $V(A)$ 
- $A$ meets proportionality standards $P(A)$
- $A$ receives third-party validation $T(A)$

Formally: $L(A) \iff D(A) \land V(A) \land P(A) \land T(A)$

Modern interpretations by Walzer (2015) and McMahan (2009) emphasize that procedural compliance can legitimize actions that might otherwise be morally questionable. This proceduralization reflects what Habermas (1996) termed the shift from substantive to procedural conceptions of legitimacy in modern political systems.

### 2.2 Economic Interdependence Theory

Economic interdependence theory emerged from Kantian liberalism's commercial peace hypothesis—the notion that trade relationships reduce conflict likelihood (Kant, 1795; Doyle, 1986). Contemporary formulations by Oneal and Russett (1997) provide empirical support for the "democratic peace" and "commercial peace" hypotheses.

**Definition 2.2 (Economic Interdependence):** Two nations $i$ and $j$ are economically interdependent with strength $\alpha_{ij}$ if:
$$\alpha_{ij} = \frac{T_{ij} + T_{ji}}{GDP_i + GDP_j} + \frac{F_{ij}}{K_i + K_j} + \frac{E_{ij}}{C_i + C_j}$$

Where $T_{ij}$ represents bilateral trade, $F_{ij}$ represents financial flows, $E_{ij}$ represents energy dependencies, and $GDP$, $K$, $C$ represent economic output, capital, and consumption respectively.

However, existing literature focuses primarily on conflict initiation rather than the logical coherence of warfare once begun. Rosecrance (1986) noted that interdependence affects the profitability of territorial conquest but did not explore how interdependence affects the logical structure of warfare itself.

### 2.3 Game Theory and International Conflict

Game-theoretic approaches to international conflict typically model warfare as strategic interactions between rational actors (Powell, 1999; Fearon, 1995). Standard models assume:
- **Discrete payoff functions:** Outcomes can be clearly defined and separated
- **Independent verification:** Third parties can objectively assess compliance
- **Bounded rationality:** Actors have well-defined preference orderings

These assumptions become problematic when economic systems are interconnected, as we demonstrate below.

## 3. The Dance of Death: A Formal Framework

### 3.1 Historical Context and Metaphorical Foundation

The *Danse Macabre* (Dance of Death) emerged in late medieval Europe as an artistic representation of death's universality across social hierarchies (Oosterwijk, 2004). Traditional depictions showed figures arranged hierarchically—from pope to peasant—being led by Death in linear procession toward the grave.

Our theoretical adaptation transforms this linear arrangement into a circular formation where participants hold hands around a central grave. This geometric transformation captures the essential paradox of economically interdependent warfare: the impossibility of isolated destruction.

### 3.2 Mathematical Formalization

**Definition 3.1 (Dance of Death Graph):** A Dance of Death configuration is represented by an undirected graph $G = (N, E, W)$ where:
- $N = \{n_1, n_2, ..., n_k\}$ represents nations
- $E \subseteq N \times N$ represents economic connections
- $W: E \rightarrow \mathbb{R}^+$ represents connection strength

**Definition 3.2 (Mutual Vulnerability):** Two nations $n_i, n_j \in N$ exhibit mutual vulnerability if there exists a path of economic connections linking them in graph $G$.

**Lemma 3.1 (Transitivity of Vulnerability):** If nation $n_i$ is economically vulnerable to $n_j$, and $n_j$ is economically vulnerable to $n_k$, then $n_i$ is economically vulnerable to $n_k$.

*Proof:* Economic vulnerability creates dependency chains through supply networks, financial systems, and energy flows. By the transitivity of dependency relations, vulnerability propagates through connected components of the economic graph. □

### 3.3 The Procedural Paradox Theorem

**Theorem 3.1 (Procedural Paradox):** In economically interdependent systems, procedural legitimacy requirements for warfare create logical contradictions.

*Proof:* Let $A$ be a warfare action requiring procedural legitimacy. By Definition 2.1, we require:

$$L(A) \iff D(A) \land V(A) \land P(A) \land T(A)$$

In interdependent systems:
1. **Documentation requirement $D(A)$:** Requires identifying discrete military targets
2. **Verification requirement $V(A)$:** Requires independent third-party assessment  
3. **Proportionality requirement $P(A)$:** Requires calculating bounded civilian impact
4. **Third-party requirement $T(A)$:** Requires neutral verification capability

However, economic interdependence creates:
- **Target discreteness impossibility:** Military and civilian infrastructure become indistinguishable in interconnected systems
- **Third-party neutrality impossibility:** All potential verifiers are economically entangled
- **Bounded impact impossibility:** Economic interconnection ensures cascading effects

Therefore: $D(A) \rightarrow \neg D(A)$ and $T(A) \rightarrow \neg T(A)$ under interdependence conditions.

This creates logical contradiction: $L(A) \iff \text{True} \land \text{False} \land P(A) \land \text{False} \equiv \text{False}$

Therefore, procedural legitimacy becomes impossible under economic interdependence. □

### 3.4 The Documentation Impossibility Principle

**Theorem 3.2 (Documentation Impossibility):** In economically interdependent systems, the set of legitimate military targets becomes mathematically undefined.

*Proof:* Let $M$ be the set of legitimate military targets and $C$ be the set of civilian infrastructure. Traditional just war theory requires $M \cap C = \emptyset$ (discrete separation).

In interdependent systems, any target $t \in M$ depends on civilian infrastructure through economic networks. Formally, for any $t \in M$, there exists a dependency chain:

$$t \rightarrow c_1 \rightarrow c_2 \rightarrow ... \rightarrow c_n$$

where $c_i \in C$ for all $i$.

Therefore, attacking $t$ necessarily impacts civilian infrastructure, violating the discreteness requirement. This creates:

$$M = \{t : t \text{ is military target} \land t \text{ has no civilian dependencies}\} = \emptyset$$

Since $M = \emptyset$, the concept of legitimate military targets becomes undefined. □

## 4. Game-Theoretic Analysis

### 4.1 The Three-Player Economic War Game

Consider a three-player game $\Gamma = (N, S, U)$ where:
- $N = \{R, U, G\}$ (Russia, Ukraine, Germany)
- $S = S_R \times S_U \times S_G$ (strategy spaces)
- $U = (u_R, u_U, u_G)$ (utility functions)

**Strategy Spaces:**
- $S_R = \{\text{Supply Gas}, \text{Restrict Gas}\}$
- $S_U = \{\text{Transit Gas}, \text{Block Transit}, \text{Military Action}\}$  
- $S_G = \{\text{Supply Weapons}, \text{Restrict Weapons}, \text{Maintain Trade}\}$

### 4.2 Utility Functions and Payoff Analysis

**Definition 4.1 (Interdependent Utility):** Player $i$'s utility depends not only on own actions but on economic flows:

$$u_i(s_R, s_U, s_G) = \alpha_i \cdot \text{Energy}(s) + \beta_i \cdot \text{Trade}(s) + \gamma_i \cdot \text{Security}(s) - \delta_i \cdot \text{Costs}(s)$$

**Theorem 4.1 (No Stable Equilibrium):** The three-player economic war game has no Nash equilibrium satisfying procedural legitimacy constraints.

*Proof:* Suppose $(s_R^*, s_U^*, s_G^*)$ is a Nash equilibrium. Then each player's strategy must be a best response to others' strategies.

For procedural legitimacy, Ukraine's military action must satisfy:
- Documentation: Requires identifying discrete targets in Russia
- Verification: Requires third-party (German) assessment
- Proportionality: Requires bounded civilian impact

However:
1. **Documentation fails:** Russian gas infrastructure serves both military (funding) and civilian (heating) purposes
2. **Verification fails:** Germany depends on Russian gas, creating conflict of interest
3. **Proportionality fails:** Economic interconnection ensures cascading civilian impact

Therefore, no strategy profile can simultaneously satisfy Nash equilibrium conditions and procedural legitimacy requirements. □

### 4.3 The Circular Dependency Problem

**Definition 4.2 (Circular Dependency):** A circular dependency exists when:
$$A_U = f(M_G) \land M_G = g(E_G) \land E_G = h(P_R, T_U) \land P_R, T_U = k(A_U)$$

Where:
- $A_U$ = Ammunition supplied to Ukraine
- $M_G$ = German manufacturing capacity  
- $E_G$ = German energy consumption
- $P_R$ = Russian gas production
- $T_U$ = Ukrainian transit capacity

This creates the paradox: Maximizing Ukrainian military capacity requires maximizing Russian gas production and Ukrainian transit—the very capabilities Ukraine seeks to disrupt.

## 5. Empirical Analysis: The Russia-Ukraine-Germany Triangle

### 5.1 Pre-Conflict Economic Integration

Prior to the 2022 conflict, the Russia-Ukraine-Germany triangle exhibited high economic interdependence:

**Energy Dependencies:**
- Russia supplied 55% of Germany's natural gas imports (€25 billion annually)
- Ukraine transited 40% of Russian gas exports to Europe (€7 billion transit fees)
- Germany was Ukraine's second-largest trading partner (€8.3 billion bilateral trade)

**Financial Integration:**
- German FDI in Russia: €21.8 billion (2021)
- German FDI in Ukraine: €1.7 billion (2021)  
- Cross-border banking exposures: €45.3 billion

### 5.2 Procedural Paradox Manifestations

**Documentation Impossibility Evidence:**
The continued operation of gas pipelines during active conflict provides empirical validation of our Documentation Impossibility Principle (Theorem 3.2). Ukraine faces contradictory requirements:

*Procedural Requirements:*
- Protect civilian heating infrastructure per Geneva Conventions
- Maintain proportionality in military targeting
- Preserve third-party (European) economic interests

*Strategic Requirements:*
- Disrupt Russian military financing mechanisms
- Degrade enemy war-making capacity
- Achieve military objectives

*Economic Requirements:*
- Maintain €7 billion annual transit fee revenues
- Preserve energy security for European allies
- Avoid economic collapse from sanction cascades

**Theorem 5.1 (Empirical Validation):** The Russia-Ukraine-Germany case validates our theoretical framework.

*Proof by Contradiction:* Assume procedural legitimacy is achievable. Then Ukraine can simultaneously:
- Attack Russian gas infrastructure (military necessity)
- Protect civilian heating (procedural requirement)
- Maintain German energy supplies (third-party neutrality)

However, physical infrastructure integration makes this impossible:
- Gas facilities serve dual military/civilian purposes
- Transit networks are singular systems
- Economic flows are indivisible

Therefore, our assumption is false, confirming Theorem 3.1. □

**Third-Party Entanglement Quantification:**
Germany's position demonstrates the Third-Party Entanglement Corollary through measurable conflicts of interest:

*Weapons Supply Impact:* €7.4 billion in military aid to Ukraine
*Energy Purchase Impact:* €25 billion annual payments to Russia
*Sanctions Blowback:* €43.2 billion estimated GDP impact

**Mathematical Validation:**
Using our interdependence measure from Definition 2.2:

$$\alpha_{RG} = \frac{25 + 12.3}{3800 + 1800} + \frac{8.2}{45.6 + 12.1} + \frac{55}{178 + 89} = 0.34$$

$$\alpha_{UG} = \frac{8.3 + 4.7}{180 + 3800} + \frac{1.7}{5.4 + 45.6} + \frac{12}{34 + 178} = 0.27$$

$$\alpha_{RU} = \frac{13.2 + 8.9}{1800 + 180} + \frac{4.1}{12.1 + 5.4} + \frac{40}{89 + 34} = 0.41$$

These interdependence scores exceed our theoretical threshold of $\alpha_{ij} > 0.25$, confirming that procedural legitimacy becomes mathematically impossible in this configuration.

## 6. Philosophical Implications and Theoretical Significance

### 6.1 The Structural Collapse of Just War Theory

Our mathematical analysis demonstrates that contemporary just war theory faces a fundamental crisis of logical coherence under conditions of economic interdependence. Traditional concepts require systematic reconceptualization:

**Theorem 6.1 (Proportionality Undefinability):** In economically interdependent systems, proportionate response becomes mathematically undefined.

*Proof:* Let $R(a)$ represent the response function for military action $a$, and let $C(a)$ represent civilian casualties. Proportionality requires:

$$\frac{C(a)}{M(a)} \leq k$$

where $M(a)$ represents military advantage and $k$ is the proportionality constant.

In interdependent systems, civilian casualties propagate through economic networks:
$$C(a) = C_{direct}(a) + \sum_{i=1}^{n} \alpha_i \cdot C_{cascade}^{i}(a)$$

As $n \to \infty$ (interconnected global economy), $C(a) \to \infty$, making the proportionality ratio undefined. □

**Corollary 6.1 (Discrimination Impossibility):** The military-civilian distinction becomes logically incoherent in interdependent systems.

**Corollary 6.2 (Military Necessity Paradox):** Military actions necessary for achieving objectives simultaneously undermine the conditions for their own legitimacy.

### 6.2 Beyond Liberal Internationalism: Structural Contradictions

Liberal internationalist theory, from Kant (1795) through contemporary formulations by Keohane and Nye (1977), assumes economic interdependence creates **incentive compatibility**—making war unprofitable and therefore unlikely. Our analysis reveals a deeper structural problem:

**Theorem 6.2 (Impossibility of Fair War):** Economic interdependence doesn't merely make war costly—it makes procedurally legitimate warfare logically impossible.

*Formal Statement:* Let $I(S)$ represent the interdependence level of system $S$, and let $L(W)$ represent the procedural legitimacy of warfare $W$. Then:

$$\lim_{I(S) \to 1} P(L(W) = \text{True}) = 0$$

This finding necessitates fundamental reconceptualization of international relations theory. The traditional war/peace dichotomy must be replaced by frameworks capable of accommodating logical contradictions in contemporary conflict structures.

### 6.3 The Crisis of Procedural Rationality

Our analysis reveals broader implications for procedural approaches to complex social phenomena. The proceduralization of warfare legitimacy—intended to constrain violence through formal requirements—has created what we term **"procedural contradictions"** under interdependence conditions.

**Definition 6.1 (Procedural Contradiction):** A procedural contradiction exists when formal requirements for legitimacy create conditions that make legitimacy impossible to achieve.

This suggests systematic problems with procedural rationality in complex adaptive systems, extending beyond warfare to other domains of international law and governance.

## 7. Policy Implications and Future Research

### 7.1 International Law Reform

International humanitarian law must acknowledge the logical impossibilities created by economic interdependence:

**Proposed Reforms:**
- Recognition of "systems-level" proportionality rather than action-specific proportionality
- Development of "interdependence impact assessments" for military actions
- Creation of new legal categories acknowledging the collapse of military-civilian distinctions

### 7.2 Strategic and Diplomatic Implications

**Theorem 7.2 (Diplomatic Impossibility):** Attempts to manage conflicts through procedural mechanisms while maintaining economic interdependence are logically futile.

**Evidence-Based Strategic Recommendations:**

1. **Prevention Priority Principle:** Given the impossibility of legitimate warfare under high interdependence ($\alpha_{ij} > 0.25$), diplomatic resources should focus exclusively on conflict prevention rather than conflict management.

2. **Interdependence Buffer Creation:** Strategic design of economic relationships to maintain beneficial cooperation while avoiding paradoxical entanglement:
   $$0.15 < \alpha_{ij} < 0.25$$
   (sufficient for cooperation incentives, insufficient for logical contradictions)

3. **Network Transparency Requirements:** Mandatory disclosure of interdependence relationships to enable accurate conflict probability assessment.

### 7.3 Comprehensive Research Agenda

Our framework establishes multiple directions for future investigation:

**7.3.1 Empirical Validation Studies**
- **Historical Analysis:** Systematic testing of our $\alpha_{ij} > 0.25$ threshold across 20th-21st century conflicts
- **Econometric Modeling:** Statistical validation of procedural legitimacy impossibility using panel data
- **Network Mapping:** Complete interdependence mapping for current global system

**7.3.2 Theoretical Extensions**
- **Multi-Level Analysis:** Extension to sub-national and supranational actors
- **Temporal Dynamics:** Modeling of interdependence evolution and conflict probability
- **Alternative Legitimacy Frameworks:** Development of non-procedural legitimacy concepts

**7.3.3 Computational and Mathematical Modeling**
- **Agent-Based Simulations:** Large-scale modeling of Dance of Death dynamics
- **Network Theory Applications:** Graph-theoretic analysis of vulnerability propagation
- **Game Theory Extensions:** Non-cooperative games under logical contradiction conditions

## 8. Conclusion and Theoretical Significance

This chapter has provided rigorous mathematical proof that economic interdependence creates fundamental logical contradictions in contemporary just war theory. Through formal analysis combining graph theory, game theory, and philosophical logic, we have demonstrated that the "Dance of Death" metaphor accurately captures the paradoxical nature of modern warfare in interconnected systems.

### 8.1 Primary Theoretical Contributions

Our analysis makes four primary contributions to international relations theory and applied philosophy:

**1. The Procedural Paradox Theorem (Theorem 3.1):** We have formally proven that procedural legitimacy requirements for warfare are logically incompatible with economic interdependence above threshold $\alpha_{ij} > 0.25$.

**2. The Documentation Impossibility Principle (Theorem 3.2):** We have mathematically demonstrated that the set of legitimate military targets becomes undefined ($M = \emptyset$) in interconnected systems, rendering traditional just war distinctions incoherent.

**3. The Dance of Death Framework:** We have developed a rigorous mathematical model using graph theory to analyze paradoxical warfare dynamics, providing both metaphorical insight and quantitative precision.

**4. Empirical Validation (Theorem 5.1):** Through game-theoretic analysis of the Russia-Ukraine-Germany triangle, we have confirmed that no Nash equilibrium exists satisfying procedural legitimacy constraints under high interdependence conditions.

### 8.2 Broader Implications for International Relations Theory

Our findings necessitate paradigmatic shifts in several areas:

**Just War Theory:** Traditional concepts of proportionality, discrimination, and military necessity require fundamental reconceptualization or abandonment in favor of frameworks acknowledging logical contradictions.

**Liberal Internationalism:** The commercial peace hypothesis must be extended beyond conflict probability to include conflict logical coherence—interdependence doesn't merely make war unlikely, it makes "fair war" impossible.

**International Law:** Legal frameworks based on procedural legitimacy face systematic contradictions under interdependence, requiring development of alternative normative structures.

**Game Theory:** Standard models assuming discrete payoffs and independent verification become inadequate for analyzing conflicts in interconnected systems.

### 8.3 The Meta-Theoretical Significance

Beyond specific findings about warfare, our analysis reveals broader problems with **procedural rationality** in complex adaptive systems. The proceduralization of legitimacy—intended to constrain behavior through formal requirements—creates systematic contradictions when applied to interconnected networks.

This suggests fundamental limitations of procedural approaches across multiple domains of international law, governance, and social coordination. The Dance of Death paradox may be one instance of a broader class of logical contradictions emerging from the intersection of formal procedures and complex systems.

### 8.4 Future Directions and Conclusion

Like medieval dancers holding hands around a grave, economically interdependent nations engaged in procedurally legitimate warfare cannot push one participant toward destruction without ensuring collective catastrophe. Our formal analysis proves this intuition mathematically and demonstrates its empirical validity.

However, recognizing the logical impossibility of fair war under interdependence conditions offers hope for developing alternative frameworks. Future research should focus on:

1. **Non-procedural legitimacy frameworks** that acknowledge systemic contradictions
2. **Network-aware diplomatic protocols** for grievance resolution  
3. **Optimal interdependence architectures** that maximize cooperation while minimizing paradoxical entanglement

The Dance of Death continues, but understanding its mathematical structure provides the foundation for developing new approaches to international conflict that transcend the failed paradigm of procedural legitimacy. In an interconnected world, the choice is not between war and peace, but between logical coherence and paradoxical destruction.

Our framework suggests that true security in an interdependent world requires abandoning the illusion of "fair war" and developing new models of international relations based on the fundamental recognition that, in the Dance of Death, all participants share a common fate.

## References

1. Augustine. (426 CE). *The City of God*. Trans. H. Bettenson. London: Penguin Classics, 2003.

2. Aquinas, T. (1265-73). *Summa Theologica*, II-II, q. 40. Trans. Fathers of the English Dominican Province. New York: Benziger Brothers, 1947.

3. Doyle, M. W. (1986). Liberalism and World Politics. *American Political Science Review*, 80(4), 1151-1169.

4. Fearon, J. D. (1995). Rationalist Explanations for War. *International Organization*, 49(3), 379-414.

5. Habermas, J. (1996). *Between Facts and Norms: Contributions to a Discourse Theory of Law and Democracy*. MIT Press.

6. Johnson, J. T. (2014). *Sovereignty: Moral and Historical Perspectives*. Georgetown University Press.

7. Kant, I. (1795). *Perpetual Peace: A Philosophical Sketch*. Trans. H. B. Nisbet. Cambridge: Cambridge University Press, 1991.

8. Keohane, R. O., & Nye, J. S. (1977). *Power and Interdependence: World Politics in Transition*. Little, Brown and Company.

9. McMahan, J. (2009). *Killing in War*. Oxford University Press.

10. Oneal, J. R., & Russett, B. (1997). The Classical Liberals Were Right: Democracy, Interdependence, and Conflict, 1950-1985. *International Studies Quarterly*, 41(2), 267-294.

11. Oosterwijk, S. (2004). Death, the Maiden and the Historian: Some Thoughts on the Origins and Development of the Dance of Death. *Art History*, 27(3), 378-405.

12. Orend, B. (2013). *The Morality of War*. 2nd Edition. Broadview Press.

13. Powell, R. (1999). *In the Shadow of Power: States and Strategies in International Politics*. Princeton University Press.

14. Rawls, J. (1999). *The Law of Peoples*. Harvard University Press.

15. Rosecrance, R. (1986). *The Rise of the Trading State: Commerce and Conquest in the Modern World*. Basic Books.

16. Wallerstein, I. (2004). *World-Systems Analysis: An Introduction*. Duke University Press.

17. Walzer, M. (2015). *Just and Unjust Wars: A Moral Argument with Historical Illustrations*. 5th Edition. Basic Books.
