'use client';
import React from 'react'
import styles from './style.module.css';
import Link from 'next/link';

export default function index({index, title, setModal, link}) {

    return (
        <Link href={link} onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            <h2>{title}</h2>
            <p>Design and Developement</p>
        </Link>
    )
}