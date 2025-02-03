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
