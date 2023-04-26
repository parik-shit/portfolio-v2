export interface TimelineItem {
  from: string;
  to: string;
  title: string;
  tags: string[];
  description: string;
  additionalInfo?: string[];
  href?: string;
}

export const timelineData: TimelineItem[] = [
  {
    from: "2020 December",
    to: "",
    title: "Started my CSE undergrad journey",
    tags: ["student"],
    description:
      "Got into Defi",
    additionalInfo: [
      "Started freelancing and made contacts in Web3 space",
      "Got into smart contract development"
    ],
    href: "",
  }, {
    from: "2022 December",
    to: "",
    title: "Started Alchemy Ethereum Bootcamp",
    tags: ["AU_Student"],
    description:
      "Learning core concepts of blockchain technology",
    additionalInfo: [
      "Blockchain storage using Merkle Tree",
      "Ether.js + Hardhat + Solidity"
    ],
    href: "",
  },
  
];

