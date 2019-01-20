import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Movies from './../../components/common/Movies'
import { Users, Avatar, UserInfo } from './../../styled'

class UserItems extends React.Component {
  constructor(props) {
    super(props)

    this.tileData = [
      { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 1', author: 'Author 1'},
      { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 2', author: 'Author 2'},
      { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 3', author: 'Author 3'},
      { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 4', author: 'Author 4'},
      { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 5', author: 'Author 5'},
      { img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg', title: 'Title 6', author: 'Author 6'},
    ]
    this.state = {
      showMoreFlag: true
    }
    this.showMore = this.showMore.bind(this)
  }

  showMore () {
    this.setState({
      showMoreFlag: !this.state.showMoreFlag
    })
  }

  render() {
    const { user } = this.props
    const { showMoreFlag } = this.state

    return (
      <Users.Item>
        <Users.Header
          className="header__content"
          elevation={1}>
          <UserInfo
            className="user-info">
            <Avatar
              alt="Remy Sharp"
              src={user.img}
            />
            <Typography
              className="user-info__name"
              variant="h6">
              {user.firstName} {user.lastName}
            </Typography>
          </UserInfo>
          <Button
            color="primary"
            onClick={this.showMore}
          >Show {showMoreFlag ? 'more' : 'less'}</Button>
        </Users.Header>
        <Movies
          cols={4}
          count={showMoreFlag ? 4 : this.tileData.length}
          list={this.tileData}/>
      </Users.Item>
    )
  }
}

UserItems.defaultProps = {
  user: {}
}

UserItems.propTypes = {
  user: PropTypes.object
}

export default UserItems