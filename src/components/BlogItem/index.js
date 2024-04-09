// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogDetails} = this.props
    const {id, author, avatarUrl, imageUrl, title, topic} = blogDetails
    return (
      // eslint-disable-next-line no-template-curly-in-string
      <Link to={`/blogs/${id}`} className="link-item">
        <li className="blog-item-con">
          <button className="but">
            <img className="blog-item-image" src={imageUrl} />
            <div>
              <p className="text">{topic}</p>
              <h1>{title}</h1>
              <div className="flex-con">
                <img src={avatarUrl} className="avatar-image" alt="avatar" />
                <p className="text">{author}</p>
              </div>
            </div>
          </button>
        </li>
      </Link>
    )
  }
}

export default BlogItem
