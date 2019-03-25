import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({ 
      tabs: tabData, 
      cards: cardData
    })
    // Once the component has mounted, get the data and reflect that data on the state.
  }

  changeSelected = tab => {
    this.setState({ selected: tab})
    // this function should take in the tab and update the state with the new tab.
  };

  filterCards = () => {
    if(this.state.selected === 'all') {
        return this.state.cards
    }
      // Your algorithim for the logic here is as follows: 
      //   - if the selected tab is 'all' it should return all 
      //     of the items from cardData. 
      //   - else, it should only return those cards whose 'tab' matched this.state.selected.
   
    return this.state.cards.filter(c => c.tab === this.state.selected);

  };

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} selectTabHandler={this.changeSelected}/>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
