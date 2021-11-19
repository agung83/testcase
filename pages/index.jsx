

import { Header, Card } from "components/interface"
import Layout from "components/layout"


const Home = ({ data }) => {
  console.log(data)
  return (
    <Layout title="Sagara Teknologi">
      <Header />

      <Card data={data.articles} title="List Berita Indonesia" subtitle="Berita Terbaru" />
    </Layout>
  )
}

// Fetching Data Secara Server Side
export async function getServerSideProps(ctx) {

  const res = await fetch('https://newsapi.org/v2/top-headlines?country=id&apiKey=01ea7b6b191d4897a31cc5745f640c66')
  const data = await res.json()
  return {
    props: { data }
  }
}


export default Home
