import React from 'react';
import styles from './styles';
import MyTime from '../components/MyTime';

class Home extends React.Component {
	state = {
		counter: 0,
	};

	myBtnClick() {
		console.log('log');
	}
	render() {
		let users = [
			{ id: 1, name: 'Sara', field: 'electronic', age: 37 },
			{ id: 2, name: 'Mana', field: 'comronic', age: 47 },
			{ id: 3, name: 'Sam', field: 'Octronic', age: 57 },
			{ id: 4, name: 'Tara', field: 'Arcech', age: 29 },
		];
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
								</tr>
							</thead>
							<tbody>
								{users.map((user) => {
									return (
										<tr>
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
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
				<div style={styles.footer}> hello</div>
			</div>
		);
	}
}

export default Home;
