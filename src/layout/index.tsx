import React, { memo, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Store from 'react-hookie-store';
import Navbar from '../component/Navbar';
import Content from '../component/Content';
import useNav from '../store/use-nav';
import Projects from './Projects';
import Profile from './Profile';
import About from './About';

const Pages = [
  Profile,
  Projects,
  About
]

const PageList = memo(() => {
  const { nav } = useNav();
  return (
    <Fragment>
      {
        nav.map((item, index) =>
          <Content index={index} name={item.title} key={item.title}>
            {
              (() => {
                const Page = Pages[index];
                return Page ? <Page /> : null;
              })()
            }
          </Content>
        )
      }
    </Fragment>
  )
});

function Main() {
  ReactDOM.render(
    <Store>
      <Navbar />
      <PageList />
    </Store>,
    document.getElementById('app')
  );
}

declare global {
  interface Window {
    PageLoadStartTime: number;
  }
}

const timeExpired = Date.now() - window.PageLoadStartTime;
const timeRest = Math.max(5000 - timeExpired, 0);

// Wait for Transition End
// setTimeout(() => {
//   const loading = document.querySelector('.loading')! as HTMLElement;
//   loading.className += ' leave';
//   setTimeout(() => {
//     loading.style.display = 'none';
//     Main();
//   }, 400);
// }, timeRest);
Main();
