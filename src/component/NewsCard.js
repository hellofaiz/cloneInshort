import React from 'react'
import styles from '../css/NewsCard.module.css'
function NewsCard({ data }) {

    console.log(data)


    return (
        <div className={styles.cardContainer}>
            {
                data.map((option) => {
                    return (
                        <div className={styles.allAssets} >
                            <div className="images"><img src={option.imageUrl} alt="" />
                            </div>
                            <div className={styles.statistics}>
                                <div className="upperNews">        
                                 <span className={styles.title}>{option.title}
                                 </span><br />
                                    <span className={styles.moment}><a id="short" href={option.url} target="_blank">Shorts</a> by {option.author ? option.author : "unknown"} / {option.time} on {option.date}
                                    </span>
                                </div>
                                <div className={styles.lowerNews}>
                                    <div className={styles.description}>{option.content}</div>
                                    <div className={styles.readMore}>
                                        read more at {"  "}
                                        <a href={option.readMoreUrl} target="_blank"> <b> {option.author}</b></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                })
            }


        </div>
    )
}

export default NewsCard