import React from 'react'
import Highlighter from 'react-highlight-words'

const RecipeItem = (props) => (
        <div className="col-sm-3 mt-4">
            <div className="card">
                <img className="card-img-top img-fluid" src={props.item.thumbnail} alt="" />
                <div className="card-body">
                    <h5 className="card-title">
                        <Highlighter 
                        highlightClassName={{color:"yellow"}}
                        searchWords={[props.marktext]}
                        autoEscape={true}
                        textToHighlight={props.item.title}
                        />
                    </h5>
                    <p className="card-text">
                        <strong>Ingredients: </strong>
                        <Highlighter 
                        highlightClassName={{color:"yellow"}}
                        searchWords={[props.marktext]}
                        autoEscape={true}
                        textToHighlight={props.item.ingredients}
                        />
                    </p>
                </div>
            </div>
        </div>
)

export default RecipeItem;

