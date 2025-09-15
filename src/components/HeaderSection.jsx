    import "./HeaderSection.css";
import RotatingEarth from "./RotatingEarth";
    const title = "Movimento REVIVER";
    const event = "7a Imersão";
    
    function MobileHeader() {
        return (
            <section className="lp_header_mobile block sm:hidden">
                <video className="lp_video" autoPlay loop muted playsInline>
                    <source src="./media/lp_video_2.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeo em HTML5.
                </video>
                <div className="lp_video_mask"></div>
                <div className="lp_header_content">
                    <div className="lp_title w-full">
                        <div className="flex flex-row items-center justify-between">
                            <h1 className="title_brand title_text text-white font-bold text-3xl">{title}</h1>
                            <RotatingEarth />
                        </div>
                        <div className="title_event_title justify-center">
                            <h2 className="title_event_name">{event}</h2>
                            <p className="title_desc">
                                Reviva suas experiências, reconstrua seus fundamentos e conecte-se com a essência de quem você realmente é.

                            </p>
                            <p className="title_desc">
                                Não apenas comece o seu 2026; inicie-o de maneira profunda e significativa, verdadeiramente REVIVENDO!
                            </p>
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
                    <source src="./media/lp_video_2.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeo em HTML5.
                </video>
                
                <div className="lp_video_mask"></div>
                <div className="lp_header_content w-full max-w-screen-lg justify-self-center">
                    <div className="lp_title w-full">
                        <div className="title_title">
                            <h1 className="title_brand font-bold text-3xl">{title}</h1>
                            <hr />
                            <p className="title_desc lp_desc">
                                Reviva suas experiências, reconstrua seus fundamentos e conecte-se com a essência de quem você realmente é.
                            </p>
                            <p className="title_desc lp_desc">
                                Não apenas comece o seu 2026; inicie-o de maneira profunda e significativa, verdadeiramente REVIVENDO!
                            </p>
                        </div>
                        <hr />
                        <RotatingEarth />
                        <div className="title_event_title">
                            <h2 className="title_event_name">{event}</h2>
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