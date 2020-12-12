import { app, View } from 'apprun';
import { State } from './about.state';

const view: View<State> = state => <h1>
  {state}
</h1>;

export default (element, options) => {
  const state = 'About';
  app.start<State>(element, state, view, {}, options);
};
