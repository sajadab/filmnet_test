import React, {FC} from "react";
import styles from "@/styles/main.module.scss";
import {toPersianNumber} from "@/core/number.utils";

interface Props{
    cover:string
    title:string
    originalName:string
    genre:string[]
    year:number
    country:string
    imdb:number
}

export const FilmDetailComponent:FC<Props>=(props)=>{
    return(
        <div className={styles.detailContainer}>
            <img alt={"film_cover"} height={400} width={"100%"} src={props.cover}
                 className={styles.detailCoverImage}
            />
            <div className={styles.detailTitleContainer}>
                <div className={styles.detailHeaderTitle} id={'film'} >{props.title}</div>
                <div className={styles.originalName} >{props.originalName}</div>
                <div><span>{props.country}</span> / <span>{toPersianNumber(props.year)}</span></div>
                {props.imdb > 0 ?
                    <div>{toPersianNumber(props.imdb / 10)} IMDb</div> : null}
                <div className={styles.chipsContainer}>
                    {props.genre.map((item)=>
                        <div className={styles.genreChips}>{item}</div>
                    )}
                </div>
            </div>
        </div>
    )
}