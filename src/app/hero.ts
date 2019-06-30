export class Hero {
  id: number;
  name: string;
  avatar: string = '/assets/images/default.png';
  attributes: {vitality: number, strength: number, agility: number, intellect: number} = {
    vitality: 1,
    strength: 1,
    agility: 1,
    intellect: 1
  };
  quote: string = '';

  constructor(id: number, name: string, avatar?: string, attributes?: {vitality: number, strength: number, agility: number, intellect: number}, quote?: string) {
    this.id = id;
    this.name = name;
    if (avatar) {
      this.avatar = avatar;
    }
    if (attributes) {
      this.attributes = attributes;
    }
    if (quote) {
      this.quote = quote;
    }
  }
}

