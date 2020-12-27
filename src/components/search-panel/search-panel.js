import React, { Component } from 'react';
import './search-panel.css';
import PropTypes from "prop-types";

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onTermChange = (e) => {
    const {onSearchChange = () => {}} = this.props;
    this.setState({
      term: e.target.value
    });

    onSearchChange(e.target.value);
  };

  render() {
    return (
      <input type="search"
             className="form-control search-input"
             placeholder="Введите для поиска..."
             value={this.state.term}
             onChange={ this.onTermChange } />
    );
  };
}

SearchPanel.propTypes = {
    onSearchChange: PropTypes.func
};