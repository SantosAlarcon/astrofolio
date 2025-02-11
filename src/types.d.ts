export type ExperienceItem = {
    company: string;
    location: string;
    role: string;
    startDate: string;
    endDate: string | "Current";
    description: string;
    logo?: string;
}

export type Work = {
    title: string;
    description: string;
    liveSite: string;
    githubRepo: string;
    image: string;
    techStack: string[];
}
