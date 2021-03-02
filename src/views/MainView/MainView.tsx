import React, {useState} from 'react';
import './MainView.scss';
import {TextButton} from "../Common/TextButton/TextButton";
import classNames from 'classnames';
import {Tooltip} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import ImagesDropZone from "./ImagesDropZone/ImagesDropZone";

const MainView: React.FC = () => {
    const [projectInProgress, setProjectInProgress] = useState(false);
    const [projectCanceled, setProjectCanceled] = useState(false);

    const startProject = () => {
        setProjectInProgress(true);
    };

    const endProject = () => {
        setProjectInProgress(false);
        setProjectCanceled(true);
    };

    const getClassName = () => {
        return classNames(
            "MainView", {
                "InProgress": projectInProgress,
                "Canceled": !projectInProgress && projectCanceled
            }
        );
    };

    return (
        <div className={getClassName()}>
            <div className="Slider" id="lower">
                <div className="TriangleVertical">
                    <div className="TriangleVerticalContent"/>
                </div>
            </div>

            <div className="Slider" id="upper">
                <div className="TriangleVertical">
                    <div className="TriangleVerticalContent"/>
                </div>
            </div>

            <div className="LeftColumn">
                <div className={"LogoWrapper"}>
                    <img
                        draggable={false}
                        alt={"main-logo"}
                        src={"ico/main-image-color.png"}
                    />
                </div>
                <div className="EditorFeaturesWrapper">
                    <h2>  Welcome to intuitivo labeling Dashboard</h2>
                </div>
                <div className="TriangleVertical">
                    <div className="TriangleVerticalContent"/>
                </div>
                {projectInProgress && <TextButton
                    label={"Go Back"}
                    onClick={endProject}
                />}
            </div>
            <div className="RightColumn">
                <div/>
                <ImagesDropZone/>
                
                {!projectInProgress && <TextButton
                    label={"Get Started"}
                    onClick={startProject}
                />}
            </div>
        </div>
    );
};

export default MainView;