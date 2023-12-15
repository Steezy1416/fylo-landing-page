import { bannerImage } from "../images"

const Banner = () => {
    return (
        <section>
            <img alt="" src={bannerImage}/>
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
            <button>
                Get Started
            </button>
        </section>
    )
}

export default Banner