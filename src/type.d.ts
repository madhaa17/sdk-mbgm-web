export interface ApiData<T> {
  success?: boolean;
  message?: string;
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
  school_id: string;
  school_name: string;
  school_address: string;
  school_website: string;
  school_telp: string;
  school_npsn: string;
  school_latlong: string;
  b_school_type_pesantren: number;
  b_school_type_paud: number;
  b_school_type_sd: number;
  b_school_type_smp: number;
  b_school_type_sma: number;
  b_school_type_smk: number;
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
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  school_company: string;
  school_name: string;
  school_npsn: string;
  school_telp: string;
  naming_series: string;
  school_website: string;
  school_address: string;
  school_latitude: string;
  school_longitude: string;
  b_school_type_pesantren: number;
  b_school_type_paud: number;
  b_school_type_sd: number;
  b_school_type_smp: number;
  b_school_type_sma: number;
  b_school_type_smk: number;
  doctype: string;
}

export interface KitchenList {
  kitchen_id: string;
  kitchen_name: string;
  kitchen_address: string;
  kitchen_image: string;
  kitchen_warehouse: string;
  kitchen_latlong: string;
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

interface SchoolKitchenType {
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  school_name: string;
  max_portions: number;
  parent: string;
  parentfield: string;
  parenttype: string;
  doctype: string;
  school_detail: schoolDetail;
}

export interface KitchenDetail {
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  naming_series: string;
  kitchen_name: string;
  kitchen_address: string;
  kitchen_image: string;
  kitchen_warehouse: string;
  kitchen_latitude: string;
  kitchen_longitude: string;
  doctype: string;
  kitchen_schools: SchoolKitchenType[];
}

export interface ClinicList {
  healthunit_id: string;
  healthunit_name: string;
  healthunit_address: string;
  healthunit_latitude: string;
  healthunit_longitude: string;
}

export interface AllergiesType {
  total_student: number;
  total_student_male: number;
  total_student_female: number;
  total_b_a1_egg: number;
  total_b_a1_cow_milk: number;
  total_b_a1_red_meat: number;
  total_b_a1_seafood: number;
  total_b_a2_fruit: number;
  total_b_a2_vegetable: number;
  total_b_a2_latex: number;
  total_b_a3_spice: number;
  total_b_a3_sesame: number;
  total_b_a4_food_coloring: number;
  total_b_a4_food_preservative: number;
  total_b_a4_artificial_flavoring: number;
  total_b_a5_instant_food: number;
  total_b_a5_chocolate: number;
  total_b_a5_wheat: number;
  total_b_vegan: number;
}

export interface ImtType {
  total_student: number;
  total_imt_kurus_berat: number;
  total_imt_kurus_ringan: number;
  total_imt_normal: number;
  total_imt_gemuk_ringan: number;
  total_imt_gemuk_berat: number;
  updated_at: string;
}
