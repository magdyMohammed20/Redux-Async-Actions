import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../Redux/ActionCreator'

function UserContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()

    }, [])

    return userData.loading ?
        (<h1>Data Is Loading...</h1>) :
        userData.error ?
            (<h1>{userData.error}</h1>) :
            (
                <div>
                    <h1>User List</h1>
                    <div>
                        {
                            userData &&
                            userData.users &&
                            userData.users.map(user => {
                                return <h1 key={Math.random()}>{user.name}</h1>
                            })
                        }
                    </div>
                </div>
            )
}


const mapStateToProps = state => {
    return {
        userData: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)