import React, {useState} from "react";
import './Trending.css';

const TrendingList = () => {
    const [state, setState] = useState([
        {
             id: 1,
             country: 'Trending In Indonesia',
             keyword: 'Trending Now',
             totalKeywords: '20k',
        },
        {
             id: 2,
             country: 'Trending In Indonesia',
             keyword: 'Dummy Trending',
             totalKeywords: '21k',
        },
        {
             id: 3,
             country: 'Trending for you',
             keyword: 'Something 3',
             totalKeywords: '210k',
        }
   ])
   return (
    <div className='keywords'>
          <div className="key">
          <div className="keywords__heading"><h4>Trends for you</h4></div>
          {
               state.map((keyword) => {
                    return (
                         <div key={keyword.id}>
                              <div className="country"> {keyword.country}</div>
                              <div className="keywords__name"><strong>{keyword.keyword}
                              </strong></div>
                              <div className="keywords_tweets">{keyword.totalKeywords} Tweets</div>
                         </div>
                    )
               })
          }
          </div>
    </div>
)

}

export default TrendingList;