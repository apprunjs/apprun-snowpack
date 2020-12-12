import app from 'apprun';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Layout from './Layout';

app.render(document.body, <Layout />);

const element = 'my-app';

new Home().start(element);
About(element, { route: '#About' });
Contact(element, { route: '#Contact' });