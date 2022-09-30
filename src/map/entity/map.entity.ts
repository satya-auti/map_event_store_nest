
import { Polygon,Geometry, GeoJSON } from "geojson";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity('map_event')
export class MapEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    // @IsNotEmpty()
    name:string;

    
    // @IsNotEmpty()
    @Column()
    desc: string;

    @Column()
    properties:string;

    @Index({ spatial: true })
    @Column({
        type: 'geometry',
        spatialFeatureType: 'Geometry', 
        srid: 4326, 
        // srid: 3857,
        nullable: true,
    })
    // @IsNotEmpty()
    geom: Geometry;

}
