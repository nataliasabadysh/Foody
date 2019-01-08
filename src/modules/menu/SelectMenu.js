import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 0, label: 'soup' },
  { value: 2, label: 'dessert' },
  { value: 3, label: 'salad' },
  { value: 4, label: 'main course' },
];

export default class SelectMenu extends Component {
  state = {
    selectedOption: null,
  };

  changeOption = option => {
    this.setState({
      selectedOption: option,
    });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div>
         <Select
          isMulti
          isClearable
          isSearchable
          options={options}
          value={selectedOption}
          onChange={this.changeOption}
          placeholder="Search or Select category.."
        />
      </div>
    );
  }
}


/*
show list of ingr
 {selectedOption && <h2> Select ingredients:{selectedOption.value}</h2>}
*/