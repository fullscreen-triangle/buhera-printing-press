# Achieving Mach 1.7 in Water: A Micro-Scale Ballistics Experiment

## The Challenge: Breaking the Sound Barrier Underwater

Water conducts sound at approximately 1,480 m/s - much faster than the 343 m/s in air. This means achieving supersonic speed underwater (Mach 1+) requires velocities above 1,480 m/s. Our target of Mach 1.7 means reaching 2,500 m/s - a feat never achieved in controlled laboratory conditions.

### Why This Is Difficult

**Density Difference**: Water is 800 times denser than air (1000 kg/m³ vs 1.225 kg/m³). This means:
- 800 times more resistance to push through
- Exponentially higher energy requirements 
- Massive pressure waves generated at supersonic speeds

**Cavitation**: At high speeds, water forms vapor bubbles around moving objects. These bubbles collapse violently, creating additional drag and potentially destroying the projectile.

**Energy Dissipation**: The enormous kinetic energy gets converted to heat, shock waves, and potentially plasma formation.

### Energy Requirements: The Physics Behind the Challenge

The total energy needed for this experiment can be broken down into four components:

$$E_{total} = E_{vap} + E_{ion} + E_{kin} + E_{shock}$$

**What this equation means:**
- $E_{vap}$ = Energy to vaporize water (turn liquid to gas) = ~2.3 MJ/kg
- $E_{ion}$ = Energy to ionize atoms (strip electrons) = ~13.6 eV per atom  
- $E_{kin}$ = Kinetic energy of the projectile = ½mv² = ~2.5 kJ for 0.8g at 2500 m/s
- $E_{shock}$ = Energy lost to shock wave formation = ~60% of kinetic energy

**Real numbers**: For our 0.8g projectile, we need roughly 3 kJ total energy - equivalent to the energy in a small firecracker, but delivered in microseconds.

### Drag Forces in Multi-Phase Flow

As the projectile moves through our engineered fluid, the drag force changes dramatically:

$$F_d = \frac{1}{2}\rho(T,P) \cdot C_d(Re,Ma) \cdot A(t) \cdot v^2 \cdot \phi(x,t)$$

**Breaking this down:**
- $\rho(T,P)$ = Fluid density changes with temperature and pressure (our heating system reduces this)
- $C_d(Re,Ma)$ = Drag coefficient depends on Reynolds number (flow type) and Mach number (speed)
- $A(t)$ = Cross-sectional area of projectile (changes as it deforms)
- $v^2$ = Drag increases with the square of velocity (this is why supersonic is so hard)
- $\phi(x,t)$ = Phase transition factor (liquid→vapor→plasma reduces drag)

**What this tells us**: By heating the fluid and creating phase transitions, we can reduce $\rho$ and $\phi$, dramatically lowering the drag force.

### Plasma Channel Evolution

The plasma channel that forms behind our projectile follows this pattern:

$$n_e(x,t) = n_0 \exp\left(-\frac{(x-vt)^2}{2\sigma^2}\right) \cdot \exp\left(-\frac{t}{\tau_p}\right)$$

**In plain English:**
- $n_e$ = Number of free electrons per cubic meter at any point
- $n_0$ = Peak electron density (~10²⁰ electrons/m³ - extremely dense plasma)
- The first exponential term: Plasma is strongest right behind the bullet, gets weaker with distance
- The second exponential term: Plasma fades away over time
- $\tau_p$ = Plasma lifetime (~10 microseconds - long enough to observe)

**What this means**: We get a bright, glowing channel following the bullet that gradually fades but lasts long enough for cameras to capture.

### Maximum Achievable Velocity

Physics limits how fast we can actually go:

$$v_{max} = c_w\sqrt{1 + \frac{2E_{input}}{\rho V c_w^2}}$$

**Breaking it down:**
- $c_w$ = Speed of sound in water (1,480 m/s)
- $E_{input}$ = Total energy we pump into the system 
- $\rho$ = Local fluid density
- $V$ = Volume of fluid affected

**What this tells us**: Even with unlimited energy, there's a maximum speed determined by the physics of the medium. Our target of 2,500 m/s (Mach 1.7) is achievable with ~3 kJ of input energy.

## Our Experimental Approach: Sequential Projectile System

Rather than trying to achieve supersonic speed from a single shot, we use an automated rifle firing three projectiles in rapid succession through a specially designed 1-meter track filled with engineered fluid mixtures.

### The Three-Stage Process

**Stage 1 - Path Preparation (50g projectile at 800-1000 m/s)**
- Creates initial cavitation tunnel
- Displaces bulk fluid
- Forms low-pressure corridor
- *Purpose*: Reduces resistance for subsequent projectiles

**Stage 2 - Channel Enhancement (15g projectile at 1200-1400 m/s)**
- Expands and stabilizes the cavitation tunnel
- Initiates ionization of fluid due to high electrical current in track
- Creates plasma channel conditions
- *Purpose*: Conditions the medium for supersonic transition

**Stage 3 - Supersonic Achievement (0.8g projectile at 2000-2500 m/s)**
- Travels through prepared, low-resistance channel
- Achieves Mach 1.7 for brief duration
- Generates observable supersonic phenomena
- *Purpose*: Creates the physical effects we want to study

