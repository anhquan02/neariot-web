export interface ProjectData {
  id?: string;
  owner: string;
  name: string;
  // type: string;
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
  offers?: any[];
  section?: any[];
  fee?:any;
  apiKey?:any;
  milestones?:any;
  watchers?:any;
  total_pledge_locked?:any;
  total_offers_completed?:any;
  total_offers_cancled?:any;
};

export interface ProjectCardProps{
  id:string;
  owner:string;
  name:string;
  img?:string;
  type:string;
  descriptions:string;
  pledgers?: any;
  backers?:any;
  avg_rate?: any;
  project_target?: any;
}