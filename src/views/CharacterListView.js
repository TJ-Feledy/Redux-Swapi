import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetch } from '../actions/index'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetch()
  }

  render() {
    if (this.props.fetching) {
      return (
        <p>Characters are loading...</p>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    fetching: state.fetching,
  }
}

const mapDispatchToProps = {
  fetch: fetch,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListView);
