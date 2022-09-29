import { Polygon } from "geojson";

export interface Map{
    id: number;

    name:string;

    desc:string;

    geom: Polygon;
}