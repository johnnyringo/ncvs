import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "donate",
    path: "/donate",
    element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "our story",
    path: "/our-story",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "directors",
    path: "/directors",
    element: <SignUp />,
  },
  {
    icon: DocumentTextIcon,
    name: "missions",
    href: "/missions",
    target: "_blank",
    element: "",
  },
  {
    icon: LinkIcon,
    name: "operations",
    href: "/operations",
    target: "_blank",
    element: "",
  },
  {
    icon: LinkIcon,
    name: "research",
    href: "/research",
    target: "_blank",
    element: "",
  },
  {
    icon: LinkIcon,
    name: "training",
    href: "/training",
    target: "_blank",
    element: "",
  },
  {
    icon: LinkIcon,
    name: "need help?",
    href: "/needHelp",
    target: "_blank",
    element: "",
  },
  {
    icon: LinkIcon,
    name: "contact us",
    href: "/contactUs",
    target: "_blank",
    element: "",
  },
];

export default routes;
