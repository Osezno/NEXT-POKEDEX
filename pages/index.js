
import Head from 'next/head'
import Layout from 'components/Layout/Layout';
import Main from 'containers/Content/Main'

const Home = () => {
  return (
    <Layout body={<Main />} />
  )
}

export default Home;
