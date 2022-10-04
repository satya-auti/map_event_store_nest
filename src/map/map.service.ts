import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Polygon } from 'geojson';
import { from, Observable } from 'rxjs';
import {  DeleteResult, Repository } from 'typeorm';
import { MapEntity } from './entity/map.entity';
import { Map } from './entity/map.interface';
import { MapModel } from './entity/map.model';

@Injectable()
export class MapService {
constructor(
    @InjectRepository(MapEntity)
    private readonly mapRepository: Repository<MapEntity>,

){}

    findAllMapData(): Observable<Map[]>{
        return from(this.mapRepository.find());
    }

    createMapData(mapModel:MapModel): Observable<MapEntity> {
    // createMapData(mapModel:MapModel): Promise<Map> {
    
         return from(this.mapRepository.save(mapModel));
    }

    deleteMapData(id: number): Observable<DeleteResult> {
        return from(this.mapRepository.delete(id));
    }
   
}
