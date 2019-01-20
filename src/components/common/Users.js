import React from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItem'
import { Users } from './../../styled'

const UserList = ({ list, ...props }) =>
  <Users.List
    className="users"
    {...props}>
    {
      list.map((user, index) =>
        <UserItem
          user={user}
          key={index}/>
      )
    }
  </Users.List>


UserList.defaultProps = {
  list: []
}

UserList.propTypes = {
  list: PropTypes.array
}

export default UserList