
export interface Listing {
  id: number;
  title: string;
  abstract: string;
  address: string;
  addressDoor: string;
  zip: string;
  city: string;
  country: string;
  rooms: number;
  roomsBed: number;
  roomsBath: number;
  size: number;
  rent: number;
  rentUtilities: number;
  rentFull: number;
  rentDeposit: number;
  rentComission: number;
  amenities: string[];
  amenitiesTexts: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
  details: {
    description: string;
  };
  location:[number, number]
  type: number;
  subType: number;
  condition: number;
  accessibility: number;
  unitType: string;
  rentType: string;
  floorType: number;
  heatingType: number;
  leaseDuration: number;
  availableFrom: string;
  highlight: boolean;
  verified: boolean;
  autoRenewUntil: string;
  lastRenewAt: string;
  media: {
    id: number;
    type: string;
    name: string;
    cdnUrl: string;
    sort: number;
    title: string;
    bluredDataURL?: string;
    mimeType?: string;
    size?: number;
    description?: string;
    category?: number;
  }[];
  constructionYear: number;
  modernisationYear: number;
  floor: string;
  tenements: string[];
  sizeRange: number[];
  rentRange: number[];
  roomsRange: number[];
  roomsBathRange: number[];
  roomsBedRange: number[];
}

export interface GrandLocation {
  id: number;                
  count: number;             
  pt: [number, number];      
  sizeRange: [number, number]; 
  rentRange: [number, number]; 
  gj: string;                
}

export const defaultMedia:Listing["media"] = [
  {
    id: 1,
    type: "photo",
    name: "default photo 1",
    cdnUrl: "https://priderockinnovations.ng/wp-content/uploads/2023/02/luxury-real-estate.jpeg",
    sort: 0,
    title: "default photo 1 title",
  },
  {
    id: 2,
    type: "photo",
    name: "default photo 2",
    cdnUrl: "https://priderockinnovations.ng/wp-content/uploads/2023/02/luxury-real-estate.jpeg",
    sort: 0,
    title: "default photo 2 title",
  },
  {
    id: 3,
    type: "photo",
    name: "default photo 3",
    cdnUrl: "https://priderockinnovations.ng/wp-content/uploads/2023/02/luxury-real-estate.jpeg",
    sort: 0,
    title: "default photo 3 title",
  },
];
