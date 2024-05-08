import OeuvreSection from "../../components/oeuvre/oeuvre-section.tsx";
import Statistics from "../../components/statistics/statistics.tsx";

function Home() {
    return (
        <>
            <OeuvreSection title="Les nouveautés"></OeuvreSection>
            <OeuvreSection title="Les plus divines"></OeuvreSection>
            <OeuvreSection title="Anciennes"></OeuvreSection>
            <Statistics
                title="Des statistiques qui choquent"
                description="Lorem ipsum dolor sit amet consect adipisicing possimus."
                information={[
                    {
                        title: "États-Unis",
                        description: "Pays dominant le marché de l'art"
                    },
                    {
                        title: "44%",
                        description: "Part de marché mondial"
                    },
                    {
                        title: "$11.2B",
                        description: "Valeur des ventes aux enchères"
                    },
                    {
                        title: "+5%",
                        description: "Augmentation annuelle"
                    }
                ]}></Statistics>
        </>
    )
}

export default Home;