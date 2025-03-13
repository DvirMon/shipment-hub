export interface ShipmentDetails {
  shipmentId: string;
  date: Date;
  reference: string;
}

export interface Address {
  address: string;
  city: string;
  country: string;
}

export interface ShipmentCost {
  baseCost: number;
  currency: string;
  taxes: number;
}

export interface ShipmentItem {
  id: string;
  description: string;
  quantity: number;
  weight: number;
  length: number;
  width: number;
  height: number;
  value: number;
}

export interface FileUpload {
  name: string;
  size: number;
  type: string;
  lastModified: number;
}

export interface ShipmentForm {
  details: ShipmentDetails;
  origin: Address;
  destination: Address;
  cost: ShipmentCost;
  items: ShipmentItem[];
  files: FileUpload[];
}