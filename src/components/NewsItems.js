function NewsItems({item}){
    const websiteUrl=item.url
    const website = websiteUrl.split('https.//').pop().split('/')[0]
    const data=item.publishedAt
 
    return(
        <a href="" className="article">
        <div className="article-image">
        <img src={item.urlToImage} alt={item.title} /> 
        </div>
        <div className="article-content">
            <div className="article-source">
                <img src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE, URL&url=http://${website}&size=16" alt={item.source.id} />
                <span></span>
            </div>
            <div className="article-title">
                <h2>{item.title}</h2>
            </div>
            <p className="article-description">{item.description}
                 </p>
               
        </div>
        </a>
    )
}
export default NewsItems