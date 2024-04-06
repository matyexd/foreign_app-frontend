import {
  GridDots,
  Building,
  ShoppingBag,
  Book,
  Users,
  Books,
} from "tabler-icons-react";

import { AppPath } from "./routes-enums";

export const getNavigation = () => ({
  main: [
    {
      href: AppPath.schools,
      title: "Школы",
      icon: <Building size={24} />,
    },
    {
      href: AppPath.education,
      title: "Обучение",
      icon: <Book size={24} />,
    },
    // {
    //   href: AppPath.communityCourses,
    //   title: "Курсы сообщества",
    //   icon: <GridDots size={24} />,
    // },
    // {
    //   href: AppPath.purchasedCourses,
    //   title: "Приобретенные курсы",
    //   icon: <ShoppingBag size={24} />,
    // },
    // {
    //   href: AppPaths.CLIENTS,
    //   title: i18n.t('Layout.Clients'),
    //   icon: <UserCheck size={24} />,
    // },
    // {
    //   href: AppPaths.TELEGRAM,
    //   title: i18n.t('Layout.Telegram'),
    //   icon: <BrandTelegram size={24} />,
    // },
    // {
    //   href: AppPaths.HELP,
    //   title: i18n.t('Layout.Help'),
    //   icon: <Book size={24} />,
    // },
  ],
  teacher: [
    {
      href: AppPath.myCourses,
      title: "Мои курсы",
      icon: <Books size={24} />,
    },
    {
      href: AppPath.myStudents,
      title: "Мои студенты",
      icon: <Users size={24} />,
    },
  ],
});
