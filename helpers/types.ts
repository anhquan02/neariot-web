export interface ProjectData {
  id?: string;
  owner: string;
  name: string;
  type: string;
  descriptions: string;
  repository: string;
  created_at: any;
  noSetting?: boolean;
  pledgers?: any;
  project_target?: any;
  avg_rate?: any;
  project_rate?: any;
  data?: any;
  chart?:string;
  section?: any[];
  fee?:any;
  apiKey?:any;
};