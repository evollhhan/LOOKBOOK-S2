import React, { useEffect } from 'react';
import style from './style.scss';
import Qrcode from 'qrcode';

interface IProps {
  active: boolean;
}

export default function About (props: IProps) {
  useEffect(() => {
    Qrcode.toCanvas(document.getElementById('qrcode'), window.location.href);
  }, []);
  return (
    <div className={`${style.about} ${props.active ? style.active : ''}`}>
      <p>不要停下你的想象力、创造力和动手能力</p>
      <p>希望每个人都能在这片领域里面</p>
      <p>找到属于自己的快乐</p>
      <div className={style.hint}>
        <canvas id="qrcode" />
        <p>扫码访问移动版</p>
      </div>
      <div>
        <div>EMAIL: <a href="mailto:mspathen@outlook.com">mspathen@outlook.com</a></div>
        <div>GITHUB: <a href="https://github.com/evollhhan">https://github.com/evollhhan</a></div>
      </div>
      <p>2019.8 v1.3</p>
      <p className={style.copyright}>Resource Copyright</p>
      <p className={style.copyright}><a href="https://www.freepik.com/free-photos-vectors/design">Design vector created by freepik - www.freepik.com</a></p>
    </div>
  )
}