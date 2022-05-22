import { sum } from './modules/sum';

import './style.scss';

const root = document.querySelector('#root');
root.textContent = sum(6, -1).toString();

