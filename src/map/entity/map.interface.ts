import { Geometry,Polygon,GeoJSON } from "geojson";

export interface Map{
    id: number;

    name:string;

    desc:string;

    properties:string;

    geom: Geometry;
}