import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export class Routes {
  public static readonly Home: string = 'home';
  public static readonly FoundationColor: string = 'foundation-color';
  public static readonly FoundationDesignTokens: string = 'foundation-design-tokens';
  public static readonly FoundationGrid: string = 'foundation-grid';
  public static readonly FoundationIcons: string = 'foundation-icons';
  public static readonly FoundationObjectStyles: string = 'foundation-object-styles';
  public static readonly FoundationPlatformScale: string = 'foundation-platform-scale';
  public static readonly FoundationResetStylesheet: string = 'foundation-reset-stylesheet';
  public static readonly FoundationTypography: string = 'foundation-typography';
  public static readonly ComponentsButtons: string = 'components-buttons';
}

const routes = [
  {
    path: '/',
    name: Routes.Home,
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/foundation/color',
    name: Routes.FoundationColor,
    component: () => import('@/views/foundation/Color.vue'),
  },
  {
    path: '/foundation/design-tokens',
    name: Routes.FoundationDesignTokens,
    component: () => import('@/views/foundation/DesignTokens.vue'),
  },
  {
    path: '/foundation/grid',
    name: Routes.FoundationGrid,
    component: () => import('@/views/foundation/Grid.vue'),
  },
  {
    path: '/foundation/icons',
    name: Routes.FoundationIcons,
    component: () => import('@/views/foundation/Icons.vue'),
  },
  {
    path: '/foundation/object-styles',
    name: Routes.FoundationObjectStyles,
    component: () => import('@/views/foundation/ObjectStyles.vue'),
  },
  {
    path: '/foundation/platform-scale',
    name: Routes.FoundationPlatformScale,
    component: () => import('@/views/foundation/Scale.vue'),
  },
  {
    path: '/foundation/reset-stylesheet',
    name: Routes.FoundationResetStylesheet,
    component: () => import('@/views/foundation/Reset.vue'),
  },
  {
    path: '/foundation/typography',
    name: Routes.FoundationTypography,
    component: () => import('@/views/foundation/Typography.vue'),
  },
  {
    path: '/components/buttons',
    name: Routes.ComponentsButtons,
    component: () => import('@/views/components/Buttons.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
});

export default router;
