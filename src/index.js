
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import "./css/index.css"
import Footer from "./components/Footer"
ReactDOM.render(
  <>
<BrowserRouter>
<App />
<Footer />
</BrowserRouter>
</>,

  document.getElementById('root')
);
