import {doc, getDoc, getDocs} from "firebase/firestore";
import {React, useState, useEffect} from "react";

const History = ({data}) => {

    const [navItems, setNavItems] = useState([]);
    const [pane, setPane] = useState([]);
    const [contents, setContents] = useState([]);
    const [id, setId] = useState("");

    const historyRef = data;

    useEffect(() => {
        const getNavItems = async () => {
            const documentSnapshots = await getDocs(historyRef);
            await setNavItems(documentSnapshots.docs.map((doc) => ({
                key: doc.id,
                ...doc.data()
            })));
        }
        getNavItems();
        // console.log(navItems);
        // setId(navItems[0].key);
    }, [])

    useEffect(() => {
        const getPanes = async () => {
            let paneKey = 0;
            setPane(navItems.map((item) => ({
                id: item.key, 
                title: item.key,
                contents: 
                    <div key={"id:"+(paneKey++)} className="tab-container">
                        {getContents(item)}
                    </div>
            })));
            // console.log(navItems[0].key);
            navItems.map((item) => {     console.log(item); })
        }
        getPanes();
    }, [])

    const getContents = (item) => {
    
        let contentsKey = 0;
        console.log(item);
        setContents(
            Object.keys(item).map((k) => ({year: k, content: k}))
        );

        return contents.map((c) => {
            <div
                key={"id" + (
                    contentsKey++
                )}
                className="year-content-box">
                <div className="year">
                    {c.year}
                </div>
                <div className="year-content">
                    {c.content}
                </div>
            </div>
        })
    }

    // const panes = [
    //     {
    //         id: "1990`",
    //         title: "1990`",
    //         contents: <div className="tab-container">
    //                 <div className="year-content-box">
    //                     <div className="year">1996</div>
    //                     <div className="year-content">
    //                         <p>Establishment of Dong-Seo Engineering Molding Business Department</p>
    //                     </div>
    //                 </div>
    //                 <div className="year-content-box">
    //                     <div className="year">1997</div>
    //                     <div className="year-content">
    //                         <p>Manufacture of mold for Samsung Electronics washer and microwave component</p>
    //                     </div>
    //                 </div>
    //                 <div className="year-content-box">
    //                     <div className="year">1999</div>
    //                     <div className="year-content">
    //                         <p>Ceramic Dye, completion of development, initiation of delivery, initiation of
    //                             ejection business (Mass production and delivery of washer, microwave, and
    //                             dishwasher components)</p>
    //                     </div>
    //                 </div>
    //             </div>
    //     }, {
    //         id: "2000",
    //         title: "2000`",
    //         contents: <div className="tab-container">
    //                 <div className="year-content-box">
    //                     <div className="year">2003</div>
    //                     <div className="year-content">
    //                         <p>Development of emission reduction filter for Hyundai motors</p>
    //                     </div>
    //                 </div>
    //                 <div className="year-content-box">
    //                     <div className="year">2009</div>
    //                     <div className="year-content">
    //                         <p>Production component of nail arts and initiate OEM production and delivery
    //                             for complete products</p>
    //                         <p>Production of industrial instant glue container and component, OEM production
    //                             for complete products</p>
    //                     </div>
    //                 </div>
    //             </div>
    //     }, {
    //         id: "2010",
    //         title: "2010`",
    //         contents: <div className="tab-container">
    //                 <div className="year-content-box">
    //                     <div className="year">
    //                         <p>2010</p>
    //                     </div>
    //                     <div className="year-content">
    //                         <p>Registered patent for blow molding device(Patent No.10-0964089)</p>
    //                     </div>
    //                 </div>
    //                 <div className="year-content-box">
    //                     <div className="year">
    //                         <p>2012</p>
    //                     </div>
    //                     <div className="year-content">
    //                         <p>Develop, produce and initiate sales of axillary device for wrinkle free
    //                             hanger(company product).</p>
    //                     </div>
    //                 </div>
    //                 <div className="year-content-box">
    //                     <div className="year">
    //                         <p>2014</p>
    //                     </div>
    //                     <div className="year-content">
    //                         <p>Establishment of corporate body(Dong-Seo Engineering) Produce, sales of
    //                             instant glue container and components for beauty, nails, and industrial
    //                             use(company product).</p>
    //                         <p>Develop and initiate sales for device for automobile odor remover(company
    //                             product).</p>
    //                     </div>
    //                 </div>
    //                 <div className="year-content-box">
    //                     <div className="year">
    //                         <p>2016</p>
    //                     </div>
    //                     <div className="year-content">
    //                         <p>Register patent for capsule type cap(Patent No.10-1592148).</p>
    //                     </div>
    //                 </div>
    //             </div>
    //     }
    // ]

    const showNav = () => {
        return pane.map((doc) => (
            <li
                key={"id" + doc.id}
                className={id === doc.id
                    ? "nav-tab-item is-active"
                    : "nav-tab-item"}
                onClick={() => setId(doc.id)}>
                <div className="nav-tab-custom">
                    {doc.title}
                </div>
            </li>
        ))
    }

    const showPane = () => {
        return pane.filter((doc) => id === doc.id).map((doc) => (doc.contents))
    }

    return (
        <section className="history-section" id="history">
            <p className="history-title">주요 연혁</p>
            <div className="history-nav" id="history-nav">
                <ul className="nav" id="tablist">
                    {showNav()}
                </ul>
            </div>
            <div className="container">
                <div className="tab-content" id="tab-content">
                    {showPane()}
                </div>
            </div>
        </section>
    )
}

export default History;