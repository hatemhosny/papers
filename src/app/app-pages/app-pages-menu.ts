import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Journals',
    icon: 'nb-keypad',
    link: '/pages/sample',
  },
  {
    title: 'Playlists',
    icon: 'nb-compose',
    link: '/pages/sample',
  },
  {
    title: 'Bookmarks',
    icon: 'nb-location',
    link: '/pages/sample',
  },
  {
    title: 'Statistics',
    icon: 'nb-bar-chart',
    link: '/pages/sample',
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
    link: '/pages/sample',
  },
  {
    title: 'Admin',
    icon: 'nb-title',
    link: '/pages/sample',
  },
];
