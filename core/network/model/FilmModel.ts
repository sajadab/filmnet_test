export interface FilmResponseModel {
    data: FilmResponseDataModel[]
}

export interface FilmResponseDataModel {
    id: string
    title: string
    original_name: string
    page_title: string
    type: FilmType
    year: number
    imdb_rank_percent: number
    poster_image: PathModel
    cover_image: PathModel
    categories: CategoriesModel[]
}

export interface PathModel {
    path: string
}

export interface CategoriesModel {
    type: string
    items: TitleModel[]
}

export interface TitleModel {
    title: string
}

export enum FilmType {
    SERIES = "series",
    VIDEO = "single_video"
}

export enum CategoryType {
    TERRITORY = "territory",
    GENRE = "genre"
}
