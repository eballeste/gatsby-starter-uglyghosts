import React from 'react'

import Layout from 'components/layout'
import Image from 'components/image'

import styles from './index.module.scss'

const IndexPage = () => (
  <Layout>
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
