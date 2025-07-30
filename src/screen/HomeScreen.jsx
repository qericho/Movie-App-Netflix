import requests from "../api/requests"
import Banner from "../components/Banner"
import Nav from "../components/Nav"
import Row from "../components/Row"

const HomeScreen = () => {
  return (
    <div>
      {/* Nav */}
      <Nav />
      <Banner />
      <div className="pb-5">
        <Row title="NOW PLAYING" req={requests.fetchNowPlaying} isLarge={true} />
        <Row title="UPCOMING" req={requests.fetchUpcoming} />
        <Row title="POPULAR" req={requests.fetchPopular} />
        <Row title="TRENDING" req={requests.fetchTrendingAll} />
      </div>
    </div>
  )
}

export default HomeScreen