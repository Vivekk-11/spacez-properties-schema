interface GeneralData {
  tcLink: string;
  contactCall: string;
  contactWp: string;
  contactMail: string;
  conciergeFaqs: string[];
  profileFaqs: string[];
}

export class General {
  tcLink: string;
  contactCall: string;
  contactWp: string;
  contactMail: string;
  conciergeFaqs: string[];
  profileFaqs: string[];

  constructor({
    tcLink,
    contactCall,
    contactWp,
    contactMail,
    conciergeFaqs,
    profileFaqs,
  }: GeneralData) {
    this.tcLink = tcLink;
    this.contactCall = contactCall;
    this.contactWp = contactWp;
    this.contactMail = contactMail;
    this.conciergeFaqs = conciergeFaqs;
    this.profileFaqs = profileFaqs;
  }

  static fromJson(json: any): General {
    return new General({
      tcLink: json.tcLink,
      contactCall: json.contactCall,
      contactWp: json.contactWp,
      contactMail: json.contactMail,
      conciergeFaqs: json.conciergeFaqs.map((faq: string) => faq),
      profileFaqs: json.profileFaqs.map((faq: any) => faq),
    });
  }

  toJson(): any {
    return {
      tcLink: this.tcLink,
      contactCall: this.contactCall,
      contactWp: this.contactWp,
      contactMail: this.contactMail,
      conciergeFaqs: this.conciergeFaqs.map((faq) => faq),
      profileFaqs: this.profileFaqs.map((faq) => faq),
    };
  }
}

// Example usage
// const jsonData = {
// tcLink: "savingz.in/terms-and-conditions",
// contactCall: "+919380834941",
// contactWp: "+919380834941",
// contactMail: "hello@spacez.co",
// conciergeFaqs: [
// "How long does it take to clear a pending reservation?",
// "How long does it take to clear a pending reservation?",
// ],
// profileFaqs: [
// "How long does it take to clear a pending reservation?",
// "How long does it take to clear a pending reservation?",
// ],
// };

// Convert JSON to class instance
// const generalInstance = General.fromJson(jsonData);
// console.log(generalInstance);

// Convert class instance back to JSON
// const jsonString = generalInstance.toJson();
// console.log(jsonString);
