import React from "react";
import GroceryListItem from "./GroceryListItem";
export default class GroceryList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            items: ['Apple', 'Banana', 'Strawberry', "Grapes"],
            newItem: ''
        }
    }
    componentDidMount() {
        setTimeout(() => {
            const items = [...this.state.items];
            items.push('Oranges')
            const newState = {
                items
            }
            this.setState(newState)
        }, 2000)
    }
    addItem() {
        const items = [...this.state.items];
        items.push(this.state.newItem)
        const newState = {
            items,
            newItem: ''
        }
        this.setState(newState);
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => {
                        return <GroceryListItem name={item} key={index} />
                    })}
                </ul>
                <input
                    value={this.state.newItem}
                    type={'text'}
                    onChange={(event) => {
                        this.setState({
                            newItem: event.target.value
                        })
                    }}
                />
                <button onClick={() => this.addItem()}>Add Item</button>
            </div>
    )
    }
}