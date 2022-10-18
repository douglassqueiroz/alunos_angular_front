import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PeriodicElement } from "../models/PeriodicElement";
import { HttpClient } from '@angular/http';

@Injectable()

export class PeriodicElementService{
    elementApiUrl = 'https://localhost:44366/api/PeriodicElements';
    constructor(private http: HttpClient) {}

    getElements():Observable<PeriodicElement[]>{
        return this.http.get<PeriodicElement[]>(this.elementApiUrl);
    }
}
