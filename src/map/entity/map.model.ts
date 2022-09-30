import { Geometry, Polygon,GeoJSON } from "geojson";

export class MapModel{
    id?: number;

    name?:string;
    
    desc?:string;
    
    properties?:string;

    geom?: Geometry;
}