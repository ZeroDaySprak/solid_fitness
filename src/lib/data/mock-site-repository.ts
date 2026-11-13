import { siteConfig } from "@/config/site.config";
import type { SiteRepository } from "@/lib/data/types";

export const mockSiteRepository: SiteRepository = {
  async getPlans() {
    return siteConfig.plans;
  },
  async getTrainers() {
    return siteConfig.trainers;
  },
};
