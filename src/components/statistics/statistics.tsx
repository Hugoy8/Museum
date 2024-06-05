/**
 * Statistics component
 * @param title - Title of the section
 * @param description - Description of the section
 * @param information - Array of object with title and description
 */
function Statistics({title, description, information}: StatisticsProps) {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-center text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">{title}</h2>
                        <p className="text-center mt-4 text-lg leading-8 dark:text-gray-300 text-gray-600">{description}</p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {information.map((informationElement: { title: string; description: string; }, index: number) => (
                            <div key={index} className="flex flex-col dark:bg-white/5 bg-gray-400/5 p-10">
                                <dt className="text-sm text-center font-semibold dark:text-gray-300 leading-6 text-gray-600">{informationElement.description}</dt>
                                <dd className="order-first text-center dark:text-white text-3xl font-semibold tracking-tight text-gray-900">{informationElement.title}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Statistics;

/* Le model pour les props du composant */
interface StatisticsProps {
    title: string,
    description: string,
    information : {
        title: string;
        description: string;
    }[]
}