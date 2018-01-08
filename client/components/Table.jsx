import React from 'react';
import TableRows from './TableRows.jsx';
import TableHeader from './TableHeader.jsx';


export default class UsersTable extends React.Component {
    render() {
        const rows = [];
        const titles = Object.keys(this.props.users[0]);
        this.props.users.forEach((user) => {
            rows.push(
                    <TableRows
                        user={user}
                        key={user.id}
                        openModal={this.props.openModal.bind(this)} 
                        closeModal={this.props.closeModal.bind(this)}/>
                    );
        });

        return (
                <table id="usersTable">
                    <thead>
                        <TableHeader titles={titles}></TableHeader>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
                );
    }
}

