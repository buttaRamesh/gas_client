export interface Route {
  id: number;
  area_code: string;
  area_code_description: string;
  area_count: number;
  consumer_count: number;
  delivery_person_name: string | null;
  areas?: Area[];
}

export interface Area {
  id: number;
  area_name: string;
  area_code: string;
  consumer_count: number;
  route_id: number;
}
