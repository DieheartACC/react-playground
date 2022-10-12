import React, {useState} from "react";
export default class GroceryListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            bold: false
        }
    }
    render() {
        return <li
            style={{fontWeight: this.state.bold ? 'bold' : 'normal'}}
            onMouseEnter={() => {
                this.setState({ bold: true })
            }}
            onMouseLeave={() => {
                this.setState({ bold: false })
            }}
        >{this.props.name}</li>
    }
}
// export default function GroceryListItem({ name }) {
//     //     constructor(props, context) {
//     //         super(props, context);
//     //         this.state = {
//     //             bold: false,
//     //             numbers: [1,2,3,4]
//     //         }
//     //     }
//
//     const [bold, setBold] = useState(false);
//     // const [numbers, setNumbers] = useState([1,2,3,4]);
//     // const [moreState, setMoreState] = useState({
//     //     key1: 'one',
//     //     key2: 'two',
//     //     key3: 'three'
//     // })
//
//         return (
//             <li
//                 style={{fontWeight: bold ? 'bold' : 'normal'}}
//                 onMouseEnter={() => {setBold(true);}}
//                 onMouseLeave={() => {setBold(false)
//                     // this.setState({ bold: false })
//                 }}
//             >{name}</li>
//         )
//
// }