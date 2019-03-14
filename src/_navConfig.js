import { Login, RenewLogin } from '@zen/identity-lib';
import Home from './pages/Home';
import Identity from './pages/Identity';
import Configuration from './pages/configuration/Configuration';
import CheckAvailability from './pages/availability/CheckAvailability';

export default {
    items: [
      {
        name: 'Pre-Sales Beta',
        path: '/',
        icon: 'home',
        component: Home,
        requiredAction: 'Access',
        requiredResource: 'SysWeb',
        alwaysShow: true,
      },
      {
        name: 'Identity',
        path: '/identity',
        icon: 'box',
        component: Identity,
        requiredAction: 'Access',
        requiredResource: 'SysWeb',
        alwaysShow: true,
      },
      {
        name: 'Configuration',
        path: '/configuration',
        icon: 'share',
        component: Configuration,
        requiredAction: 'Access',
        requiredResource: 'SysWeb',
        alwaysShow: true,
      },
      {
        name: 'CheckAvailability',
        path: '/check-availability',
        icon: 'tree',
        component: CheckAvailability,
        requiredAction: 'Access',
        requiredResource: 'SysWeb',
      },
      {
        name: 'Login',
        path: '/login',
        icon: 'home',
        component: Login,
        hidden: true,
      },
      {
        name: 'Renew Login',
        path: '/renewlogin',
        icon: 'home',
        component: RenewLogin,
        hidden: true,
      },
    ],
  };  