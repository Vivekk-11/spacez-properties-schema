interface AminityData {
  id: string;
  category: string;
  icon: string;
  label: string;
}

export class Aminity {
  id: string;
  category: string;
  icon: string;
  label: string;

  constructor({ id, category, icon, label }: AminityData) {
    this.id = id;
    this.category = category;
    this.icon = icon;
    this.label = label;
  }

  static fromJson(json: any): Aminity {
    return new Aminity({
      id: json.id,
      category: json.category,
      icon: json.icon,
      label: json.label,
    });
  }

  toJson(): any {
    return {
      id: this.id,
      category: this.category,
      icon: this.icon,
      label: this.label,
    };
  }
}

// Example usage
// const jsonData = {
//   id: "bed-linen",
//   category: "Bedroom and laundry",
//   icon: "https://res.cloudinary.com/dz3tveb47/image/upload/v1718192366/pillow_omqvqr.png",
//   label: "Bed linen",
// };

// Convert JSON to class instance
// const aminityInstance = Aminity.fromJson(jsonData);
// console.log(aminityInstance);

// Convert class instance back to JSON
// const jsonString = aminityInstance.toJson();
// console.log(jsonString);
