import React, { memo, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Store from 'react-hookie-store';
import Navbar from '../component/Navbar';
import Content from '../component/Content';
import useNav from '../store/use-nav';
import Projects from './Projects';
import Profile from './Profile';
import About from './About';
import Framework from '../component/Framework';

const Pages = [
  Profile,
  Projects,
  About
]

const PageList = memo(() => {
  const { nav, selectedNav } = useNav();
  return (
    <Fragment>
      {
        nav.map((item, index) =>
          <Content index={index} name={item.title} key={item.title}>
            {
              (() => {
                const Page = Pages[index] as any;
                return Page ? <Page active={item.title === selectedNav} /> : null;
              })()
            }
          </Content>
        )
      }
    </Fragment>
  )
});

export default function Main() {
  ReactDOM.render(
    <Store>
      <Navbar />
      <Framework>
        <PageList />
      </Framework>
    </Store>,
    document.getElementById('app')
  );
}
