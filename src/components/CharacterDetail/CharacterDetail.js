import React from 'react';
import { connect } from 'react-redux';

const CharacterDetaill = ( {character}) => {
    if(!character) {
        return <h3>Please select a Character</h3>
    }

    return <div>{character.characterName}</div>
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        character: state.selectedCharacter
    }
}

export default connect(mapStateToProps)(CharacterDetaill);