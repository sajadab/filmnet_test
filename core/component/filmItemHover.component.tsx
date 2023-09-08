import React, {FC} from "react";
import styles from "@/styles/main.module.scss";
import {toPersianNumber} from "@/core/number.utils";
import {motion} from "framer-motion";

interface Props {
    genre: string
    country: string
    year: number
    imdb: number
}

export const FilmItemHoverComponent: FC<Props> = (props) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className={styles.imageHover}
            transition={{
                type: 'tween',
                duration: 0.4
            }}>
            <div>{props.genre}</div>
            <div><span>{props.country}</span> / <span>{toPersianNumber(props.year)}</span></div>
            {props.imdb > 0 ?
                <div>{toPersianNumber(props.imdb / 10)} IMDb</div> : null}
        </motion.div>
    )
}