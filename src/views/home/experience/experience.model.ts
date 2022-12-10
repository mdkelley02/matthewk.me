export type Experience = {
  company: {
    name: string;
    link: string;
    image: string;
    startDate: Date;
    endDate: Date;
    location: string;
  };
  positions: {
    title: string;
    startDate: Date;
    endDate: Date;
    bullets: string[];
    technologies?: string[];
  }[];
};

export const Experiences: Experience[] = [
  {
    company: {
      location: "Boise, Idaho",
      name: "Kount Inc",
      link: "https://www.kount.com/",
      image: "../assets/kount.jpeg",
      startDate: new Date("2021-05-01"),
      endDate: new Date(),
    },
    positions: [
      {
        title: "Full Stack Software Engineer",
        startDate: new Date("2022-05-01"),
        endDate: new Date(),
        technologies: [
          "Angular",
          "scss",
          "TypeScript",
          "Go",
          "DynamoDB",
          "S3",
          "Lambda",
          "SQS",
          "ElasticSearch",
          "Terraform",
          "protobuf",
          "gRPC",
        ],
        bullets: [
          "Full stack engineer responsible for new feature development and improvements on Kount's newest fraud prevention platform.",
          "Contribute to the full stack development of internal Angular micro front end framework",
          "Develop, deploy, and maintain over a dozen critical Kubernetes Go based gRPC and HTTP microservices",
          "Contribute to internal Angular Component Library",
          "Conducted multiple interviews for new hires",
        ],
      },
      {
        title: "Front End Developer",
        startDate: new Date("2021-05-01"),
        endDate: new Date("2022-05-01"),
        technologies: ["TypeScript", "html", "css", "webpack"],
        bullets: [
          "Lead Developer for Kount's Support and Developer documentation site",
          "Bootstrapped Developer documentation site from scratch",
          "Developed vanilla JavaScript markdown component library for respective documentation sites",
          "Reviewed developer documentation for accuracy and consistency",
          "Mentored Technical writers on best practices for writing developer documentation",
        ],
      },
    ],
  },
  {
    company: {
      location: "Boise, Idaho",
      name: "Tackle.io",
      link: "https://tackle.io/",
      image: "../assets/tackle.jpeg",
      startDate: new Date("2020-06-01"),
      endDate: new Date("2020-08-31"),
    },
    positions: [
      {
        title: "Software Engineer Intern",
        startDate: new Date("2020-06-01"),
        endDate: new Date("2020-08-31"),
        bullets: [],
      },
    ],
  },
  {
    company: {
      name: "HP Inc",
      location: "Boise, Idaho",
      link: "https://www.hpe.com/us/en/home.html",
      image: "../assets/hp.jpeg",
      startDate: new Date("2019-05-01"),
      endDate: new Date("2020-03-31"),
    },
    positions: [
      {
        title: "Support Training & Content Intern",
        startDate: new Date("2019-05-01"),
        endDate: new Date("2020-03-31"),
        bullets: [],
      },
    ],
  },
];
