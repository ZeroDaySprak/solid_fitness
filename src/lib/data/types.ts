export type MembershipPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  perks: readonly string[];
};

export type Trainer = {
  name: string;
  role: string;
  speciality: string;
  years: number | null;
  photo: string;
};

export interface SiteRepository {
  getPlans(): Promise<readonly MembershipPlan[]>;
  getTrainers(): Promise<readonly Trainer[]>;
}
