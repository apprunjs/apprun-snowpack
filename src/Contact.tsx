import app from 'apprun';

const state = 'Contact';

const view = state => <div $onclick={[add, 1]}>
  <h1>{state}</h1>
</div>;

const add = (state, del) => state + del;

const update = { add };

export default (element, options) => {
  app.start(element, state, view, update, options);
};