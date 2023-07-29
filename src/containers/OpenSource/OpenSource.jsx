import React from 'react';
import {motion} from "framer-motion";
import './OpenSource.css';
import {opensource} from "../../assets";

function OpenSource() {
    const contributions = [
        {
            name: "Nodify",
            desc: "A collection of highly performant controls for node based editors designed for MVVM.",
            url: "https://github.com/miroiu/nodify",
            merged_pr_url: "https://github.com/miroiu/nodify/pull/62",
            year: 2023,
            status: "Complete"
        },
        {
            name: "Crowdin .NET Client",
            desc: "The Crowdin .NET client is a lightweight interface to the Crowdin API",
            url: "https://github.com/crowdin/crowdin-api-client-dotnet",
            merged_pr_url: "https://github.com/crowdin/crowdin-api-client-dotnet/pulls?q=is%3Apr+author%3ARiju-bak+is%3Aclosed",
            year: 2023,
            status: "Complete"
        },
        {
            name: "ViaCEP",
            desc: "A .NET client wrapper for both .NET Core & .NET Framework projects of Via CEP API",
            url: "https://github.com/guibranco/ViaCEP",
            merged_pr_url: "https://github.com/guibranco/ViaCEP/pull/72",
            year: 2023,
            status: "Complete"
        },
    ];
    return (
        <div id="opensource" className={"rk__opensource section__padding"}>
            <h2 className="opensource__head-text">Open Source Contributions</h2>
            <div className={"opensource__container"}>
                <div className="rk__opensource-image">
                    <img src={opensource} alt={"opensource"}/>
                </div>
                <div className="opensource__exp">
                    {contributions.map((contribution) => (
                        <div
                            className="opensource__exp-item"
                            key={contribution.year}
                            onClick={() => {
                                window.open(contribution.merged_pr_url, '_blank', 'noopener, noreferrer');
                            }}>
                            {/*<div className="opensource__exp-year">*/}
                            {/*    <p className="opensource__bold-text gradient__text">{contribution.name}</p>*/}
                            {/*</div>*/}
                            <motion.div
                                whileInView={{opacity: [0, 1]}}
                                whileHover={{scale: 1.2}}
                                transition={{duration: 0.5, type: 'tween'}}
                                className={"opensource__exp-opensource"}
                                data-tip
                                data-for={opensource.name}
                                key={opensource.name}
                            >
                                <h4 className="opensource__bold-text gradient__text">{contribution.name + (contribution.status === "Complete" ? "" : ` (${contribution.status})`)}</h4>
                                <p className={"opensource__p-text"}>{contribution.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    );
}

export default OpenSource;