import React, {FC} from "react";
import styles from "../../styles/main.module.scss";
import {Shimmer} from "react-shimmer";
/*
* @prop width total shimmer item width
* */
interface Props{
    width:number
}
export const ShimmerComponent:FC<Props>=(props)=>{

    return(
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <Shimmer width={props.width-10} height={200} className={styles.coverImage}/>
                <div className={styles.shimmerContainer}>
                    <Shimmer width={props.width/2} height={15} />
                </div>
            </div>
        </div>
    )
}