// var Milk = () => (
//     <li>Milk</li>
// );

// var Bread = () => (
//     <li>Bread</li>
// );

// var GroceryList = () => (
//     <ul>
//         <Milk />
//         <Bread />
//     </ul>
// );


///////////////////////////////////////////////


// var GroceryList = (props) => {
  
//   var onListItemClick = (event) => {
//       alert('I got clicked');
//   }
  
//   return (
//     <ul>
//         <li onClick={onListItemClick}>{props.groceryItems[0]}</li>
//         <li>{props.groceryItems[1]}</li>
//         <li>{props.groceryItems[2]}</li>
//     </ul>
//   );
// }

// ReactDOM.render(<GroceryList groceryItems={['Milk', 'Bread', 'Eggs']}/>, document.getElementById("app"));


////////////////////////////////////


class GroceryListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            done: false
        };
    }

    onListItemClick() {
        this.setState({
            done: !this.state.done
        });
    }

    render() {
        var style = {
            //textDecoration: this.state.done ? 'line-through' : 'none'
            fontWeight: this.state.done ? 'bold' : 'normal'
        };

        return (
            <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.groceryItem}</li>
        );
    }
}

var GroceryList = (props) => (
    <ul>
        {props.groceryItems.map(groceryItem =>
            <GroceryListItem groceryItem={groceryItem}/>
        )}
    </ul>
);

ReactDOM.render(<GroceryList groceryItems={['Milk', 'Bread', 'Eggs']}/>, document.getElementById("app"));