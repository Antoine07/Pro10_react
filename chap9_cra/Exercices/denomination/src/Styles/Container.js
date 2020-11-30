import { Component } from 'react';

import styled from 'styled-components';

// Composant de style
const Wrapper = styled.section`
        padding: 1.5em;
        margin: 0 10%;
        color: palevioletred;
`;
class Container extends Component {

  render() {

    return (
        <Wrapper>
            {this.props.children}
        </Wrapper>
    )
  }

}

export default Container;
