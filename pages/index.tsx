import {NextPage} from "next";
import {useEffect, useState} from "react";
import {FilmService} from "@/core/network/service/filmService";
import styles from '@/styles/main.module.scss'
import {FilmResponseDataModel} from "@/core/network/model/FilmModel";
import InfiniteLoader from "react-window-infinite-loader";
import {FixedSizeGrid as Grid} from "react-window";
import {ShimmerComponent} from "@/core/component/shimmer.component";
import {FilmItemComponent} from "@/core/component/filmItem.component";
import {useWindowSize} from "@/core/component/useWindow";
import {useRef} from "react";
import {getGridRenderer} from "@/core/grid.utils";

const MainPage: NextPage = () => {
    const [filmList, setFilmList] = useState<FilmResponseDataModel[]>([])
    const [page, setPage] = useState(0)
    const [scrollStopIndex, setScrollStopIndex] = useState(0)
    const filmService = new FilmService();
    const width = (typeof window === 'undefined') ? 1000 : window.innerWidth
    const windowSize = useWindowSize();
    const gridRef = useRef(Math.floor(width / 160))
    const pageRef = useRef(-1)

    useEffect(() => {
        gridRef.current = Math.floor(width / 160);
    }, [windowSize])

    useEffect(() => {
        if (pageRef.current < page) {
            pageRef.current = page
            filmService.getFilmList(page*20).subscribe((data) => {
                if (data && data.data && data.data.length > 0) {
                    if (page > 0) {
                        setFilmList(filmList.concat(data.data));
                    } else {
                        setFilmList(data.data);
                    }
                }
            });
        }
    }, [page])

    const loadMoreItems = (startIndex: number, stopIndex: number) => {
        if (stopIndex % 20 > 15 && (scrollStopIndex + 15) < stopIndex) {
            setScrollStopIndex(stopIndex)
            setPage(page + 1);
        }
    };

    const isItemLoaded = (index: number) => index < filmList.length - 1;


    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {filmList && filmList.length > 0 ?
                    <InfiniteLoader
                        isItemLoaded={isItemLoaded}
                        itemCount={filmList.length}
                        loadMoreItems={loadMoreItems}>
                        {({onItemsRendered, ref}: any) => {
                            const gridItemsRendered = getGridRenderer(onItemsRendered);
                            return (
                                <Grid
                                    innerElementType="div"
                                    className={styles.list}
                                    height={(typeof window === 'undefined') ? 1000 : (window.innerHeight - 10)}
                                    columnCount={gridRef.current}
                                    columnWidth={160}
                                    rowCount={Math.ceil(filmList.length / gridRef.current)}
                                    rowHeight={270}
                                    width={width}
                                    style={{position: "relative"}}
                                    direction={"rtl"}
                                    onItemsRendered={gridItemsRendered}
                                    ref={ref}
                                >
                                    {({rowIndex, columnIndex, style}) => {
                                        return (
                                            <div style={style} key={(rowIndex * gridRef.current) + columnIndex}>
                                                {(!isItemLoaded((rowIndex * gridRef.current) + columnIndex)) ?
                                                    <ShimmerComponent width={Number(style.width) ?? 0}/> :
                                                    <FilmItemComponent
                                                        item={filmList[(rowIndex * gridRef.current) + columnIndex]}/>}
                                            </div>
                                        );
                                    }}
                                </Grid>
                            );
                        }}
                    </InfiniteLoader>
                    : null}
            </div>
        </div>
    )
}

export default MainPage
