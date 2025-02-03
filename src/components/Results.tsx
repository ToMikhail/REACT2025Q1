import React from 'react';

interface Response {
  count: number;
  next: string;
  previous: null;
  results: User[];
}
interface User {
  name: string;
  url: string;
}

interface State {
  users: User[];
  loading: boolean;
  error: string | null;
}

class Results extends React.Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data: Response) => {
        console.log(data);
        this.setState({ users: data.results, loading: false });
      })

      .catch((error) =>
        this.setState({ error: error.message, loading: false })
      );
  }

  render() {
    const { users, loading, error } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.name}>
              {user.name} - {user.url}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Results;
