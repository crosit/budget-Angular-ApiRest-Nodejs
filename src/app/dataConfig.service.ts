import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class DataConfig{
    constructor(private http: HttpClient ){}

    getDataConfig(url: string){
        return this.http.get(url);
    }
}