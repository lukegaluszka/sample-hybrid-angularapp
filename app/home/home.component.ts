import { homeModule } from './home.module';

// This is a home component for authenticated users.
const homeComponent = {
  template: `
    <div class="home buttons">
        <h1> Home component test </h1>
    </div>
`};

homeModule.component('home', homeComponent);
