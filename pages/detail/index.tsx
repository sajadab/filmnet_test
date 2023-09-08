import {NextPage} from "next";
import styles from '../../styles/main.module.scss'
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "@/core/redux/store";
import React, {useEffect, useState} from "react";
import {CategoriesModel, CategoryType, TitleModel} from "@/core/network/model/FilmModel";
import {FilmDetailComponent} from "@/core/component/filmDetail.component";

const DetailPage: NextPage = () => {

    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    const filmState = useAppSelector((state) => state.filmReducer);
    const [genre, setGenre] = useState<string[]>([]);
    const [country, setCountry] = useState("");

    useEffect(() => {
        if (filmState.item.categories.filter((item:CategoriesModel) => item.type == CategoryType.GENRE).length > 0) {
            setGenre(filmState.item.categories.filter((item:CategoriesModel) => item.type == CategoryType.GENRE)[0].items.map((it:TitleModel) => it.title));
        }
        if (filmState.item.categories.filter((item:CategoriesModel) => item.type == CategoryType.TERRITORY).length > 0) {
            setCountry(filmState.item.categories.filter((item:CategoriesModel) => item.type == CategoryType.TERRITORY)[0].items?.at(0)?.title ?? "");
        }
    }, [filmState.item])

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {filmState.item?
                    <FilmDetailComponent
                        cover={filmState.item.cover_image.path} title={filmState.item.title}
                        originalName={filmState.item.original_name} genre={genre}
                        year={filmState.item.year} country={country}
                        imdb={filmState.item.imdb_rank_percent}/>
                :null}
            </div>
        </div>
    )
}
export default DetailPage