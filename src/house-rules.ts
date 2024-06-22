interface HouseRulesData {
  id: string;
  category: string;
  icon: string;
  label: string;
}

export class HouseRules {
  id: string;
  category: string;
  icon: string;
  label: string;

  constructor({ id, category, icon, label }: HouseRulesData) {
    this.id = id;
    this.category = category;
    this.icon = icon;
    this.label = label;
  }

  static fromJson(json: any): HouseRules {
    return new HouseRules({
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
//   id: "check-in",
//   category: "checkin-and-checkout",
//   icon: "https://res.cloudinary.com/dz3tveb47/image/upload/v1718953286/point_rkfc7j.png",
//   label: "Check-in after 1:00 pm",
// };

// Convert JSON to class instance
// const houseRulesInstance = HouseRules.fromJson(jsonData);
// console.log(houseRulesInstance);

// Convert class instance back to JSON
// const jsonString = houseRulesInstance.toJson();
// console.log(jsonString);
