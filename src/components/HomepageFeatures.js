import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '✨ Based on Laravel',
    description: (
      <>
        Quasar is built on top of Laravel and the powerful Eloquent ORM.
      </>
    ),
  },
  {
    title: '🎯 Focus on productivity',
    description: (
      <>
        Implementing your first projection is a matter of minutes.
      </>
    ),
  },
  {
    title: '📊 Statistics the easy way',
    description: (
      <>
        Quasar provides you with all the tools you need to build your statistics API quickly.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <h3 className="feature--title">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
  return (
    <section className={clsx(styles.features, 'features')}>
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
