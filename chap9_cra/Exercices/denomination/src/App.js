import { Component } from 'react';

import Denomination from './components/Denomination';
import Container from './Styles/Container';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const denominations = [1, 5, 10, 20, 50, 100, 200].reverse();

    return (
      <Container>
        <Denomination
          denominations={denominations}
        />
      </Container>

    )
  }

}

export default App;
