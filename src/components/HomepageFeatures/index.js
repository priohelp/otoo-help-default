import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '프리오',
    url: 'http://prio.co.kr/',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    imgsrc: require('@site/static/img/logo/prio.png').default,
    description: (
      <>
        프리오 홈페이지
      </>
    ),
  },
  {
    title: 'OTOO Solution',
    url: 'http://www.otoosolution.com/',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    imgsrc: require('@site/static/img/logo/otoo.png').default,
    description: (
      <>
        오투 홈페이지
      </>
    ),
  },
  {
    title: '일나와',
    url: 'http://www.ilnawa.co.kr/',    
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    imgsrc: require('@site/static/img/logo/ilnawa.png').default,
    description: (
      <>
        일나와 홈페이지
      </>
    ),
  },
];

function Feature({Svg, imgsrc, url, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={url}
           target="_blank"
           rel="noopener noreferrer">
          {/* <Svg className={styles.featureSvg} role="img" /> */}
          <img className={styles.featureImg} src={imgsrc}/>
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
