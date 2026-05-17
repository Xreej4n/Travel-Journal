import marker from "../assets/marker.png"
const rawImages = import.meta.glob("../assets/blog_images/*", { eager: true })

function imageSorter(){
    const images = {}
    for (const filePath in rawImages){
        const fileName = filePath.split("/").pop()
        images[fileName] = rawImages[filePath].default
    }
    return images
    
}

export default function Entry(prop){
    const images = imageSorter()
    return (

        <article>
                    
            <div><img class="pic" src={images[prop.imgFile]} /></div>
            <div class="main">
                <span className="loc-line">
                    {prop.country && <img src={marker}/>}
                    <p ><span class="loc">{prop.country}</span>{prop.mapsLink && <a href={prop.mapsLink} class="link">View on Google maps</a>}</p>
                </span>
                <h1>{prop.title}</h1>
                <h4>{prop.date}</h4>
                <p>{prop.text}</p>
            </div>
        </article>




    )
}