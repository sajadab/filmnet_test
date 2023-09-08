import React, {FC, useEffect, useState} from "react";
import styles from "../../styles/main.module.scss";
import {useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";
import {FILM_ACTION} from "../redux/reducer/filmReducer";
import {CategoryType, FilmResponseDataModel} from "@/core/network/model/FilmModel";
import Image from "next/image";
import {DETAIL_PAGE_PATH} from "@/core/CONSTANTS";
import {FilmItemHoverComponent} from "@/core/component/filmItemHover.component";

interface Props {
    item: FilmResponseDataModel,
}

export const FilmItemComponent: FC<Props> = (props) => {
    const router = useRouter();
    let dispatch = useDispatch<AppDispatch>();
    const [hover, setHover] = useState(false);
    const [genre, setGenre] = useState("");
    const [country, setCountry] = useState("");

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    function vendorItemClick() {
        dispatch({
            type: FILM_ACTION,
            item: props.item
        })
        router.push(DETAIL_PAGE_PATH)
    }

    useEffect(() => {
        if (props.item.categories.filter((item) => item.type == CategoryType.GENRE).length > 0) {
            setGenre(props.item.categories.filter((item) => item.type == CategoryType.GENRE)[0].items.map((it) => it.title).join(" ، "));
        }
        if (props.item.categories.filter((item) => item.type == CategoryType.TERRITORY).length > 0) {
            setCountry(props.item.categories.filter((item) => item.type == CategoryType.TERRITORY)[0].items?.at(0)?.title ?? "");
        }
    }, [props.item])


    return (
        <div
            className={styles.cardContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => vendorItemClick()}>
            <div className={styles.card}>
                <Image alt={"film_cover"} width={190} height={200} src={props.item.poster_image.path}
                       className={styles.coverImage}
                />
                {hover ?
                    <FilmItemHoverComponent
                        country={country} genre={genre} year={props.item.year}
                        imdb={props.item.imdb_rank_percent}/>
                    : null}
                <div className={styles.filmTitle}>{props.item.title}</div>
            </div>
        </div>
    )
}