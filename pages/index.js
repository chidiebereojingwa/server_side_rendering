import React from 'react';
import styles from './index.module.css';
import Card from './Card'
import data from './API/data.json'

export default class Index extends React.Component {

    render() { 
        return (
        <div className={styles.card}>
            <header className={styles.header}>
                <img src='/logo.png' className={styles.logo} alt='logo' />
            </header>
            <div className={styles.grid}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
    }    
}