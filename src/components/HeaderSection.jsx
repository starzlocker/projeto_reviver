    import "./HeaderSection.css";
import RotatingEarth from "./RotatingEarth";

    const description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio doloribus quam vel quos tempora impedit eveniet ab! ";
    const title = "Movimento Reviver";
    const event = "7a Imersão";
    
    function MobileHeader() {
        return (
            <section className="lp_header_mobile block sm:hidden">
                <video className="lp_video" autoPlay loop muted playsInline>
                    <source src="/media/lp_video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeo em HTML5.
                </video>
                <div className="lp_video_mask"></div>
                <div className="lp_header_content w-full max-w-screen-lg justify-self-center">
                    <div className="lp_title w-full">
                        <div className="flex flex-row items-center justify-between">
                            <h1 className="title_text text-white font-bold text-3xl">{title}</h1>
                            <RotatingEarth />
                        </div>
                        <div className="title_event_title justify-center">
                            <h1 className="font-bold text-3xl text-center">{event}</h1>
                            <p className="title_desc text-white text-justify w-full">{description}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    function RegularHeader() {
        return (
            <section className="lp_header_mobile hidden sm:block">
                <video className="lp_video" autoPlay loop muted playsInline>
                    <source src="/media/lp_video.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeo em HTML5.
                </video>
                
                <div className="lp_video_mask"></div>
                <div className="lp_header_content w-full max-w-screen-lg justify-self-center">
                    <div className="lp_title w-full">
                        <div className="title_title">
                            <h1 className="font-bold text-3xl">{title}</h1>
                            <hr />
                            <p className="lp_desc text-white">{description}</p>
                        </div>
                        <hr />
                        <RotatingEarth />
                        <div className="title_event_title">
                            <h1 className="font-bold text-3xl">{event}</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    function HeaderSection() {
        

        return (
            <>
                <MobileHeader />
                <RegularHeader />
            </>
        )
    }

    export default HeaderSection;