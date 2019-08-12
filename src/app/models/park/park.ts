export class Park {
    address: string;
    city: string;
    parkName: string;
    photos: string[];
    zip: number;

    constructor(address: string, city: string, parkName: string, photos: string[], zip: number) {
        this.address = address;
        this.city = city;
        this.parkName = parkName;
        this.photos = photos;
        this.zip = zip;
    }
}
