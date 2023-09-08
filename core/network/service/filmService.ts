import Api from "./Api";
import {Observable} from "rxjs";
import {FilmResponseModel} from "../model/FilmModel";


export class FilmService {
    public getFilmList(page: number): Observable<FilmResponseModel> {
        return Api.get("video-contents", {offset: page})
    }
}