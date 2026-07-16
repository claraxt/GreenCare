

export interface Plant {


  id: number;

  common_name: string;

  scientific_name: string;

  image_url: string;

  family: string;


  optional: {

    sunlight: string;

    watering: string;

    soil: string;

    care_instructions: string;

    toxicity: string;

  };
}


