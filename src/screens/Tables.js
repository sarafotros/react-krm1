import React from 'react';
import styles from './styles';
import MyTime from '../components/MyTime';

class Home extends React.Component {
	state = {
        counter: 0,
        users: [],
	};

	myBtnClick() {
		console.log('log');
    }
    
    getUsers = () => {
        this.setState({
					users: [
						{ id: 1, name: 'Sara', field: 'electronic', age: 37 },
						{ id: 2, name: 'Mana', field: 'comronic', age: 24 },
						{ id: 3, name: 'Sam', field: 'Octronic', age: 26 },
						{ id: 4, name: 'Tara', field: 'Arcech', age: 22 },
						{ id: 5, name: 'Arad', field: 'Tech', age: 72 },
					],
				});
    }

    delete = (id) => {
        this.setState(state => ({
            users: state.users.filter((user) => {
              return (user.id !== id)
            })
        }))
        
    }

	render() {
        
        const userList = this.state.users.map((user) => {
        return (
            <tr
                key={user.id}
                style={
                    user.age > 25
                        ? { backgroundColor: '#81C784', color: '#fff' }
                        : { backgroundColor: '#f44336', color: '#fff' }
                }
            >
                <td
                    style={{
                        width: 80,
                        padding: 10,
                        border: '1px solid #e1e1e1',
                        textAlign: 'center',
                    }}
                >
                    {user.id}
                </td>
                <td
                    style={{
                        width: 80,
                        padding: 10,
                        border: '1px solid #e1e1e1',
                        textAlign: 'center',
                    }}
                >
                    {user.name}
                </td>
                <td
                    style={{
                        width: 80,
                        padding: 10,
                        border: '1px solid #e1e1e1',
                        textAlign: 'center',
                    }}
                >
                    {user.field}
                </td>
                <td
                    style={{
                        width: 80,
                        padding: 10,
                        border: '1px solid #e1e1e1',
                        textAlign: 'center',
                    }}
                >
                    {user.age}
                </td>
                <td
                    style={{
                        width: 80,
                        padding: 10,
                        border: '1px solid #e1e1e1',
                        textAlign: 'center',
                    }}
                >
                    <button
                        style={{ borderBottom: '2px solid grey', padding: 5 }}
                        onClick={() => {
                            this.delete(user.id);
                        }}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
        })
		return (
			<div style={styles.body}>
				<div style={styles.header}>
					<div style={styles.right}>
						<p> React Developer</p>
					</div>
					<div style={styles.center}></div>
					<div style={styles.left}>
						<MyTime />
					</div>
				</div>
				<div style={styles.main}>
					<div style={styles.tablediv}>
						<table style={{ color: '#000', border: '2px grey solid' }}>
							<thead>
								<tr>
									<th
										style={{
											width: 80,
											padding: 10,
											border: '1px solid #e1e1e1',
										}}
									>
										#
									</th>
									<th
										style={{
											width: 80,
											padding: 10,
											border: '1px solid #e1e1e1',
										}}
									>
										Name
									</th>
									<th
										style={{
											width: 80,
											padding: 10,
											border: '1px solid #e1e1e1',
										}}
									>
										field
									</th>
									<th
										style={{
											width: 80,
											padding: 10,
											border: '1px solid #e1e1e1',
										}}
									>
										age
									</th>
									<th
										style={{
											width: 80,
											padding: 10,
											border: '1px solid #e1e1e1',
										}}
									>
										
									</th>
								</tr>
							</thead>
							<tbody>
								{userList}
							</tbody>
						</table>
						<button onClick={this.getUsers} style={{ borderBottom:'2px solid grey', padding: 5}}>Get info</button>
					</div>
				</div>
				<div style={styles.footer}> hello</div>
			</div>
		);
	}
}

export default Home;
