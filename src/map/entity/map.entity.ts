
import { Polygon } from "geojson";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity('map_event')
export class MapEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    // @IsNotEmpty()
    name:string;

    @Column()
    // @IsNotEmpty()
    desc: string;

    @Index({ spatial: true })
    @Column({
        type: 'geometry',
        spatialFeatureType: 'Polygon', 
        // srid: 4326,
        srid: 3857,
        nullable: true,
    })
    // @IsNotEmpty()
    geom: Polygon;

}
