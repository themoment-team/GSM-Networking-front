export interface MarkerType {
  id: number;
  name: string;
  generation: number;
  company: {
    name: string;
    position: string;
    lat: number;
    lon: number;
  };
}
