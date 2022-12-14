import { Body, Controller, Delete, Get, Param, Patch, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import {  Observable } from 'rxjs';
import { MapEntity } from './entity/map.entity';
import { Map } from './entity/map.interface';
import { MapModel } from './entity/map.model';
import { MapService } from './map.service';
import { Polygon } from 'geojson';
import { DeleteResult } from 'typeorm';

@Controller('map')
export class MapController {
    constructor(private mapService: MapService){}
    allMapData:[];
    allMapData1:any = [];
 

    @Get()
    findAllMapData(): Observable<Map[]> {
      console.log("function called"); 
      return this.mapService.findAllMapData();
    }

    @Post()
    createMapData(@Body() mapModel:MapModel): Observable<MapEntity> {
    // createMapData(@Body() mapModel:MapModel): Promise<Map> {
        return this.mapService.createMapData(mapModel);
    }

    @Delete('remove/:id')
    deleteMapData(@Param('id') id: number): Observable<DeleteResult> {
        return this.mapService.deleteMapData(id);
    }

}