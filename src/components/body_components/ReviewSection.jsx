import ReviewSlider from './ReviewSlider';
import VideoCarousel from './VideoSection'
import "./ReviewSection.css"

const ReviewSection = () => {
  const demo = [
    {
        quote: "This slider is clean, accessible, and easy to drop into any React app. Exactly what we needed.",
        author: "Ana Souza",
        role: "Product Manager",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "Plug-and-play. Auto-plays, pauses on hover, and works great on mobile swipes.",
        author: "Bruno Lima",
        role: "Frontend Dev",
        avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "Finally a testimonial component that doesn't fight me on accessibility.",
        author: "Carla Martins",
        role: "UX Designer",
        avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "Super customizable and the animations are smooth. Highly recommend for any project.",
        author: "Diego Ferreira",
        role: "Full Stack Developer",
        avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "Easy to integrate and looks great out of the box. Saved us a lot of time.",
        author: "Elisa Ramos",
        role: "Project Lead",
        avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "The mobile experience is fantastic. Swiping between testimonials feels natural.",
        author: "Felipe Costa",
        role: "Mobile Engineer",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    },
  ];

  const items = [
    {
      id: 1,
      title: 'Teste',
      embedUrl:"https://www.youtube.com/embed/BhHrUSJ_zkY?si=TpoL6zYzjcNfJyXe"
    },
    {
      id: 2,
      title: 'Teste2',
      embedUrl:"https://www.youtube.com/embed/mLWUhCjJfdA?si=-2w3w7zV9RVGuXYZ"
    },
    {
      id: 3,
      title: 'Teste3',
      embedUrl:"https://www.youtube.com/embed/HnibFgClWPo?si=aNavf7JT9bnZL-iE"
    }

]

  return (
    <section className="comment-section">
      <h3>O QUE AS PESSOAS ESTÃO DIZENDO...</h3>
      {/* <ReviewSlider items={demo} /> */}
      <VideoCarousel items={items}/>
    </section>
  );
};

export default ReviewSection  