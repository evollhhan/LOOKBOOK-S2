import React from 'react';
import style from './style.scss';

export default function About () {
  return (
    <div className={style.about}>
      <p>前端</p>
      <p>就像是一支笔</p>
      <p>你可以用它来创造艺术</p>
      <p>也可用来绘制庞大工程的蓝图</p>
      <p>当然你拿笔的姿势很重要</p>
      <p>更重要的是</p>
      <p>永远不要停下你的想象力、创造力和动手能力</p>
      <p>希望每个人</p>
      <p>都能在这片领域里面</p>
      <p>找到属于自己的快乐</p>
      <p style={{ marginTop: '10vh' }}>2019.8</p>
      <p className={style.copyright}>Resource Copyright</p>
      <p className={style.copyright}><a style={{ color: '#999' }} href="https://www.freepik.com/free-photos-vectors/design">Design vector created by freepik - www.freepik.com</a></p>
    </div>
  )
}