export type TeamMember = {
  name: string;
  role: string;
  img: string;
  bio?: string;
};

export const TEAM_IMAGE_FIT_BY_NAME: Record<string, "cover" | "contain"> = {
  // These photos look cropped awkwardly with `cover`, so we use `contain` with padding.
  "AGUBE SAMSON .O.": "contain",
  "OKOROAFOR SAMUEL": "contain",
};

export const teamMembers: TeamMember[] = [
  {
    name: "AGUBE SAMSON .O.",
    role: "PRESIDENT",
    img: "/assets/Samson Agube.png",
    bio: "Agube Samson serves as the President of The Sonship Hub, providing visionary leadership and strategic oversight for the organization. He is responsible for guiding the team, setting organizational priorities, and ensuring that all initiatives align with the Hub’s mission of transforming young men from ordinary to outstanding.\n\nHe holds a Bachelor’s degree in Computer Science from the University of Port Harcourt and brings expertise in software programming, data analytics, and digital technology. Beyond his technical skills, Agube is a multi-talented musical instrumentalist, which enhances his ability to creatively engage and inspire young men in the Hub’s programs.\n\nIn his role as President, he fosters a culture of discipline, excellence, and spiritual growth. Agube oversees program implementation, evaluates performance metrics, and collaborates closely with all executives to ensure the organization operates effectively and fulfills its vision. His leadership combines strategic thinking, technical proficiency, and creative insight, empowering The Sonship Hub to impact lives positively and raise a generation of purpose-driven and outstanding sons.",
  },
  {
    name: "MARK VICTOR",
    role: "PA & SITE MANAGER",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "ECHETA DAVID UZOROMA",
    role: "SECRETARY",
    img: "/assets/Echeta David Uzoroma.jpg",
    bio: "Echeta David Uzoroma serves as the Secretary of The Sonship Hub, acting as the organizational backbone responsible for coordination, documentation, and ensuring operational efficiency. He plays a critical role in facilitating meetings, managing records, and supporting leadership in implementing programs and initiatives that align with the Hub’s mission of transforming young men into outstanding individuals.\n\nDavid holds an undergraduate degree from the University of Port Harcourt and is a certified Data Analyst and Data Scientist. His technical expertise allows him to leverage data-driven insights to improve organizational processes, track progress, and optimize decision-making. Additionally, his artistic skills enhance creative communications and contribute to a visually engaging representation of the Hub’s activities.\n\nIn his role, David ensures effective communication across the team, maintains compliance with governance standards, and supports follow-up on action points to guarantee program success. He is dedicated to fostering collaboration, accountability, and excellence, helping The Sonship Hub achieve its vision of raising disciplined, purpose-driven, and outstanding sons for this generation.",
  },
  {
    name: "EKERE DIEPREYE PHILIP",
    role: "PRAYER & EVANGELISM COORDINATOR",
    img: "/assets/Ekere Diepreye Philip.jpg",
    bio: "Ekere Diepreye Philip serves as the Prayer and Evangelism Coordinator at The Sonship Hub. He leads the spiritual initiatives of the organization, organizing prayer sessions, outreach programs, and discipleship activities that foster spiritual growth and preparedness among young men.\n\nHe holds a degree in Forestry and Wildlife Management and complements his academic background with skills in business development and data analytics, bringing a strategic and organized approach to planning and executing spiritual programs. Diepreye is dedicated to ensuring that every outreach and prayer initiative is impactful, measurable, and transformative for the participants.\n\nIn his role, he collaborates with the leadership team to design programs that deepen the spiritual foundation of members, while creating avenues for engagement, mentorship, and positive influence. His commitment to faith-driven leadership and holistic transformation helps The Sonship Hub fulfill its vision of raising disciplined, purpose-driven, and outstanding sons for this generation.",
  },
  {
    name: "OKORAFOR SAMUEL",
    role: "COUNSELLOR (ADDICTION & TRAUMA)",
    img: "/assets/Okorafor Samuel.jpg",
    bio: "Okorafor Samuel serves as the Counsellor for Addiction and Trauma at The Sonship Hub. He is responsible for supporting individuals dealing with substance-related challenges, trauma, and behavioral patterns that hinder personal growth and stability. His role focuses on providing structured guidance, emotional support, and recovery-oriented counseling within a safe and non-judgmental environment.\n\nHe is trained as an Electrical and Electronics Engineer and brings a systems-oriented and analytical approach to counseling, enabling him to identify patterns, root causes, and sustainable solutions in the recovery process. As the Chief Executive Officer of TRADESHIFT LIMITED and a Digital Media Verification Analyst, he also contributes strong investigative, analytical, and risk-assessment skills to his work.\n\nSamuel applies these competencies to help individuals navigate trauma, addiction, and digital-related vulnerabilities, while promoting accountability, resilience, and long-term transformation. He collaborates closely with the medical consultant, leadership, and other counselors to ensure holistic care and effective follow-up.\n\nHe is committed to advancing The Sonship Hub’s mission by helping young men overcome limiting experiences, regain clarity, and develop healthy, purpose-driven lives.",
  },
  {
    name: "KIABARI VICTOR ZEBULUN (ENGR.)",
    role: "COUNSELLOR (RELATIONSHIP)",
    img: "/assets/Kaibari Victor Zebulon.jpg",
    bio: "Kiabari Victor Zebulun serves as the Counsellor for Relationships at The Sonship Hub, guiding young men and couples in building healthy, effective, and purpose-driven connections. He provides counseling, conflict resolution support, and practical tools to strengthen communication, empathy, and relational skills.\n\nHe holds a Bachelor’s degree in Mechanical Engineering (GMNSE) and brings diverse expertise from roles in safety management, rigging and scaffolding, data analytics, graphic design, copywriting, and music. This multidisciplinary background allows him to connect with members creatively and analytically, tailoring guidance to individual needs.\n\nVictor is dedicated to fostering strong interpersonal and relational foundations, empowering young men to make informed decisions in their personal and professional relationships, in alignment with The Sonship Hub’s mission of raising outstanding sons.",
  },
  {
    name: "AYENI MIRACLE (ENGR.)",
    role: "COUNSELLOR (CAREER)",
    img: "/assets/Ayeni Miracle.jpg",
    bio: "Ayeni Miracle serves as the Counsellor for Career Development at The Sonship Hub, guiding young men in discovering their strengths, making informed educational and professional decisions, and developing long-term career strategies. He provides personalized mentorship, career assessments, and practical tools to help individuals navigate challenges and achieve their full potential.\n\nHe holds both a Bachelor’s and a Master’s degree in Mechanical Engineering and possesses expertise in data analysis, technical proposal writing, and effective verbal and written communication. His technical and analytical background allows him to offer structured, evidence-based guidance while helping members develop practical skills applicable to real-world careers.\n\nMarried to Joyce E. Ayeni, Miracle brings a balanced perspective to counseling, emphasizing discipline, accountability, and purpose-driven growth. He collaborates closely with other executives and the leadership team to design programs that equip young men with the knowledge, confidence, and resilience needed to succeed in their professional and personal lives. His work directly supports The Sonship Hub’s mission to transform ordinary young men into outstanding, purpose-filled individuals.",
  },
  {
    name: "IMARHIAGBE DANIEL ESOSA, MD",
    role: "MEDICAL CONSULTANT / THERAPIST",
    img: "/assets/Imarhiagbe Daniel Esosa.jpeg",
    bio: "Dr. Imarhiagbe Daniel Esosa is a licensed Medical Doctor and serves as the Medical Consultant and Therapist at The Sonship Hub. He provides clinical oversight, medical guidance, and therapeutic support for individuals referred through the Hub’s counseling and intervention programs, with a focus on addiction-related health concerns, lifestyle disorders, and overall wellbeing.\n\nHe holds a Doctor of Medicine (MD) degree and brings a holistic approach to healthcare, recognizing the strong connection between physical health, mental wellbeing, and purposeful living. In collaboration with counselors and leadership, he contributes to the development of structured care pathways, referrals, and health-based interventions that support recovery and sustainable personal transformation.\n\nBeyond medicine, Dr. Daniel possesses a diverse creative background, including graphic and brand design, music production, film scoring, creative writing, and culinary entrepreneurship. These multidisciplinary skills enhance his ability to connect with young men from varied backgrounds and to communicate health concepts in relatable and impactful ways.\n\nDr. Imarhiagbe Daniel Esosa is deeply committed to using both his professional expertise and creative capacity to advance The Sonship Hub’s vision of raising healthy, disciplined, and outstanding sons for this generation.",
  },
  {
    name: "IGBOECHE JOHNFAVOUR IKENNA",
    role: "SOCIAL MEDIA / PUBLICITY COORDINATOR",
    img: "/assets/igboeche-johnfavour-ikenna.jpg",
    bio: "Igboeche Johnfavour Ikenna is the Social Media and Publicity Coordinator of The Sonship Hub, where he leads the organization’s digital presence and public communications. He is responsible for developing and executing strategic content initiatives that amplify the Hub’s vision of transforming young men from ordinary to outstanding.\n\nWith a strong background in digital media, technology, and online engagement, Johnfavour leverages modern communication tools to drive visibility, engagement, and impact across multiple platforms. His work focuses on translating the mission and values of The Sonship Hub into clear, consistent, and compelling digital narratives that resonate with the target audience.\n\nHe oversees content creation, social media management, campaign performance tracking, and audience engagement analytics, providing data-driven insights that support outreach effectiveness and continuous improvement. Through thoughtful storytelling and structured digital strategy, he contributes to building a strong, credible, and growth-oriented online identity for the organization.\n\nJohnfavour remains committed to using technology and media as instruments for positive transformation, discipleship, and purpose alignment, supporting The Sonship Hub’s mandate of raising grounded, disciplined, and outstanding sons for this generation.",
  },
  {
    name: "ONYEADI DIRICHUKWU JOHN",
    role: "MENTOR & SPECIAL OPERATIONS MANAGER",
    img: "/assets/Onyeadi Dirichukwu John.jpg",
    bio: "Onyeadi Dirichukwu John serves as the Mentor and Special Operations Manager at The Sonship Hub, providing guidance, mentorship, and strategic oversight for special projects and operational initiatives. He plays a key role in shaping programs that develop the skills, character, and purpose of young men within the organization.\n\nHe is a trained Microbiologist with expertise in agro-business, education coaching, and youth leadership, and is currently pursuing a Master’s degree. John leverages his diverse academic and professional background to design and implement impactful strategies that foster growth, accountability, and excellence among members.\n\nIn his capacity as Mentor and Special Operations Manager, he ensures that initiatives align with the Hub’s mission, supporting both operational efficiency and personal development for the target audience. He is committed to empowering the next generation to live purposefully, overcome challenges, and achieve outstanding success in all areas of life.",
  },
  {
    name: "CHUKWUERE EMMANUEL CHIMA (ENGR.)",
    role: "TREASURER",
    img: "/assets/Chukwuere Emmanuel Chima.jpg",
    bio: "Chukwuere Emmanuel Chima serves as the Treasurer of The Sonship Hub, overseeing the organization’s financial resources, budgeting, and reporting. He ensures compliance with financial policies and provides strategic guidance on sustainable resource management to support the Hub’s mission and programs.\n\nHe holds a degree in Electrical and Electronics Engineering and brings additional expertise in web development and cloud engineering, enabling him to integrate technology-driven solutions for financial tracking, reporting, and operational efficiency.\n\nEmmanuel is committed to promoting transparency, accountability, and sound financial stewardship, ensuring that the Hub’s initiatives are well-supported and sustainable. His role strengthens the organization’s foundation while contributing to the development of outstanding young men through strategic resource management.",
  },
  {
    name: "TEESI VICTORY",
    role: "AMBASSADOR & EVENT ORGANISER",
    img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "JULIAN WEST",
    role: "TECHNICAL ADVISOR",
    img: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?auto=format&fit=crop&q=80&w=400",
  },
];
