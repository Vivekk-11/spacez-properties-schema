interface ThingsToDoData {
  url: string;
  name: string;
  description: string;
  distance: string;
}

export class ThingsToDo {
  url: string;
  name: string;
  description: string;
  distance: string;

  constructor({ url, name, description, distance }: ThingsToDoData) {
    this.url = url;
    this.name = name;
    this.description = description;
    this.distance = distance;
  }

  static fromJson(json: any): ThingsToDo {
    return new ThingsToDo({
      url: json.url,
      name: json.name,
      description: json.description,
      distance: json.distance,
    });
  }

  toJson(): any {
    return {
      url: this.url,
      name: this.name,
      description: this.description,
      distance: this.distance,
    };
  }
}

// Example usage
// const jsonData = {
//   url: "https://www.treebo.com/blog/wp-content/uploads/2018/01/best-parks-in-bangalore_1.jpg",
//   name: "Xyz Park",
//   description: "Tourist Destination",
//   distance: "2 km",
// };

// Convert JSON to class instance
// const thingsToDoInstance = ThingsToDo.fromJson(jsonData);
// console.log(thingsToDoInstance);

// Convert class instance back to JSON
// const jsonString = thingsToDoInstance.toJson();
// console.log(jsonString);
