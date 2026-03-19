export type Language = "en" | "es" | "pt";

export interface Translations {
  // Navbar
  nav_home: string;
  nav_demos: string;
  nav_pricing: string;
  nav_how: string;
  nav_contact: string;
  nav_cta: string;

  // Hero
  hero_title: string;
  hero_subtitle: string;
  cta_primary: string;
  cta_secondary: string;

  // PerfectFor
  perfect_for_label: string;
  perfect_restaurants: string;
  perfect_cafes: string;
  perfect_bars: string;
  perfect_pizzerias: string;
  perfect_beach: string;
  perfect_microcopy: string;

  // Benefits
  benefits_title: string;
  benefit1_title: string;
  benefit1_desc: string;
  benefit2_title: string;
  benefit2_desc: string;
  benefit3_title: string;
  benefit3_desc: string;

  // Demos
  demos_title: string;
  demos_subtitle: string;
  demo1_title: string;
  demo1_usp: string;
  demo2_title: string;
  demo2_usp: string;
  demo3_title: string;
  demo3_usp: string;
  demo_cta: string;

  // Reassurance
  reassurance_title: string;
  reassurance_text: string;
  reassurance_feat1: string;
  reassurance_feat2: string;
  reassurance_feat3: string;
  reassurance_cta: string;

  // BuiltFor
  built_title: string;
  built_subtitle: string;
  built1_title: string;
  built1_desc: string;
  built2_title: string;
  built2_desc: string;
  built3_title: string;
  built3_desc: string;
  built4_title: string;
  built4_desc: string;

  // Pricing
  pricing_title: string;
  pricing_subtitle: string;
  pricing_tagline: string;
  plan_basic: string;
  plan_basic_desc: string;
  plan_basic_badge: string;
  plan_advanced: string;
  plan_advanced_desc: string;
  plan_advanced_badge: string;
  plan_premium: string;
  plan_premium_desc: string;
  plan_premium_badge: string;
  pricing_cta_start: string;
  pricing_cta_demo: string;
  pricing_delivered: string;

  // Pricing plans features
  plan_basic_f1: string;
  plan_basic_f2: string;
  plan_basic_f3: string;
  plan_basic_f4: string;
  plan_basic_f5: string;
  plan_basic_f6: string;
  plan_basic_f7: string;
  plan_basic_f8: string;

  plan_adv_f1: string;
  plan_adv_f2: string;
  plan_adv_f3: string;
  plan_adv_f4: string;
  plan_adv_f5: string;
  plan_adv_f6: string;
  plan_adv_f7: string;
  plan_adv_f8: string;

  plan_prem_f1: string;
  plan_prem_f2: string;
  plan_prem_f3: string;
  plan_prem_f4: string;
  plan_prem_f5: string;
  plan_prem_f6: string;
  plan_prem_f7: string;
  plan_prem_f8: string;
  plan_prem_f9: string;

  // Features Breakdown
  feat_title: string;
  feat_subtitle: string;
  
  feat_basic_title: string;
  feat_basic_1_name: string;
  feat_basic_1_desc: string;
  feat_basic_2_name: string;
  feat_basic_2_desc: string;
  feat_basic_3_name: string;
  feat_basic_3_desc: string;
  feat_basic_4_name: string;
  feat_basic_4_desc: string;
  feat_basic_5_name: string;
  feat_basic_5_desc: string;
  feat_basic_6_name: string;
  feat_basic_6_desc: string;

  feat_adv_title: string;
  feat_adv_includes: string;
  feat_adv_1_name: string;
  feat_adv_1_desc: string;
  feat_adv_2_name: string;
  feat_adv_2_desc: string;
  feat_adv_3_name: string;
  feat_adv_3_desc: string;
  feat_adv_4_name: string;
  feat_adv_4_desc: string;
  feat_adv_5_name: string;
  feat_adv_5_desc: string;
  feat_adv_6_name: string;
  feat_adv_6_desc: string;

