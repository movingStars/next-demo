import React from 'react'
import Head from 'next/head'
import 'isomorphic-unfetch'
import './about.scss'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: []
    }
  }

  static async getInitialProps() {
    const res = await fetch('https://api.github.com/repos/movingStars/next-demo')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

  getMovieList = () => {
    setTimeout(() => {
      this.setState({
        movieList: [
          {
            image: 'https://images.zi.org.tw/ddm/2019/04/19214341/1555681420-79734ff7ef8e880d76fb79fa3a49b973.jpg',
            title: '复仇者联盟4.终极之战',
            year: '2019'
          },
          {
            image: 'https://images.zi.org.tw/ddm/2019/04/19214341/1555681420-79734ff7ef8e880d76fb79fa3a49b973.jpg',
            title: '复仇者联盟4.终极之战',
            year: '2019'
          },
          {
            image: 'https://images.zi.org.tw/ddm/2019/04/19214341/1555681420-79734ff7ef8e880d76fb79fa3a49b973.jpg',
            title: '复仇者联盟4.终极之战',
            year: '2019'
          }
        ]
      })
    }, 200)
  }

  render() {
    return (
      <div className="container">
        <Head>
          <title>Next demo</title>
          <meta name="description" content="A sample demo with next.js"/>
          <meta name="keywords" content="next, next.js, demo"/>
        </Head>
        <button className="get-movie-list" onClick={this.getMovieList}>Get Movie List</button>
        <div className="movie-list">
          {this.state.movieList.map((item, index) => {
            return (
              <div className="movie-item" key={index}>
                <img src={item.image} alt={item.title}/>
                <p>{item.year} -- {item.title}</p>
              </div>
            )
          })}
        </div>
        <div>next-demo has {this.props.stars} ✨</div>
      </div>
    )
  }
}

export default About