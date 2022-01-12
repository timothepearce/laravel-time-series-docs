import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import IdeSvg from '../../static/img/ide.svg';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--5">
            <h1 className="hero__title">Build your time series with ease</h1>
            <p className="hero__subtitle">Laravel Quasar lets you build data projections on top of Eloquent models</p>
            <div className={clsx('hero__buttons', styles.buttons)}>
              <Link
                className="button button--secondary button--lg"
                to="/quickstart">
                Quickstart
              </Link>
            </div>
          </div>

          <div className="col col--5 col--offset-2 hero__ide">
            <pre className="hero__code">
              <code>
                <span className="hero__code-green">composer</span> require timothepearce/quasar<br />
                <span className="hero__code-green">php</span> artisan make:projection ComprehensionRate
              </code>
            </pre>
            <IdeSvg></IdeSvg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Laravel Quasar helps you build time series with ease.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
