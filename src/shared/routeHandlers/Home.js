import React from 'react';
import Hero from '../components/Hero';
import PageSection from '../components/PageSection';

export default class Home extends React.Component {
  render() {
    let section1 = "Digital marketing is the right strategy for building efficiencies + generating long-term business growth. Digital is about efficiency + agility, thus our approach to overall digital marketing is equally as efficient & agile";

    return (
      <div className="home">
        <Hero />
        <PageSection className="home1" content={section1}/>
      </div>
    );
  }
}
