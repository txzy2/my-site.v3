/*
TODO:
1)Сделать более маленький переключаетль
2)Сделать Loader
3)Почистить пути
4)Перенести фото в public


*/

import React, {useEffect, useState} from 'react';

import {ReactComponent as Logo} from './assets/logo2.svg';

import '@/assets/styles/styles.scss';
import {motion} from 'framer-motion';
import {images} from './assets';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

const FooterLink = ({
  href,
  imgSrc,
  altText,
}: {
  href: string;
  imgSrc: string;
  altText: string;
}) => (
  <motion.div
    whileHover={{scale: 1.1}}
    transition={{type: 'spring', stiffness: 400, damping: 10}}
  >
    <a href={href}>
      <img src={imgSrc} alt={altText} />
    </a>
  </motion.div>
);

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  useEffect(() => {
    document.body.classList.toggle('light', isOn);
    document.body.classList.toggle('dark', !isOn);

    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.classList.toggle('text-dark', isOn);
      link.classList.toggle('text-light', !isOn);
    });

    const svg = document.getElementById('logo');
    if (svg) {
      svg.classList.toggle('light', isOn);
      svg.classList.toggle('dark', !isOn);
    }
  }, [isOn]);

  return (
    <div className=''>
      <motion.div
        whileHover={{scale: 1.1}}
        transition={{type: 'spring', stiffness: 400, damping: 10}}
        className={isOn ? 'switch' : 'switch-dark'}
        data-ison={isOn}
        onClick={toggleSwitch}
      >
        <motion.div className='handle' layout transition={spring}>
          {isOn ? '🌒' : '☀️'}
        </motion.div>
      </motion.div>

      <div className='App'>
        <Logo className={`App--logo ${isOn ? 'logo-dark' : 'logo-light'}`} />

        <div className={'App__stack'}>
          <div className={`App__stack--title ${isOn ? 'dark' : 'light'}`}>
            Stack
          </div>

          <div className={'App__stack--inf'}>
            <div>React</div>
            <div>Angular</div>
            <div>Vue</div>
          </div>
        </div>

        <div className='App__about' style={{display: 'flex'}}>
          <div className={`App__about--text ${isOn ? 'about--dark' : ''}`}>
            Hi! My name is{' '}
            <a className={'link-light'} href='https://t.me/kamaeff2'>
              Anton.
            </a>{' '}
            <span>
              I am an aspiring frontend developer. I'm just starting out I'm
              just starting my way, during my studies I managed to to realize
              few, but very interesting projects (
              <a
                className={'link-light'}
                href='https://github.com/kamaeff?tab=repositories'
              >
                GitHub
              </a>
              ).
            </span>
            <br />
            <br />I am actively learning Python and JavaScript. For practice, I
            develop telegram bots to understand how to work with the backend.
          </div>
        </div>

        <div className={`App--links ${isOn ? 'dark' : ''}`}>
          <FooterLink
            href='https://github.com/kamaeff?tab=repositories'
            imgSrc={images.Git}
            altText='git'
          />
          <FooterLink
            href='https://t.me/kamaeff2'
            imgSrc={images.Tg}
            altText='tg'
          />
          <FooterLink href='#' imgSrc={images.Fl} altText='fl' />
          <FooterLink href='#' imgSrc={images.VK} altText='vk' />
        </div>
      </div>
    </div>
  );
}

export default App;
