import './style.scss?raw';
import './layout';
import Main from './layout';
import Loader from './assets';
import sleep from './utils/sleep';

declare global {
  interface Window {
    PageLoadStartTime: number;
  }
}

const timeExpired = Date.now() - window.PageLoadStartTime;
const timeRest = Math.max(4200 - timeExpired, 0);

Promise.all([
  Loader.loadResource(),
  sleep(timeRest)
]).then(() => {
  const loading = document.querySelector('.loading')! as HTMLElement;
  loading.className += ' leave';
  Main();
  setTimeout(() => {
    loading.style.display = 'none';
  }, 400);
})