  feat_prem_title: string;
  feat_prem_includes: string;
  feat_prem_1_name: string;
  feat_prem_1_desc: string;
  feat_prem_2_name: string;
  feat_prem_2_desc: string;
  feat_prem_3_name: string;
  feat_prem_3_desc: string;
  feat_prem_4_name: string;
  feat_prem_4_desc: string;
  feat_prem_5_name: string;
  feat_prem_5_desc: string;
  feat_prem_6_name: string;
  feat_prem_6_desc: string;

  pricing_consultation: string;


  // HowItWorks
  how_title: string;
  how_step1: string;
  how_step1_desc: string;
  how_step2: string;
  how_step2_desc: string;
  how_step3: string;
  how_step3_desc: string;
  how_step4: string;
  how_step4_desc: string;

  // BeforeAfter
  ba_title: string;
  ba_without: string;
  ba_before1: string;
  ba_before2: string;
  ba_before3: string;
  ba_with: string;
  ba_after1: string;
  ba_after2: string;
  ba_after3: string;

  // Testimonial
  testimonial_title: string;
  testimonial_quote: string;
  testimonial_role: string;
  testimonial_location: string;

  // CallToAction
  cta_section_title: string;
  cta_section_text: string;
  cta_start: string;
  cta_whatsapp: string;

  // Contact
  contact_title: string;
  contact_subtitle: string;
  contact_delivery: string;
  contact_geo_title: string;
  contact_geo_text: string;
  contact_wa_title: string;
  contact_wa_text: string;
  contact_wa_link: string;
  field_restaurant: string;
  field_owner: string;
  field_phone: string;
  field_email: string;
  field_message: string;
  field_message_hint: string;
  form_send: string;

  // Footer
  footer_desc: string;
  footer_tagline: string;
  footer_links: string;
  footer_connect: string;

  // Demo pages — shared
  demo_back_home: string;
  demo_start_website: string;
  demo_explore_style: string;
  demo_most_popular: string;
  demo_best_value: string;
  demo_view_details: string;
  demo_view_features: string;
  demo_start_basic: string;
  demo_start_advanced: string;
  demo_start_premium: string;
  demo_includes_basic_plus: string;
  demo_includes_adv_plus: string;
  demo_reserve_table: string;
  demo_footer_rights: string;
  demo_see_packages: string;

  // Demo Elegante
  elegante_badge: string;
  elegante_hero_title: string;
  elegante_hero_subtitle: string;
  elegante_explore_btn: string;
  elegante_style_title: string;
  elegante_style_subtitle: string;
  elegante_feat1_title: string;
  elegante_feat1_desc: string;
  elegante_feat2_title: string;
  elegante_feat2_desc: string;
  elegante_feat3_title: string;
  elegante_feat3_desc: string;
  elegante_feat4_title: string;
  elegante_feat4_desc: string;
  elegante_pricing_title: string;
  elegante_pricing_subtitle: string;
  elegante_basic_plan_desc: string;
  elegante_adv_plan_desc: string;
  elegante_prem_plan_desc: string;
  elegante_basic_f1: string;
  elegante_basic_f2: string;
  elegante_basic_f3: string;
  elegante_basic_f4: string;
  elegante_adv_f1: string;
  elegante_adv_f2: string;
  elegante_adv_f3: string;
  elegante_adv_f4: string;
  elegante_adv_f5: string;
  elegante_prem_f1: string;
  elegante_prem_f2: string;
  elegante_prem_f3: string;
  elegante_prem_f4: string;
  elegante_prem_f5: string;
  elegante_prem_f6: string;
  elegante_basic_sect_title: string;
  elegante_basic_sect_subtitle: string;
  elegante_basic_sect_desc: string;
  elegante_adv_sect_title: string;
  elegante_adv_sect_subtitle: string;
  elegante_adv_sect_desc: string;
  elegante_adv_incl: string;
  elegante_prem_sect_title: string;
  elegante_prem_sect_subtitle: string;
  elegante_prem_sect_desc: string;
  elegante_prem_incl: string;
  elegante_cta_title: string;
  elegante_cta_subtitle: string;
  elegante_footer: string;

