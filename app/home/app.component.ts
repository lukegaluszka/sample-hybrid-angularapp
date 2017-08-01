import { homeModule } from './home.module';

/**
 * The controller for the `app` component.
 */
class appCtrl {
  //data
  data: string;
  constructor() {
    this.data = 'Navigate between components'
  }
}

/**
 * This is the main app component for an authenticated user.
 * 
 * This component renders the outermost chrome (application header and tabs, the compose  and logout button)
 * It has a `ui-view` viewport for nested states to fill in.
 */

const appComponent = {
  controller: appCtrl,
  template: `
    {{::$ctrl.data}}
    
    <ul>
        <li ui-sref-active="active"> <a ui-sref="home" role="button"> Home </a> </li>
        <li ui-sref-active="active"> <a ui-sref="welcome" role="button"> Welcome </a> </li>
    </ul>
    
    <div ui-view/>
`
};

homeModule.component('app', appComponent);