### Engineered Fluid System

**Base Mixture**:
- Water (60%): Primary medium, provides acoustic baseline
- Acetone (20%): Lowers surface tension, reduces cavitation resistance  
- Methanol (15%): Further reduces surface tension, improves flow
- Liquid nitrogen (5%): Cooling agent, modifies local density
- Conductivity enhancers: Enable electrical effects

**Why These Ratios?**
- Acetone and methanol dramatically reduce surface tension (from 72 mN/m to ~25 mN/m)
- Lower surface tension means easier bubble formation and collapse
- Conductivity enhancers allow the 50kV electrical current to ionize the fluid
- The mixture creates optimal conditions for plasma formation

**Progressive Heating System (300K to 525K)**:
- Each 10cm section is heated progressively
- *Purpose*: Changes fluid density and viscosity along the path
- Lower density = less resistance
- Higher temperature = easier ionization
- Creates "gradient medium" that guides the projectile to supersonic speeds

## What We Expect to Observe

### The Underwater Sonic Boom

**Duration**: 50-100 nanoseconds (0.00000005 seconds)

**Peak Pressure**: ~5 GPa 
- *What this means*: 50,000 times atmospheric pressure
- Equivalent to the pressure 500 kilometers deep in the Earth
- Comparable to pressure inside diamond anvil cells used for materials research
- *Sound*: If you could somehow hear it, it would be like a cannon blast amplified 1000 times, but it happens too fast for human ears

**Temperature Spike**: >100,000K
- *What this means*: Briefly hotter than the surface of the sun (5,778K)
- About 20 times hotter than the sun's surface
- Hot enough to ionize any atoms in the immediate vicinity
- Creates plasma - the fourth state of matter where electrons separate from nuclei

### Plasma Formation

**What is Plasma?**
- When matter gets hot enough (>10,000K), electrons break free from atoms
- Creates a soup of free electrons and ions
- Conducts electricity and responds to magnetic fields
- Glows with characteristic colors depending on the elements present

**In Our Experiment**:
- Water molecules (H₂O) break apart into hydrogen and oxygen ions
- Acetone and methanol also ionize
- Creates a brief, bright channel of plasma following the bullet
- Duration: microseconds (much longer than the initial sonic boom)

### Observable Light Effects

**Sonoluminescence**: 
- Cavitation bubbles collapse so violently they generate light
- Appears as bright flashes lasting nanoseconds
- Blue-white color typical of high-energy events

**Čerenkov Radiation**:
- When charged particles move faster than light travels in that medium
- Light travels slower in water (225,000 km/s vs 300,000 km/s in vacuum)
- Creates characteristic blue glow
- *What it looks like*: Blue streak following the projectile path

**Plasma Emission**:
- Different elements glow different colors when ionized
- Hydrogen: red/pink lines
- Oxygen: green/blue lines  
- Creates rainbow spectrum that can be analyzed

### Shock Wave Propagation

**Primary Shock**: Spherical pressure wave expanding from bullet path
- Travels at sound speed (1,480 m/s in water)
- Peak pressure decreases with distance
- *Observable*: Pressure sensors throughout the track

**Secondary Waves**: Reflections from track walls
- Create complex interference patterns
- Multiple pressure pulses following the main shock
- *Observable*: Acoustic signature lasting several milliseconds

### Electromagnetic Effects

**Electromagnetic Pulse (EMP)**:
- Rapid change in electrical current creates radio waves
- Brief pulse of electromagnetic radiation
- *Observable*: Radio frequency detectors pick up characteristic signature

**Magnetic Field Generation**:
- Moving plasma creates magnetic fields
- Self-organizing magnetic structures may persist for microseconds
- *Observable*: Magnetic field sensors throughout track

## What Makes This Feasible

**Duration**: Total event time ~2 seconds
- Projectile firing: ~1 second for three shots
- Observable effects persist: additional ~1 second
- *This is long enough for existing high-speed cameras to capture*

**Existing Technology**:
- Olympic-grade high-speed cameras: 1 million fps capability
- University plasma physics labs have the necessary diagnostic equipment
- Automated rifles with microsecond timing precision already exist
- Pressure sensors with nanosecond resolution are commercially available

**Amplified Effects**:
- The engineered fluid mixture amplifies observable signatures
- Electrical current enhances plasma formation
- Progressive heating optimizes conditions along the entire path
- Effects last much longer than the initial supersonic transition

## Expected Measurement Results

**Visual**: 
- Blue Čerenkov streak
- Bright plasma channel 
- Sonoluminescence flashes
- Rainbow emission spectra

**Acoustic**:
- Initial shock wave signature
- Complex reflection patterns
- Pressure pulses lasting milliseconds

**Electromagnetic**:
- Brief EMP signature
- Magnetic field evolution
- Radio frequency emissions

**Thermal**:
- Localized heating patterns
- Temperature gradients lasting seconds
- Plasma cooling signature

This experiment represents the first attempt to achieve and study supersonic velocities in liquid media under controlled laboratory conditions, using a practical approach that can be implemented with existing technology.
