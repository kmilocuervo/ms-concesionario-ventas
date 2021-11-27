import {Entity, hasOne, model, property} from '@loopback/repository';
import {Factura} from './factura.model';

@model()
export class Ventas extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    id: true,
  })
  idVehiculo?: number;

  @property({
    type: 'number',
    id: true,
  })
  idVendedor?: number;

  @property({
    type: 'number',
    id: true,
  })
  idCliente?: number;

  @property({
    type: 'string',
    required: true,
  })
  placa: string;

  @hasOne(() => Factura, {keyTo: 'idVenta'})
  factura: Factura;

  constructor(data?: Partial<Ventas>) {
    super(data);
  }
}

export interface VentasRelations {
  // describe navigational properties here
}

export type VentasWithRelations = Ventas & VentasRelations;
