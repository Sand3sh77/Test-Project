import dashboard from "../assets/svg/dashboard.svg";
import officeCheckIn from "../assets/svg/office-check-in.svg";
import enquiries from "../assets/svg/enquiries.svg";
import clients from "../assets/svg/clients.svg";
import services from "../assets/svg/services.svg";
import quotation from "../assets/svg/quotation.svg";
import tasks from "../assets/svg/tasks.svg";

export interface NavigationButton {
  id: number;
  name: string;
  icon: string;
  selected: boolean;
}

const navigationButtons: NavigationButton[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: dashboard,
    selected: true,
  },
  {
    id: 2,
    name: "Office Check-in",
    icon: officeCheckIn,
    selected: false,
  },
  {
    id: 3,
    name: "Enquiries",
    icon: enquiries,
    selected: false,
  },
  {
    id: 4,
    name: "Clients",
    icon: clients,
    selected: false,
  },
  {
    id: 5,
    name: "Services",
    icon: services,
    selected: false,
  },
  {
    id: 6,
    name: "Quotation",
    icon: quotation,
    selected: false,
  },
  {
    id: 7,
    name: "Tasks",
    icon: tasks,
    selected: false,
  },
];

export default navigationButtons;
