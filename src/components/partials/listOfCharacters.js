import React from 'react';
import { connect } from 'react-redux';

import withLoader from '../hocs/withLoader';
import Character from './character/character';


const ListOfCharacters = props => {
    const CharactersJSX = props.characterList.map( (characterObj, i) =>
        <Character 
            key={characterObj.id} 
            {...characterObj}  
            />
    )
    return (
        <div className="list-of-characters">
            {CharactersJSX}
        </div>
    )
  }
  
  
  const Loaderized = withLoader(ListOfCharacters);
  
  const mapStateToProps = state => {return {characterList: state.characterList}}
  
  export default connect(
  mapStateToProps
  )(Loaderized);