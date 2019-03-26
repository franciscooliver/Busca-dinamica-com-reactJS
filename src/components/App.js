import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'



class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.recipes = recipes.results;
    this.state = {
      searchString: ''
    }
  }

  handleChange = (e, {value}) => {
    this.setState({searchString:value})
    console.log(this.state.searchString)
  }

  render() { 
    let cont = 0;
    return (
      <div className="App">
        <Navbar handleChange={this.handleChange} />
        <div className="container mt-10">
          <div className="row">
            {
              this.recipes.map((item,i) =>
              {
                if( 
                  item.title.indexOf(this.state.searchString) !== -1 
                  || item.ingredients.indexOf(this.state.searchString) !== -1
                  ){
                  return(
                    <RecipeItem 
                    key={i}
                    item={item}
                    marktext={this.state.searchString}
                    />)
                }else{
                  cont++;

                  if(cont === this.recipes.length){
                    return <div className="text-center w-100">
                        <h3>No results to show</h3>
                    </div>
                  }
                }
              }
            )
            
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
