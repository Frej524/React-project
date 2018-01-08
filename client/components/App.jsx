import React from 'react';
import UsersTable from './Table.jsx';
import Modal from './MoreInfo.jsx';
const url = 'http://localhost:3000/api/users';
const urlID = 'http://localhost:3000/api/user/';


// main app   

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            user: {},
            loading: true,
            isModalOpen: false
        }
    }
    // potentially bad practice, might cause render() to trigger twice = performance issues, maybe set state in constructer instead //
    componentDidMount() {
        fetch(url)
                .then((Response) => Response.json()).
                then((findresponse) =>
                {
                    var result = Object.values(findresponse);
                    this.setState({
                        users: result,
                        loading: false
                    });
                    document.body.style.backgroundColor = "white";
                }).catch(function (err) {
            console.log('Fetch Error', err);
        });
    }
    render() {
        var users = this.state.users;
        let content;
        if (this.state.loading) {
            content = <div className="Loader-wrapper">
                <span className="Loader">
                    <div className="Loader-indicator" >
                        <h1>
                            <span>Loading</span>
                            <span className="Loader-ellipsis" >
                                <span className="Loader-ellipsisDot">.</span>
                                <span className="Loader-ellipsisDot">.</span>
                                <span className="Loader-ellipsisDot">.</span>
                            </span>
                        </h1>
                    </div>
                </span>
            </div>;
        } else
            content = <div className="container">
                <h2 className="textAlignC">Coding Challenge, Frej Andreasen</h2>
                <h4 className="textAlignC">
                    Number of users <span className="badge">{this.state.users.length}</span>
                </h4>
                <UsersTable users={users} openModal={this.openModal.bind(this)} closeModal={this.closeModal.bind(this)}></UsersTable>
                <div>
                    <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                        <h1>{this.state.user.name}</h1>
                        <p>Website: {this.state.user.website}</p>
                        <p><button onClick={() => this.closeModal()}>Close</button></p>
                    </Modal>
                </div>
            </div>
        return (
                <div>
                    {content}
                </div>


                );
    }
    openModal(p) {
        console.log(urlID + p, "url");
        fetch(urlID + p)
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    this.setState({
                        user: json,
                        isModalOpen: true
                    })
                });
    }

    closeModal() {
        this.setState({isModalOpen: false})
    }
};




