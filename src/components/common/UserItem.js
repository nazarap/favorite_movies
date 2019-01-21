import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Movies from './../../components/Movies'
import { Users, Avatar, UserInfo } from './../../styled'
import { connect } from 'react-redux'
import { removePersonalGenre } from '../../actions/genres'
import filterBy from '../../helpers/filterBy'

class UserItems extends React.Component {
  constructor(props) {
    super(props)

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
    const movies = filterBy(this.props.movies, user.favoriteList)

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
          count={showMoreFlag ? 4 : movies.length}
          list={movies}/>
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

const mapStateToProps = state => ({
  movies: state.movies.list
})

const mapDispatchToProps = dispatch => ({
  removePersonalGenre: payload => {
    dispatch(removePersonalGenre(payload))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(UserItems)