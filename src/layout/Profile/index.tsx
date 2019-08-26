import React from 'react';
import style from './style.scss';

interface IProps {
  active: boolean;
}

export default function Profile (props: IProps) {
  return (
    <div className={`${style.profile} ${props.active ? style.active : ''}`}>
      <div className={style.title}>我的工作</div>
      <p>主要负责一些大促类活动和常规运营的互动项目</p>
      <div className={style.title}>心路历程</div>
      <p>和同事成为好伙伴，共同进步才能拧出航空母舰</p>
      <p>和设计成为好伙伴，培养自己的美感，实现天马行空的动效</p>
      <p>和产品成为好伙伴，和他们交流探讨，加深对于产品的思考</p>
      <p>和后端成为好伙伴，语言不同，思想却可以融会贯通</p>
      <p>和自己成为好伙伴，做自己的Leader，做自己的Backup</p>
      <div className={style.title}>同事之声</div>
      <div className={style.subTitle}>以下内容有吹牛之嫌</div>
      <p style={{ color: '#666' }}>“*** 是我们的宝藏，要好好挖掘他”</p>
    </div>
  )
}