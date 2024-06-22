import { ThingsToDo } from "./things-to-do";

interface PropertyData {
  id: string;
  propertyId: string;
  name: string;
  type: string;
  description: string;
  noOfGuests: number;
  noOfBedrooms: number;
  noOfBeds: number;
  noOfBathrooms: number;
  rating: number;
  price: string;
  locationDescription: string;
  mapCoordinates: string;
  lat: number;
  lng: number;
  isActive: boolean;
  address: string;
  location: string;
  city: string;
  cancelationPolicy: string;
  link: string;
  thingsToDo: ThingsToDo[];
  amenities: string[];
  houseRules: string[];
  mainImage: string;
  heroImages: string[];
  commonImages: string[];  
  photos: { [key: string]: string[] };
}

export class Property {
  id: string;
  propertyId: string;
  name: string;
  type: string;
  description: string;
  noOfGuests: number;
  noOfBedrooms: number;
  noOfBeds: number;
  noOfBathrooms: number;
  rating: number;
  price: string;
  locationDescription: string;
  mapCoordinates: string;
  lat: number;
  lng: number;
  isActive: boolean;
  address: string;
  location: string;
  city: string;
  cancelationPolicy: string;
  link: string;
  thingsToDo: ThingsToDo[];
  amenities: string[];
  houseRules: string[];
  mainImage: string;
  heroImages: string[];
  commonImages: string[];
  photos: { [key: string]: string[] };

  constructor({
    id,
    propertyId,
    name,
    type,
    description,
    noOfGuests,
    noOfBedrooms,
    noOfBeds,
    noOfBathrooms,
    rating,
    price,
    locationDescription,
    mapCoordinates,
    lat,
    lng,
    isActive,
    address,
    location,
    city,
    cancelationPolicy,
    link,
    thingsToDo,
    amenities,
    houseRules,
    mainImage,
    heroImages,
    commonImages,
    photos,
  }: PropertyData) {
    this.id = id;
    this.propertyId = propertyId;
    this.name = name;
    this.type = type;
    this.description = description;
    this.noOfGuests = noOfGuests;
    this.noOfBedrooms = noOfBedrooms;
    this.noOfBeds = noOfBeds;
    this.noOfBathrooms = noOfBathrooms;
    this.rating = rating;
    this.price = price;
    this.locationDescription = locationDescription;
    this.mapCoordinates = mapCoordinates;
    this.lat = lat;
    this.lng = lng;
    this.isActive = isActive;
    this.address = address;
    this.location = location;
    this.city = city;
    this.cancelationPolicy = cancelationPolicy;
    this.link = link;
    this.thingsToDo = thingsToDo.map((item) => ThingsToDo.fromJson(item));
    this.amenities = amenities;
    this.houseRules = houseRules;
    this.mainImage = mainImage;
    this.heroImages = heroImages;
    this.commonImages = commonImages;
    this.photos = photos;
  }

  static fromJson(json: any): Property {
    return new Property({
      id: json.id,
      propertyId: json.propertyId,
      name: json.name,
      type: json.type,
      description: json.description,
      noOfGuests: json.noOfGuests,
      noOfBedrooms: json.noOfBedrooms,
      noOfBeds: json.noOfBeds,
      noOfBathrooms: json.noOfBathrooms,
      rating: json.rating,
      price: json.price,
      locationDescription: json.locationDescription,
      mapCoordinates: json.mapCoordinates,
      lat: json.lat,
      lng: json.lng,
      isActive: json.isActive,
      address: json.address,
      location: json.location,
      city: json.city,
      cancelationPolicy: json.cancelationPolicy,
      link: json.link,
      thingsToDo: json.thingsToDo.map((item: any) => ThingsToDo.fromJson(item)),
      amenities: json.amenities,
      houseRules: json["house-rules"],
      mainImage: json.mainImage,
      heroImages: json.heroImages,
      commonImages: json.commonImages,
      photos: json.photos,
    });
  }

  toJson(): any {
    return {
      id: this.id,
      propertyId: this.propertyId,
      name: this.name,
      type: this.type,
      description: this.description,
      noOfGuests: this.noOfGuests,
      noOfBedrooms: this.noOfBedrooms,
      noOfBeds: this.noOfBeds,
      noOfBathrooms: this.noOfBathrooms,
      rating: this.rating,
      price: this.price,
      locationDescription: this.locationDescription,
      mapCoordinates: this.mapCoordinates,
      lat: this.lat,
      lng: this.lng,
      isActive: this.isActive,
      address: this.address,
      location: this.location,
      city: this.city,
      cancelationPolicy: this.cancelationPolicy,
      link: this.link,
      thingsToDo: this.thingsToDo.map((item) => item.toJson()),
      amenities: this.amenities,
      houseRules: this.houseRules,
      mainImage: this.mainImage,
      heroImages: this.heroImages,
      commonImages: this.commonImages,
      photos: this.photos,
    };
  }
}
