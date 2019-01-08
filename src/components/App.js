// Core
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';


// Components
import AppHeader from './AppHeader/AppHeader';
import Footer from '../pages/Footer';
// Helpers
import routes from '../configs/routes';
import Loader from './Loader';

const AsyncMenuPage = lazy(
  () => import('../pages/Menu') /* webpackChunkName: "menu-page" */,
);
const AsyncMenuItemPage = lazy(
  () => import('../pages/MenuItem') /* webpackChunkName: "menuitem-page" */,
);
const AsyncAboutPage = lazy(
  () => import('../pages/About') /* webpackChunkName: "about-page" */,
);
const AsyncContactPage = lazy(
  () => import('../pages/Contact') /* webpackChunkName: "contact-page" */,
);
const AsyncDeliveryPage = lazy(
  () => import('../pages/Delivery') /* webpackChunkName: "delivery-page" */,
);
const AsyncAccountPage = lazy(
  () => import('../pages/Account') /* webpackChunkName: "account-page" */,
);
const AsyncOrderHistoryPage = lazy(
  () =>
    import('../pages/OrderHistory') /* webpackChunkName: "orderhistory-page" */,
);
const AsyncMealPlannerPage = lazy(
  () => import('../pages/Planner') /* webpackChunkName: "planner-page" */,
);

const AsyncHomePage = lazy(
  () => import('../pages/HomePage') /* webpackChunkName: "home-page" */,
);

const AsyncAuthPage = lazy(
  () => import('../components/Authentication/index') /* webpackChunkName: "auth-page" */,
);

// AUTH AsyncAuthPage
const App = () => (
  <div>
    <AppHeader />
    <Switch>
      <Suspense fallback={Loader}>
        <Route exact path={routes.HOME} component={AsyncHomePage} />
        <Route exact path={routes.MENU} component={AsyncMenuPage} />
        <Route path={routes.MENU_ITEM} component={AsyncMenuItemPage} />
        <Route path={routes.ABOUT} component={AsyncAboutPage} />
        <Route path={routes.CONTACT} component={AsyncContactPage} />
        <Route path={routes.DELIVERY} component={AsyncDeliveryPage} />
        <Route path={routes.ACCOUNT} component={AsyncAccountPage} />
        <Route path={routes.ORDER_HISTORY} component={AsyncOrderHistoryPage} />
        <Route path={routes.PLANNER} component={AsyncMealPlannerPage} />
        <Route path={routes.AUTH} component={AsyncAuthPage} />
      </Suspense>
    </Switch>
    <Footer />
  </div>
);

export default App;
