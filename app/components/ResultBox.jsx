import React from 'react';

import styles from './ResultBox.scss';

const ResultBox = props => {
    return (
        <div className={styles.resultBox}>
            <h1 className={styles.sectionTitle}>{props.title}</h1>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
};

ResultBox.propTypes = {
    children: React.PropTypes.node,
    title: React.PropTypes.string,
};

export default ResultBox;