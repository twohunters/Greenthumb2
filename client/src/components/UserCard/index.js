import React from "react";
import "./style.css";
import API from "../../utils/API";
import { Card } from "react-bulma-components";
import { Content } from "react-bulma-components";

const { Header, Title, Content } = Card;

const UserCard = props => {
    const history = useHistory()
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])
    function getUsers() {
        API.getAllUsers()
            .then(res => {
                console.log(res); setUsers(res.data)
            })
            .catch(err => console.log(err))

    }
    return (
        <div className="container">
            {users.length ? (
                <Content>
                    {users.map(user => (
                        <div className="card">
                            <Card.Header>
                                <Card.Header.Title onClick={()=> history.push("" + id)}>
                                    <span class="material-icons">person</span> {user.firstName} {user.lastName}
                                </Card.Header.Title>
                            </Card.Header>
                            <Card.Content>
                                {user.Garden_id}
                            </Card.Content>
                        </div>
                    ))}
                </Content>
            ) : (<h3>No results to display</h3>)}
        </div>
    )
}

export default UserCard;

// SLIDE 11