import {  Polygon } from "geojson";

export class MapModel{
    id?: number;

    name?:string;
    
    desc?:string;

    geom?: Polygon;
}