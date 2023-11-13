import {getDocs} from "firebase/firestore";
import {React, useState, useEffect} from "react";

const History = ({data}) => {

    const [navItems, setNavItems] = useState([]);
    let pane = [];
    let contents = [];
    const [datas, setDatas] = useState([]);
    const [id, setId] = useState(0);

    const historyRef = data;

    useEffect(() => {
        const getNavItems = async () => {
            const documentSnapshots = await getDocs(historyRef);
            await setNavItems(documentSnapshots.docs.map((doc) => {return doc.id}));
            await setDatas(documentSnapshots.docs.map((doc) => ({
                ...doc.data(),
            })))
        }
        getNavItems();
    }, [])

    const showNav = () => {
        let navId = 0;
        return navItems.map((doc) => (
            <li
                id={navId}
                className={id === navItems.indexOf(doc)
                    ? "nav-tab-item is-active"
                    : "nav-tab-item"}
                onClick={(e) => {
                    setId((e.currentTarget.id)*1);
                }}
                key={"id" + (navId++)}>
                <div className="nav-tab-custom">
                    {doc}
                </div>
            </li>
        ))
    }

    const showPane = () => {
        return pane.filter((doc) => (id === doc.id)).map((doc) => (doc.contents))
    }

    const getDatas = (item) => {
    
        let dataId = 0;
        const keys = Object.keys(item);
        contents = keys.map((k) => ({year: k, content: Object.values(item)[keys.indexOf(k)]}));

        return contents.map((c) => {
            return (<div
                key={"id" + (
                    dataId++
                )}
                className="year-content-box">
                <div className="year">
                    {c.year}
                </div>
                <div className="year-content">
                    {c.content}
                </div>
            </div>)
        })
    }

    let contentsId = 0;
    pane = datas.map((doc) => ({
        id: datas.indexOf(doc),
        contents: 
            <div key={"id:"+(contentsId++)} className="tab-container">
                {getDatas(doc)}
            </div>
    }));

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