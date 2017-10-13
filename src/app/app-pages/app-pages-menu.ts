import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/dashboard',
    home: true,
  },
  {
    title: 'Journals',
    icon: 'nb-keypad',
    link: '/sample',
  },
  {
    title: 'Playlists',
    icon: 'nb-compose',
    link: '/sample',
  },
  {
    title: 'Bookmarks',
    icon: 'nb-location',
    link: '/sample',
  },
  {
    title: 'Statistics',
    icon: 'nb-bar-chart',
    link: '/sample',
  },
  {
    title: 'Profile',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'Settings',
    icon: 'nb-gear',
    link: '/sample',
  },
  {
    title: 'Admin',
    icon: 'nb-title',
    link: '/sample',
  },
];
