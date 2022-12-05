import { Container } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import android from '../assets/android.png'
import apple from '../assets/apple.png'
import styles from '../css/NewsContainer.module.css'
import NewsCard from './NewsCard'
function NewsContainer({ data }) {
  const [newData, setNewData] = useState([]);

// console.log(data)

  return (
    <Container maxWidth="md" >
      <div className={styles.content}>
        <div className={styles.downloadMessage}>
          <span className={styles.text} >For the best experience use inshorts app on your smartphone</span>
          <img src={android} alt="Download image" />
          <img src={apple} alt="Download image" />
        </div>

        <div>
          <NewsCard data={data}/>
        </div>
      </div>
    </Container>
  )
}

export default NewsContainer