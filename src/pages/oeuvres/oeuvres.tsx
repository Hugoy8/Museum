import OeuvreSection from "../../components/oeuvre/oeuvre-section.tsx";
import {useEffect, useState} from "react";
import {Section} from "../../models/section.interface.ts";
import Loader from "../../components/loader/loader.tsx";
import {toast} from "sonner";
import {getArtworkByDepartmentId} from "../../services/oeuvres.service.ts";

function Oeuvres() {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [data1, setData1] = useState<Section[]>([]);
    const [data2, setData2] = useState<Section[]>([]);
    const [data3, setData3] = useState<Section[]>([]);
    const [data4, setData4] = useState<Section[]>([]);
    const [data5, setData5] = useState<Section[]>([]);
    const [data6, setData6] = useState<Section[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try{
                const data1: Section[] = await getArtworkByDepartmentId(1);
                setData1(data1);
                console.log(data1);
                const data2: Section[] = await getArtworkByDepartmentId(4);
                setData2(data2);

                const data3: Section[] = await getArtworkByDepartmentId(10);
                setData3(data3);

                const data4: Section[] = await getArtworkByDepartmentId(11);
                setData4(data4);

                const data5: Section[] = await getArtworkByDepartmentId(13);
                setData5(data5);
                console.log(data5);

                const data6: Section[] = await getArtworkByDepartmentId(15);
                setData6(data6);

            } catch (e) {
                toast.error('Impossible de charger les oeuvres. Veuillez réessayer plus tard.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchData()
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader></Loader>
            ) : (
                <>
                    <OeuvreSection title="American Decorative Arts" datas={data1} redirection={{type: 'departmentId', data: 1}}></OeuvreSection>
                    <OeuvreSection title="Arms and Armor" datas={data2} redirection={{type: 'departmentId', data: 4}}></OeuvreSection>
                    <OeuvreSection title="Egyptian Art" datas={data3} redirection={{type: 'departmentId', data: 10}}></OeuvreSection>
                    <OeuvreSection title="European Paintings" datas={data4} redirection={{type: 'departmentId', data: 11}}></OeuvreSection>
                    <OeuvreSection title="Greek and Roman Art" datas={data5} redirection={{type: 'departmentId', data: 13}}></OeuvreSection>
                    <OeuvreSection title="The Robert Lehman Collection" datas={data6} redirection={{type: 'departmentId', data: 15}}></OeuvreSection>
                </>
            )}
        </>
    )
}

export default Oeuvres;