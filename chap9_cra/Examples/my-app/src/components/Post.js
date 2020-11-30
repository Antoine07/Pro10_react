import { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Post extends Component{

  render(){

    console.log(this.props);

    // syntaxe de destructuration avancée pour récupérer une valeur dans un objet complexe ...
    // const { match : { params : { id } } } = this.props;

    const { params } = this.props.match;

    console.log(params);

    if(params.id == 4)
      return(
        <Redirect 
            to="/login"
        />
      )

    return(
      <p>Je suis un post ... Affichez id : {params.id} de la news </p>
    )
  }
}

export default Post;