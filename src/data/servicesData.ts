import { Service } from '../types';

export const servicesData: Service[] = [
  // 1. ADVANCE THERAPIES (innovative)
  {
    id: 'tms-therapy',
    title: 'TMS Therapy',
    shortDesc: 'Non-invasive, FDA-cleared neuromodulation utilizing targeted magnetic pulses to stimulate underactive brain regions.',
    longDesc: 'Transcranial Magnetic Stimulation (TMS) is a non-invasive, FDA-cleared outpatient treatment designed for individuals with treatment-resistant clinical depression. By delivering targeted magnetic pulses, it stimulates neurons in the prefrontal cortex responsible for mood regulation, promoting neural plasticity and lasting remission without systemic medication side effects.',
    fullContent: 'Our state-of-the-art TMS suite offers a quiet, clinical environment. Unlike pharmaceutical options, TMS does not enter the bloodstream and produces no systemic side effects. Patients remain awake, alert, and comfortable throughout the 20-minute sessions, resuming normal daily activities immediately after.',
    conditions: [
      'Major Depressive Disorder (MDD)',
      'Obsessive-Compulsive Disorder (OCD)',
      'Treatment-Resistant Depression (TRD)',
      'Severe Chronic Anxiety & Panic States'
    ],
    benefits: [
      'FDA-cleared, non-invasive, and drug-free neuromodulation',
      'No systemic side effects typical of antidepressants',
      'Outpatient sessions that require no anesthesia or downtime',
      'Highly precise neural mapping for targeted therapeutic relief'
    ],
    process: [
      { step: 1, title: 'Consultation & Mapping', desc: 'An initial session to measure and configure the unique magnetic threshold of your neural pathways.' },
      { step: 2, title: 'Daily Treatment Sessions', desc: 'Outpatient treatments typically scheduled 5 days a week for 4 to 6 weeks, each lasting 20-30 minutes.' },
      { step: 3, title: 'Regular Progress Reviews', desc: 'Periodic check-ins with our clinical specialists to monitor symptom reduction and adjust mapping.' },
      { step: 4, title: 'Long-term Maintenance', desc: 'Post-treatment follow-ups to maintain clinical gains and ensure sustained wellness.' }
    ],
    category: 'innovative',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  // 2. MENTAL HEALTH & WELLNESS (behavioral)
  {
    id: 'behavioral-health',
    title: 'Behavioral Health',
    shortDesc: 'Comprehensive therapeutic support and clinical stabilization plans for emotional and behavioral wellness.',
    longDesc: 'Our Behavioral Health division takes an integrative approach to clinical stabilization and psychiatric wellness. We specialize in helping clients manage complex mood conditions, ADHD, panic disorders, and significant life transitions by coordinating evidence-based psychotherapy, somatic grounding, and lifestyle interventions.',
    fullContent: 'Through compassionate, patient-centered programs, we help individuals build structured routines, improve emotional regulation, and achieve stable mental states. We focus on treating the whole person, integrating talk therapies with physical health parameters to establish a solid foundation for long-term health.',
    conditions: [
      'Bipolar & Mood Instability',
      'Generalized Anxiety & Social Panic',
      'Trauma & PTSD Recovery',
      'Persistent Stress & Mental Exhaustion'
    ],
    benefits: [
      'Integrated physical and mental treatment plans',
      'Collaborative care coordinated by highly trained clinicians',
      'Safe, compassionate environment for stabilization',
      'Focus on practical, daily behavior modification'
    ],
    process: [
      { step: 1, title: 'Comprehensive Intake', desc: 'An initial assessment covering psychiatric history, physical health, and personal goals.' },
      { step: 2, title: 'Integrated Care Plan', desc: 'Creating a tailored treatment roadmap incorporating therapy, lifestyle tweaks, and medical consults.' },
      { step: 3, title: 'Weekly Treatment Loop', desc: 'Participating in scheduled clinical sessions focused on skill integration and emotional coping.' },
      { step: 4, title: 'Maintenance & Review', desc: 'Monitoring recovery outcomes and adapting the plan as emotional resilience strengthens.' }
    ],
    category: 'behavioral',
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'individual-counselling',
    title: 'Individual Counselling',
    shortDesc: 'One-on-one psychotherapy sessions focusing on trauma recovery, identity alignment, and cognitive boundaries.',
    longDesc: 'Individual Counselling provides a dedicated, highly confidential space to work one-on-one with a licensed psychotherapist. By incorporating proven models such as Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Trauma-Informed Somatic processing, we guide clients through processing past traumas, resolving life bottlenecks, and building healthy boundaries.',
    fullContent: 'Our therapists match your specific psychological goals with their specialized toolsets. Together, you will explore patterns of thinking and behavior that no longer serve you, developing actionable strategies to manage stress, improve self-esteem, and navigate life adjustments with clarity and confidence.',
    conditions: [
      'Anxiety & Depressive States',
      'Grief, Loss, & Life Adaptations',
      'Identity & Self-Worth Obstacles',
      'Relationship & Interpersonal Issues'
    ],
    benefits: [
      'Highly customized, one-on-one focus from an expert therapist',
      'Dedicated, private space to process sensitive challenges',
      'Practical tools for emotional self-regulation and communication',
      'Flexible scheduling options to fit into your weekly routine'
    ],
    process: [
      { step: 1, title: 'Therapist Matching', desc: 'Pairing you with the specialist best aligned with your unique personality and clinical needs.' },
      { step: 2, title: 'Uncovering Core Patterns', desc: 'Conducting initial sessions to explore personal history, current triggers, and core objectives.' },
      { step: 3, title: 'Targeted Interventions', desc: 'Employing CBT, DBT, or EMDR techniques during weekly sessions to work through roadblocks.' },
      { step: 4, title: 'Maintenance & Autonomy', desc: 'Transitioning to periodic check-ins as you successfully integrate coping tools into daily life.' }
    ],
    category: 'behavioral',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'group-counselling',
    title: 'Group Counselling',
    shortDesc: 'Clinically-facilitated cohort circles offering peer feedback, shared validation, and social skill building.',
    longDesc: 'Group Counselling connects individuals facing similar emotional or behavioral challenges under the guidance of a licensed clinical facilitator. These structured group sessions foster a supportive environment where members can share experiences, offer constructive feedback, and build meaningful peer connections, accelerating recovery through community.',
    fullContent: 'Our group cohorts focus on specific themes, such as trauma recovery, substance management, anxiety reduction, and boundary setting. In this safe, structured environment, you will practice communication skills, receive diverse perspectives, and learn that you are not alone on your journey toward mental health.',
    conditions: [
      'Social Anxiety & Isolation',
      'Shared Grief & Bereavement Support',
      'Interpersonal & Social Skill Blockages',
      'Sustained Recovery & Accountability'
    ],
    benefits: [
      'Deep sense of community, reducing isolation and stigma',
      'Diverse perspectives and feedback from peers in similar situations',
      'Highly cost-effective therapeutic option',
      'A safe space to practice communication and relational skills'
    ],
    process: [
      { step: 1, title: 'Cohort Assessment', desc: 'A brief screening to match you with a group best suited for your therapeutic goals.' },
      { step: 2, title: 'Orientation & Safety', desc: 'Reviewing group guidelines, confidentiality agreements, and trust-building principles.' },
      { step: 3, title: 'Facilitated Sharing', desc: 'Attending weekly circles centered on structured discussions, exercises, and feedback.' },
      { step: 4, title: 'Community Support', desc: 'Graduation and integration into peer networks to reinforce long-term accountability.' }
    ],
    category: 'behavioral',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'medication-management',
    title: 'Medication Management',
    shortDesc: 'Regular psychiatric diagnostics and pharmacotherapeutic oversight to monitor efficacy and minimize dosing.',
    longDesc: 'Medication Management provides expert psychiatric evaluation and ongoing pharmacotherapy supervision for clients utilizing prescription medications. Our board-certified medical team monitors dosage response, evaluates potential side effects, and adjusts medication regimens, ensuring that pharmaceutical care is fully integrated with your talk therapy and physical wellness targets.',
    fullContent: 'Our clinicians prioritize safety and minimal effective dosing. We conduct comprehensive diagnostic assessments, monitor lab work, and can coordinate pharmacogenetic testing (when requested) to determine how your body metabolizes specific compounds. This reduces the trial-and-error often associated with psychiatric medications.',
    conditions: [
      'Mood Disorders & Severe Depression',
      'Complex ADHD Symptom Controls',
      'Bipolar & Mood Instability',
      'Severe Chronic Anxiety & Obsessive States'
    ],
    benefits: [
      'Oversight by board-certified psychiatric practitioners',
      'Evidence-based dosing strategies focused on safety',
      'Reduces side-effect profiles through regular diagnostics',
      'Seamlessly coordinates with your psychotherapist'
    ],
    process: [
      { step: 1, title: 'Psychiatric Assessment', desc: 'A thorough medical interview evaluating current symptoms, medical history, and goals.' },
      { step: 2, title: 'Prescription Protocol', desc: 'Designing a calibrated medication schedule, including detailed guidelines on what to expect.' },
      { step: 3, title: 'Dosage Titration', desc: 'Frequent follow-up visits during the initial weeks to adjust dosage and evaluate response.' },
      { step: 4, title: 'Maintenance Checkpoints', desc: 'Transitioning to monthly or quarterly reviews to track long-term safety and efficacy.' }
    ],
    category: 'behavioral',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'crisis-case-management',
    title: 'Crisis & Case Management Services',
    shortDesc: 'Immediate emotional de-escalation, safety planning, and coordinated linking to community support resources.',
    longDesc: 'Our Crisis & Case Management Services division provides immediate, responsive support for clients experiencing acute emotional distress or significant life disruption. We provide emergency de-escalation, safety planning, and clinical coordination, while case managers act as active client advocates, linking you to housing, vocational resources, and outpatient programs.',
    fullContent: 'We believe that healing requires a stable environment. Our team coordinates across medical, legal, and community agencies to remove barriers to care. Whether assisting with housing stability, coordinating complex insurance claims, or organizing dual-diagnosis care, we ensure you have the support required to focus on recovery.',
    conditions: [
      'Acute Mental Health Crisis',
      'Extreme Life Transition Dislocation',
      'Complex Multidisciplinary Case Needs',
      'Emergency Safety Planning Requirements'
    ],
    benefits: [
      'Rapid response and clinical stabilization',
      'Experienced case managers advocating for your care',
      'Direct linkage to vital community, housing, and financial aids',
      'Coordinates multiple medical and behavioral providers'
    ],
    process: [
      { step: 1, title: 'Rapid Triage', desc: 'Immediate assessment of current safety, acute distress levels, and urgent environmental needs.' },
      { step: 2, title: 'Safety & Action Plan', desc: 'Establishing immediate containment protocols and identifying critical resource shortages.' },
      { step: 3, title: 'Resource Navigation', desc: 'Case managers coordinate and link you directly with community, state, and private assistance.' },
      { step: 4, title: 'Outpatient Continuity', desc: 'Transitioning to ongoing therapeutic care loops once environmental stability is locked in.' }
    ],
    category: 'behavioral',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'addiction-treatment',
    title: 'Drug & Alcohol Addiction Treatment',
    shortDesc: 'Outpatient dependency counseling, relapse prevention programs, and dual-diagnosis recovery frameworks.',
    longDesc: 'Our outpatient Drug & Alcohol Addiction Treatment program provides a comprehensive, compassionate path to sobriety. By addressing both the chemical dependency and the underlying psychological triggers (dual-diagnosis), we empower clients with cognitive coping mechanisms, peer support networks, and relapse prevention strategies designed for lasting change.',
    fullContent: 'Our program integrates clinical talk-therapy models with medical monitoring. We focus on rebuilding broken relational dynamics, learning trigger management, and restoring physiological health. Our compassionate team provides a non-judgmental environment to safely rebuild your life step-by-step.',
    conditions: [
      'Chemical & Substance Dependencies',
      'Relapse Vulnerabilities',
      'Dual-Diagnosis (Addiction & Depression/Anxiety)',
      'Behavioral & Process Dependencies'
    ],
    benefits: [
      'Outpatient program designed to fit into your work/home life',
      'Treats both addiction and mental health concurrently',
      'Strong focus on building real-life triggers coping mechanics',
      'Integrates family support circles for long-term recovery'
    ],
    process: [
      { step: 1, title: 'Intake & Health Screen', desc: 'Reviewing chemical dependency history, current health parameters, and safety levels.' },
      { step: 2, title: 'Calibrated Care Schedule', desc: 'Setting up your weekly schedule of counseling, psychiatric reviews, and group cohorts.' },
      { step: 3, title: 'Core Recovery Work', desc: 'Engaging in trigger-analysis, emotional processing, and communication rebuilding.' },
      { step: 4, title: 'Relapse Prevention', desc: 'Constructing your personalized safety-net plan and transitioning to recovery maintenance.' }
    ],
    category: 'behavioral',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
  },

  // 3. OTHER SERVICES (medical)
  {
    id: 'telehealth-consultation',
    title: 'Tele Health Consultation',
    shortDesc: 'Secure, virtual clinical reviews, psychological therapy, and prescription renewals from your home.',
    longDesc: 'Through our secure, fully HIPAA-compliant virtual consultation portal, Tele Health Consultation brings high-quality medical and behavioral care directly to your location. You receive live video consults, specialized counseling sessions, progress reviews, and prescription routing in complete security and confidence, without the stress of travel.',
    fullContent: 'Our telehealth platform matches the rich personal connection of physical appointments. High-definition video streams, encrypted file sharing, and integrated pharmacy coordination make accessing care seamless from any desktop, tablet, or smartphone.',
    conditions: [
      'Remote Psychological Consultations',
      'Routine Psychiatric Medication Checks',
      'Virtual Therapy & Support Circles',
      'Follow-up Care & Diagnostics Review'
    ],
    benefits: [
      'Bypasses travel, parking, and clinic waiting-room stress',
      'Strictly confidential, HIPAA-compliant encryption standards',
      'Prescription routing directly to your local pharmacy',
      'Allows for uninterrupted care from any location'
    ],
    process: [
      { step: 1, title: 'Schedule Online', desc: 'Choose a date and slot using our secure patient scheduling portal.' },
      { step: 2, title: 'Receive Secure Link', desc: 'Get your confirmation details and encrypted meeting link via email and SMS.' },
      { step: 3, title: 'Connect with Care', desc: 'Join the video room from any device with internet access to meet with your specialist.' },
      { step: 4, title: 'Immediate Follow-up', desc: 'Any prescriptions or treatment plan summaries are routed instantly to your local channels.' }
    ],
    category: 'medical',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'remote-health-consult',
    title: 'Remote Health Consult',
    shortDesc: 'Continuous vital monitoring, biometric data check-ins, and outpatient virtual tracking for chronic care.',
    longDesc: 'Our Remote Health Consult program provides continuous health tracking and vitals monitoring for clients requiring outpatient care. By integrating biometric data streams (such as heart rate variability, sleep patterns, and stress indicators), our clinical nursing team proactively monitors recovery metrics, ensuring early support before symptoms escalate.',
    fullContent: 'This program represents the future of clinical wellness. Patients utilize easy-to-pair biometric tracking tools, transmitting daily health data to our clinical dash. A nurse practitioner reviews the data and hosts virtual health check-ins, optimizing recovery trajectories from the comfort of home.',
    conditions: [
      'Outpatient Post-Stabilization Monitoring',
      'Chronic Vital & Stress Tracking',
      'Continuous Recovery Pathway Mapping',
      'Proactive Symptom Management'
    ],
    benefits: [
      'Continuous vital monitoring for peace of mind',
      'Early detection of physical or emotional stress flags',
      'Proactive care adjustments without visiting the clinic',
      'Pairs with easy-to-use home biometric tools'
    ],
    process: [
      { step: 1, title: 'Biometric Pairing', desc: 'Receiving and setting up your easy-to-use monitoring device with our portal.' },
      { step: 2, title: 'Daily Transmission', desc: 'Biometric metrics are automatically and securely streamed to our clinical dashboard.' },
      { step: 3, title: 'Clinical Review Flags', desc: 'A nurse practitioner analyzes metrics daily, flagging anomalies and tracking progress.' },
      { step: 4, title: 'Virtual Check-in', desc: 'Attending bi-weekly video reviews to discuss results and optimize wellness routines.' }
    ],
    category: 'medical',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'life-goal-setting',
    title: 'Life Goal Setting',
    shortDesc: 'Evidence-based cognitive coaching, career burnout resolutions, and habit design to align life paths.',
    longDesc: 'Life Goal Setting combines evidence-based cognitive coaching techniques with scientific habit design to help clients rebuild positive momentum. Focused on resolving career burnout, navigating transition choices, and establishing solid daily habits, we guide individuals in translating mental wellness gains into tangible, real-world success.',
    fullContent: 'Our certified coaching team guides you through structured sessions to discover personal strengths, establish clear milestones, and dismantle self-sabotaging behavior patterns. We leverage actionable, weekly drills and accountability metrics to ensure you build sustainable resilience and align your life path with your values.',
    conditions: [
      'Executive & Career Burnout',
      'Lack of Professional or Personal Direction',
      'Major Life & Career Transition Choices',
      'Habit Reform & Routine Failures'
    ],
    benefits: [
      'Structured accountability to achieve real-world goals',
      'Science-backed habit formation and routine building',
      'Relieves burnout and increases daily life satisfaction',
      'Aligns your daily decisions with your long-term values'
    ],
    process: [
      { step: 1, title: 'Strengths Blueprinting', desc: 'Conducting initial assessments to identify core values, strengths, and life blocks.' },
      { step: 2, title: 'Milestone Architecture', desc: 'Designing a 90-day action map with specific, measurable goals and habit targets.' },
      { step: 3, title: 'Weekly Coaching Loops', desc: 'Conducting focus coaching check-ins to review progress, analyze setbacks, and adjust habits.' },
      { step: 4, title: 'Autonomy & Integration', desc: 'Graduation to self-led maintenance as your productive routines become automatic.' }
    ],
    category: 'medical',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  }
];