  // Demo Casual
  casual_badge: string;
  casual_hero_title: string;
  casual_hero_subtitle: string;
  casual_explore_btn: string;
  casual_style_title: string;
  casual_style_subtitle: string;
  casual_feat1_title: string;
  casual_feat1_desc: string;
  casual_feat2_title: string;
  casual_feat2_desc: string;
  casual_feat3_title: string;
  casual_feat3_desc: string;
  casual_feat4_title: string;
  casual_feat4_desc: string;
  casual_pricing_title: string;
  casual_pricing_subtitle: string;
  casual_basic_plan_desc: string;
  casual_adv_plan_desc: string;
  casual_prem_plan_desc: string;
  casual_basic_f1: string;
  casual_basic_f2: string;
  casual_basic_f3: string;
  casual_basic_f4: string;
  casual_adv_f1: string;
  casual_adv_f2: string;
  casual_adv_f3: string;
  casual_adv_f4: string;
  casual_adv_f5: string;
  casual_prem_f1: string;
  casual_prem_f2: string;
  casual_prem_f3: string;
  casual_prem_f4: string;
  casual_prem_f5: string;
  casual_prem_f6: string;
  casual_basic_sect_desc: string;
  casual_adv_sect_desc: string;
  casual_prem_sect_desc: string;
  casual_cta_title: string;
  casual_cta_subtitle: string;
  casual_footer: string;

  // Demo Moderno
  moderno_badge: string;
  moderno_hero_subtitle: string;
  moderno_back: string;
  moderno_style_title: string;
  moderno_style_subtitle: string;
  moderno_see_packages: string;
  moderno_bento1_title: string;
  moderno_bento1_desc: string;
  moderno_bento2_title: string;
  moderno_bento2_desc: string;
  moderno_bento3_title: string;
  moderno_bento3_desc: string;
  moderno_bento4_title: string;
  moderno_bento4_desc: string;
  moderno_pricing_label: string;
  moderno_pricing_title: string;
  moderno_pricing_subtitle: string;
  moderno_basic_plan_desc: string;
  moderno_adv_plan_desc: string;
  moderno_prem_plan_desc: string;
  moderno_adv_badge: string;
  moderno_most_popular: string;
  moderno_basic_f1: string;
  moderno_basic_f2: string;
  moderno_basic_f3: string;
  moderno_basic_f4: string;
  moderno_adv_f1: string;
  moderno_adv_f2: string;
  moderno_adv_f3: string;
  moderno_adv_f4: string;
  moderno_adv_f5: string;
  moderno_prem_f1: string;
  moderno_prem_f2: string;
  moderno_prem_f3: string;
  moderno_prem_f4: string;
  moderno_prem_f5: string;
  moderno_deploy_basic: string;
  moderno_deploy_adv: string;
  moderno_deploy_prem: string;
  moderno_view_details: string;
  moderno_basic_sect_desc: string;
  moderno_basic_feat1_title: string;
  moderno_basic_feat1_desc: string;
  moderno_basic_feat2_title: string;
  moderno_basic_feat2_desc: string;
  moderno_adv_sect_desc: string;
  moderno_adv_feat1_title: string;
  moderno_adv_feat1_desc: string;
  moderno_adv_feat2_title: string;
  moderno_adv_feat2_desc: string;
  moderno_adv_reserve: string;
  moderno_adv_today: string;
  moderno_adv_tomorrow: string;
  moderno_adv_execute: string;
  moderno_prem_sect_desc: string;
  moderno_prem_feat1_title: string;
  moderno_prem_feat1_desc: string;
  moderno_prem_feat2_title: string;
  moderno_prem_feat2_desc: string;
  moderno_cta_label: string;
  moderno_cta_title: string;
  moderno_cta_subtitle: string;
  moderno_cta_btn: string;
  moderno_footer: string;
  moderno_scroll: string;
}


import { en } from './locales/en';
import { es } from './locales/es';
import { pt } from './locales/pt';

export const translations: Record<Language, Translations> = {
  en,
  es,
  pt,
};
