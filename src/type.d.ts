export interface ApiData<T> {
  success: boolean;
  message: string;
  data?: T;
  meta?: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    first_page: number;
    first_page_url: string;
    last_page_url: string;
    next_page_url?: string;
    previous_page_url?: string;
  };
}

export interface SchoolList {
  id: number;
  school_name: string;
  school_category: string;
  school_coordinate: string;
  imt_pct: string;
}

interface ImtChartType {
  date: string;
  imt_kurus_ringan: string;
  imt_kurus_berat: string;
  imt_normal: string;
  imt_gemuk_ringan: string;
  imt_obesitas: string;
}

export interface schoolDetail {
  school_location_id: number;
  school_address: string;
  school_category: string;
  school_npsn: "-";
  school_phone: string;
  school_detail_id: number;
  school_name: string;
  total_student: number;
  total_male: string;
  total_female: string;
  b_a1_egg: string;
  b_a1_cow_milk: string;
  b_a1_seafood: string;
  b_a1_red_meat: string;
  b_a2_fruit: string;
  b_a2_vegetable: string;
  b_a2_latex_fruit: string;
  b_a3_sesame: string;
  b_a3_herbs_spices: string;
  b_a4_food_color: string;
  b_a4_food_preservative: string;
  b_a4_artificial_flavors: string;
  b_a5_chocolate: string;
  b_a5_breads_cakes: string;
  b_a5_food_instant: string;
  b_vegan: string;
  imt_kurus_berat: string;
  imt_kurus_ringan: string;
  imt_normal: string;
  imt_gemuk_ringan: string;
  imt_obesitas: string;
  imt_pct: string;
  imt_chart: ImtChartType[];
}

export interface KitchenList {
  id: number;
  kitchen_address: string;
  kitchen_province: string;
  kitchen_city: string;
  kitchen_subdistrict: string;
  kitchen_coordinate: string;
  kitchen_name: string;
  kitchen_rating: number;
  kitchen_capacity_food: number;
  kitchen_capacity_student: number;
  kitchen_capacity_sku: number;
  kitchen_school_ids: number;
}

interface SchoolType {
  school_location_id: number;
  school_address: string;
  school_category: string;
  school_npsn: string;
  school_phone: string;
  school_detail_id: number;
  school_name: string;
  total_student: number;
  total_male: number;
  total_female: number;
  b_a1_egg: number;
  b_a1_cow_milk: number;
  b_a1_seafood: number;
  b_a1_red_meat: number;
  b_a2_fruit: number;
  b_a2_vegetable: number;
  b_a2_latex_fruit: number;
  b_a3_sesame: number;
  b_a3_herbs_spices: number;
  b_a4_food_color: number;
  b_a4_food_preservative: number;
  b_a4_artificial_flavors: number;
  b_a5_chocolate: number;
  b_a5_breads_cakes: number;
  b_a5_food_instant: number;
  b_vegan: number;
  imt_kurus_berat: number;
  imt_kurus_ringan: number;
  imt_normal: number;
  imt_gemuk_ringan: number;
  imt_obesitas: number;
  imt_pct: number;
}

export interface KitchenBatchType {
  id: number;
  kitchen_location_id: number;
  batch_name: string;
  batch_school_ids: string;
  step_pemorsian_a1: number;
  step_pemorsian_a2: number;
  step_pemorsian_a3: number;
  step_distribusi_b1: number;
  step_distribusi_b2: number;
  step_akhir_c1: number;
  step_akhir_c2: number;
  menu_karbo: string;
  menu_protein: string;
  menu_serat: string;
  menu_vitamin: string;
  menu_mineral: string;
  pemorsian_start_at: string | null;
  pemorsian_end_at: string | null;
  distribusi_start_at: string | null;
  distribusi_end_at: string | null;
  akhir_start_at: string | null;
  akhir_end_at: string | null;
}

export interface KitchenDetail {
  id: number;
  kitchen_address: string;
  kitchen_province: string;
  kitchen_city: string;
  kitchen_subdistrict: string;
  kitchen_coordinate: string;
  kitchen_name: string;
  kitchen_rating: number;
  kitchen_capacity_food: number;
  kitchen_capacity_student: number;
  kitchen_capacity_sku: number;
  kitchen_school_ids: string;
  school_list: SchoolType[];
  kitchen_batchs: KitchenBatchType[];
}

export interface ClinicList {
  id: number;
  healthunit_name: string;
  healthunit_category: null;
  healthunit_address: string;
  healthunit_coordinate: string;
}
