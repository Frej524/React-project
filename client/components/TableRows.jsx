// this is simple example of how to render table rows in a table,
//  hovever it is vulnerable to changes in the data
//  as it has to be changed here manually as well, see TableHeader.jsx
//   for a more resuable and generic example

import React from 'react';
import Modal from './MoreInfo.jsx';
export default class TableRows extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
    }
    render() {
        const user = this.props.user;
        const name = user.name ?
                user.name :
                <span>
                    {user.name}
                </span>;
        return (
                // if it is preffered every <td> could be made clickable by parsing user.id as parameter in each onClick function //
                <tr>
                    <td onClick={() => this.props.openModal(user.id)}>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.company.name}</td>
                    </tr>


                );
    }
}