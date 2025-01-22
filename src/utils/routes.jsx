import { routeConfig } from './routeConfig.jsx';

export const cssRoutes = routeConfig.css.routes.map((route) => ({
   path: route.path,
   element: route.element,
}));

export const javascriptRoutes = routeConfig.javascript.routes.map((route) => ({
   path: route.path,
   element: route.element,
}));
