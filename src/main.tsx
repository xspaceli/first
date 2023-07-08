import ReactDOM from 'react-dom/client';
import './index.css';
import IndexRounter from './router/IndexRouter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    {' '}
    <IndexRounter></IndexRounter>
  </div>
);
