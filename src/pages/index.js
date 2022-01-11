import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import TerminalSvg from '../../static/img/terminal.svg';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--5">
            <h1 className="hero__title">Build your time series with ease</h1>
            <p className="hero__subtitle">Laravel Quasar allows you to build data projections on top of your Eloquent models</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/quickstart">
                Quickstart
              </Link>
            </div>
          </div>

          <div className="col col--5 col--offset-2">
            <TerminalSvg></TerminalSvg>

              <pre className="hero__code">
                <code>php artisan make:projection ComprehensionRate</code>
              </pre>
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
