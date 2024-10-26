export default function Horse() {
    return (
        <>
            <div className="flex flex-auto">
                
                <figure className="m-12">
                    <img src="assets/unnamed.jpg" width="500px" height="500px" className="flex"/>
                    <figcaption className ="caption-bottom max-w-[500px] text-center italic">Selfie :D</figcaption>
                </figure>

                <p className="my-12 w-[600px]">this is my personal website. <br/><br/>
                
                this website was engineered using React and TailwindCSS. The source code is available on my <a href="https://github.com/astepniowski" target="__blank" className="text-blue-500 visited:text-purple-500 underline">github.</a> <br/><br/>
            
                please feel free to explore.
                 </p>

            </div>
        </>
    )
}