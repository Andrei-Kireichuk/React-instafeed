import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';

import Accordion from './Accordion';
import { accordionData } from './utils/content';

import Face from './Img/face.png'
import Gradient from './Img/Gradient.png'
import Header from './Header/header';
import Line from './Img/line.svg'
import Photo from './Img/photo.png'
import Scenepic1 from './Mein/Scenepic1/Scenepic1';
import Scenepic2 from './Mein/Scenepic2/Scenepic2';
import Scenepic3 from './Mein/Scenepic3/Scenepic3';



function App() {
  return (
    
    <div className="App">
      <div className='appWrapper'>
        <img className="titleImg" src={Face} alt=''/>
        <img className='titleGradient' src={Gradient} alt=''/>
      <Header />
        <div className='titleWrapper'>
          <div className='regularText'>Мы - сервис, который</div>
          <h1 className='titleText'>Спасет тебе жизнь</h1>
          <div className='regularText'>Мы делаем классные вещи, отдай нам свои деньги.</div>
          <button className='tryButton'>Попробовать бесплатно</button>
      </div>
      <div className='tieWrapper'>
     
      <img src={Line} className='titleLine' alt=''/>
      <div className='priceWrapper'>
          <div className='priceHead'>Стоимость сервиса</div>
          <div className='priceBold'>0.5  ₽ за подписчика</div>
          <div className='priceReg'>Платите всего 0.50 ₽ за успешную проверку
    (за подписчика)</div>
    <ul></ul>
          <li className='priceBold'> Создание подписных страниц без ограничений</li>
          <li className='priceBold'> Количество аккаунтов Instagram без ограничений</li>
          </div>
      </div>
      <div className='profitWrapper'>
        <div className='profitGrid'>
          <div className='titleGrid'>В чем смысл</div>
          <img src={Photo} className='photoGrid' alt=''/>
            <div className="sensOne">
            <div className="dispFlex"><div className="dash"></div><div>У вас есть</div></div>
            <ul>
              <div className="sensList">
                <div className="sensColumn">
                <li>Чек лист</li>
                <li>Гайд</li>
                <li>Инструкция</li>
                </div>
                <div className="sensColumn">
                <li>Лид магнит</li>
                <li>Трипваер</li>
                </div>
              </div>
              </ul>
          </div>
          <div className="sensTwo">
            <div><div className="dispFlex"><div className="dash"></div><div>Вы делаете рекламу</div></div></div>
            <div className="sensText">Своих материалов у себя в Instagram, Facebook
или у блогеров.</div>
          </div>
          <div className="sensThree"> <div className="dispFlex"><div className="dash"></div><div>Но подписчики не увеличиваются</div></div>
          <div className="sensText">Они забирают ваши материалы,
            но к вам в подписчики Instagram не добавляются.
            Вы никак не можете заставить их подписаться на вас.</div>
          </div>
          <div className="sensFour">
            <div className="dispFlex"><div className="dash"></div><div>Лучший прогрев аудитории</div></div>
            <div className="sensText">Происходит через социальные сети.
Аудитория становится лояльна к более крупным покупкам.</div>
          </div>
          <div className="sensFive"><div className="dispFlex"><div className="dash"></div><div>INSTA feed поможет</div></div>
          <div className="sensText">С помощью сервиса вы создадите
подписную страницу, которая может выдавать контент,
за подписку на вас в Instagram</div>
          </div>
          <div className="sensSix"><div className="dispFlex"><div className="dash"></div><div>Получайте подписчиков</div></div>
          <div className="sensText">Сервис подскажет с какой рекламы
и от какого блогера пришли подписчики.
Оптимизируйте рекламу и получайте больше клиентов.</div>
          </div>
        </div>
      </div>
      <div className="sceneWrapper">
        <div className="sceneTitle">Сценарии использования</div>
        <div className="sceneGrid">
          <div className="sceneBlock1">
            <div className="sceneSubtitle">Блогеры</div>
            <div className="sceneText">Делая взаимопиар или покупая рекламу у блогера, вы не знаете точное число подписчиков пришедших к вам в аккаунт.</div>
            <div className="sceneText sceneTextRight">Многие блогеры присылают статистику переходов на ваш аккаунт, но она бывает накручена. А так же она не показывает число подписавшихся на вас.</div>
            <div className="sceneText">INSTAfeed страница покажет точное количество просмотров подписной страницы и число подписавшихся на вас.</div>
          </div>
          <Scenepic1/>
          <Scenepic2/>
          <div className="sceneBlock2">
            <div className="sceneSubtitle">Онлайн школа</div>
            <div className="sceneText">Большинство онлайн школ делают рекламу в Instagram, рекламируя свой лид - магнит/трипваер.</div>
            <div className="sceneText sceneTextRight">Трафик направляется на сайт или в мессенджеры.</div>
            <div className="sceneText">С данной базой можно работать делая ретаргет и попродовать. Или делать рассылку в мессенджерах.</div>
            <div className="sceneText sceneTextRight">Но аудитория все еще холодная и не знает вас. А значит конверсия в покупку низкая.</div>
            <div className="sceneText">Сервис INSTAfeed сделает подписчиком в Instagram всех, кому будет интересен ваш лид-магнит/трипваер. После подписки на вас, сервис выдаст доступ к сайту или автоворонке где подписчик сможет забрать полезные материалы.</div>
          </div>
          <div className="sceneBlock3">
            <div className="sceneSubtitle">Эксперты</div>
            <div className="sceneText">У вас есть полезные гайды/чеклисты - вы их выдаете бесплатно или за подписку на вас.</div>
            <div className="sceneText sceneTextRight">Но пора этот процесс автоматизировать.</div>
            <div className="sceneText">INSTAfeed страница автоматически проверит подписался человек на вас или нет, и в случае подписки выдаст ссылку на полезный материал.</div>
          </div>
          <Scenepic3/>
        </div>
      </div>
        <div className="accordeonWrapper">
        <div className="accordionHead">Часто задаваемые вопросы</div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
        </div>
    </div>
  </div>

    
  )
}

export default App;
