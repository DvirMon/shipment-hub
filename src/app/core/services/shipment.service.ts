import { Injectable, signal } from '@angular/core';
import { ShipmentForm } from '../models/shipment.model';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private shipmentData = signal<Partial<ShipmentForm>>({});

  updateShipment(data: Partial<ShipmentForm>) {
    this.shipmentData.update(current => ({ ...current, ...data }));
  }

  getShipmentData() {
    return this.shipmentData;
  }

  calculateTotal(form: Partial<ShipmentForm>): number {
    const itemsTotal = form.items?.reduce((sum, item) => 
      sum + (item.quantity * item.value), 0) || 0;
    const baseCost = form.cost?.baseCost || 0;
    const taxes = form.cost?.taxes || 0;
    
    return itemsTotal + baseCost + taxes;
  }
}