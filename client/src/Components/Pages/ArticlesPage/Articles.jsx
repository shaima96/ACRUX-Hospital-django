import React from 'react'
import RandomArticles from './RandomArticles'

const Articles = ({ Articles }) => {
    const random = (arr) => {
        let array = [...arr]
        let result = []
        for (let i = 0; i < 3; i++) {
            let index = Math.floor(Math.random() * array.length)
            result.push(array[index])
            array.splice(index,1)
        }
        return result
    }

    const res = random(Articles)
    return (
        <div >
            <div >
                {
                    res[0] ?
                        res.map((Articles, i) => <RandomArticles  articles={Articles} />) :
                        <div></div>
                }
            </div>



        </div>
    )
}

export default Articles