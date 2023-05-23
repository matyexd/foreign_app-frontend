import { GridDots } from "tabler-icons-react";

import { AppPath } from "./routes-enums";

export const getNavigation = () => ({
  main: [
    {
      href: AppPath.communityCourses,
      title: "Курсы сообщества",
      icon: <GridDots size={24} />,
    },

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
  admin: [],
});
