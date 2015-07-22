/*eslint-env es6 */
import React from 'react';

class PageSection extends React.Component {
 render() {
   return (
     <section className={'page-section -' + this.props.className}>
       {this.props.content}
     </section>
   );
 }
}

module.exports = PageSection;
