export interface PhilosophyPrinciple {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  quote: string;
  description: string;
  bullets: string[];
}

export const engineeringPrinciples: PhilosophyPrinciple[] = [
  {
    id: "hardware-software-bridge",
    title: "The Hardware-Software Bridge",
    subtitle: "From the Metal to the Cloud",
    icon: "hardware",
    quote: "Software without hardware is a daydream; hardware without software is a paperweight.",
    description: "My foundational training as a hardware engineer (designing switching power supplies for the NASA Space Shuttle and naval nuclear submarines, building tape drive mechanisms for US patents) gives me a fundamental understanding of physical constraints, timing, memory, and thermodynamics. When I design software architectures, I see the electricity moving through silicon.",
    bullets: [
      "Understand physical limits: I/O bottlenecks, network latency, CPU cache lines, and thermal throttling.",
      "Zero-defect mindset: Inherited from aerospace standards where bugs cannot be patched in orbit.",
      "End-to-end perspective: From firmware and device drivers up to modern edge-rendered web interfaces and neural nets."
    ]
  },
  {
    id: "quality-first-engineering",
    title: "Meticulous Quality & Fault Tolerance",
    subtitle: "Reliability is an Architectural Decision",
    icon: "shield",
    quote: "Quality is never an accident; it is always the result of intelligent effort.",
    description: "Having led QA teams at SketchUp (Trimble), ClickBank (processing millions in daily transactions), and Rebit (continuous data protection backup), I reject the notion of QA as an afterthought. High testability, continuous automated validation, and clear domain boundaries are non-negotiable prerequisites for agility.",
    bullets: [
      "Test at the boundary: Automated unit tests, deterministic integration tests, and resilient end-to-end user flows.",
      "Graceful degradation: Systems must handle database outages, network drops, and external API failures without crashing.",
      "Defensive architecture: Clear input validation, type safety at compile time, and observable telemetry."
    ]
  },
  {
    id: "stopper-mindset",
    title: "The STOPPER Mindset",
    subtitle: "The Goalie Gladiator Philosophy",
    icon: "goalie",
    quote: "There is no Future, There is no Past, I am here to make This Moment last.",
    description: "In ice hockey, 70% of winning comes down to goaltending. The goalie is the ultimate backstop — when five teammates make a mistake, the goalie stands alone between the puck and defeat. I formulated the STOPPER framework to codify the discipline required to anchor teams under extreme pressure.",
    bullets: [
      "S - Skills: Relentless repetition of foundational mechanics.",
      "T - Talent: Innate instincts refined through rigorous deliberate practice.",
      "O - Opportunities: Being positioned and prepared before the challenge presents itself.",
      "P - Physical presence: Commanding space with balance, speed, and endurance.",
      "P - Psychological presence: Unshakeable emotional composure when mistakes happen.",
      "E - Experience: Pattern recognition built across thousands of game situations.",
      "R - Resources: The equipment, teammates, and tools that support peak performance."
    ]
  },
  {
    id: "craftsmanship-music",
    title: "Craftsmanship & Harmonic Foundation",
    subtitle: "Building the Instrument You Play",
    icon: "music",
    quote: "The groove isn't in flashy solos — it's in being the unshakeable foundation that lets everyone else shine.",
    description: "As a bass player and custom bass builder, I believe in understanding tools by building them from raw materials. Carving wood, wiring pickups, and calibrating string tension mirrors writing clean code: every joint must fit precisely, and every element exists to serve the whole.",
    bullets: [
      "Support the core: In music as in architecture, the rhythm section creates the pocket that carries the melody.",
      "Craft your own tools: Deep domain expertise comes from understanding how internal mechanisms function.",
      "Shared human energy: Building software and playing music are collaborative arts made to connect people."
    ]
  }
];

export const bioStats = {
  yearsExperience: "30+",
  certificationsCount: "49+ Recent",
  patentsAwarded: "1 US Patent",
  startupsFounded: "3 Co-Founded",
  championships: "Silver Stick & State Title",
  location: "Westminster, Colorado"
};
