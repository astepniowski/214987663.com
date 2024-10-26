export default function Gallery() {
    return <>
        <div className="p-12 grid grid-cols-5 grid-rows-3 justify-items-center gap-y-12 relative"> 

            <figure>
                <img src="assets/favicon.gif" width="250px" height="250px"></img>
                <figcaption className ="caption-bottom max-w-[250px] text-center italic">favicon.gif</figcaption>
            </figure>

            <figure>
                <img src="assets/cube.gif" width="250px" height="250px" className="hover:-hue-rotate-60"></img>
                <figcaption className ="caption-bottom max-w-[250px] text-center italic">cube.gif</figcaption>
            </figure>

            <figure>
                <img src="assets/1.jpg" width="250px" height="250px"></img>
                <figcaption className ="caption-bottom max-w-[250px] text-center italic">Yin & Yang</figcaption>
            </figure>


            <figure>
                <img src="assets/flames.gif" width="250px" height="250px"></img>
                <figcaption className ="caption-bottom max-w-[250px] text-center italic">flames.gif</figcaption>
            </figure>

            <figure>
                <img src="assets/ARTWORKS.jpg" width="250px" height="250px"></img>
                <figcaption className ="caption-bottom max-w-[250px] text-center italic">ARTWORKS.jpg</figcaption>
            </figure>

            <figure>
                <img src="assets/bob.jpg" width="250px" height="500px"></img>
                <figcaption className ="caption-bottom max-w-[250px] text-center italic">bob.jpg</figcaption>
            </figure>

            <h1 className="absolute bottom-0">@2024</h1>
        </div>
    </>
}