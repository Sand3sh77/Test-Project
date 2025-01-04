export interface UserData {
  id: string;
  userData: {
    name: string;
    email: string;
    avatar: string;
  };
  addedFrom: string;
  tags: string;
  internalId: string;
  clientId: string;
  phone: string;
  clientPortal: string;
  assignee: {
    name: string;
    avatar: string;
    desc: string;
  };
  followers: string;
  status: string;
  applications: string;
  lastUpdated: string;
  [key: string]: any;
}

export const userData: UserData[] = [
  {
    id: "1",
    userData: {
      name: "Nisha Giri Puri",
      email: "example@gmail.com",
      avatar: "/images/nisha.png",
    },
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779867****",
    clientPortal: "Deactivated",
    assignee: {
      name: "Justin",
      avatar: "/images/assignee.png",
      desc: "Interlace Studies Pty",
    },
    followers: "Allison",
    status: "Completed",
    applications: "8",
    lastUpdated: "24-09-2023",
  },
  {
    id: "2",
    userData: {
      name: "Abram Press",
      email: "example@gmail.com",
      avatar: "/images/abram.png",
    },
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779867****",
    clientPortal: "Deactivated",
    assignee: {
      name: "Miracle",
      avatar: "/images/assignee.png",
      desc: "Interlace Studies Pty",
    },
    followers: "Maria",
    status: "Completed",
    applications: "2",
    lastUpdated: "24-09-2023",
  },
  {
    id: "3",
    userData: {
      name: "Charlie Curtis",
      email: "example@gmail.com",
      avatar: "/images/charlie.png",
    },
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779867****",
    clientPortal: "Deactivated",
    assignee: {
      name: "Nolan",
      avatar: "/images/assignee.png",
      desc: "Interlace Studies Pty",
    },
    followers: "Makenna",
    status: "In Progress",
    applications: "8",
    lastUpdated: "24-09-2023",
  },
  {
    id: "4",
    userData: {
      name: "Jocelyn Curtis",
      email: "example@gmail.com",
      avatar: "/images/jocelyn.png",
    },
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779867****",
    clientPortal: "Deactivated",
    assignee: {
      name: "Alena",
      avatar: "/images/assignee.png",
      desc: "Interlace Studies Pty",
    },
    followers: "Ashlynn",
    status: "Completed",
    applications: "4",
    lastUpdated: "24-09-2023",
  },
  {
    id: "5",
    userData: {
      name: "Dulce Calzoni",
      email: "example@gmail.com",
      avatar: "/images/dulce.png",
    },
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779867****",
    clientPortal: "Deactivated",
    assignee: {
      name: "Madelyn",
      avatar: "/images/assignee.png",
      desc: "Interlace Studies Pty",
    },
    followers: "Giana",
    status: "In Progress",
    applications: "8",
    lastUpdated: "24-09-2023",
  },
  {
    id: "6",
    userData: {
      name: "Adison Curtis",
      email: "example@gmail.com",
      avatar: "/images/adison.png",
    },
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779867****",
    clientPortal: "Deactivated",
    assignee: {
      name: "Mira",
      avatar: "/images/assignee.png",
      desc: "Interlace Studies Pty",
    },
    followers: "Marcus",
    status: "Completed",
    applications: "10",
    lastUpdated: "24-09-2023",
  },
  {
    id: "7",
    userData: {
      name: "Tatiana Septimus",
      email: "example@gmail.com",
      avatar: "/images/tatiana.png",
    },
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779867****",
    clientPortal: "Deactivated",
    assignee: {
      name: "Kaiya",
      avatar: "/images/assignee.png",
      desc: "Interlace Studies Pty",
    },
    followers: "Livia",
    status: "Completed",
    applications: "1",
    lastUpdated: "24-09-2023",
  },
  {
    id: "8",
    userData: {
      name: "Jaydon Levin",
      email: "example@gmail.com",
      avatar: "/images/jaydon.png",
    },
    addedFrom: "System",
    tags: "-",
    internalId: "ID296",
    clientId: "-",
    phone: "+9779867****",
    clientPortal: "Deactivated",
    assignee: {
      name: "Gustavo",
      avatar: "/images/assignee.png",
      desc: "Interlace Studies Pty",
    },
    followers: "Kaylynn",
    status: "In Progress",
    applications: "10",
    lastUpdated: "24-09-2023",
  },
];
